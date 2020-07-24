<template>
    <div class="block">
        <form class="сontent_block">
            <h1>Пожалуйста, введите свой номер телефона</h1>
            <div class="inputs">
                <input v-model="number" type="text" id="number" name="number">
                <input type="submit" id="submit" value="Отправить">
            </div>
            <h2>Мы вам перезвоним в ближайшее время</h2>
        </form>
    </div>
</template>

<script>
export default {
    name: "AboutModal",
    data: () => ({
        number: ''
    })
}
</script>

<style lang="sass" scoped>
.block
    position: absolute
    width: 45% !important
    height: 30% !important
    top: 30%
    left: 27.5%
    background: lighten(#26272b, 1.75%) !important
    h1
        color: white
        font-size: 3.5vh
        text-align: center
    h2
        text-align: center
        font-size: 2vh
        color: white

    .inputs
        margin-top: 6vh 
        display: flex
        align-items: center
        justify-content: center
        #number  
            width: 50%
            height: 3vh
        #submit
            background-color: darken(#26272b, 4%)
            color: white
            width: 10vw
            height: 5vh
            border: 3px solid lighten(#26272b, 0.75%)
</style>