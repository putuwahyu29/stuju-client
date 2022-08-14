<template>
  <main>
    <div class="container py-4 mt-5 text-center text-sm-start">
      <div
        class="row align-items-md-stretch bg-light border rounded-3 d-sm-flex align-items-center justify-content-between"
      >
        <div class="col-md-7">
          <div class="h-100 p-5">
            <h1>Student Journal Library</h1>

            <p>
              Student Journal Library, kalau dalam bahasa Indonesia sih
              Perpustakaan Jurnalnya Mahasiswa. Ga jauh jauh dari namanya,
              website ini memang dibuat untuk memfasilitasi rekan rekan
              mahasiswa dalam mencari referensi jurnal termasuk mengunggah
              jurnal hasil penelitian rekanan mahasiswa. Lagi mager baca?
              Tenang, website ini menyediakan preview deskripsi singkat terkait
              jurnal yang dipilih, jadi ga perlu repot baca sampai akhir. Nah,
              gimana? Setuju kan kalo Stuju library jadi referensi mu? Yuk,
              gabung sekarang!
            </p>
            <router-link
              class="btn btn-lg btn-primary rounded shadow mb-3 mt-3 rounded-pill"
              to="/signup"
              >Daftar Sekarang</router-link
            >
          </div>
        </div>
        <div class="col-md-5">
          <div class="h-100 p-5">
            <img
              src="../assets/img/jumbotron.svg"
              class="img-fluid w-100 d-sm-block"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
@import "../assets/css/jumbotron.css";
</style>

<script>
export default {
  name: "Jumbotron",
};
</script>
