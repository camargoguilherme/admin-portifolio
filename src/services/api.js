import axios from "axios";

const api = axios.create({
  baseURL:  "https://api-portifolio.herokuapp.com" // URL to services
});


export const PROFILE = async () => {
  const profile = await api.get('/profile')
  return profile.data
}

export const ABOUT = async () => {
  const about = await api.get('/about')
  return about.data
}

export const SKILLS = async () => {
  const skills = await api.get('/skill')
  return skills.data
}

export const DETAILS = async () => {
  const details = await api.get('/detail')
  return details.data
}

export const MEDIAS = async () => {
  const medias = await api.get('/media')
  return medias.data
}

export default api;