<template>
  <div class="home">
    <About/>
    <Catalog
      :CatalogData = "catalogData"
    />
    <section class="ourWorks">
      <div class="title">Наши работы</div>
        <hr>
        <theCarousel
          :carouselData = "sliderItems"
          :interval = "3000"
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
      catalogData: new Array()
    }
  },
  mounted() {
    axios.get('http://localhost:3000/Catalogs')
    .then( response => this.catalogData = response.data )
    .catch(function (error) {
      console.log(error);
    })

    axios.get('http://localhost:3000/OurWorks')
    .then( response => this.sliderItems = response.data )
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

  .ourWorks
    height: 80vh
    display: flex
    flex-direction: column
    justify-content: center
    hr
      width: 100%
      height: 4vh
    .title
      font-size: 4vh
      text-align: center


</style>