import api from "./api";

class ProfileAPI {
  findAll = async () => {
    const profile = await api.get('/profile')
    return profile.data
  }
  
  find = async (id) => {
    const profile = await api.get(`/profile/${id}`)
    return profile.data
  }
  
  create = async (data) => {
    const profile = await api.post('/profile', data)
    return profile.data
  }
  
  update = async (id, data) => {
    const profile = await api.put(`/profile/${id}`, data)
    return profile.data
  }
  
  delete = async (id) => {
    const profile = await api.delete(`/profile/${id}`)
    return profile.data
  }

}

export default new ProfileAPI;