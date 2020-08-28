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
  </div>
</template>

<script>
import axios from 'axios'
import About from '@/views/About.vue'
import Catalog from '@/views/Catalog.vue'
import theCarousel from '@/components/theCarousel.vue'

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
    Catalog
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
</style>