<template>
  <div class="container">
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-3">
            <img src="../assets/img/signin.svg" alt="Image" class="img-fluid" />
          </div>
          <div class="col-md-6 contents">
            <div class="row justify-content-center">
              <div class="col-md-8">
                <div class="mb-4">
                  <h3>Masuk</h3>
                </div>

                <Form @submit="handleLogin" :validation-schema="schema">
                  <div class="form-group mb-3">
                    <label for="username">Nama Pengguna</label>
                    <Field name="username" type="text" class="form-control" />
                    <ErrorMessage name="username" class="error-feedback" />
                  </div>
                  <div class="form-group mb-3">
                    <label for="password">Kata Sandi</label>
                    <Field
                      name="password"
                      type="password"
                      class="form-control"
                    />
                    <ErrorMessage name="password" class="error-feedback" />
                  </div>
                  <div class="form-group d-grid gap-2">
                    <button
                      class="btn btn-primary btn-block"
                      :disabled="loading"
                    >
                      <span
                        v-show="loading"
                        class="spinner-border spinner-border-sm"
                      ></span>
                      <span>Masuk</span>
                    </button>
                  </div>
                  <div class="mt-4 mb-3">
                    Belum punya akun?
                    <router-link class="text-decoration-none" to="/signup"
                      >Ayo daftar sekarang</router-link
                    >
                  </div>
                  <div class="form-group">
                    <div v-if="message" class="alert alert-danger" role="alert">
                      {{ message }}
                    </div>
                  </div>
                </Form>
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
  padding-top: 8rem;
}
.error-feedback {
  color: red;
}
</style>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "FormSignIn",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Nama pengguna wajib diisi!"),
      password: yup.string().required("Kata sandi wajib diisi!"),
    });
    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/me/profile");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/me/profile");
        },
        (error) => {
          this.loading = false;
          this.message =
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
