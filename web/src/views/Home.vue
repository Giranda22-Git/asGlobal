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
      sliderItems: [
        { id: 0, name: 'img1', img: 'carousel1.jpg' },
        { id: 1, name: 'img2', img: 'carousel2.jpg' },
        { id: 2, name: 'img3', img: 'carousel3.jpg' },
        { id: 3, name: 'img4', img: 'carousel4.jpg' },
        { id: 4, name: 'img1', img: 'carousel1.jpg' },
        { id: 5, name: 'img2', img: 'carousel2.jpg' },
        { id: 6, name: 'img3', img: 'carousel3.jpg' },
        { id: 7, name: 'img4', img: 'carousel4.jpg' }
      ],
      catalogData: null
    }
  },
  mounted() {
    axios.get('http://localhost:3000/Catalogs')
    .then( response => this.catalogData = response.data )
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
    height: 55vh
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