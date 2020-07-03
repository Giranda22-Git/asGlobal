<template>
        <div class="product_block">
            <div class="product">
                <div class="img"></div>
                <div class="text"></div>
            </div>
        </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scroped>
    $Content_size: 100%
    // *
    //     border: 1px solid red
    .product_block
        width: $Content-size / 3
        height: 60vh
        display: flex
        .product
            border-color: black
            margin: 0 auto
            margin-top: 5vh
            width: 40vh
            height: 55vh
        .img
            width: 25vh
            margin: 0 auto
            height: 25vh
            background: url(../assets/A&S.png) center no-repeat
            background-size: 100%
</style>