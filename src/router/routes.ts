import type { RouteRecordRaw } from 'vue-router'
import LoginView from '@/pages/Auth/LoginView.vue'
import RegisterView from '@/pages/Auth/RegisterView.vue'
import dashboard from '@/views/DashboardView.vue'
import list from '@/pages/ListView.vue'
import form from '@/pages/FormView.vue'
import layouts from '@/layouts/IndexLayout.vue'


const routes: RouteRecordRaw[] = [
 
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
  path: '/layouts',
  name: 'layouts',
  component: layouts,
  children: [
    {
      
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
  },
  ],
  },
  {
path: '/list',
    name: 'list',
    component: list,

  },
  {
    path: '/form',
    name: 'form',
    component: form,
    
  },
  
  // src/router/routes.ts
{
  path: '/oauth/callback',
  name: 'oauth.callback',
  component: () => import('@/pages/Auth/OAuthCallback.vue'),
}

]

export default routes
