<template>
   <div class="flex h-full gap-5 justify-between z-[10]" >
    <AppSidebar @toggleSidebar="toggleSidebar" :open="open"/>
  <TopBar @toggleSidebar="toggleSidebar" :open="open"/>

 
    <router-view
      class="flex-1  mt-28 ml-3 lg:ml-[320px] md:ml-[320px] mx-2 lg:mr-[100px] md:mr-[50px] mr-[10px] "
    ></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopBar from "./TopBar.vue";
import AppSidebar from "./AppSidebar.vue";

export default defineComponent({
  name: "IndexLayout",
  components: { TopBar, AppSidebar },

data() {
  return {
    open: false,
  };
},
methods: {
  toggleSidebar() {
    this.open = !this.open;
  }
}});
</script>

<style></style>