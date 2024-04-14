<template>
  <NavigationBar />
  <section 
    id="homepage" 
    class="w-full h-full min-h-[100vh] pt-[var(--header)] overflow-hidden grid-background"
    :style="`background-position: center top ${scrollOffset['value']}px;`"
  >
    <section class="relative flex flex-col data-[status=false]:justify-center items-center p-6 w-full min-h-[calc(100vh-var(--header))]" :data-status="initPanelAfter">
      <h5 
        v-if="!initPanelAfter"
        class="data-[status=true]:animate-[fade-out_0.2s_0.2s_ease-in-out_forwards] mb-4 px-1 text-center text-theme-black bg-theme-600 border border-theme-400 md:text-lg" 
        :data-status="initPanel"
      >
        Executable Interface
      </h5>
      <h1 
        v-if="!initPanelAfter"
        class="data-[status=true]:animate-[fade-out_0.2s_0.1s_ease-in-out_forwards] mb-8 max-w-[1024px] leading-[1.1] text-center text-[3rem] text-theme-gray font-extralight sm:text-[4rem] sm:leading-[1.2] md:text-[4.75rem]"
        :data-status="initPanel"
      >
        An interface that directly execute AI generated function
      </h1>
      <p 
        v-if="!initPanelAfter"
        class="data-[status=true]:animate-[fade-out_0.2s_0.0s_ease-in-out_forwards] mb-16 max-w-[768px] text-center text-theme-dark/80 md:text-lg"
        :data-status="initPanel"
      >
        Dive into an entire captivating story just by interacting with AI charactors almost like playing a text-base game where option is unlimited
      </p>
      <div 
        ref="chatbox"
        id="chat-input" 
        class="
        relative flex items-center min-h-[--chat] px-7 w-full max-w-[1024px] duration-500 delay-200 bg-theme-verylight border border-b-4 border-theme-dark shadow-line focus-within:shadow-line-active 
        data-[status=true]:before:opacity-0 before:absolute before:content-['SHIFT_+_ENTER_to_add_a_new_line'] before:-top-6 before:right-0 before:text-sm before:text-theme-dark before:duration-200
        "
        :data-status="initPanel"
      >
        <div id="input-frame" class="flex flex-1 items-center h-full">
          <Sparkles :size="22" :strokeWidth="1" color="#1c1d16" class="hidden sm:block" />
          <div class="hidden h-5 border-r border-r-theme-gray/25 mx-7 sm:block"></div>
          <form action="/" method="" @submit.prevent="submitPrompt()" class="flex flex-1">
            <textarea 
              ref="chatboxInput"
              v-model.trim="userTextInput"
              class="flex-1 h-auto pr-7 py-5 mr-7 text-base text-theme-dark bg-transparent min-w-0 resize-none focus:outline-0 data-[status=false]:whitespace-nowrap data-[status=false]:overflow-hidden data-[status=false]:text-ellipsis"
              placeholder="Type Something ..." 
              value=""
              enter-key-hint="send"
              @click="initTextBlock()"
              @input="handleTextBlock()"
              @keydown.enter.exact="submitPrompt()"
              rows="1"
              :data-status="initInput"
              data-gramm="false"
              data-gramm_editor="false"
              data-enable-grammarly="false"
            >
            </textarea>
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
        initPanel: false,
        initPanelAfter: false,
        userTextInput: 'The longest way to win this war is to make a cake for the general.',
        scrollOffset: {
          value: 0,
          depth: 0.35
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
      handleTextBlock(submit = false) {
        const chatboxInput = this.$refs.chatboxInput
        if (submit === true) {
          chatboxInput.value = this.userTextInput
        }
        chatboxInput.style.height = `auto`
        chatboxInput.style.height = `${chatboxInput.scrollHeight}px`
      },
      submitPrompt() {
        if (this.userTextInput.length > 0) {
          setTimeout(() => {
            this.handleTextBlock(true)
          }, 0)
          this.transformPanel()
        }
      },
      transformPanel() {
        if (!this.initPanel) {
          // STAGE 1: Fade out text element. Translate chatbox to top.
          const chatbox = this.$refs.chatbox
          const navHeight = parseInt(getComputedStyle(chatbox).getPropertyValue("--header").split("px")[0])
          const chatboxDuration = parseFloat(getComputedStyle(chatbox).transitionDuration.split("s")[0])
          const chatboxDelay = parseFloat(getComputedStyle(chatbox).transitionDelay.split("s")[0])
          const chatboxMargin = 24 // 1.5rem
          const chatboxTop = Math.round(chatbox.getBoundingClientRect().top - navHeight - chatboxMargin)
          const panelDelay = chatboxDuration + chatboxDelay

          this.initPanel = true
          chatbox.style.transform = `translateY(-${chatboxTop}px)`

          // STAGE 2: Remove text element. Reposition chatbox seamlessly.
          setTimeout(() => {
            this.initPanelAfter = true
            chatbox.style.transition = 'none'
            chatbox.style.transform = ''
          }, panelDelay * 1000)
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