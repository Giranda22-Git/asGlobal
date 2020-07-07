<template>
  <div>
    <div class="pre-footer">
    <div class="iconholder">
        <div>
            <div class="companyes"></div>
            <h3>ui / ux design</h3>
        </div>
        <div>
            <div class="companyes"></div>
            <h3>web development</h3>
        </div>
        <div>
            <div class="companyes"></div>
            <h3>app / mobile</h3>
        </div>
        <div>
            <div class="companyes"></div>
            <h3>comp / company</h3>
        </div>
    </div>
    </div>
  <footer>
      <div class="container">
          <div class="item1">
              <h6>О нас</h6>
              <p>Scanfcode.com CODE WANTS TO BE SIMPLE is an initiative to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>
          <div class="item2">
              <h6>Карта</h6>
              <div class="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.9766212365!2d76.95019401534026!3d43.25191177913711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836eed571604b7%3A0x246629b09901c308!2z0YPQu9C40YbQsCDQmtCw0YDQsNGB0LDQuSDQkdCw0YLRi9GA0LAsINCQ0LvQvNCw0YLRiyAwNTAwMDA!5e0!3m2!1sru!2skz!4v1593599792589!5m2!1sru!2skz" width="100%" height="100%" frameborder="0" class="map" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              </div>
          </div>
          <div class="item3"> 
              <h6>Контакты</h6>
              <ul class="cont">
                  <li><a href="tel:">8 (000) XXX XXX </a></li> 
                  <li><a href="mailto:">wdwdw@ffwfw.com</a></li>
                  <li><a>Lorem ipsum dolor sit.</a></li>
              </ul> 
          </div>
      </div>
      <hr>
      <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
          <a href="#">ТOОИПО "phonktriplesixsexsoldoutmorgenshtien13373221488hip"</a>.
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
  padding: 3.2vh 0 3.2vh
  font-size: 2.4vh
  line-height: 3.84vh
  color: #737373
  font-family: Arial,"Helvetica Neue",Helvetica,sans-serif
  width: 100vw
  word-wrap: break-word
  overflow-x: hidden

  .container
    margin-right: -2.4vh
    margin-left: -2.4vh
    display: flex
    flex-direction: row
    justify-content: space-around
    line-height: 3vh

    .item1
      width: 50%
      padding-left: 3.2vh
      padding-right: 3.2vh
      max-width:  80vh
      max-height: 80vh

    h6
      color: #fff
      font-size: 2.56vh
      text-transform: uppercase
      margin-top: 0.8vh
      letter-spacing: 0.32vh

    ul
      margin: 0vh
      padding: 0vh

      li
        text-decoration: none
        list-style: none
        word-wrap: break-word
        padding-bottom: 2vh

  a
    text-decoration: underline
    color: #737373
    position: relative
    font-style: oblique

  .container a:hover
    color: #337ab7 !important

a:focus
  color: #337ab7 !important

footer
  .container
    .item2
      width: 25%
      padding-left: 3.2vh
      padding-right: 3.2vh
      max-width: 80vh
      max-height: 80vh
      .map
        width: 19vw
        height: 23vh
        border-radius: 8%

    .item3
      width: 25%
      padding-left: 3.2vh
      padding-right: 3.2vh
      max-width: 80vh
      max-height: 80vh

      a
        color: #737373

  hr
    border-top-color: #bbb
    opacity: 0.5
    margin-top: 3.2vh
    margin-bottom: 3.2vh
    border: 0
    border-top: 0.16vh solid #eee
    height: 0
    -webkit-box-sizing: content-box
    -moz-box-sizing: content-box
    box-sizing: content-box

  .copyright-text
    text-align: center

    a
      color: #737373

.pre-footer
  background-color: #26272b
  color: #737373
  height: 38vh
  display: flex
  flex-direction: column
  justify-content: center

  .iconholder
    display: flex
    justify-content: space-around
    background-color: transparent
    text-align: center

    .companyes
      width: 15vw
      height: 20vh
      background: url(../assets/carousel1.jpg) center no-repeat
      background-size: cover
    h3
      color: #bbb
      font-size: 3vh
    
</style>