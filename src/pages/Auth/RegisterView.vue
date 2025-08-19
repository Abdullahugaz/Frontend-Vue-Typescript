<template>
  <div class="max-w-sm mx-auto mt-16">
    <h1 class="text-2xl font-semibold mb-4">Register</h1>

    <!-- ✅ Success alert -->
    <div
      v-if="success"
      class="mb-4 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-green-800"
      role="alert"
    >
      <p class="font-medium">Account created successfully.</p>
      <p class="text-sm text-green-700">Redirecting…</p>
    </div>

    <form @submit.prevent="go" novalidate class="space-y-2">
      <!-- Username -->
      <label class="block">
        <span class="block text-sm font-medium text-gray-700">Username</span>
        <input
          v-model.trim="username"
          @input="touch.username = true"
          :class="[
            'mt-1 block w-full rounded border p-2 focus:outline-none focus:ring',
            usernameError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-purple-200'
          ]"
          autocomplete="username"
          required
        />
      </label>
      <p v-if="touch.username && usernameError" class="text-red-600 text-sm -mt-1">
        {{ usernameError }}
      </p>

      <!-- Email -->
      <label class="block">
        <span class="block text-sm font-medium text-gray-700">Email</span>
        <input
          v-model.trim="email"
          @input="touch.email = true"
          type="email"
          :class="[
            'mt-1 block w-full rounded border p-2 focus:outline-none focus:ring',
            emailError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-purple-200'
          ]"
          autocomplete="email"
          required
        />
      </label>
      <p v-if="touch.email && emailError" class="text-red-600 text-sm -mt-1">
        {{ emailError }}
      </p>

      <!-- Password -->
      <label class="block">
        <span class="block text-sm font-medium text-gray-700">Password</span>
        <input
          v-model="password"
          @input="touch.password = true"
          type="password"
          minlength="6"
          :class="[
            'mt-1 block w-full rounded border p-2 focus:outline-none focus:ring',
            passwordError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-purple-200'
          ]"
          autocomplete="new-password"
          required
        />
      </label>
      <p v-if="touch.password && passwordError" class="text-red-600 text-sm -mt-1">
        {{ passwordError }}
      </p>

      <button
        :disabled="auth.loading || !formValid || success"
        class="mt-2 inline-flex w-full items-center justify-center rounded bg-blue-700 hover:bg-blue-400 px-4 py-2 font-medium text-white transition disabled:opacity-50"
      >
        <svg
          v-if="auth.loading"
          class="mr-2 h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
        </svg>
        <span>{{ success ? 'Created' : 'Create account' }}</span>
      </button>

      <p v-if="auth.error" class="text-red-600 mt-2">{{ auth.error }}</p>
    </form>

    <p class="mt-3">
      <router-link to="/login" class="text-white hover:underline rounded bg-purple-400">Back to login</router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const router = useRouter()

const username = ref('')
const email = ref('')
const password = ref('')
const success = ref(false)

const touch = reactive({ username: false, email: false, password: false })

function validateUsername(val: string): string | null {
  if (!val) return 'Username is required'
  if (val.length < 3) return 'Must be at least 3 characters'
  if (val.length > 30) return 'Must be at most 30 characters'
  if (!/^[a-zA-Z0-9._-]+$/.test(val)) return 'Only letters, numbers, . _ - allowed'
  return null
}
function validateEmail(val: string): string | null {
  if (!val) return 'Email is required'
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!re.test(val.toLowerCase())) return 'Enter a valid email address'
  return null
}
function validatePassword(val: string): string | null {
  if (!val) return 'Password is required'
  if (val.length < 6) return 'Must be at least 6 characters'
  if (!/[A-Za-z]/.test(val) || !/[0-9]/.test(val)) return 'Include at least one letter and one number'
  return null
}

const usernameError = computed(() => validateUsername(username.value))
const emailError = computed(() => validateEmail(email.value))
const passwordError = computed(() => validatePassword(password.value))
const formValid = computed(() => !usernameError.value && !emailError.value && !passwordError.value)

async function go() {
  touch.username = true
  touch.email = true
  touch.password = true
  if (!formValid.value) return

  try {
    // IMPORTANT: backend expects { username, email, password }
    await auth.register({
      username: username.value.trim(),
      email: email.value.trim().toLowerCase(),
      password: password.value
    } as any)

    success.value = true
    // optional: clear fields
    // username.value = ''; email.value = ''; password.value = ''

    // Redirect after a small delay so the user sees the success alert
    setTimeout(() => router.push('/users'), 1200)
  } catch {
    // auth.error already set by store; keep success=false
    success.value = false
  }
}
</script>
