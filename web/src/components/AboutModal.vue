<template>
    <transition name="modal-fade">
    <div class="block">
        <div class="head">
            <button @click="close" id="close">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                    <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                </svg>
            </button>
        </div>
        <form class="сontent_block">
            <h1>Обратный звонок</h1>
            <div class="inputs">
                <form method="post" action="//formspree.io/info@as-global.kz">
                  <input type="text" name="имя" id="name" placeholder=" Ваше имя" required>
                  <input type="tel" id="phone" name="номер телефона" pattern="+[0-20]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder=" Номер телефона" required>
                  <input type="hidden" name="_subject" value="Сообщение с моего сайта" />
                  <input type="text" name="_gotcha" style="display:none" />
                  <input type="submit" id="submit" value="Отправить">
                </form>
            </div>
        </form>
    </div>
    </transition>
</template>

<script>
export default {
    name: "AboutModal",
    data: () => ({
        number: ''
    }),
    methods: {
        close() {
            this.$emit('close')
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

.modal-image-enter-active,
.modal-image-leave-active 
  transition: background .5s ease

.block
    position: fixed
    width: 30% !important
    height: 25% !important
    top: 30%
    left: 35%
    background: lighten(#26272b, 1.75%) !important
    z-index: 100
    box-shadow: 0 0 38px 6px darken(grey , 5%)
    h1
        color: white
        font-size: 2.5vh
        text-align: center
        margin: none
    .head
      display: flex
      justify-content: flex-end
      button
        font-size: 2.5vh
        background-color: transparent
        color: white
        border: none
        outline: none
        &:hover
          color: lightgreen
    .inputs
        margin-top: 2vh 
        form
          display: flex
          flex-direction: column
          align-items: center
          justify-content: center
          #phone, #name
            width: 99.8%
            height: 5vh
            font-size: 1.2vh
            outline: none
            text-align: center
            border: none
          #submit
            background-color: #10c9c3
            color: white
            width: 100%
            height: 5vh
            outline: none
            font-size: 1.6vh
            border: none
            &:hover
              cursor: pointer
</style>