<template>

<div class="flex  min-h-screen bg-white shadow-sm dark:bg-blue-950 dark:text-white justify-cente w-[270px] mt-[60px]  fixed  flex-col">

     <router-link
        class="text-blue-600 mt-[60px] bg-white w-56 h-10 justify items-center text-center p-2 text-2xl font-bold rounded ml-3 "
        :to="{ name: 'dashboard' }"
        >Dashboard</router-link>
          <router-link
        class="text-blue-600 mt-[20px] bg-white w-56 h-10 justify items-center text-center p-2 text-2xl font-bold rounded ml-3 "
        :to="{ name: 'list' }"
        >Products</router-link>
          <router-link
        class="text-blue-600 mt-[20px] bg-white w-56 h-10 justify items-center text-center p-2 text-2xl font-bold rounded ml-3 "
        :to="{ name: 'NotFound' }"
        >Sales</router-link>
          <router-link
        class="text-blue-600 mt-[20px] bg-white w-56 h-10 justify items-center text-center p-2 text-2xl font-bold rounded ml-3 "
        :to="{ name: 'FormCreate' }"
        >Form</router-link>
     

   
<button class="bg-white text-red-700 mt-auto">LogOut
</button>
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