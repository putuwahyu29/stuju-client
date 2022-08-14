<template>
  <div class="container content">
    <h1 class="mt-3 mb-5 text-center">Dashboard Student Journal Library</h1>
    <div class="card">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <routerLink to="/dashboard" class="nav-link" aria-current="true"
              >Beranda</routerLink
            >
          </li>
          <li class="nav-item">
            <routerLink
              to="/dashboard/publication"
              class="nav-link"
              aria-current="true"
              >Publikasi</routerLink
            >
          </li>
          <li class="nav-item">
            <routerLink
              to="/dashboard/type"
              class="nav-link"
              aria-current="true"
              >Tipe</routerLink
            >
          </li>
          <li class="nav-item">
            <routerLink
              to="/dashboard/publisher"
              class="nav-link active"
              aria-current="true"
              >Penerbit</routerLink
            >
          </li>
          <li class="nav-item">
            <routerLink
              to="/dashboard/user"
              class="nav-link"
              aria-current="true"
              >Pengguna</routerLink
            >
          </li>
        </ul>
      </div>
      <div class="card-body">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th><h5>Nama</h5></th>
              <th><h5>Aksi</h5></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(publisher, index) in publishers" :key="index">
              <td>
                <h6>{{ publisher.name }}</h6>
              </td>
              <td>
                <div class="btn-group">
                  <a
                    href="#"
                    class="btn btn-primary"
                    @click.prevent="view(publisher.id)"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    ><i class="bi bi-eye"></i
                  ></a>
                  <button
                    class="btn btn-danger"
                    @click.prevent="destroy(publisher.id, index)"
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
  </div>
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
            Deskripsi Penerbit
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
                  src="../assets/img/dummyPerson.png"
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
                    <p>NIM : {{ viewModal.nim }}</p>
                    <p>Email : {{ viewModal.email }}</p>
                    <!-- <p>Publikasi : {{ viewModal.publications }}</p> -->
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
</template>

<style>
.content {
  padding-top: 5rem;
}
</style>

<script>
import PublisherService from "../services/publisher.service";
export default {
  name: "DashboardPublication",
  data() {
    return {
      publishers: [],
      viewModal: [],
    };
  },
  mounted() {
    PublisherService.getPublishers().then((response) => {
      this.publishers = response.data;
    });
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
            PublisherService.deletePublisher(id).then((result) => {
              this.publishers.splice(index, 1);
            });
          });
        }
      });
    },
    view(id) {
      PublisherService.getPublisherById(id).then(
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
