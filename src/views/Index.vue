<template>
  <NavigationBar />
  <section 
    id="homepage" 
    class="w-full h-full min-h-[100vh] pt-[var(--header)] overflow-hidden grid-background"
    :style="`background-position: center top ${scrollOffset['value']}px;`"
  >
    <section class="flex flex-col justify-center items-center p-6 w-full min-h-[calc(100vh-var(--header))]">
      <h5 class="mb-4 px-1 text-center text-theme-black bg-theme-600 border border-theme-400 md:text-lg">Executable Interface</h5>
      <h1 class="mb-8 max-w-[1024px] leading-[1.1] text-center text-[3rem] text-theme-gray font-extralight sm:text-[4rem] sm:leading-[1.2] md:text-[4.75rem]">An interface that directly execute AI generated function</h1>
      <p class="mb-16 max-w-[768px] text-center text-theme-dark/80 md:text-lg">Dive into an entire captivating story just by interacting with AI charactors almost like playing a text-base game where option is unlimited.</p>
      <div 
        id="chat-input" 
        class="bottom-0 h-[--chat] px-7 w-full max-w-[1024px] duration-300 bg-theme-verylight border border-b-4 border-theme-dark shadow-line focus-within:shadow-line-active"
      >
        <div id="input-frame" class="flex items-center h-full">
          <Sparkles :size="22" :strokeWidth="1" color="#1c1d16" class="hidden sm:block" />
          <div class="hidden h-5 border-r border-r-theme-gray/25 mx-7 sm:block"></div>
          <form action="/" method="" @submit.prevent="" class="flex flex-1">
            <input 
              type="text" 
              v-model.trim="userTextInput"
              class="flex-1 pr-7 text-base text-theme-dark bg-transparent min-w-0 focus:outline-0" 
              placeholder="Type Something ..." 
              value=""
              enter-key-hint="send"
              @click="initTextBlock()"
            >
            <button type="submit" class="hover:opacity-75">
              <img src="@/assets/icon/voice.svg" class="w-6" alt="">
            </button>
            <button 
              type="submit" 
              class="ml-4 hover:opacity-75" 
            >
              <img src="@/assets/icon/send.svg" class="w-8" alt="">
            </button>
          </form>
        </div>
      </div>
    </section>
    <section class="min-h-[100vh]">
    </section>
  </section>
  <Footer />
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import Footer from '@/components/Footer.vue'

import { Button } from '@/components_shadcn/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components_shadcn/ui/select'

import { Sparkles } from 'lucide-vue-next'

import { useToast } from '@/components_shadcn/ui/toast/use-toast'

export default {
    name: 'Index',
    components: {
      NavigationBar,
      Footer,
      Sparkles,
      Button,
      Select,
      SelectContent,
      SelectGroup,
      SelectItem,
      SelectLabel,
      SelectTrigger,
      SelectValue,
    },
    props: [
    ],
    data() {
      return {
        initInput: false,
        userTextInput: 'The longest way to win this war is to make a cake for the general.',
        scrollOffset: {
          value: 0,
          depth: 0.25
        },
        toast: useToast().toast
      }
    },
    mounted() {
      document.addEventListener('scroll', this.parallaxScroll)
    },
    unmounted() {
      document.removeEventListener('scroll', this.parallaxScroll)
    },
    computed: {
    },
    methods: {
      initTextBlock() {
        if (!this.initInput) {
          this.userTextInput = ''
          this.initInput = true
        }
      },
      parallaxScroll(event) {
        try {
          this.scrollOffset['value'] = Math.round(event.target.defaultView.pageYOffset * this.scrollOffset['depth'])
        } catch {
          this.scrollOffset['value'] = 0
        }
      }
    }
}
</script>

<style>

</style>