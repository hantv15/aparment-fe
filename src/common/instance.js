import axios from "axios";

const instance = axios.create({
  baseURL: "https://6129f47c068adf001789b9ad.mockapi.io",
  headers: {
    "Content-Type": "application/json"
  }
});

export default instance;
