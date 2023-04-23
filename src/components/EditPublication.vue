<template>
  <div class="container content mt-5">
    <div class="card">
      <h3 class="card-header text-center">Edit Publikasi</h3>
      <div class="card-body">
        <form @submit.prevent="update()">
          <div class="mb-3">
            <input
              type="hidden"
              class="form-control"
              id="id"
              v-model="publication.id"
            />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">Judul Publikasi</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="publication.name"
            />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Deskripsi</label>
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
export default {
  name: "EditPublication",
  data() {
    return {
      publication: {
        id: "",
        name: "",
        description: "",
      },
      types: [],
      selectedType: 0,
    };
  },
  mounted() {
    PublicationService.getPublicationById(this.$route.params.id).then(
      (response) => {
        this.publication.id = response.data.id;
        this.publication.name = response.data.name;
        this.publication.description = response.data.description;
      },
      (error) => {
        this.publications =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    ),
      TypeService.getTypes().then((response) => {
        this.types = response.data;
      });
  },
  methods: {
    update() {
      PublicationService.editPublication(this.publication).then(
        () => {
          this.$swal({
            position: "top-end",
            icon: "success",
            title: "Berhasil",
            text: "Data berhasil diubah!",
            showConfirmButton: false,
            timer: 2000,
          });
          PublicationService.changePublicationType(this.$route.params.id, {
            id: this.selectedType,
          });
          this.$router.push({ name: "publication.index" });
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
