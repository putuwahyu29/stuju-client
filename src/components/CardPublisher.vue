<template>
  <div class="container content mt-5">
    <div><h1 class="text-center mb-5">Daftar Penerbit</h1></div>
    <div class="col" v-for="(publisher, index) in publishers" :key="index">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-3">
            <img
              src="../assets/img/dummyPerson.png"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-9">
            <div class="card-body">
              <h5 class="card-title">{{ publisher.name }}</h5>
              <p class="card-text">
                <!-- {{ publisher.nim }} -->
              </p>
              <a
                href="#"
                class="btn btn-primary"
                @click.prevent="view(publisher.id)"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                >Lihat Selengkapnya</a
              >
            </div>
            <!-- <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div> -->
          </div>
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
  name: "CardPublication",
  data() {
    return {
      publishers: [],
      viewModal: [],
    };
  },
  mounted() {
    PublisherService.getPublishers().then(
      (response) => {
        this.publishers = response.data;
      },
      (error) => {
        this.publishers =
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
