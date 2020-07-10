<template>
  <div id="navContacts">
    <div class="pre-footer">
    <div class="iconholder">
      <div class="adaptive_box">
          <div class="design_block">
              <div class="companyes"></div>
              <h3>ui / ux design</h3>
          </div>
          <div class="design_block">
              <div class="companyes"></div>
              <h3>web development</h3>
          </div>
      </div>
      <div class="adaptive_box">
          <div class="design_block">
              <div class="companyes"></div>
              <h3>app / mobile</h3>
          </div>
          <div class="design_block">
              <div class="companyes"></div>
              <h3>comp / company</h3>
          </div>
      </div>
    </div>
  </div>
<footer>
      <div class="container">
          <div class="item1">
              <h6 class="text1">О нас</h6>
              <p>Scanfcode.com CODE WANTS TO BE SIMPLE is an initiative to help the upcoming programmers</p>
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
                  <a href="tel:">8 (000) XXX XXX </a> <br>
                  <a href="mailto:">wdwdw@ffwfw.com</a><br>
                  <a>Lorem ipsum dolor sit.</a><br>
              </div> 
          </div>
      </div>
      <hr>
      <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
          <a href="#">ТOОИПО "sitePunk"</a>.
      </p>
</footer>
</div>
</template>

<script>
export default {
    name: 'theFooter', 
    data: () => ({

    })
}
</script>

<style lang="sass" scoped>
*
  // border: 1px solid red
  --webkit-box-sizing: border-box
footer
  background-color: #26272b
  font-size: 2.4vh
  line-height: 3.84vh
  color: #737373
  font-family: Arial,"Helvetica Neue",Helvetica,sans-serif
  width: 100vw
  height: 50vh
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
    font-size: 3vh
    text-align: center
    a
      color: #737373
      text-decoration: none
      a:active
       color: #737373
.pre-footer
  background-color: #26272b
  color: #737373
  height: 38vh
  display: flex
  flex-direction: row
  justify-content: center
  .iconholder
    display: flex
    justify-content: space-around
    align-items: center
    background-color: transparent
    text-align: center
    width: 90%
    height: 100%
    margin: 0 auto
    .adaptive_box
      width: 50%
      height: 100%
      display: flex
      flex-direction: row
      justify-content: space-around
      .design_block
        width: 30%
        height: 100%
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        .companyes
          width: 90%
          height: 50%
          background: url(../assets/carousel1.jpg) center no-repeat
          background-size: cover    
    h3
      color: #bbb
      font-size: 3vh
      display: block
      height: 15%
      text-align: center
      line-height: 6vw
@media screen and ( max-width: 480px )
  .iconholder
    flex-direction: column
    h3
      font-size: 4.6vw !important
    .adaptive_box
      width: 100% !important
      .design_block
        width: 100% !important
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