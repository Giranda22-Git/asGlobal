<template>
  <div class="wrapper">
      <div class="CarouselContainer">
          <div class="CarouselTracker">
              <PartnerItem class="theCarouselItem"
                  v-for="item in PartnerData"
                  :key="item.id"
                  :Partner="item"
                  :style="{ 'transform': 'translateX(-' + 100 * currentSlideIndex + '%)','transition': 'all ease 1s'}"
              />
          </div>
      </div>
  </div>
  
</template>

<script>
import PartnerItem from '@/components/PartnerItem.vue'
export default {
  name: "Partners",
  data: () => ({
  }),
  props: {
    PartnerData: {
      type: Array,
      default: []
    },
    currentSlideIndex: {
      type: Number,
      default: 0
    }
  },
  components: {
    PartnerItem
  }
}
</script>

<style lang="sass" scoped>
    $itemCount: 4
    .wrapper
      width: 100%
      .CarouselContainer
        height: 100%
        width: 100%
        overflow: hidden
        margin: 0 auto
        position: relative
            
        .CarouselTracker
          display: flex
          height: 100%
          .theCarouselItem
            min-width: 100% / $itemCount
</style>