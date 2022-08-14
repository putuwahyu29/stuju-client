<template>
  <div class="container">
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-md-6 contents">
            <div class="row justify-content-center">
              <div class="col-md-8">
                <div class="mb-4">
                  <h3>Daftar</h3>
                </div>
                <Form @submit="handleRegister" :validation-schema="schema">
                  <div v-if="!successful">
                    <div class="form-group mb-3">
                      <label for="username">Nama Lengkap</label>
                      <Field
                        name="fullName"
                        type="text"
                        class="form-control"
                        placeholder="Nama Lengkap"
                      />
                      <ErrorMessage name="fullName" class="error-feedback" />
                    </div>
                    <div class="form-group mb-3">
                      <label for="username">Nama Pengguna</label>
                      <Field
                        name="username"
                        type="text"
                        class="form-control"
                        placeholder="Nama Pengguna"
                      />
                      <ErrorMessage name="username" class="error-feedback" />
                    </div>
                    <div class="form-group mb-3">
                      <label for="email">Email</label>
                      <Field
                        name="email"
                        type="email"
                        class="form-control"
                        placeholder="Email"
                      />
                      <ErrorMessage name="email" class="error-feedback" />
                    </div>
                    <div class="form-group mb-3">
                      <label for="password">Kata Sandi</label>
                      <Field
                        name="password"
                        type="password"
                        class="form-control"
                        placeholder="Kata Sandi"
                      />
                      <ErrorMessage name="password" class="error-feedback" />
                    </div>
                    <div class="form-group mb-3">
                      <label for="passwordConfirm">Konfirmasi Kata Sandi</label>
                      <Field
                        name="passwordConfirm"
                        type="password"
                        class="form-control"
                        placeholder="Konfirmasi Kata Sandi"
                      />
                      <ErrorMessage
                        name="passwordConfirm"
                        class="error-feedback"
                      />
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
                        Daftar
                      </button>
                    </div>
                    <div class="mt-4 mb-3">
                      Sudah punya akun?
                      <router-link class="text-decoration-none" to="/signin"
                        >Masuk sekarang</router-link
                      >
                    </div>
                  </div>
                </Form>
                <div
                  v-if="message"
                  class="alert"
                  :class="successful ? 'alert-success' : 'alert-danger'"
                >
                  {{ message }}
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img
              src="../assets/img/signup.svg"
              alt="Image"
              class="img-fluid mt-5"
            />
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
  name: "FormSignUp",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      fullName: yup.string().required("Nama Lengkap harus diisi"),
      username: yup
        .string()
        .required("Nama pengguna wajib diisi!")
        .min(3, "Harus minimal 3 karakter!")
        .max(20, "Harus minimal 3 karakter!"),
      email: yup
        .string()
        .required("Email wajib diisi!")
        .email("Email tidak valid!")
        .max(50, "Harus maksimal 50 karakter!"),
      password: yup
        .string()
        .required("Kata sandi wajib diisi!")
        .min(6, "Harus minimal 6 karakter!")
        .max(40, "Harus minimal 40 karakter!"),
      passwordConfirm: yup
        .string()
        .required("Konfirmasi kata sandi wajib diisi!")
        .oneOf([yup.ref("password"), null], "Kata sandi tidak sama!"),
    });

    return {
      successful: false,
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
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/me/profile");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>
