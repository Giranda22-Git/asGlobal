<template>
    <div class="colorBlock" @click="switchIndex"
        :style="{'background': 'url(' + require('../assets/' + Color.imageName) + ') center no-repeat', 'background-size': 'cover'}"
    >
        <div class="whiteBlock">
            {{ Color.Code }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ColorItem',
    props: {
        Color: {
            type: Object,
            default: () => {}
        },
        index: {
            type: Number,
            default: 0
        }
    },
    methods: {
        switchIndex() {
            this.$emit('switchIndex', this.index);
        }
    }
}
</script>

<style lang="sass" scoped>
    .colorBlock
        height: 14vh
        background-color: black
        position: relative
        cursor: pointer
        border: 0.2vw solid transparent
        &:hover
            border: .2vw solid darken(white, 50%)
            & .white_block
                background-color: rgba(255,255,255,.75) !important
        .whiteBlock
            position: absolute
            background-color: rgba(255, 255, 255, 0.6)
            height: 30%
            width: 100%
            bottom: 0
            left: 0
            color: black
            text-align: center
            font-size: 2.6vh
            line-height: 160%
        @media screen and ( max-width: 1000px)
            font-size: 4.3vw !important
</style>
