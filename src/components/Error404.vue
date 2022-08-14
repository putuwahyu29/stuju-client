<template>
  <div class="container">
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>4<span></span>4</h1>
        </div>
        <h2>Oops! Page Not Be Found</h2>
        <p>
          Sorry but the page you are looking for does not exist, have been
          removed. name changed or is temporarily unavailable
        </p>
        <router-link
          :to="{ name: 'home.index' }"
          class="btn btn-md btn-primary rounded shadow mb-3 mt-3 rounded-pill"
          >Kembali ke Halaman Utama</router-link
        >
      </div>
    </div>
  </div>
</template>

<style>
@import "../assets/css/error404.css";
</style>

<script>
export default {
  name: "Error404",
};
</script>
