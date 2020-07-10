<template>
    <router-link :to='{ path: `/products/${ItemData.id}` }' class="Link">
        <div class="img" v-bind:style="{background: 'url(' + require('../assets/' + ItemData.img) + ') center no-repeat', 'background-size': 'cover'}">
            <div class="catalogName"><h4>{{ ItemData.name }}</h4><span>БОЛЬШЕ ИНФОРМАЦИИ</span> </div>
        </div>
    </router-link>
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
    .Link
        display: block
        height: 100%
        position: relative
        z-index: 5
        display: flex
        flex-direction: column
        justify-content: space-around
        align-items: center
        border: .2vw solid transparent
        &:hover
            border: .2vw solid darken(white, 50%)
            & .catalogName
                background-color: rgba(255,255,255,.75) !important
        .img
            width: 100%
            height: 100%
            position: relative

            .catalogName
                text-align: center
                width: 100%
                color: $fontColor
                position: absolute
                top: 0
                left: 0
                height: 40%
                background-color: rgba(255,255,255,.6)
                display: flex
                flex-direction: column
                justify-content: center
                font-family: "Myriad W08 Light",Arial,sans-serif
                h4
                    margin: 0
                    padding: 0
                    font-weight: 400
                    font-style: normal
                    text-rendering: optimizeLegibility
                    margin-block-end: 20% solid transparent
                    display: block
                    margin-block-end: 6%
                    font-size: 2.1vh
                span
                    font-size: 1.4vh
                    font-weight: 400
                    text-rendering: optimizeLegibility
                    font-style: normal



</style>