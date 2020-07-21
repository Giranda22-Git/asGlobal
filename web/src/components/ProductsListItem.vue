<template>
        <div class="product_block" @click="viewDetails">
            <div class="product">
                    <div class="image"
                    v-bind:style="{'background': 'url(' + require('../assets/' + ItemData.imageName) + ') center no-repeat', 'background-size': 'cover'}">
                    <div class="white_block">
                        <div class="name"
                        v-html="ItemData.name"
                        ></div>
                        <h4>БОЛЬШЕ ИНФОРМАЦИИ</h4>
                    </div>
                </div>
                <!-- <button class="button" @click="viewDetails">Подробнее</button> -->
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
    // *
    //     border: 1px solid red
    .product_block
        height: 34vh
        display: flex
        cursor: pointer
        .product
            border: .05vw solid darken(white, 50%)
            width: 100%
            height: 100%
            display: flex
            flex-direction: column
            justify-content: space-around
            align-items: center
        .image
            width: 100%
            height: 100%
            .white_block
                height: 40%
                color: black
                width: 100%
                background-color: rgba(255,255,255,.6)
                display: flex
                flex-direction: column
                justify-content: space-around                
                .name
                    font-family: "Myriad W08 Light",Arial,sans-serif
                    text-align: center 
                    font-size: 3vh
                    font-weight: 400
                    text-rendering: optimizeLegibility
                    font-style: normal
                h4
                    font-family: "Myriad W08 Light",Arial,sans-serif
                    font-size: 2vh
                    text-align: center
                    font-weight: 400
        .image:hover
            border: .2vw solid darken(white, 50%)
            & .white_block
                background-color: rgba(255,255,255,.75) !important
    </style>