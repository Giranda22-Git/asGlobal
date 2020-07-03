<template>
    <div class = "block">
        <div class="content">
            <AboutItem/>
        </div>
    </div>
</template>

<script>
import AboutItem from '@/components/AboutItem.vue'
export default {
    name: "About",
    components:{
        AboutItem
    }
}
</script>

<style lang="sass" scoped>
    *
        border: 1px solid red
    .block
          width: 100%
          height: 80vh
          color: black
    .content
        max-width: 1280px
        height: 80vh
        margin: 0 auto
</style>