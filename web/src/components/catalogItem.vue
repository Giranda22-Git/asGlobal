<template>
    <div class="block">
        <div class="img" v-bind:style="{background: 'url(' + require('../assets/' + ItemData.img) + ') center no-repeat', 'background-size': 'cover'}">
            <router-link :to='{ path: `/products/${ItemData.id}` }' class="Link"></router-link>
            <div class="catalogName">{{ ItemData.name }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'catalogItem',
    data: () => ({
        
    }),
    props: {
        ItemData: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="sass" scoped>
    $fontColor: black
    .block
        display: flex
        flex-direction: column
        justify-content: space-around
        align-items: center
        .img
            width: 100%
            height: 100%
            position: relative
            .catalogName
                font-size: 2.4vh
                text-align: center
                width: 100%
                color: $fontColor
                position: absolute
                top: 0
                left: 0
                height: 40%
                background-color: rgba(255,255,255,.6)
            .Link
                display: block
                height: 100%

</style>