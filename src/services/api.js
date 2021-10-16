import axios from 'axios'

const api_host = '192.168.1.37'; // 'localhost'
const api_port = '3333';

const api = axios.create({	
	baseURL: `http://${api_host}:${api_port}/`,
	//headers: { Authorization: `Bearer ${token}` }
});

export { api_host, api_port, api }