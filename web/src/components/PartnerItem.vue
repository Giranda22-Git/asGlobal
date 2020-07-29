<template>
    <div class="wrapper">
        <div class="topContent"
        :style="{'background': 'url(' + require('../assets/' + Partner.imageName) + ') center no-repeat', 'background-size': '100%'}"
        >
        </div>
        <div class="bottomContent">
        {{ Partner.name }}
        </div>
    </div>
</template>

<script>
export default {
    name: "PartnerItem",
    props: {
        Partner: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="sass" scoped>
    .wrapper
        display: flex
        flex-direction: column
        justify-content: space-around
        align-items: center
        .topContent
            width: 90%
            height: 80%
        .bottomContent
            height: 20%
            width: 100%
            text-align: center
            font-size: 3vh
            color: white
</style>