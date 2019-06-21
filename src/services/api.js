import axios from "axios";

const api = axios.create({
  baseURL: "https://api-portifolio.herokuapp.com" //  "http://localhost:3003" // URL to services
});

export default api;