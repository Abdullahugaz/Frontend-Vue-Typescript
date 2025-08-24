import type { RouteRecordRaw } from 'vue-router'
import LoginView from '@/pages/Auth/LoginView.vue'
import RegisterView from '@/pages/Auth/RegisterView.vue'
import dashboard from '@/views/DashboardView.vue'
import list from '@/pages/ListView.vue'
import form from '@/pages/FormView.vue'
import layouts from '@/layouts/IndexLayout.vue'
import NotFound from '@/views/NotFound.vue'
import FormCreate from '@/pages/Customers/FormCreate.vue'



 
const routes: RouteRecordRaw[] = [
  // Redirect root to login
  {
    path: '/',
    redirect: '/login',
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
    path: '/layouts',
    name: 'layouts',
    component: layouts,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: dashboard,
      },
      {
        path: 'NotFound',
        name: 'NotFound',
        component: NotFound,
      },
      {
        path: 'FormCreate',
        name: 'FormCreate',
        component: FormCreate,
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
  {
    path: '/oauth/callback',
    name: 'oauth.callback',
    component: () => import('@/pages/Auth/OAuthCallback.vue'),
  },
  // Catch-all for 404s
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  },
];

export default routes;
