import api from "./api";

class UserAPI{
	login = async (data) => {
		const user = await api.post('/login', data)
		return user.data
	}

	logout = async (id) => {
		const user = await api.post(`/logout/${id}`)
		return user.data
	}
}

export default new UserAPI();
