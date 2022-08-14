<template>
  <div class="container content mt-5">
    <div>
      <h1 class="text-center mb-5">Daftar Publikasi</h1>
    </div>
    <form class="row gy-2 gx-3 align-items-center">
      <div class="col-sm-9 mb-2">
        <div class="input-group">
          <div class="input-group-text text-bg-primary">
            <i class="bi bi-search"></i>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Cari Publikasi ..."
            v-model="searchPublication.searchKey"
            @keyup="search"
          />
        </div>
      </div>
      <div class="col-sm-3 mb-2">
        <div class="input-group">
          <div class="input-group-text text-bg-primary">
            <i class="bi bi-funnel"></i>
          </div>
          <select
            class="form-select"
            v-model="selectedType"
            v-on:change="filter"
          >
            <option value="0">Filter ...</option>
            <option
              v-for="(type, index) in types"
              :key="index"
              v-bind:value="type.id"
            >
              {{ type.name }}
            </option>
          </select>
        </div>
      </div>
    </form>

    <div
      v-for="(publication, index) in publications"
      :key="index"
      class="card mb-3"
    >
      <div class="row g-0">
        <div class="col-md-3">
          <img
            src="../assets/img/dummyBook.png"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-9">
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
                    src="../assets/img/dummyBook.png"
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
}
</style>

<script>
import PublicationService from "../services/publication.service";
import TypeService from "../services/type.service";
export default {
  name: "CardPublication",
  data() {
    return {
      publications: [],
      viewModal: [],
      types: [],
      searchPublication: {
        searchKey: "",
      },
      selectedType: 0,
    };
  },
  mounted() {
    this.search();
    TypeService.getTypes().then((response) => {
      this.types = response.data;
    });
  },
  methods: {
    search() {
      PublicationService.findPublications(this.searchPublication).then(
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
    filter() {
      if (this.selectedType == 0) {
        this.search();
      } else {
        PublicationService.getPublicationByTypeId(this.selectedType).then(
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
      }
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
