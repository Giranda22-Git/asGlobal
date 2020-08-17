<template>
<div id="navContacts">
  <div class="PartnersWrapper">
    <div class="fontWrapper">
      <Partners
        class="Partners"
        :PartnerData="partners"
        :currentSlideIndex="currentSlideIndex"
      />
    </div>
    <button class="prevSlide" @click="prevSlide">
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-double-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>
    </button>
    <button class="nextSlide" @click="nextSlide">
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>
  </div>
  <footer>
    <div class="container">
      <div class="item1">
        <h6 class="text1">О нас</h6>
        <p>AS Global - это компания занимающиеся продажей отделочных материалов со своей бригадой</p>
      </div>
      <div class="item2">
        <h6 class="text2">Карта</h6>
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.9766212365!2d76.95019401534026!3d43.25191177913711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836eed571604b7%3A0x246629b09901c308!2z0YPQu9C40YbQsCDQmtCw0YDQsNGB0LDQuSDQkdCw0YLRi9GA0LAsINCQ0LvQvNCw0YLRiyAwNTAwMDA!5e0!3m2!1sru!2skz!4v1593599792589!5m2!1sru!2skz" width="100%" height="100%" frameborder="0" class="map" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>
      <div class="item3"> 
        <h6 class="text3">Контакты</h6>
        <div class="cont">
          <a href="tel:">+7 (701) 533 91 95</a> <br>
          <a href="mailto:">info@as-global.kz</a><br>
          
        </div> 
      </div>
    </div>
    <hr>
    <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
      <a href="#">ТOО "Punk Studio"</a>.
    </p>
  </footer>
</div>
</template>

<script>
import axios from 'axios'
import Partners from '@/components/Partners.vue'
export default {
    name: 'theFooter', 
    data: () => ({
      partners: new Array(),
      currentSlideIndex: 0,
      interval: 5000
    }),
    components: {
      Partners
    },
    methods: {
      nextSlide() {
        if (this.currentSlideIndex < this.partners.length - 4)
          this.currentSlideIndex++
        else this.currentSlideIndex = 0
      },
      prevSlide() {
        if (this.currentSlideIndex > 0)
          this.currentSlideIndex--
      }
    },
    mounted() {
      axios.get('http://api.as-global.kz/Partners')
      .then( response => {this.partners = response.data} )
      .catch(function (error) {
        console.log(error);
      })

      if(this.interval > 0)
      {
        let vm = this
        setInterval(function() {
          vm.nextSlide()
        }, vm.interval)
      }
    }
}
</script>

<style lang="sass" scoped>
*
  --webkit-box-sizing: border-box
.PartnersWrapper
  height: 24vh
  display: flex
  justify-content: center
  background-color: #26272b
  position: relative
  .nextSlide
    position: absolute
    right: 0
    top: 50%
    height: 30%
    width: 5%
    transform: translate(-50%, -50%)
    outline: none
    border: none
    font-size: 500%
    background-color: transparent
    color: darken(white, 60%)
    cursor: pointer

  .prevSlide
    position: absolute
    left: 0
    top: 50%
    height: 30%
    width: 5%
    transform: translate(50%, -50%)
    outline: none
    border: none
    font-size: 500%
    background-color: transparent
    color: darken(white, 60%)
    cursor: pointer

  .prevSlide:hover, .nextSlide:hover
    color: darken(white, 45%)

  .fontWrapper
    display: flex
    width: 80%
    height: 100%
    justify-content: center
    align-items: center
    & *
      height: 100%
footer
  background-color: #26272b
  font-size: 2.4vh
  line-height: 3.84vh
  color: #737373
  font-family: Arial,"Helvetica Neue",Helvetica,sans-serif
  width: 100vw
  height: 37vh
  word-wrap: break-word
  .container
    width: 100%
    height: 80%
    align-items: center
    display: flex
    flex-direction: row
    justify-content: space-around
    line-height: 3vh
    .item1
      width: 35%
      height: 100%
      display: flex
      flex-direction: column
      align-items: center
      .text1
        color: #fff
        font-size: 2.6vh
        text-transform: uppercase
        letter-spacing: 0.32vh 
        text-align: center
    .item2
      width: 25%
      height: 100%
      display: flex
      flex-direction: column
      box-align: center
      justify-content: space-around
      .text2
        color: #fff
        font-size: 2.56vh
        text-transform: uppercase
        letter-spacing: 0.32vh
        text-align: center
      .map
        width: 100%
        height: 80%
        border-radius: 8%

    .item3
      height: 100%
      width: 25%
      display: flex
      align-items: center
      flex-direction: column
      .text3
        color: #fff
        font-size: 2.56vh
        text-transform: uppercase
        letter-spacing: 0.32vh 
        text-align: center
      .cont
        width: 100%
        text-align: center
        color: #737373
      a
        color: #737373

  hr
    border-top-color: #bbb
    opacity: 0.5
    border: 0
    border-top: 0.16vh solid #eee
    height: 0
    -webkit-box-sizing: content-box
    -moz-box-sizing: content-box
    box-sizing: content-box

.copyright-text
  font-size: 2vh
  text-align: center
  margin: 0
  a
    color: #737373
    text-decoration: none
    a:active
    color: #737373
@media screen and ( max-width: 480px )
  .item1
    height: 58vh
    width: 20% !important
    .text1
      font-size: 5vw !important
    p
      font-size: 4vw !important
  .item2
    .text2
      font-size: 5vw !important
    .map
      height: 65% !important
  .item3
    .text3
      font-size: 5vw !important
    .cont
      font-size: 4.3vw !important
      text-align: left
  .copyright-text
    font-size: 3.6vw !important
  
</style>