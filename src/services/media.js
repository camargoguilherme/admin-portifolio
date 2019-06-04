import api from "./api";

class MediaAPI{
  findAll = async () => {
    const media = await api.get('/media')
    return media.data
  }
  
  find = async (id) => {
    const media = await api.get(`/media/${id}`)
    return media.data
  }
  
  create = async (params) => {
    const media = await api.post('/media', params)
    return media.data
  }
  
  update = async (params) => {
    const media = await api.put(`/media/${params.id}`, params)
    return media.data
  }
  
  delete = async (id) => {
    const media = await api.delete(`/media/${id}`)
    return media.data
  }

}

export default MediaAPI;