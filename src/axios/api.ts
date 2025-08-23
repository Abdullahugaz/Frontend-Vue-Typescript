import axios from 'axios'
import router from '@/router'

const baseURL = process.env.VUE_APP_API_URL || 'http://localhost:2000'

export const http = axios.create({ baseURL })

http.interceptors.request.use((cfg) => {
  const token = localStorage.getItem('token')
  if (token) {
    // Use AxiosHeaders.set() instead of assignment
    cfg.headers = cfg.headers ?? {}
    cfg.headers['Authorization'] = `Bearer ${token}`
  }
  return cfg
})

// Auto logout on 401
// http.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err?.response?.status === 401) {
//       alert('⏰ Expired login, please login again.')
//       localStorage.removeItem('token')
//       router.push({ name: 'login' })
//     }
//     return Promise.reject(err)
//   }
// )

http.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err?.response?.status === 401) {
      alert('⏰ Expired login, please login again.')
      localStorage.removeItem('token')
      router.push({ name: 'login' })
      // Promise ma reject gareyn, si console-ka uncaught error uusan u muuqan
      return Promise.resolve(null)
    }
    return Promise.reject(err) // error kale
  }
)

