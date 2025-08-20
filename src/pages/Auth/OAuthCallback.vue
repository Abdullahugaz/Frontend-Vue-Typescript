<template>
  <div class="max-w-sm mx-auto mt-20 text-center">
    <p class="text-lg">Signing you in…</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

onMounted(() => {
  const token = (route.query.token as string) || ''
  if (token) {
    localStorage.setItem('token', token)
    router.replace({ name: 'dashboard' }) // or '/dashboard'
  } else {
    router.replace({ name: 'login' })
  }
})
</script>
