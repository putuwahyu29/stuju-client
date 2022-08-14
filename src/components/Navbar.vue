<template>
  <nav
    class="navbar fixed-top navbar-expand-lg bg-primary navbar-dark shadow-sm"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img
          src="../assets/img/logo.png"
          alt=""
          width="30"
          height="30"
          class="d-inline-block align-text-top"
        />
        Stuju
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Beranda</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/publication/all"
              >Publikasi</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/type/all">Tipe</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/publisher/all"
              >Penerbit</router-link
            >
          </li>

          <div v-if="!currentUser" class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/signin" class="nav-link text-white"
                ><i class="bi bi-box-arrow-in-right h5"></i> Masuk</router-link
              >
            </li>
          </div>
          <div v-if="currentUser">
            <div
              v-if="currentUser.roles == 'ROLE_USER'"
              class="navbar-nav ml-auto"
            >
              <li>
                <div class="dropdown">
                  <a
                    class="nav-link dropdown-toggle text-white"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="bi bi-person-circle h5"></i>
                    {{ currentUser.username }}
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <router-link class="dropdown-item" to="/me/profile">
                        <i class="bi bi-person-fill"></i> Profil
                        Saya</router-link
                      >
                    </li>
                    <li>
                      <router-link class="dropdown-item" to="/me/publication"
                        ><i class="bi bi-journal-bookmark-fill"></i> Publikasi
                        Saya</router-link
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi bi-gear-fill"></i> Pengaturan</a
                      >
                    </li>
                    <li><hr class="dropdown-divider" /></li>
                    <li>
                      <a class="dropdown-item" @click.prevent="logOut" href="#"
                        ><i class="bi bi-box-arrow-left"></i> Keluar</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
            </div>
            <!-- Admin -->
            <div
              v-if="currentUser.roles == 'ROLE_ADMIN'"
              class="navbar-nav ml-auto"
            >
              <li>
                <div class="dropdown">
                  <a
                    class="nav-link dropdown-toggle text-white"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="bi bi-person-circle h5"></i>
                    {{ currentUser.username }}
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <router-link class="dropdown-item" to="/me/profile">
                        <i class="bi bi-person-fill"></i> Profil
                        Saya</router-link
                      >
                    </li>
                    <li>
                      <router-link class="dropdown-item" to="/dashboard"
                        ><i class="bi bi-window-sidebar"></i> Dashboard
                        Stuju</router-link
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi bi-gear-fill"></i> Pengaturan</a
                      >
                    </li>
                    <li><hr class="dropdown-divider" /></li>
                    <li>
                      <a class="dropdown-item" @click.prevent="logOut" href="#"
                        ><i class="bi bi-box-arrow-left"></i> Keluar</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import EventBus from "../common/EventBus";
export default {
  name: "Navbar",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/signin");
    },
  },
  mounted() {
    EventBus.on("logout", () => {
      this.logOut();
    });
  },
  beforeUnmount() {
    EventBus.remove("logout");
  },
};
</script>
