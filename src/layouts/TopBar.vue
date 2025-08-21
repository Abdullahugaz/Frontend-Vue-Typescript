<template>


  <div class="fixed top-0 w-full mt-[30] flex flex-row items-center bg-blue-300 dark:bg-blue-950 shadow-md rounded-lg p-[2px] h-16">

    <img src="@/assets/yiksi.png" alt="yiksi logo" class="mr-3 h-16 w-16 rounded-full">

    <span class="">Yiksi</span>
    <div class="flex-1  flex pr-0 ml-2 justify-center items-center">
     <input type="search" placeholder="Search..." class="p-2 w-1/2 rounded-br-2xl rounded-tl-2xl border bg-white border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 ">
     </div>

    <!-- <button @click="toggleDarkMode" class="p-1 ml-2 rounded-2xl bg-blue-950 dark:bg-gray-900 text-white hover:bg-blue-700 dark:hover:bg-gray-800 transition-colors">
      <i v-if="isDark" class="fa-solid fa-moon text-white text-xl w-8 h-4"></i>
      <i v-else class="fa-solid fa-sun text-white text-xl"></i>
    </button> -->
     </div>

     
  

 <slot></slot>

</template>

<script lang="ts" >
import { ref } from 'vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TopBar',
  data() {
    return {};
  }
  

  
});


// const isDark = ref(false)
// function toggleDarkMode() {
//   isDark.value = !isDark.value
//   document.documentElement.classList.toggle('dark', isDark.value)
// } 



</script>