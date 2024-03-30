<template>
  <router-view></router-view>
  <Toaster />
</template>

<script>
import Toaster from '@/components_shadcn/ui/toast/Toaster.vue'

export default {
  name: 'App',
  components: {
    Toaster
  },
  metaInfo: {
    meta: [
      {
        name: 'description',
        content: 'An interface that directly execute AI generated function.'
      },
      {
        name: 'keywords',
        content: 'AI,interface,function,code,chatbot,builder,generator,llama,llm'
      }
    ]
  }
}
</script>

<style>

</style>
