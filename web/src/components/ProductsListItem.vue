<template>
        <div class="product_block">
            <div class="product">
                <div class="image"
                v-bind:style="{'background': 'url(' + require('../assets/' + ItemData.Image) + ') center no-repeat', 'background-size': '100%'}"></div>
                <div class="text">
                    {{ ItemData }}
                </div>
                <a href = "#" class="button">Подробнее</a>
            </div>
        </div>
</template>

<script>
export default {
    name: 'productListItem',
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
    $Content_size: 100%
    .product_block
        width: $Content-size / 3
        height: 75vh
        display: flex
        .product
            border: 1px solid black
            margin: 0 auto
            margin-top: 5vh
            width: 35vh
            height: 70vh
        .image
            width: 35vh
            height: 30vh
        .text
            height: 30vh
            overflow: auto
            font-size: 2.6vh
            text-align: center
            width: 85%
            margin: 0 auto
            &::-webkit-scrollbar 
                width: 3px 
                height: 3px
            &::-webkit-scrollbar-button 
                background-color: #666
            &::-webkit-scrollbar-track
                background-color: #999
            &::-webkit-scrollbar-track-piece 
                background-color: #ffffff
            &::-webkit-scrollbar-thumb 
                height: 50px
                background-color: #666
                border-radius: 3px
            &::-webkit-scrollbar-corner 
                background-color: #999
            &::-webkit-resizer 
                background-color: #666
        .button 
            display: block
            font-size: 3vh
            margin: 2vh auto
            width: 60%
            text-align: center
            color: white
            height: 5vh !important
            background-color: #98ED00
            text-decoration: none
            line-height: 5vh
</style>