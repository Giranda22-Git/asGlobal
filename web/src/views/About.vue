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
        background: url(../assets/cover1.jpg) center no-repeat
        background-size: 100%
        width: 100%
        height: 68vh
        color: black
        .background
            background: rgba(0,0,0 ,0.3 )
            height: 100%
</style>