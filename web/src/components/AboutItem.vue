<template>
    <div class="img">
        <div class="work_environment"></div>
        <div class="block">
            <h1>О нас</h1>
            <div class="text">
                ihfasioufg ashdsaohasoi iugd ai aidaiud aidasm ipsum 
                consecteturdolor sit amet adipisicing elit. Quia
                eveniet ex, officia necessitatibus atque as
                adipisci voluptatemaxime, mollitia dsada
                alias, ipsam cupiditate. Teneturillo
                excepturi doloremque etdasdasddssd
                possimus labore nulla officiis.
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
    .img
        display: flex
        height: 90%
        width: 80%
        margin: 0 auto
        justify-content: space-around
        align-items: center
    .work_environment
        height: 50%
        width: 35%
        background: url(../assets/work.jpg) center no-repeat
        background-size: 100%
    .block
        display: flex
        justify-content: center
        flex-direction: column
        height: 50vh
        h1
            color: black
            font-size: 4.4vh
            text-align: center
        .text
            width: 40vw
            font-size: 2.5vh
            font-family: Arial,"Helvetica Neue",Helvetica,sans-serif
            line-height: 4vh
            font-weight: lighter
            text-align: center
            color: black
            margin: 0 auto
            padding-top: 2%
        .button
            font-size: 1.85vh
            margin: 0 auto
            width: 20%
            margin-top: 4vh
            text-align: center
            color: white
            height: 4vh
            background-color: #10c9c3
            text-decoration: none
            line-height: 4.2vh
            border-radius: 7%

    

        
</style>