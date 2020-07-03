<template>
  <div id="app">
    <theHeader/>
    <router-view/>
    <theFooter/>
  </div>
</template>

<script>
import theHeader from '@/components/theHeader.vue'
import theFooter from '@/components/theFooter.vue'

export default {
  data: () => ({
    
  }),
  components: {
    theHeader,
    theFooter
  }
}
</script>

<style lang="sass">
  html, body, h1, ul, li, ol
    margin: 0
    padding: 0
</style>
