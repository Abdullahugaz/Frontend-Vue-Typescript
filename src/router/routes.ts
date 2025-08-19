import type { RouteRecordRaw } from 'vue-router'

import HomeSection from '@/views/HomeView.vue'
import LoginView from '@/pages/Auth/LoginView.vue'
import RegisterView from '@/pages/Auth/RegisterView.vue'
import dashboard from '@/pages/DashboardView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeSection,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
  },
]

export default routes
