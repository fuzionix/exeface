<template>
  <NavigationBar />
  <section id="homepage" class="absolute w-full h-full pt-[var(--header)] overflow-hidden grid-background">
    

  </section>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
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

import { useToast } from '@/components_shadcn/ui/toast/use-toast'

export default {
    name: 'Index',
    components: {
      NavigationBar,
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
        toast: useToast().toast
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