<template>
    <transition name="modal-fade">
        <div class="wrapper">
            <div class="head">
                <button @click="close" id="close">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>
                </button>
            </div>
            <div class="contentWrapper">
                <div class="leftContentWrapper"
                    :style="{'background': 'url(' + require('../assets/' + SelectedProduct.img) + ') center no-repeat', 'background-size': '100%'}"
                ></div>
                <div class="rightContentWrapper">
                    <h1 class="productName">
                        {{ SelectedProduct.Name }}
                    </h1>
                    <h4 class="productDescription">
                        {{ SelectedProduct.Description }}
                    </h4>
                    <div class="productCalc">
                        <label for="Calc">Цена за </label>
                        <input v-model="result" type="number" id="Calc">
                        <span> &#1084;&#178; = {{ Price }} &#8376;</span>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'productModal',
    data: () => ({
        result: 0
    }),
    props: {
        SelectedProduct: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        Price: function() {
            return new Intl.NumberFormat().format(this.result * this.SelectedProduct.startedPrice)
        }
    },
    methods: {
      close() {
        this.$emit('close');
      }
    }
}
</script>

<style lang="sass" scoped>
    .modal-fade-enter,
    .modal-fade-leave-active 
        opacity: 0

    .modal-fade-enter-active,
    .modal-fade-leave-active 
        transition: opacity .5s ease

    .head
        height: 6%
        display: flex
        justify-content: flex-end
        #close
            background-color: transparent !important
            border: none
            outline: none
            svg
                font-size: 3.5vh
                cursor: pointer

    .wrapper
        width: 70vw
        height: 45vh
        box-shadow: 0 0 20px 1px
        background-color: white
        z-index: 100

        .contentWrapper
            display: flex
            justify-content: space-between
            height: 94%
            & *
                width: 50%
            .rightContentWrapper
                display: flex
                flex-direction: column
                justify-content: space-around
                align-items: center
                text-align: center
        



    
        


</style>