<template>
  <div id="app">
      <router-link to="/">Home</router-link>
      <router-link to="/catalog">About</router-link>
    <router-view/>
    <theFooter/>
  </div>
</template>

<script>
import theFooter from '@/components/theFooter.vue'
export default {
  data: {
    
  },
  components: {
    theFooter
  }
}
</script>

<style lang="scss">

</style>
