<template>
    <div class="wrapper">
        <div class="img" v-bind:style="{background: 'url(' + require('../assets/' + item_data.img) + ') center no-repeat'}"></div>
    </div>
</template>

<script>
export default {
    name: 'CarouselItem',
    data: () => ({
    }),
    props: {
        item_data: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="sass" scoped>
    .wrapper
        .img
            height: 30vh
            background-size: cover !important
        

</style>