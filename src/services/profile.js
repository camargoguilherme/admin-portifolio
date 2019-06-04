import api from "./api";

class ProfileAPI{
  findAll = async () => {
    const profile = await api.get('/profile')
    return profile.data
  }
  
  find = async (id) => {
    const profile = await api.get(`/profile/${id}`)
    return profile.data
  }
  
  create = async (params) => {
    const profile = await api.post('/profile', params)
    return profile.data
  }
  
  update = async (params) => {
    const profile = await api.put(`/profile/${params.id}`, params)
    return profile.data
  }
  
  delete = async (id) => {
    const profile = await api.delete(`/profile/${id}`)
    return profile.data
  }

}

export default ProfileAPI;