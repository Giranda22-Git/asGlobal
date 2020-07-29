<template>
    <div class="wrapper">
        <div class="CarouselContainer">
            <div class="CarouselTracker">
                <theCarouselItem class="theCarouselItem"
                    v-for="item in carouselData"
                    :key="item.id"
                    :item_data="item"
                    :style="{ 'transform': 'translateX(-' + 100 * currentSlideIndex + '%)','transition': 'all ease 1s'}"
                />
            </div>
            <button class="prevSlide" @click="prevSlide">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
            </svg>
            </button>
            <button class="nextSlide" @click="nextSlide">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import theCarouselItem from '@/components/theCarouselItem.vue'
export default {
    name: 'Carousel',
    data: () => ({
        currentSlideIndex: 0
    }),
    components: {
        theCarouselItem
    },
    props: {
        carouselData: {
            type: Array,
            default: () => []
        },
        interval: {
            type: Number,
            default: 0
        },
    },
    mounted() {
        if(this.interval > 0)
        {
            let vm = this
            setInterval(function() {
                vm.nextSlide()
            }, vm.interval)
        }
    },
    methods: {
        nextSlide() {
            if (this.currentSlideIndex < this.carouselData.length - 1)
                this.currentSlideIndex++
            else this.currentSlideIndex = 0
        },
        prevSlide() {
            if (this.currentSlideIndex > 0)
                this.currentSlideIndex--
        }
    }
}
</script>

<style lang="sass" scoped>
    $itemCount: 1
    .wrapper
        width: 100vw
        .CarouselContainer
            height: 100%
            width: 100%
            overflow: hidden
            margin: 0 auto
            position: relative

            .nextSlide
                position: absolute
                right: 0
                top: 0
                height: 100%
                width: 5%
                opacity: 0.7
                background: linear-gradient(to right, rgba(255, 255, 255, 0.0), rgba(50, 50, 50, 0.8))
                outline: none
                border: none
                font-size: 4vh
                color: white

            .prevSlide
                position: absolute
                left: 0
                top: 0
                height: 100%
                width: 5%
                opacity: 0.7
                background: linear-gradient(to left, rgba(255, 255, 255, 0.0), rgba(50, 50, 50, 0.8))
                outline: none
                border: none
                font-size: 4vh
                color: white

            .prevSlide:hover, .nextSlide:hover
                opacity: 1
            
            .CarouselTracker
                display: flex
                .theCarouselItem
                    min-width: 100% / $itemCount
</style>