<template>
        <div class="product_block">
            <div class="product">
                <div class="image"
                v-bind:style="{'background': 'url(' + require('../assets/' + ItemData.img) + ') center no-repeat', 'background-size': 'cover'}"></div>
                <div class="text">
                    {{ ItemData.Description }}
                </div>
                <button class="button" @click="viewDetails">Подробнее</button>
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
    },
    methods: {
        viewDetails(){
            this.$emit("viewDetails", this.ItemData)
        }
    }
}
</script>

<style lang="sass" scoped>
    $Content_size: 100%
    .product_block
        width: $Content-size / 4.1
        height: 75vh
        display: flex
        .product
            border: .05vw solid darken(white, 50%)
            margin: 0 auto
            width: 100%
            height: 100%
            display: flex
            flex-direction: column
            justify-content: space-around
            align-items: center
        .image
            width: 85%
            height: 28%
        .text
            height: 40%
            overflow-y: hidden
            overflow-x: hidden
            font-size: 2.2vh
            text-align: center
            width: 85%
            &:hover
                overflow-y: auto
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
            font-size: 2.85vh
            text-align: center
            color: white
            background-color: darken(#98ED00,20%)
            width: 85%
            height: 6.4% !important
            outline: none
            cursor: pointer
            border: none
            border-radius: 4%
</style>