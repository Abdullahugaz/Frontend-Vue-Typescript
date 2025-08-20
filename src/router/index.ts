// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

// router.beforeEach((to) => {
//   const isAuthed = !!localStorage.getItem('token')

//   // Not authed & going to a protected page -> go login (once)
//   if (to.meta?.requiresAuth && !isAuthed) {
//     if (to.name !== 'login') {
//       return { name: 'login', query: { redirect: to.fullPath } }
//     }
//     return true // already at login, allow
//   }

//   // Authed & trying to visit auth pages -> send to dashboard
//   if (isAuthed && (to.name === 'login' || to.name === 'register')) {
//     return { name: 'dashboard' }
//   }

//   return true
// })

export default router
