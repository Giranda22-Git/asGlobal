<template>
        <div class="product_block" @click="viewDetails">
            <div class="product">
                <div class="white_block">
                        <div class="name"
                        v-html="ItemData.name"
                        ></div>
                        <h4>БОЛЬШЕ ИНФОРМАЦИИ</h4>
                    </div>
                <div class="image"
                v-bind:style="{'background': 'url(' + require('../assets/' + ItemData.imageName) + ') center no-repeat', 'background-size': 'cover'}">
                </div>
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
    .product_block
        cursor: pointer
        border: .2vw solid transparent
        &:hover
            border: .2vw solid darken(white, 50%)
            & .white_block
                background-color: rgba(255,255,255,.75) !important
        .product
            width: 100%
            height: 100%
            display: flex
            flex-direction: column
            justify-content: space-around
            align-items: center
            position: relative
            .white_block
                height: 35%
                color: black
                width: 100%
                background-color: rgba(255,255,255,.6)
                display: flex
                flex-direction: column
                justify-content: space-evenly
                position: absolute
                top: 0
                left: 0
                font-family: "Myriad W08 Light",Arial,sans-serif
                font-style: normal
                .name
                    text-align: center
                    font-size: 2.6vh
                    font-weight: 400
                    text-rendering: optimizeLegibility
                h4
                    font-size: 1.5vh
                    text-align: center
                    font-weight: 400
                    margin: 0
        .image
            width: 100%
            height: 100%
    </style>