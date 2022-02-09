import axios from "axios";

const instance = axios.create({
  baseURL: "https://61feeb495e1c4100174f6d88.mockapi.io",
  headers: {
    "Content-Type": "application/json"
  }
});

export default instance;
