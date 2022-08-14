<template>
  <div class="container content mt-5">
    <div class="card">
      <div class="card-header text-center">
        <h3>Publikasi Saya</h3>
      </div>

      <div class="card-body">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th><h5>Judul</h5></th>
              <th><h5>Aksi</h5></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(publication, index) in publications" :key="index">
              <td>
                <h6>{{ publication.name }}</h6>
              </td>
              <td>
                <div class="btn-group">
                  <a
                    href="#"
                    class="btn btn-primary"
                    @click.prevent="view(publication.id)"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    ><i class="bi bi-eye"></i
                  ></a>
                  <router-link
                    :to="{
                      name: 'publication.edit',
                      params: { id: publication.id },
                    }"
                    class="btn btn-success"
                    ><i class="bi bi-pencil-square"></i>
                  </router-link>
                  <button
                    class="btn btn-danger"
                    @click.prevent="destroy(publication.id, index)"
                  >
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <router-link
      :to="{ name: 'publication.create' }"
      class="btn btn-primary btn-md rounded shadow mb-3 mt-3"
      ><i class="bi bi-plus-circle"></i> Tambah Publikasi</router-link
    >

    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Deskripsi Publikasi
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-4">
                  <img
                    src="../assets/img/dummyBook.jpg"
                    alt="Image"
                    class="img-fluid"
                  />
                </div>
                <div class="col-md-8">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <h3>{{ viewModal.name }}</h3>
                    </li>
                    <li class="list-group-item">
                      <p>Deskripsi : {{ viewModal.description }}</p>
                      <p>
                        Penerbit :
                        {{ viewModal.publishers }}
                      </p>
                      <p>
                        Tipe :
                        {{
                          viewModal.type ? viewModal.type.name : "Belum dipilih"
                        }}
                      </p>
                      <p>Dibuat oleh : {{ viewModal.createdBy }}</p>
                      <p>Dibuat pada : {{ viewModal.createdDate }}</p>
                      <p>
                        Terakhir diperbarui oleh : {{ viewModal.updatedBy }}
                      </p>
                      <p>
                        Terakhir diperbarui pada : {{ viewModal.updatedDate }}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Batal
            </button>
            <button type="button" class="btn btn-primary">Kunjungi</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.content {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>

<script>
import PublicationService from "../services/publication.service";
export default {
  name: "ViewPublication",
  data() {
    return {
      publications: [],
      viewModal: [],
    };
  },
  mounted() {
    PublicationService.getMyPublications(
      this.$store.state.auth.user.username
    ).then(
      (response) => {
        this.publications = response.data;
      },
      (error) => {
        this.publications =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
  methods: {
    destroy(id, index) {
      this.$swal({
        title: "Apakah yakin ingin menghapus data?",
        text: "Data akan terhapus secara permanen!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Iya, Hapus",
        cancelButtonText: "Batal",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal({
            position: "top-end",
            icon: "success",
            title: "Data berhasil dihapus",
            showConfirmButton: false,
            timer: 1500,
          }).then((result) => {
            PublicationService.deletePublication(id).then((result) => {
              this.publications.splice(index, 1);
            });
          });
        }
      });
    },
    view(id) {
      PublicationService.getPublicationById(id).then(
        (response) => {
          this.viewModal = response.data;
        },
        (error) => {
          this.viewModal =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>
