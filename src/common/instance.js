import axios from "axios";

const instance = axios.create({
  baseURL: "http://apartment-system.xyz/api",
  headers: {
    "Content-Type": "application/json"
  }
});

export default instance;
