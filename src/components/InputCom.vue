<template>
  <input
    :type="type"
    :disabled="disabled"
    :value="modelValue"
    :placeholder="placeholder"
    :class="customClass"
    @input="handleInput"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
export default {
  name: 'InputCom',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
 
};
</script>