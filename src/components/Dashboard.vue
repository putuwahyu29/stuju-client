<template>
  <div class="container content">
    <h1 class="mt-3 mb-5 text-center">Dashboard Student Journal Library</h1>
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <routerLink
              to="/dashboard"
              class="nav-link active"
              aria-current="true"
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
              class="nav-link"
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
        <div class="row">
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title mb-3">Jumlah Publikasi</h3>
                <h1 class="mb-3">{{ this.publications.length }}</h1>
                <router-link to="/dashboard/publication" class="btn btn-primary"
                  >Lihat Selengkapnya</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title mb-3">Jumlah Tipe</h3>
                <h1 class="mb-3">{{ this.types.length }}</h1>
                <router-link to="/dashboard/type" class="btn btn-primary"
                  >Lihat Selengkapnya</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title mb-3">Jumlah Penerbit</h3>
                <h1 class="mb-3">{{ this.publishers.length }}</h1>
                <router-link to="/dashboard/publisher" class="btn btn-primary"
                  >Lihat Selengkapnya</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title mb-3">Jumlah Pengguna</h3>
                <h1 class="mb-3">{{ this.users.length - 1 }}</h1>
                <router-link to="/dashboard/user" class="btn btn-primary"
                  >Lihat Selengkapnya</router-link
                >
              </div>
            </div>
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
import TypeService from "../services/type.service";
import PublicationService from "../services/publication.service";
import PublisherService from "../services/publisher.service";
import UserService from "../services/user.service";
export default {
  name: "Dashboard",
  data() {
    return {
      publications: [],
      types: [],
      publishers: [],
      users: [],
    };
  },
  mounted() {
    TypeService.getTypes().then((response) => {
      this.types = response.data;
    });
    PublicationService.getPublications().then((response) => {
      this.publications = response.data;
    });
    PublisherService.getPublishers().then((response) => {
      this.publishers = response.data;
    });
    UserService.getUsers().then((response) => {
      this.users = response.data;
    });
  },
};
</script>
