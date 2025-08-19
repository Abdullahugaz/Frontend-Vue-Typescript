<template>
  <a
    v-if="href"
    :class="`bg-blue-500 text-white font-bold py-2 px-4 rounded dark:text-white dark:bg-red-600 ${customClass}`"
    :href="href"
    :disabled="disabled"
    @click="$emit('click')"
    v-bind="$attrs"
  >
    <slot></slot>
  </a>
  <button
    v-else
    :class="`bg-blue-500 text-white font-bold py-2 px-4 rounded dark:text-white dark:bg-red-600 ${customClass}`"
    :disabled="disabled"
    @click="$emit('click')"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "ButtonCom",
  props: {
    customClass: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "button",
    },
  },
  emits: ["click"],
};
</script>
