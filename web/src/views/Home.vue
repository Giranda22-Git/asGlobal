<template>
  <div class="home">
    <About @viewAboutModal="viewAboutModal" />
    <Catalog
      :CatalogData = "catalogData"
    />
    <section class="ourWorks">
      <div class="title">
        <div>Наши работы</div>
        <hr>
      </div>
      <theCarousel
        :carouselData = "sliderItems"
        :interval = "10000"
      />
    </section>
    <section class="Map">
      <div class="Map_title">
        <div>НАШ АДРЕС:</div>
        <hr>
      </div>
      <Map/>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import About from '@/views/About.vue'
import Catalog from '@/views/Catalog.vue'
import theCarousel from '@/components/theCarousel.vue'
import Map from '@/views/Map.vue'

export default {
  name: 'Home',
  data(){
    return {
      sliderItems: new Array(),
      catalogData: new Array(),
    }
  },
  methods: {
    viewAboutModal() {
      this.$emit('viewAboutModal')
    }
  },
  mounted() {
    
    axios.get('http://localhost:3000/Catalogs')
    .then( response => this.catalogData = response.data )
    .catch(function (error) {
      console.log(error);
    })

    axios.get('http://localhost:3000/OurWorks')
    .then( response => {this.sliderItems = response.data} )
    .catch(function (error) {
      console.log(error);
    })
  },
  components: {
    theCarousel,
    About,
    Catalog,
    Map
  }
}
</script>

<style lang="sass" scoped>
  *
    box-sizing: border-box
  .ourWorks
    height: 78vh
    display: flex
    flex-direction: column
    justify-content: space-around
    background-color: lighten(#26272b, 6.25%)
    hr
      width: 100%
      height: 0vh
    .title
      margin-top: 3vh
      font-size: 4vh
      text-align: center
      color: white
  .Map
    height: 70vh
    background-color: lighten(#26272b, 6.25%)
    .Map_title
      line-height: 8vh
      font-size: 3vh
      text-align: center
      color: white
    hr
      width: 100%
      height: 0vh
  
@media screen and ( max-width: 480px )
  .Map
    height: 45vh !important
</style>