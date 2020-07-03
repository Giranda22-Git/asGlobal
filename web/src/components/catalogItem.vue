<template>
    <div class="block">
        <div class="img" v-bind:style="{background: 'url(' + require('../assets/' + ItemData.img) + ') center no-repeat', 'background-size': '100%'}"></div>
        <p>{{ ItemData.text }}</p>
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
    $fontColor: white
    .block
        display: flex
        flex-direction: column
        justify-content: space-around
        align-items: center
        min-width: 20vw
        .img
            width: 80%
            height: 80%
            border-radius: 1%
        p
            font-size: 1.6vh
            text-align: center
            width: 70%
            color: $fontColor

</style>