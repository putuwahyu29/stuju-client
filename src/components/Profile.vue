<template>
  <div class="container content mt-5">
    <div class="card">
      <h3 class="card-header text-center">Profil Saya</h3>
      <div class="card-body">
        <div class="mb-3 text-center">
          <img
            src="../assets/img/profile.jpg"
            class="rounded-circle"
            alt="..."
            height="256"
          />
        </div>
        <div class="mb-3 row">
          <label for="fullName" class="col-sm-2 col-form-label"
            ><strong>Nama Lengkap</strong></label
          >
          <div class="col-sm-10">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              id="fullName"
              v-model="currentUser.fullName"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="username" class="col-sm-2 col-form-label"
            ><strong>Nama Pengguna</strong></label
          >
          <div class="col-sm-10">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              id="username"
              v-model="currentUser.username"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label"
            ><strong>Email</strong></label
          >
          <div class="col-sm-10">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              id="staticEmail"
              v-model="currentUser.email"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="role" class="col-sm-2 col-form-label"
            ><strong>Role</strong></label
          >
          <div class="col-sm-10">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              id="role"
              v-model="currentUser.roles"
            />
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
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/signin");
    }
  },
};
</script>
