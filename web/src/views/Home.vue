<template>
  <div class="home">
    <theCarousel
      :carouselData = "sliderItems"
      :interval = "3000"
    />
  </div>
</template>

<script>

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
      ]
    }
  },
  components: {
    theCarousel
  }
}
</script>
