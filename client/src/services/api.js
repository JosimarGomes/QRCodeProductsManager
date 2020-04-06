import axios from 'axios';
import { getToken } from './auth';

// IP local da máquina na rede
export const BASE_URL_API = 'http://192.168.1.12:3333/api/v1';

const api = axios.create({
  baseURL: BASE_URL_API,
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
