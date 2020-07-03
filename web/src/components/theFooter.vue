<template>
    <div>
    <div class="pre-footer">
    <div class="iconholder">
        <div>
            <img src="img1.jpg">
            <h3>ui / ux design</h3>
        </div>
        <div>
            <img src="img1.jpg">
            <h3>web development</h3>
        </div>
        <div>
            <img src="img1.jpg">
            <h3>app / mobile</h3>
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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.9766212365!2d76.95019401534026!3d43.25191177913711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836eed571604b7%3A0x246629b09901c308!2z0YPQu9C40YbQsCDQmtCw0YDQsNGB0LDQuSDQkdCw0YLRi9GA0LAsINCQ0LvQvNCw0YLRiyAwNTAwMDA!5e0!3m2!1sru!2skz!4v1593599792589!5m2!1sru!2skz" width="100%" height="100%" frameborder="0" style="border: 1px solid black; border-radius: 20px;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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
          <a href="#">ТOОИПО "phonktriplesixsexsoldoutmorgenshtien13373221488hip-hopstylelifeanalpenitrationfixcummed"</a>.
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
  -webkit-box-sizing: border-box

body
  margin: 0px

footer
  background-color: #26272b
  padding: 20px 0 20px
  font-size: 15px
  line-height: 24px
  color: #737373
  font-family: Arial,"Helvetica Neue",Helvetica,sans-serif

  .container
    margin-right: -15px
    margin-left: -15px
    display: flex
    flex-direction: row
    justify-content: space-around
    line-height: 3vh

    .item1
      width: 50%
      padding-left: 20px
      padding-right: 20px
      max-width: 500px
      max-height: 500px

    h6
      color: #fff
      font-size: 16px
      text-transform: uppercase
      margin-top: 5px
      letter-spacing: 2px

    ul
      margin: 0px
      padding: 0px

    li
      text-decoration: none
      list-style: none
      padding-bottom: 10px

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
      padding-left: 20px
      padding-right: 20px
      max-width: 500px
      max-height: 500px

    .item3
      width: 25%
      padding-left: 20px
      padding-right: 20px
      max-width: 500px
      max-height: 500px

      a
        color: #737373

  hr
    border-top-color: #bbb
    opacity: 0.5
    margin-top: 20px
    margin-bottom: 20px
    border: 0
    border-top: 1px solid #eee
    height: 0
    -webkit-box-sizing: content-box
    -moz-box-sizing: content-box
    box-sizing: content-box

  .copyright-text
    text-align: center

    a
      color: #737373

.pre-footer
  position: relative
  width: 100%
  background-color: #26272b
  color: #737373

  hr
    border-top-color: #bbb
    opacity: 0.5
    border: 0
    border-top: 1px solid #eee
    height: 0
    -webkit-box-sizing: content-box
    -moz-box-sizing: content-box
    box-sizing: content-box

  .iconholder
    display: grid
    grid-template-columns: auto auto auto
    grid-gap: 50px
    background-color: transparent
    text-align: center
    margin-left: 18.53%
    margin-right: 18.53%

    img
      width: 150px
      height: 150px

    h3
      color: #bbb
</style>