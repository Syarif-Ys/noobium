import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.pisckitama.my.id:8443/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
