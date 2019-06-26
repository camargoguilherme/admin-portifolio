import axios from "axios";
import { getToken } from "./auth";
const api = axios.create({
  baseURL: "http://localhost:3003" //"https://api-portifolio.herokuapp.com" //  "http://localhost:3003" // URL to services
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers['x-access-token'] = token;
    console.log(config.headers)
  }
  return config;
});

export default api;