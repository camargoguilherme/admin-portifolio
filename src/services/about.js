import api from "./api";

class AboutAPI {
  findAll = async () => {
    const about = await api.get('/about')
    return about.data
  }
  
  find = async (id) => {
    const about = await api.get(`/about/${id}`)
    return about.data
  }
  
  create = async (params) => {
    const about = await api.post('/about', params)
    return about.data
  }
  
  update = async (params) => {
    const about = await api.put(`/about/${params.id}`, params)
    return about.data
  }
  
  delete = async (id) => {
    const about = await api.delete(`/about/${id}`)
    return about.data
  }
}

export default new AboutAPI;