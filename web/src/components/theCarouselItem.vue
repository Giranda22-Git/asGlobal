<template>
    <div class="wrapper">
        <div class="img" v-bind:style="{background: 'url(' + require('../assets/' + item_data.imageName) + ') center no-repeat'}">
            <div class="darken">
                <h1>{{item_data.name}}</h1>
                <p>{{item_data.address}}</p>
            </div>
            <div class="noVision"></div>
        </div>
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
    @import url('https://fonts.googleapis.com/css2?family=Mulish:ital@1&display=swap')
    .wrapper
        .img
            height: 65vh
            background-size: cover !important
            display: flex
            flex-direction: column
            justify-content: space-around
            .darken
                padding: 1%
                background-color: rgba(255, 255, 255, 0.9)
                width: 70%
                margin: 0 auto
                font-family: 'Mulish', sans-serif
                h1
                    font-weight: 400
                p
                    font-weight: 800

            .noVision
                height: 50%
                opacity: 0


</style>