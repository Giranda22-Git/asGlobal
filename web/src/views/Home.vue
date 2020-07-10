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
      catalogData: [
        { id: 0, name: 'Catalog Name1', img: 'productimage.jpg', description: 'Catalog Name' },
        { id: 1, name: 'Catalog Name2', img: 'productimage.jpg', description: 'Catalog Name' },
        { id: 2, name: 'Catalog Name3', img: 'productimage.jpg', description: 'Catalog Name' },
        { id: 3, name: 'Catalog Name4', img: 'productimage.jpg', description: 'Catalog Name' },
        { id: 4, name: 'Catalog Name5', img: 'productimage.jpg', description: 'Catalog Name' },
        { id: 5, name: 'Catalog Name6', img: 'productimage.jpg', description: 'Catalog Name' },
        { id: 6, name: 'Catalog Name7', img: 'productimage.jpg', description: 'Catalog Name' },
        { id: 7, name: 'Catalog Name8', img: 'productimage.jpg', description: 'Catalog Name' },
        { id: 8, name: 'Catalog Name9', img: 'productimage.jpg', description: 'Catalog Name' },
        { id: 9, name: 'Catalog Name10', img: 'productimage.jpg', description: 'Catalog Name' },
        { id: 10, name: 'Catalog Name11', img: 'productimage.jpg', description: 'Catalog Name' },
        { id: 11, name: 'Catalog Name12', img: 'productimage.jpg', description: 'Catalog Name' },
        { id: 12, name: 'Catalog Name13', img: 'productimage.jpg', description: 'Catalog Name' }
      ]
    }
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