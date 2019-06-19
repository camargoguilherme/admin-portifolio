import axios from "axios";

const api = axios.create({
  baseURL:  "https://api-portifolio.herokuapp.com" // URL to services
});

export default api;