<template>
  <section class="flex w-full max-w-[1024px] min-h-[400px] mt-6 gap-6">
    <div class="flex-1 bg-white border border-theme-dark">
      <div class="flex justify-center items-center w-full h-full animate-spin">
        <Loader :size="30" :strokeWidth="1" />
      </div>
    </div>
    <div class="flex-1 bg-white border border-theme-dark">
      <div class="flex justify-center items-center w-full h-full animate-spin">
        <Loader :size="30" :strokeWidth="1" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { Loader } from 'lucide-vue-next'
</script>