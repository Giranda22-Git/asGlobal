<template>
    <div class="wrapper">
        <div class="img"></div>
        <div class="contentWrapper">
            <h1>О Нас</h1>
            <div class="description">
                Наша компания занимается поставкой напольных покрытий для объектов здравоохранения, спорта, образования и административного назначения.
К каждому клиенту осуществляем индивидуальный подход. Мы гарантируем поставки материалов в указанные сроки. Оказываем услуги по монтажу напольных покрытий качественно и с гарантией.
            </div>
            <button @click="viewModal">Обратный звoнок</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutItem",
    methods: {
        viewModal() {
            this.$emit("viewModal")
        }
    }
}
</script>
<style lang="sass" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap')
    .wrapper
        width: 80%
        height: 100%
        display: flex
        justify-content: space-around
        align-items: center
        text-align: center
        color: white
        font-family: 'Montserrat', sans-serif
        .img
            width: 45%
            height: 50%
            background: url(../assets/work.jpg) center no-repeat
            background-size: cover
        .contentWrapper
            width: 45%
            height: 38%
            display: flex
            flex-direction: column
            justify-content: space-around
            align-items: center
            .description
                font-size: 2.3vh
            h1
                font-size: 3.5vh

        button
            font-size: 1.85vh
            width: 45%
            height: 4vh
            background-color: #10c9c3
            line-height: 3.7vh
            border-radius: 6%
            border: none
            color: inherit
            outline: none
            cursor: pointer
    @media (min-width: 0px) and (max-width: 950px)
        .wrapper
            flex-direction: column !important
            justify-content: center !important
            .contentWrapper
                width: 90% !important
                .description
                    font-size: 2.2vh !important
                    text-align: justify-all
                h1
                    font-size: 3.2vh !important
            button
                font-size: 2vh !important
                width: 80% !important
            .img
                display: none !important
</style>