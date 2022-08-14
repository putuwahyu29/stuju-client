import axios from "axios";

const instance = axios.create({
    baseURL: "https://agus-stuju-api.herokuapp.com/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;