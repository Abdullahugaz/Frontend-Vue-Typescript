<template>
  <div class="min-h-screen  flex justify-center  ">
  <div class=" hidden md:block bg-[#840df3e0] dark:bg-gray-800 rounded-r-full  min-h-screen w-1/2 lg:flex justify-center items-center">
    <!-- <img src="@/assets/logo.png" alt="Logo" class="  min-h-[400px] w-[400px] "> -->

  </div>
  
  <div class="w-full md:w-1/2 bg-white dark:bg-gray-900 p-8 mt-16 flex flex-col items-center">
  
   
    <div class="flex justify-center items-center gap-2 text-center text-black">
    <div class="flex mb-4 rounded-xl size-16 p-2 bg-[#1fb5d0] dark:bg-gray-800">
          <img src="@/assets/logo.png" alt="" class="mx-auto mb-4 h-14  w-14  " >

      
    </div>
    <span class="text-black font-bold text-2xl">Yiksi</span>

    

    

    </div>
    <div class="max-w-sm mx-auto mt-16 mb-8 flex flex-col items-center">
    <p class="font-bold text-blue-950 text-3xl">Welcome back</p>
    <p class="text-xl font-light text-gray-400">Please enter your credentials to continue.</p>
</div>
    <form @submit.prevent="go" class="w-full max-w-md space-y-4">
      <label class="block">
        <span class="block text-sm font-medium text-gray-700">Email</span>
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
        class="inline-flex w-full items-center justify-center rounded-xl bg-blue-800 hover:bg-blue-400 px-4 py-2 font-medium text-white transition disabled:opacity-50"
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

      <router-link to="/register" class="text-blue-700 hover:underline">
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
import LabelCom from '@/components/LabelCom.vue'


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
  }
}
</script>
