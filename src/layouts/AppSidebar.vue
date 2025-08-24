<template>

<div class="flex  min-h-screen bg-white shadow-sm dark:bg-blue-950 dark:text-white justify-cente w-[270px] mt-[60px]  fixed  ">
<div class="ml-7 flex flex-col">
        <router-link
        class="text-blue-600 mt-[60px] bg-white w-56 h-10  p-2 text-2xl font-bold rounded  "
        :to="{ name: 'dashboard' }"
        >Dashboard</router-link>
        <router-link
        class="text-blue-600 mt-[20px] bg-white w-56 h-10  p-2 text-2xl font-bold rounded  "
        :to="{ name: 'list' }"
        >Users</router-link>
        <router-link
        class="text-blue-600 mt-[20px] bg-white w-56 h-10   p-2 text-2xl font-bold rounded  "
        :to="{ name: 'NotFound' }"
        >Customers</router-link>
        <router-link
        class="text-blue-600 mt-[20px] bg-white w-56 h-10  p-2 text-2xl font-bold rounded  "
        :to="{ name: 'FormCreate' }"
        >Products</router-link>

        <router-link
        class="text-blue-600 mt-[20px] bg-white w-56 h-10   p-2 text-2xl font-bold rounded "
        :to="{ name: 'FormCreate' }"
        >Sales</router-link>
     

   </div>

</div>

<slot></slot>

</template>
<script lang="ts">
import AppSidebar from '@/layouts/AppSidebar.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'AppLayout',
    data() {
        return {};

    
    }
  });





</script>