import { createApp } from "vue";
import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import App from "./App.vue";
import Axios from "axios";
import store from "./store";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "sweetalert2/dist/sweetalert2.min.css";

import setupInterceptors from './services/setupInterceptors';

Axios.defaults.baseURL = "https://stuju-api.herokuapp.com/api";

setupInterceptors(store);
const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueSweetalert2);
app.mount("#app");