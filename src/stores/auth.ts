import { defineStore } from 'pinia';
import { http } from '@/axios/api';

type User = { userId: number; email: string } | null;

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') as string | null,
    user: null as User,
    loading: false as boolean,
    error: null as string | null,
  }),
  actions: {
    async register(payload: { username: string; email: string; password: string }) {
      this.loading = true; this.error = null;
      try {
        const { data } = await http.post('/auth/register', payload);
        this.token = data.access_token; localStorage.setItem('token', this.token!);
        await this.fetchProfile();
      } catch (e: any) {
        this.error = e?.response?.data?.message || 'Register failed';
        throw e;
      } finally { this.loading = false; }
    },
    async login(payload: { email: string; password: string }) {
      this.loading = true; this.error = null;
      try {
        const { data } = await http.post('/auth/login', payload);
        this.token = data.access_token; localStorage.setItem('token', this.token!);
        await this.fetchProfile();
      } catch (e: any) {
        this.error = e?.response?.data?.message || 'Login failed';
        throw e;
      } finally { this.loading = false; }
    },
    async fetchProfile() {
      const { data } = await http.get('/auth/profile');
      this.user = data.user;
    },
    logout() {
      this.token = null; this.user = null; localStorage.removeItem('token');
    },
  },
});
