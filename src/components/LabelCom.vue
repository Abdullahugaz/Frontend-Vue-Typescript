<template>
   <label :class="labelClass" :for="id" class="dark:text-white text-white ">
   {{ label }}
    <span v-if="required" class="text-pink ">*</span>
   </label>
</template>
<script lang="ts">
export default {
  name: 'LabelCom',
  setup() {
    const labelClass = 'block text-sm font-medium mb-1';
    return { labelClass };
  },
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