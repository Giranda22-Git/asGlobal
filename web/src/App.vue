<template>
  <div id="app">
    <theHeader/>
    <transition name="fade">
      <router-view/>
    </transition>
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
  .fade-enter-active, .fade-leave-active
    transition-property: opacity
    transition-duration: .25s

  .fade-enter-active
    transition-delay: .25s

  .fade-enter, .fade-leave-active
    opacity: 0
  html, body, h1, ul, li, ol
    margin: 0
    padding: 
  html
    scroll-behavior: smooth
  *
    --webkit-appearance: none
</style>
