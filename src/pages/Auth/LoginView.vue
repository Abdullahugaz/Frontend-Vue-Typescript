<template>
  <div class="min-h-screen  flex justify-center dark:bg-gray-900 dark:text-white ">
  <div class=" hidden md:block bg-blue-950  dark:bg-gray-900 dark:text-white rounded-r-full  min-h-screen w-1/2 lg:flex hover:bg-pink-600">
  

  <!-- Moon Icon (Dark Mode) -->
<button @click="toggleDarkMode" class="p-1  mb-[800px] ml-2 mt-0 rounded-2xl  dark:bg-dark-bgnav text-darkone  dark:hover:bg-dark-bgnav-hover  transition-colors">
    <i v-if="isDark" class="fa-solid fa-moon  text-white text-xl w-8 h-4"></i>
    <i v-else class="fa-solid fa-sun text-white text-xl"></i>
  </button>


    <div class="flex flex-col items-center justify-center h-full">
      <img src="@/assets/yiksi.png" alt="Logo" class="mx-auto mb-4 h-30 w-30 rounded-full">
    
      <p class="text-lg text-gray-300 mt-2">Your gateway to seamless authentication</p>
    </div>
  </div>
  
  <div class="w-full md:w-1/2 bg-white dark:bg-gray-900 p-8  mt-20 mb-0 flex flex-col min-h-screen items-center">
  
  

    <div class="flex justify-center items-center gap-2 text-center text-black">
    <div class="flex mb-4 rounded-xl size-16 p-0 bg-blue-950 dark:bg-gray-900 hover:bg-pink-600">
          <img src="@/assets/yiksi.png" alt="" class="mx-auto mb-3 h-16 w-16  " >

      
    </div>
    <span class="text-blue-950 font-bold text-2xl dark:text-white">Yiksi</span>

    

    

    </div>
    <div class="max-w-sm mx-auto mt-16 mb-8 flex flex-col items-center">
    <p class="font-bold text-blue-950 text-3xl dark:text-white">Welcome back</p>
    <p class="text-xl font-light text-gray-400">Please enter your credentials to continue.</p>
</div>
    <form @submit.prevent="go" class="w-full max-w-md space-y-4 dark:text-white">
      <label class="block">
        <span class="block text-sm font-medium ">Email</span>
        <input
          v-model.trim="email"
          type="email"
          required
          autocomplete="username"
          class="mt-1 border p-2 w-full rounded"
        />
      </label>

      <labelComp class="block">
        <span class="block ">Password</span>
        <input
          v-model="password"
          type="password"
          required
          autocomplete="current-password"
          class="mt-1 border p-2 w-full rounded"
        />
      </labelComp>

      <button
        :disabled="auth.loading"
        class="inline-flex w-full items-center justify-center rounded-xl bg-blue-950 hover:bg-pink-600 px-4 py-2 font-medium text-white transition disabled:opacity-50"
      >
        <svg v-if="auth.loading" class="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
        </svg>
        <span>Login</span>
      </button>

      <p v-if="auth.error" class="text-red-600">{{ auth.error }}</p>
    </form>

    <p class="mt-3">
      Don't have an account?

      <router-link to="/register" class="text-blue-950 hover:underline">
        Sign Up
      </router-link>
    </p>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'


const isDark = ref(false)
function toggleDarkMode() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
} 


const auth = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')

async function go() {
  try {
    await auth.login({ email: email.value, password: password.value })
    // ✅ Redirect ONLY if login succeeded
    if (!auth.error) {
      await router.push({ name: 'dashboard' }) // or: await router.push('/dashboard')
    }
  } catch (e) {
    // auth.login should set auth.error; keep user on the page
    console.error('Login failed:', auth.error || e)
    await router.push('/login')
  }
}
</script>
