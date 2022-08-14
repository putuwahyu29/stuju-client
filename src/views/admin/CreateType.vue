<template>
  <div class="container content mt-5">
    <div class="card">
      <h3 class="card-header text-center">Tambah Tipe</h3>
      <div class="card-body">
        <form @submit.prevent="create()">
          <div class="mb-3">
            <label for="name" class="form-label">Nama Tipe</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="type.name"
            />
          </div>
          <div class="position-relative">
            <div class="position-absolute top-0 start-0">
              <router-link
                to="/dashboard/type"
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
import TypeService from "../../services/type.service";
export default {
  name: "CreateType",
  data() {
    return {
      type: {
        name: "",
      },
      validation: [],
    };
  },
  methods: {
    create() {
      TypeService.addType({
        name: this.type.name,
      }).then(
        () => {
          this.$router.push("/dashboard/type");
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
  },
};
</script>
