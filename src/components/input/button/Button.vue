<template>
    <button
      :class="[
        'inline-flex items-center justify-center px-8 py-3 whitespace-nowrap disabled:opacity-75 disabled:pointer-events-none',
        buttonClasses
      ]"
      :disabled="props.disabled"
    >
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    variant: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  })
  
  const buttonClasses = computed(() => {
    const variants = {
      primary: 'bg-theme text-theme-black hover:bg-theme-500 active:bg-theme-700',
      secondary: 'bg-theme-gray text-white hover:bg-theme-gray/90',
      danger: 'bg-danger text-white hover:bg-dangerdark'
    }
  
    return variants[props.variant] || variants.primary
  })
  </script>