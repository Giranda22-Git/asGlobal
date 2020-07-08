<template>
    <div class = "block">
        <div class="background">
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
        width: 100vw
        height: 100vh
        color: black
        font-family: Arial,"Helvetica Neue",Helvetica,sans-serif
        background: url(../assets/cover1.jpg) center no-repeat
        background-size: cover
        .background
            background: rgba(0,0,0 ,0.5 )
            height: 100%
            display: flex
            justify-content: center
</style>