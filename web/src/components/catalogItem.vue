<template>
    <div class="block">
        <div class="img"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
    $fontColor: white
    .block
        display: flex
        flex-direction: column
        justify-content: space-around
        .img
            width: 80%
            height: 80% 
            margin: 0 auto
            background: url('../assets/carousel1.jpg') center no-repeat
            background-size: cover
            border-radius: 10%
        p
            font-size: 1.8vh
            text-align: center
            width: 80%
            margin: 0 auto
            color: $fontColor

</style>