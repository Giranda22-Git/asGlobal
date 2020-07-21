<template>
  <div id="app">
    <PreLoader class="canvas"/>
    <theHeader/>
    <transition name="fade">
      <router-view/>
    </transition>
    <theFooter/>
  </div>
</template>

<script>
import PreLoader from '@/views/Pre-loader.vue'
import theHeader from '@/components/theHeader.vue'
import theFooter from '@/components/theFooter.vue'

export default {
  data: () => ({
    
  }),
  components: {
    theHeader,
    theFooter,
    PreLoader
  }
}
</script>

<style lang="sass">
  .canvas
    position: fixed
    z-index: 100
    width: 100vw !important
    height: 100vh !important
    top: 0
    left: 0
  .fade-enter-active, .fade-leave-active
    transition-property: opacity
    transition-duration: .25s

  .fade-enter-active
    transition-delay: .25s

  .fade-enter, .fade-leave-active
    opacity: 0
  html, body, h1, ul, li, ol
    margin: 0
    padding: 0
  html
    scroll-behavior: smooth
  *
    --webkit-appearance: none
</style>
