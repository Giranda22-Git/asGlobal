<template>
  <div id="app">
    <PreLoader class="canvas"/>
    <a href="https://api.whatsapp.com/send?phone=77015339195" class="whatsapp_wrapper">
      <div class="whatsapp_background"></div>
    </a>
    <div class="message_wrapper" @click="open()">
      <div class="message_background" v-show="!isFormVisible"></div>
      <div class="message_background_close" v-show="isFormVisible">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
        </svg>
      </div>
    </div>
    <div class="perspective-crutch" id="perspective-crutch">
      <div class="form-crutch">
        <div class="wrapper-form" id="Form">
          <div class="form-top">
            <div class="form-font" id="bg">
              <div class="top-left">
                <div class="image-block"></div>
              </div>
              <div class="top-right">Закажите обратный звонок <br> и мы вам обязательно перезвоним</div>
            </div>
          </div>
          <form method="post" action="//formspree.io/info@as-global.kz" class="form">
            <input class="form-name" type="text" name="имя" id="name" placeholder="Ваше имя" required>
            <input class="form-tel" type="tel" id="phone" name="номер телефона" pattern="+[0-20]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="+7 (777) 777 77 77" required>
            <input type="hidden" name="_subject" value="Сообщение с моего сайта" />
            <input type="text" name="_gotcha" style="display:none" />
            <input class="form-submit" type="submit" id="submit" value="Отправить">
          </form>
        </div>
      </div>
    </div>
    <theHeader/>
    <transition name="fade">
      <router-view @viewAboutModal="open" />
    </transition>
    <theFooter/>
  </div>
</template>

<script>
import PreLoader from '@/views/Pre-loader.vue'
import theHeader from '@/components/theHeader.vue'
import theFooter from '@/components/theFooter.vue'

export default {
  data: () => ({
    bg: document.getElementById('bg'),
    r: 91,
    g: 4,
    b: 30,
    count: true,
    isFormVisible: false
  }),
  methods: {
    open(){
      if(this.isFormVisible){
        this.isFormVisible = false
        document.getElementById('Form').style.transform = `translateX(130%) rotateX(180deg) rotateY(180deg)`
      } else {
        this.isFormVisible = true
        document.getElementById('Form').style.transform = `translateX(0%) rotateX(0deg) rotateY(0deg)`
      }
      
    },
    color() {
      if(this.count == true){
        if(this.r > 1) {
          this.r = this.r - 1;
        }

        if(this.g < 74) {
          this.g = this.g + 1;
        }

        if(this.b < 90) {
          this.b = this.b + 1;
        }

        if(this.r == 1 && this.g == 74 && this.b == 90){
          this.count = false;
        }
      }

      if(this.count == false) {
        if(this.r < 91) {
          this.r = this.r + 1;
        }

        if(this.g > 4) {
          this.g = this.g - 1;
        }

        if(this.b > 30) {
          this.b = this.b - 1;
        }

        if(this.r == 91 && this.g == 4 && this.b == 30)	{
          this.count = true;
        }
      }

      var rgb = 'rgb(' + this.r + ',' + this.g + ',' + this.b + ', 0.6)';
      document.getElementById('bg').style.backgroundColor = rgb;
    }
  },
  mounted() {
    setInterval(this.color, 50);
  },
  components: {
    theHeader,
    theFooter,
    PreLoader,
    Map
  }
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');
  .message_wrapper
    width: 6vh
    height: 6vh
    border-radius: 50%
    position: fixed
    right: 4vw
    bottom: 4vw
    z-index: 80
    animation: radial-pulse 1s infinite;
    cursor: pointer
    .message_background
      background: url(assets/message.png) center no-repeat
      background-size: cover
      height: 100%
    .message_background_close
      height: 100%
      display: flex
      justify-content: center
      align-items: center
      color: white
      background-color: rgb(54, 176, 13)
      border-radius: 50%
      font-size: 3.5vh
    &:hover
      width: 7vh
      height: 7vh
      right: 3.5vw
      bottom: 3.5vw
      transition: width .25s linear, height .25s linear, right .25s linear, bottom .25s linear

  @keyframes radial-pulse
    0%
      box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.5)
    100%
      box-shadow: 0 0 0 40px rgba(255, 255, 255, 0)
  .whatsapp_wrapper
    width: 6vh
    height: 6vh
    border-radius: 50%
    position: fixed
    left: 4vw
    bottom: 4vw
    z-index: 80
    cursor: pointer
    display: block
    &:active
      display: block
    .whatsapp_background
      background: url(assets/whatsapp.png) center no-repeat
      background-size: cover
      height: 100%
    &:hover
      box-shadow: 0 0 20px 1px darken(grey , 10%)
  .canvas
    position: fixed
    z-index: 100
    width: 100vw !important
    height: 100vh !important
    top: 0
    left: 0
  .fade-enter-active, .fade-leave-active
    transition-property: opacity
    transition-duration: .25s

  .fade-enter-active
    transition-delay: .25s

  .fade-enter, .fade-leave-active
    opacity: 0
  html, body, h1, ul, li, ol
    margin: 0
    padding: 0
  html
    scroll-behavior: smooth
    overflow-x: hidden
  *
    --webkit-appearance: none
    box-sizing: border-box
  .perspective-crutch
    position: fixed
    z-index: 10
    right: 30vw
    bottom: 45vh
    width: 0vh
    height: 0vh
  .form-crutch
    perspective: 400px
  .wrapper-form
    width: 25vw
    height: 35vh
    border-top-left-radius: 50px
    border-top-right-radius: 50px
    transform-style: preserve-3d
    transform-origin: center
    transform: translateX(130%) rotateX(180deg) rotateY(180deg)
    transition: 1s
    
    .form-top
      height: 24%
      background: url(assets/bw.jpg) center no-repeat
      background-size: cover
      border-top-left-radius: 50px
      border-top-right-radius: 50px
      & *
        min-height: 100%
      .form-font
        display: flex
        border-top-left-radius: 50px
        border-top-right-radius: 50px
      .top-left
        width: 18%
        display: flex
        justify-content: flex-end
        align-items: center
        border-top-left-radius: 50px
        .image-block
          background: url(assets/asistent.png) center no-repeat
          background-size: 70%
          width: 2.6vw
          min-height: 2.6vw
          max-height: 100%
          border-radius: 50%
          background-color: white
      .top-right
        width: 82%
        font-family: 'Ubuntu', sans-serif
        font-size: 1.65vh
        text-align: left
        padding: 3%
        color: white
        font-weight: medium
        border-top-right-radius: 50px
        display: flex
        align-items: center
    .form
      height: 76%
      background-color: #fff
      font-family: 'Ubuntu', sans-serif
      font-weight: 500
      display: flex
      flex-direction: column
      justify-content: space-evenly
      align-items: center
      .form-name, .form-tel
        width: 80%
        height: 15%
        box-shadow: inset 0 0 5px 1px rgba(100, 100, 100, 0.6)
        outline: none
        font-size: 1.6vh
        padding: 5.3%
        border: none
      .form-submit
        width: 40%
        height: 20%
        background-color: rgb(66, 192, 3)
        color: #fff
        font-size: 2vh
        cursor: pointer
        outline: none
        border: none
        border-radius: 5px
        box-shadow: inset 0 0 5px 1px rgba(100, 100, 100, 0.6)
        transition: .2s
        &:hover
          background-color: darken(rgb(66, 192, 3), 6.25%)
</style>
