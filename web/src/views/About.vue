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
    .block
        width: 100%
        height: 80vh
        color: black
        font-family: Arial,"Helvetica Neue",Helvetica,sans-serif
    .content
        width: 80vw
        height: 80vh
        margin: 0 auto
</style>