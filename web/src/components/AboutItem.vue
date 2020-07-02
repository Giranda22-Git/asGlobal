<template>
    <div class="img">
        <div class="block">
            <h1>О нас</h1>
            <div class="text">
                Loredasda siufha iufgayufasiu hasodjasihai fgasdoiashdoa ihfasioufg ashdsaohasoi iugd <br>
                ai aidaiud aidasm ipsum dolor sit amet consectetur adipisicing elit.<br>
                Quia eveniet ex, officia necessitatibus atque adipisci voluptate <br>
                maxime, mollitia alias, ipsam cupiditate. Tenetur<br>
                illo excepturi doloremque et<br> 
                possimus labore<br>
                nulla officiis.
            </div>
            <a href="#" class="button">BUTTON</a>
        </div>
    </div>
    
    
</template>

<script>
export default {
}
</script>
<style lang="sass" scoped>
    *
        border: 1px solid red
    .img
        height: 100%
        // background-color: rgba(0,0,0,0.5)
    .block
        display: flex
        height: 100%
        flex-wrap: wrap
        align-content: center
        flex-direction: column
        height: 45vh
        padding-top: 10%
        h1
            color: #465945
            font-size:: 5vh
            text-align: center
    .text
        padding-top: 2%
        justify-content: center
        width: 120vh
        height: 28vh
        font-size: 3.2vh
        font-weight: bold
        text-align: center
        color: black
        margin: 0 auto
    .button
        font-size: 2vh
        margin: 0 auto
        width: 7%
        text-align: center
        color: white
        padding: 2vh 4vh
        background-color: #10c9c3
        text-decoration: none
        
    button:hover 
        box-shadow: 0 0 10px rgba(0,0,0,0.07)

        
</style>