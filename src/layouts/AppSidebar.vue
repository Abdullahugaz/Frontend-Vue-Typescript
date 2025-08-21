<template>

<div class="flex  min-h-screen bg-red-600 justify-cente w-[270px] mt-[60px] mr-3">

     <router-link
        class="text-white "
        :to="{ name: 'list' }"
        >Lists</router-link>
     

   

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