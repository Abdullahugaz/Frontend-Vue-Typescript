<template>
<div class="w-full mt-[30]">
<div class="bg-blue-700 dark:bg-gray-800 shadow-md rounded-lg p-6">
  <h2 class="text-2xl font-bold mb-4 dark:text-white">Base Card Component</h2>
 
  <slot></slot>
</div>
</div>

</template>
<script lang="ts">
export default ({
    name: 'BaseCard',
data() {
    return{};
    
}}
)
</script>

<style>

</style>