<template>
    <NavigationBar />
    <section id="errorpage" class="w-full h-full min-h-[100vh] pt-[var(--header)] overflow-hidden grid-background">
      <section class="flex flex-col justify-center items-center p-6 w-full min-h-[calc(100vh-var(--header))]">
        <h1 class="mb-12 max-w-[1024px] leading-[1.1] text-center text-[3rem] text-theme-gray font-extralight md:text-[4rem]">{{ error['type'] }}</h1>
        <div 
          id="chat-input" 
          class="flex items-center bottom-0 min-h-[--chat] px-7 py-4 w-full max-w-[1024px] duration-300 bg-theme-verylight border border-b-4 border-theme-dark shadow-line focus-within:shadow-line-active"
        >
          <div id="input-frame" class="flex items-center h-full">
            <CircleX :size="22" :strokeWidth="1" color="#1c1d16" class="hidden sm:block" />
            <div class="hidden h-5 border-r border-r-theme-gray/25 mx-7 sm:block"></div>
            <form action="/" method="" @submit.prevent="" class="flex flex-1">
              <div class="flex-1 pr-7 text-base text-theme-dark bg-transparent min-w-0 focus:outline-0">
                {{ this.error['message'] }}
              </div>
            </form>
          </div>
        </div>
        <Button @click="goPrevious" class="mt-8">Go Back</Button>
      </section>
    </section>
  </template>
  
  <script>
  import NavigationBar from '@/components/NavigationBar.vue'
  import { Button } from '@/components_shadcn/ui/button'
  
  import { CircleX } from 'lucide-vue-next'
  
  import { useToast } from '@/components_shadcn/ui/toast/use-toast'
  
  export default {
      name: 'Index',
      components: {
        NavigationBar,
        CircleX,
        Button,
      },
      props: [
      ],
      data() {
        return {
          errorName: this.$route.params.name,
          error: {
            type: '',
            message: ''
          },
          toast: useToast().toast
        }
      },
      computed: {
      },
      mounted() {
        switch (this.errorName) {
          case 'page':
            this.error['type'] = 'Error 404 - Page not found.'
            this.error['message'] = 'You may entered the wrong path or the path doesn’t exist anymore. Please go back to the previous page.'
            break
          default:
            this.error['type'] = 'Something went wrong.'
            this.error['message'] = 'Please go back to the previous page.'
        }
      },
      methods: {
        goPrevious() {
          this.$router.go(-1)
        }
      }
  }
  </script>
  
  <style>
  
  </style>