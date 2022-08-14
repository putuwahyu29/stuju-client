<template>
  <!-- Remove the container if you want to extend the Footer to full width. -->
  <footer class="text-white text-center text-lg-start bg-primary mt-5">
    <div class="container p-4 pb-0">
      <!-- Section: Links -->
      <section class="">
        <!--Grid row-->
        <div class="row">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <router-link class="navbar-brand" to="/">
              <h6 class="text-uppercase mb-4 font-weight-bold">
                <img
                  src="../assets/img/logo.png"
                  alt=""
                  width="30"
                  height="30"
                  class="d-inline align-text-top"
                />
                Student Journal Library
              </h6>
            </router-link>

            <p>
              Website ini dibuat untuk memfasilitasi mahasiswa dalam mencari
              referensi jurnal termasuk mengunggah jurnal hasil mahasiswa.
            </p>
          </div>
          <!-- Grid column -->

          <hr class="w-100 clearfix d-md-none" />

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Teknologi</h6>
            <p><i class="bi bi-filetype-java"></i> Java</p>
            <p><i class="bi bi-filetype-html"></i> HTML</p>
            <p><i class="bi bi-filetype-css"></i> CSS</p>
            <p><i class="bi bi-filetype-js"></i> Javascript</p>
          </div>
          <!-- Grid column -->

          <hr class="w-100 clearfix d-md-none" />

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Tautan</h6>
            <p>
              <router-link to="/" class="text-white text-decoration-none"
                >Beranda</router-link
              >
            </p>
            <p>
              <router-link to="/signup" class="text-white text-decoration-none"
                >Daftar</router-link
              >
            </p>
            <p>
              <router-link to="/signin" class="text-white text-decoration-none"
                >Masuk</router-link
              >
            </p>
            <p>
              <a class="text-white text-decoration-none">Kritik dan Saran</a>
            </p>
          </div>

          <!-- Grid column -->
          <hr class="w-100 clearfix d-md-none" />

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Kontak Saya</h6>
            <p>
              <a
                href="https://www.google.co.id/maps/"
                class="text-white text-decoration-none"
                ><i class="bi bi-geo-alt-fill"></i> Indonesia</a
              >
            </p>
            <p>
              <a
                href="mailto:email@email.com"
                class="text-white text-decoration-none"
                ><i class="bi bi-envelope-fill"></i> email@email.com</a
              >
            </p>
            <p>
              <a
                href="tel:+6281234567890"
                class="text-white text-decoration-none"
                ><i class="bi bi-telephone-fill"></i> +62 81 234 567 890</a
              >
            </p>
            <p>
              <a
                href="https://wa.me/6281234567890"
                class="text-white text-decoration-none"
                ><i class="bi bi-whatsapp"></i> +62 81 234 567 890</a
              >
            </p>
          </div>
          <!-- Grid column -->
        </div>
        <!--Grid row-->
      </section>
      <!-- Section: Links -->

      <hr class="my-3" />

      <!-- Section: Copyright -->
      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">
          <!-- Grid column -->
          <div class="col-md-7 col-lg-8 text-center text-md-start">
            <!-- Copyright -->
            <div class="p-3">
              <p>
                Copyright &copy; {{ new Date().getFullYear() }} Stuju | All
                Rights Reserved
              </p>
            </div>
            <!-- Copyright -->
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            <!-- Facebook -->
            <a
              class="btn btn-outline-light btn-floating m-1 rounded-circle"
              role="button"
              ><i class="bi bi-facebook"></i
            ></a>

            <!-- Twitter -->
            <a
              class="btn btn-outline-light btn-floating m-1 rounded-circle"
              role="button"
              ><i class="bi bi-twitter"></i
            ></a>

            <!-- Google -->
            <a
              class="btn btn-outline-light btn-floating m-1 rounded-circle"
              role="button"
              ><i class="bi bi-google"></i
            ></a>

            <!-- Instagram -->
            <a
              class="btn btn-outline-light btn-floating m-1 rounded-circle"
              role="button"
              ><i class="bi bi-instagram"></i
            ></a>
          </div>
          <!-- Grid column -->
        </div>
      </section>
      <!-- Section: Copyright -->
    </div>
  </footer>

  <!-- End of .container -->
</template>
<script>
export default {
  name: "Footer",
};
</script>
