import axios from 'axios'

export const api = axios.create({
	baseURL: 'http://192.168.1.40:3333/',
	//headers: { Authorization: `Bearer ${token}` }
})