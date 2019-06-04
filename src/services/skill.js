import api from "./api";

class SkillAPI{
  findAll = async () => {
    const skills = await api.get('/skill')
    return skills.data
  }
  
  find = async (id) => {
    const skill = await api.get(`/skill/${id}`)
    return skill.data
  }
  
  create = async (params) => {
    const skill = await api.post('/skill', params)
    return skill.data
  }
  
  update = async (params) => {
    const skill = await api.put(`/skill/${params.id}`, params)
    return skill.data
  }
  
  delete = async (id) => {
    const skill = await api.delete(`/skill/${id}`)
    return skill.data
  }

}

export default SkillAPI;