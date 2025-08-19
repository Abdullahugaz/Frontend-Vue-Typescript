// src/axios/api.ts
import axios from 'axios';

const baseURL =
  process.env.VUE_APP_API_URL || 'http://localhost:2000';

export const http = axios.create({ baseURL });


// Attach Bearer token from localStorage
http.interceptors.request.use((cfg) => {
  const token = localStorage.getItem('token');
  if (token) {
    cfg.headers = cfg.headers ?? {};
    (cfg.headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }
  return cfg;
});

// Auto logout on 401
http.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err?.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/auth/login';
    }
    return Promise.reject(err);
  }
);
