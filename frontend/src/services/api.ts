import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', // URL do backend
});

// Adicionar token JWT automaticamente
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;