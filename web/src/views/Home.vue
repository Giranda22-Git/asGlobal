<template>
  <div class="home">
    <About/>
    <theCarousel
      :carouselData = "sliderItems"
      :interval = "3000"
    />
    <Catalog
      :CatalogData = "catalogData"
    />
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
        { id: 0, name: 'productName0', img: 'productimage.jpg', text: '1' },
        { id: 1, name: 'productName1', img: 'productimage.jpg', text: '2' },
        { id: 2, name: 'productName2', img: 'productimage.jpg', text: '3' },
        { id: 3, name: 'productName3', img: 'productimage.jpg', text: '4' },
        { id: 4, name: 'productName4', img: 'productimage.jpg', text: '5' },
        { id: 5, name: 'productName5', img: 'productimage.jpg', text: '6' },
        { id: 6, name: 'productName6', img: 'productimage.jpg', text: '7' },
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
