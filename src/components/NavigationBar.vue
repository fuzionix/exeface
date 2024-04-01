<template>
  <nav id="navigation-bar" class="absolute flex justify-between items-center z-20 w-full h-[var(--header)] px-7 bg-white border-b border-theme-gray">
    <div class="flex items-center">
      <router-link to="/">
        <img src="@/assets/logo/exeface_logo.svg" width="40" alt="exeface logo" class="w-10">
      </router-link>
      <span class="ml-3 px-1 text-theme-black text-sm bg-theme-600 border border-theme-400">ALPHA</span>
    </div>
    <NavigationMenu class="hidden pl-[30px]" :class="breakpoint">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger class="bg-transparent">Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
              <li class="row-span-3">
                <NavigationMenuLink as-child>
                  <router-link
                    class="relative flex h-full w-full select-none flex-col justify-end rounded-md overflow-hidden bg-theme-600 p-6 no-underline outline-none"
                    to="/demo"
                  >
                    <img 
                      src="@/assets/logo/exeface_logo.svg" 
                      class="absolute opacity-85
                      top-0 right-0 h-[50px] w-[50px]
                      lg:top-6 lg:left-6 lg:h-[50px] lg:w-[50px]"
                    >
                    <div class="mb-2 mt-4 text-lg font-medium text-theme-black">
                      ExeFace
                    </div>
                    <p class="text-sm leading-tight text-theme-black">
                      An interface that directly execute AI generated function.
                    </p>
                  </router-link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="What is ExeFace">
                <template #icon>
                  <TentTree :size="iconSize" :strokeWidth="iconStroke" />
                </template>
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Explore More">
                <template #icon>
                  <Compass  :size="iconSize" :strokeWidth="iconStroke" />
                </template>
                Styles for headings, paragraphs, lists...etc
              </ListItem>
              <ListItem href="/docs/installation" title="About ExeFace">
                <template #icon>
                  <Info :size="iconSize" :strokeWidth="iconStroke" />
                </template>
                How to install dependencies and structure your app.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <ListItem
                v-for="item in navigationItems"
                @click.prevent="$router.push(item.href)"
                :key="item.title"
                :title="item.title"
              >
                <template #icon>
                  <component :is="item.icon" :size="iconSize" :strokeWidth="iconStroke" />
                </template>
                {{ item.description }}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem class="px-4 py-2">
          <NavigationMenuLink @click.prevent="$router.push('/login')" href="/" class="text-sm font-medium leading-[2]">
            Membership
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <div class="">
      <a 
        class="flex items-center font-semibold border px-6 py-3 bg-white hover:bg-theme-verylight" 
        href="https://github.com/TaylonChan/storompt" 
        target="_blank"
      >
        <span class="text-sm pr-4">GITHUB</span>
        <img src="@/assets/logo/github.svg" width="20" alt="Github logo" class="w-5">
      </a>
    </div>
  </nav>
</template>

<script>
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components_shadcn/ui/navigation-menu'
import ListItem from '@/components/ListItem.vue'

import { 
  TentTree,
  Compass,
  Info,
  Type,
  FileText,
  Image,
  Film,
  AudioLines,
  CodeXml         
} from 'lucide-vue-next'

export default {
    name: 'NavigationBar',
    components: {
      NavigationMenu,
      NavigationMenuContent,
      NavigationMenuItem,
      NavigationMenuLink,
      NavigationMenuList,
      NavigationMenuTrigger,
      ListItem,

      TentTree,
      Compass,
      Info,
      Type,
      FileText,
      Image,
      Film,
      AudioLines,
      CodeXml       
    },
    props: {
      breakpoint: {
        default: 'md:block'
      }
    },
    data() {
      return {
        iconSize: 20,
        iconStroke: 1.5,
        navigationItems: [
          {
            title: 'Text Manipulation',
            href: '/explore/text',
            icon: 'Type',
            description: 'A modal dialog that interrupts the user with important content and expects a response.',
          },
          {
            title: 'Document',
            href: '/explore/document',
            icon: 'FileText',
            description: 'For sighted users to preview content available behind a link.',
          },
          {
            title: 'Image Processing',
            href: '/explore/image',
            icon: 'Image',
            description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
          },
          {
            title: 'Video Processing',
            href: '/explore/vidio',
            icon: 'Film',
            description: 'Visually or semantically separates content.',
          },
          {
            title: 'Audio Manipulation',
            href: '/explore/audio',
            icon: 'AudioLines',
            description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
          },
          {
            title: 'Coding Snippet',
            href: '/explore/coding',
            icon: 'CodeXml',
            description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
          },
        ]
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