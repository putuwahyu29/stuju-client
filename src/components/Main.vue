<template>
  <div class="container mt-5">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div
        v-for="(publication, index) in publications"
        :key="index"
        class="col"
      >
        <div class="card h-100">
          <img
            src="../assets/img/dummyBook.jpg"
            class="card-img-top"
            alt="Dummy Image"
          />
          <div class="card-body">
            <h5 class="card-title">{{ publication.name }}</h5>
            <p class="card-text">
              {{ publication.description }}
            </p>
            <a
              href="#"
              class="btn btn-primary"
              @click.prevent="view(publication.id)"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              >Lihat Selengkapnya</a
            >
          </div>
          <div class="card-footer">
            <small class="text-muted"
              >Terakhir diperbarui oleh {{ publication.updatedBy }}</small
            >
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-5">
      <router-link class="btn btn-primary btn-lg" to="/publication/all"
        >Lihat Semua Publikasi</router-link
      >
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
                      <p>Tipe : {{ viewModal.type }}</p>
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

<script>
import PublicationService from "../services/publication.service";
export default {
  name: "Main",
  data() {
    return {
      publications: [],
      viewModal: [],
    };
  },
  mounted() {
    PublicationService.getPublicationInHome().then(
      (response) => {
        this.publications = response.data.content;
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
