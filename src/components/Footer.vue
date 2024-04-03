<template>
  <footer class="bg-white border-t border-theme-black/75">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <router-link to="/" class="flex items-center mb-4 sm:mb-0 rtl:space-x-reverse">
          <img src="@/assets/logo/exeface_logo.svg" class="h-10 pr-4" alt="ExeFace Logo" />
          <span class="pl-3 border-l border-theme-black/25 text-theme-black self-center text font-medium whitespace-nowrap">ExeFace</span>
        </router-link>
        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
          <li>
            <router-link to="/" class="text-theme-black hover:underline me-4 md:me-6">About</router-link>
          </li>
          <li>
            <router-link to="/" class="text-theme-black hover:underline me-4 md:me-6">Privacy Policy</router-link>
          </li>
          <li>
            <router-link to="/" class="text-theme-black hover:underline me-4 md:me-6">Licensing</router-link>
          </li>
          <li>
            <router-link to="/" class="text-theme-black hover:underline">Contact</router-link>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-theme-black/25 sm:mx-auto lg:my-8" />
      <span class="block text-sm text-theme-black sm:text-center">© 2024 <a href="#" class="hover:underline">ExeFace™</a>. All Rights Reserved.</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {
    
  },
  props: [
  ],
  data() {
    return {
      
    }
  },
  computed: {
  },
  methods: {
    
  }
}
</script>

<style>

</style>