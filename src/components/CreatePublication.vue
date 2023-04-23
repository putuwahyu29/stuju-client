<template>
  <div class="container content mt-5">
    <div class="card">
      <h3 class="card-header text-center">Tambah Publikasi</h3>
      <div class="card-body">
        <form @submit.prevent="create()">
          <div class="mb-3">
            <h4>Identitas Publikasi</h4>
            <label for="name" class="form-label">Judul Publikasi</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="publication.name"
            />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Deskirpsi</label>
            <textarea
              class="form-control"
              id="description"
              rows="3"
              v-model="publication.description"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="type" class="form-label">Tipe Publikasi</label>
            <select
              class="form-select"
              v-model="selectedType"
              v-on:change="filter"
            >
              <option
                v-for="(type, index) in types"
                :key="index"
                v-bind:value="type.id"
              >
                {{ type.name }}
              </option>
            </select>
          </div>
          <div class="mb-3">
            <label for="type" class="form-label">Penerbit Publikasi</label>
            <select class="form-select" v-model="selectedPublisher">
              <option
                v-for="(publisher, index) in publishers"
                :key="index"
                v-bind:value="publisher.id"
              >
                {{ publisher.name }}
              </option>
            </select>
            <small
              >Silahkan isi identitas penerbit jika pilihan diatas belum
              tersedia</small
            >
          </div>
          <div class="mb-3">
            <h4>Identitas Penerbit</h4>
            <form class="row g-3">
              <div class="col-12">
                <label for="inputAddress" class="form-label"
                  >Nama Lengkap</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputNama"
                  placeholder="Nama Lengkap"
                  v-model="publisherInput.name"
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  v-model="publisherInput.email"
                />
              </div>
              <div class="col-md-6">
                <label for="inputnim" class="form-label">NIM</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputnim"
                  placeholder="NIM"
                  v-model="publisherInput.nim"
                />
              </div>
              <div
                class="btn btn-primary btn-md rounded shadow mb-3 mt-4"
                @click.prevent="addPublisher()"
              >
                <i class="bi bi-save"></i> Tambah Penerbit
              </div>
            </form>
          </div>
          <div class="position-relative">
            <div class="position-absolute top-0 start-0">
              <router-link
                :to="{ name: 'publication.index' }"
                class="btn btn-primary btn-md rounded shadow mb-3 mt-4"
                ><i class="bi bi-x-circle"></i> Batal</router-link
              >
            </div>
            <div class="position-absolute top-0 end-0">
              <button class="btn btn-primary btn-md rounded shadow mb-3 mt-4">
                <i class="bi bi-save"></i> Simpan
              </button>
            </div>
          </div>
        </form>
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
import TypeService from "../services/type.service";
import PublisherService from "../services/publisher.service";
export default {
  name: "CreatePublication",
  data() {
    return {
      publication: {
        name: "",
        description: "",
      },
      publisherInput: {
        name: "",
        email: "",
        nim: "",
      },
      validation: [],
      types: [],
      publishers: [],
      selectedType: 0,
      selectedPublisher: "",
    };
  },
  mounted() {
    this.typeAdd();
    PublisherService.getPublishers().then((response) => {
      this.publishers = response.data;
    });
  },
  methods: {
    typeAdd() {
      TypeService.getTypes().then((response) => {
        this.types = response.data;
      });
    },
    create() {
      PublicationService.addPublication({
        name: this.publication.name,
        description: this.publication.description,
        type: {
          id: this.selectedType,
        },
        publishers: [
          {
            id: this.selectedPublisher,
          },
        ],
      }).then(
        () => {
          this.$router.push({ name: "publication.index" });
          this.$swal({
            position: "top-end",
            icon: "success",
            title: "Input sukses",
            text: "Data berhasil ditambahkan!",
            showConfirmButton: false,
            timer: 2000,
          });
        },
        (error) => {
          this.$swal({
            position: "top-end",
            icon: "error",
            title: "Input Gagal",
            text: error.response.data.messages,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      );
    },
    addPublisher() {
      PublisherService.addPublisher({
        name: this.publisherInput.name,
        nim: this.publisherInput.nim,
        email: this.publisherInput.email,
      }).then(
        () => {
          this.$swal({
            position: "top-end",
            icon: "success",
            title: "Input sukses",
            text: "Penerbit berhasil ditambahkan! Silahkan pilih penerbit",
            showConfirmButton: false,
            timer: 2000,
          });
          this.typeAdd();
          this.$router.go();
        },
        (error) => {
          this.$swal({
            position: "top-end",
            icon: "error",
            title: "Input Gagal",
            text: error.response.data.messages,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      );
    },
  },
};
</script>
