<template>
  <NavigationBar />
  <section id="homepage" class="absolute w-full h-full overflow-hidden grid-background">
    <h1 class="text-theme text-2xl">This is Home</h1>
    <Select>
      <SelectTrigger class="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">
            Apple
          </SelectItem>
          <SelectItem value="banana">
            Banana
          </SelectItem>
          <SelectItem value="blueberry">
            Blueberry
          </SelectItem>
          <SelectItem value="grapes">
            Grapes
          </SelectItem>
          <SelectItem value="pineapple">
            Pineapple
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

    <Button
      @click="() => {
        toast({
          title: 'Scheduled: Catch up',
          description: 'Friday, February 10, 2023 at 5:57 PM',
        });
      }"
    >
      Add to calendar
    </Button>

    <h1>An interface that directly execute AI generated function.</h1>

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