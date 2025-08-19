import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './app.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)       // ✅ install pinia first
app.use(router)      // then router (order vs router doesn’t matter, but BEFORE mount)
app.mount('#app')    // ✅ mount last
