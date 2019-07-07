import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3030',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@pizza:token');

  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return { ...config, headers };
});

export default api;
