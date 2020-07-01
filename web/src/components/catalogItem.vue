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
    *
        border: 1px solid red
    .block
        display: flex
        flex-direction: column
        justify-content: space-around
        .img
            width: 80%
            height: 80% 
            margin: 0 auto
        p
            font-size: 1.8vh
            text-align: center
            width: 80%
            margin: 0 auto

</style>