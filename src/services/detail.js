import api from "./api";

class DetailAPI{
  findAll = async () => {
    const details = await api.get('/detail')
    return details.data
  }
  
  find = async (id) => {
    const detail = await api.get(`/detail/${id}`)
    return detail.data
  }
  
  create = async (params) => {
    const detail = await api.post('/detail', params)
    return detail.data
  }
  
  update = async (params) => {
    const detail = await api.put(`/detail/${params.id}`, params)
    return detail.data
  }
  
  delete = async (id) => {
    const detail = await api.delete(`/detail/${id}`)
    return detail.data
  }

}

export default DetailAPI;