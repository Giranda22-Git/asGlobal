<template>
    <div class="img">
        <div class="work_environment"></div>
        <div class="block">
            <h1>О нас</h1>
            <div class="text">
                ihfasioufg ashdsaohasoi iugd ai aidaiud aidasm ipsum <br>
                consecteturdolor sit amet adipisicing elit. Quia<br>
                eveniet ex, officia necessitatibus atque as<br>
                adipisci voluptatemaxime, mollitia dsada<br>
                alias, ipsam cupiditate. Teneturillo<br>
                excepturi doloremque etdasdasddssd<br>
                possimus labore nulla officiis.<br>
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
    // *
    //     border: 1px solid red
    .img
        display: flex
        height: 100%
    .work_environment
        border-radius: 2vh
        display: flex 
        margin-top: 8vh
        justify-content: center
        margin-left: 30vh
        height: 50vh
        width: 80vh
        background: url(../assets/work.jpg) center no-repeat
        background-size: 100%
    .block
        display: flex
        height: 100%
        flex-wrap: wrap
        justify-content: flex-end
        flex-direction: column
        height: 45vh
        h1
            color: black
            font-size:: 5vh
            text-align: center
    .text
        justify-content: center
        width: 120vh
        height: 28vh
        font-size: 3vh
        font-family: Arial,"Helvetica Neue",Helvetica,sans-serif
        line-height: 4vh
        font-weight: lighter
        text-align: center
        color: black
        margin: 0 auto
        padding-top: 2%
    .button
        font-size: 2vh
        margin: 0 auto
        width: 20%
        margin-top: 4vh
        text-align: center
        color: white
        height: 5vh
        background-color: #10c9c3
        text-decoration: none
        line-height: 5vh

    

        
</style>