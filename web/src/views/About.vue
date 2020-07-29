<template>
    <div class = "block" id="navAbout">
        <div class="background">
            <AboutItem
                @viewModal = "viewModal"
            />
            <AboutModal
                v-show="isModalVisible"
                @close="close"
            />
        </div>
    </div>
</template>

<script>
import AboutItem from '@/components/AboutItem.vue'
import AboutModal from '@/components/AboutModal.vue'
export default {
    name: "About",
    data: () => ({
        isModalVisible: false
    }),
    components:{
        AboutItem,
        AboutModal
    },
    methods: {
        close() {
            this.isModalVisible = false
        },
        viewModal() {
            this.isModalVisible = true
        }
    }
}
</script>

<style lang="sass" scoped>
    .block
        width: 100vw
        height: 100vh
        color: black
        font-family: Arial,"Helvetica Neue",Helvetica,sans-serif
        background: url(../assets/cover1.jpg) center no-repeat
        background-size: cover
        .background
            background: rgba(0,0,0 ,0.5 )
            height: 100%
            display: flex
            justify-content: center
</style>