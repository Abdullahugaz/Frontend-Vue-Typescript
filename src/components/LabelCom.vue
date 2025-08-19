<template>
   <label :class="labelClass" :for="id" class="dark:text-white ">
   {{ label }}
    <span v-if="required" class="text-black ">*</span>
   </label>
</template>
<script lang="ts">
export default {
  name: 'LabelCom',
  props: {
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  
};

</script>