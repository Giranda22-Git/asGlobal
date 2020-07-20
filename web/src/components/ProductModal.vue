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
                    :style="{'background': 'url(' + require('../assets/' + SelectedProduct.img) + ') center no-repeat', 'background-size': 'cover', 'width' : '30vw'}"
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
                        <input v-model="result" type="text" id="Calc">
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
        result: 1
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
    },
    watch:{
        result:function(val){
            let elements = String(this.result).split('')
            let dom = document.querySelector('#Calc')
            dom.style.width = 1.7 * elements.length + '%'
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
                color: white

    .wrapper
        width: 70vw
        height: 45vh
        box-shadow: 0 0 38px 6px darken(grey , 5%)
        background-color: #26272b
        z-index: 100

        .contentWrapper
            display: flex
            justify-content: space-between
            height: 94%
            & *
                width: 50%
            .leftContentWrapper
                margin: 0 auto
            .rightContentWrapper
                display: flex
                flex-direction: column
                justify-content: space-around
                align-items: center
                text-align: center
                h1

                    width: 100%
                    font-size: 4vh
                h4
                    max-height: 60%
                    overflow: auto
                    width: 100%
                    ::-webkit-scrollbar 
                        width: 3px 
                        height: 3px
                    ::-webkit-scrollbar-button 
                        background-color: #666
                    ::-webkit-scrollbar-track
                        background-color: #999
                    ::-webkit-scrollbar-track-piece 
                        background-color: #ffffff
                    ::-webkit-scrollbar-thumb 
                        height: 50px
                        background-color: #666
                        border-radius: 3px
                    ::-webkit-scrollbar-corner 
                        background-color: #999
                    ::-webkit-resizer 
                        background-color: #666
                .productCalc
                    width: 100%
                    input
                        outline: none
                        width: 3%
                        background-color: transparent
                        color: white
                        border: none
                        box-sizing: border-box
                
                @media screen and ( max-width: 500px )
                    h1
                        font-size: 5vw
                    .leftContentWrapper
                        background-size: cover !important
                    svg
                        font-size: 5vw !important
                    .wrapper
                        height: 60vh !important
                    input 
                        width: 18% !important
                        font-size: 4vw
</style>