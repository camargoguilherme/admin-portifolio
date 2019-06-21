import api from "./api";

class PortifolioAPI {
  findAll = async () => {
    const portifolio = await api.get('/portifolio')
    return portifolio.data
  }
  
  find = async (id) => {
    const portifolio = await api.get(`/portifolio/${id}`)
    return portifolio.data
  }
  
  create = async (data) => {
    const portifolio = await api.post('/portifolio', data)
    return portifolio.data
  }
  
  update = async (id, data) => {
    const portifolio = await api.put(`/portifolio/${id}`, data)
    return portifolio.data
  }
  
  delete = async (id) => {
    const portifolio = await api.delete(`/portifolio/${id}`)
    return portifolio.data
  }

}

export default new PortifolioAPI;