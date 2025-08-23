<template>


  <div class="fixed top-0 w-full mt-[30] flex flex-row items-center bg-white dark:bg-blue-950 shadow-md rounded-lg p-[2px] h-16">

    <img src="@/assets/yiksi.png" alt="yiksi logo" class="mr-1 h-16 w-16 rounded-full">

    <span class="text-blue-800 text-[22px] font-semibold ">Yiksi</span>
    <div class="flex-1  flex pr-0 ml-2 justify-center items-center">
     <input type="search" placeholder="Search..." class="p-2 w-1/2 rounded-br-2xl rounded-tl-2xl border bg-white border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 ">
     </div>


       <button
  class="text-gray-500 hover:text-gray-700 dark:text-gray-300"
  @click="goToDashboard"
>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
       viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M15 17h5l-1.405-1.405M15 7h5l-1.405 1.405M4 12h16"/>
  </svg>
</button>


    <button @click="toggleDarkMode" class="p-1 ml-2 rounded-2xl dark:bg-gray-900 text-white hover:bg-blue-700 dark:hover:bg-gray-800 transition-colors">
      <i v-if="isDark" class="fa-solid fa-moon text-black text-xl w-8 h-4"></i>
      <i v-else class="fa-solid fa-sun text-black text-xl"></i>
    </button>
     </div>

     
  

 <slot></slot>

</template>

<script lang="ts" >
import { ref } from 'vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TopBar',
  data() {
    return {
      isDark: false
    }
  },
  mounted() {
  this.isDark = document.documentElement.classList.contains('dark')
},

  methods: {
   toggleDarkMode() {
  this.isDark = !this.isDark
  const root = document.documentElement

  if (this.isDark) {
    root.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    root.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
},

     goToDashboard() {
      this.$router.push({ name: 'dashboard' })
    }
  },
  

  
});


// const isDark = ref(false)
// function toggleDarkMode() {
//   isDark.value = !isDark.value
//   document.documentElement.classList.toggle('dark', isDark.value)
// } 



</script>