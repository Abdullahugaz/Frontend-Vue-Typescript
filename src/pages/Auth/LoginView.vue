<template>
  <div class="max-w-sm mx-auto mt-16">
    <h1 class="text-2xl font-semibold mb-4">Login</h1>

    <form @submit.prevent="go" class="space-y-3">
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

      <label class="block">
        <span class="block text-sm font-medium text-gray-700">Password</span>
        <input
          v-model="password"
          type="password"
          required
          autocomplete="current-password"
          class="mt-1 border p-2 w-full rounded"
        />
      </label>

      <button
        :disabled="auth.loading"
        class="inline-flex w-full items-center justify-center rounded bg-black px-4 py-2 font-medium text-white transition disabled:opacity-50"
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
      <router-link to="/auth/register" class="text-purple-700 hover:underline">
        Create an account
      </router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

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
