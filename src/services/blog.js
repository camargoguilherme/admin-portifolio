import api from "./api";

class BlogAPI {
  findAll = async () => {
    const blog = await api.get('/blog')
    return blog.data
  }
  
  find = async (id) => {
    const blog = await api.get(`/blog/${id}`)
    return blog.data
  }
  
  create = async (data) => {
    const blog = await api.post('/blog', data)
    return blog.data
  }
  
  update = async (id, data) => {
    const blog = await api.put(`/blog/${id}`, data)
    return blog.data
  }
  
  delete = async (id) => {
    const blog = await api.delete(`/blog/${id}`)
    return blog.data
  }

}

export default new BlogAPI;