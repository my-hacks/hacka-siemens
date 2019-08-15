import axios from "axios";

const api = axios.create({
  baseURL: "https://hacka-siemens-api-middleware.herokuapp.com",
});

export default api;
