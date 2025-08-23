<template>
  <div class="max-w-3xl mx-auto mt-10">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-semibold">Users</h1>
      <router-link to="/customers/new" class="bg-black text-white px-3 py-2 rounded">New</router-link>
    </div>
    <ul v-if="items.length">
      <li v-for="c in items" :key="c.id" class="border-b py-2">
        <strong>{{ c.name }}</strong> — {{ c.email }} <span v-if="c.phone">— {{ c.phone }}</span>
      </li>
    </ul>
    <p v-else class="text-gray-500">No customers yet.</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { http } from '@/axios/api';




type Customer = { id: number; name: string; email: string; phone?: string };

const items = ref<Customer[]>([]);

onMounted(async () => {
  const { data } = await http.get('/users');
  items.value = data;
});
</script>
