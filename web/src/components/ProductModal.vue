 <template>
    <transition name="modal-fade">
        <div class="wrapper">
            <div class="head">
                <button @click="close" id="close">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>
                </button>
            </div>
            <div class="contentWrapper">
                <transition name="modal-image">
                <div class="leftContentWrapper"
                    :style="{'background': 'url(' + require('../assets/' + SelectedProduct.Colors[currentColor].imageName) + ') center no-repeat', 'background-size': 'cover', 'width' : '30vw'}"
                ></div>
                </transition>
                <div class="rightContentWrapper">
                    <h1 class="productName">
                        {{ SelectedProduct.name }}
                    </h1>
                    <h4 class="productDescription">
                        {{ SelectedProduct.description }}
                    </h4>
                </div>
            </div>
            <div class="bottom_block">
                <div class="LeftBottomBlock">
                    <div class="colorPanel">
                        <ColorItem class="colorItem"
                          v-for="(item, index) in SelectedProduct.Colors"
                          :key="item.Code"
                          :Color="item"
                          :index="index"
                          @switchIndex="switchColor"
                        />
                    </div>
                </div>
                <div class="RightBottomBlock">
                    <div class="string" 
                      v-for="item in SelectedProduct.default"
                      :key="item.name"
                      >
                      <div class="first_column" v-html="item.name"></div>
                      <div class="second_column" v-html="item.result"></div>
                    </div>
                    <div class="string"
                      v-for="item in SelectedProduct.Colors[currentColor].table"
                      :key="item.name"
                      >
                      <div class="first_column" v-html="item.name"></div>
                      <div class="second_column" v-html="item.result"></div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import ColorItem from '@/components/ColorItem.vue'
export default {
    name: 'productModal',
    props: {
      SelectedProduct: {
        type: Object,
        default: () => {}
      },
      trigger: {
        type: Boolean,
        default: false
      }
    },
    data: function() {
      return {
        currentColor: 0
      }
    },
    watch: {
      trigger: function(value) {
        this.currentColor = 0
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      switchColor(index) {
        this.currentColor = index
      }
    },
    components:{
        ColorItem
    }
}
</script>

<style lang="sass" scoped>
.modal-fade-enter,
.modal-fade-leave-active 
  opacity: 0

.modal-fade-enter-active,
.modal-fade-leave-active 
  transition: opacity .5s ease

.modal-image-enter-active,
.modal-image-leave-active 
  transition: background .5s ease
::-webkit-scrollbar 
  width: 3px 
  height: 3px
::-webkit-scrollbar-button 
  background-color: #666
::-webkit-scrollbar-track
  background-color: #999
::-webkit-scrollbar-track-piece 
  background-color: #ffffff
::-webkit-scrollbar-thumb 
  height: 50px
  background-color: #666
  border-radius: 3px
::-webkit-scrollbar-corner 
  background-color: #999
::-webkit-resizer 
  background-color: #666
.head
    height: 6%
    display: flex
    justify-content: flex-end
    #close
        background-color: transparent !important
        border: none
        outline: none
        svg
            font-size: 3.5vh
            cursor: pointer
            color: white
@font-face
  font-family: AGBookProLigExt
  src: url(../assets/AGBookProLigExt.otf)
.productName
  font-family: AGBookProLigExt
  font-weight: light
  letter-spacing: 0.25em
.productDescription
  width: 80% !important
  min-height: 50%
  font-size: 1.9vh
  font-family: AGBookProLigExt
  font-weight: light

.wrapper
    width: 70vw
    height: 65vh
    box-shadow: 0 0 38px 6px darken(grey , 5%)
    background-color: #26272b
    z-index: 100

    .contentWrapper
        display: flex
        justify-content: space-between
        height: 40vh
        & *
            width: 50%
        .leftContentWrapper
            margin: 0 auto
        .rightContentWrapper
            display: flex
            flex-direction: column
            justify-content: space-evenly
            align-items: center
            text-align: center
            h1

                width: 100%
                font-size: 4vh
            h4
                max-height: 60%
                overflow: auto
                width: 100%
                margin: 0
    .bottom_block
        height: 20vh
        width: 100%
        display: flex
        align-items: center
        justify-content: center
        .LeftBottomBlock
            width: 50%
            height: 100%
            display: flex
            justify-content: center
            align-items: center
            .colorPanel
                background-color: lighten(#26272b, 4%)
                width: 30vw
                display: grid
                grid-template-columns: 1fr 1fr 1fr 1fr
                height: 82%
                overflow: auto
                grid-template-rows: 1fr
                grid-gap: 0.2vw
                &::-webkit-scrollbar 
                    width: 3px 
                    height: 3px
                &::-webkit-scrollbar-button 
                    background-color: #666
                &::-webkit-scrollbar-track
                    background-color: #999
                &::-webkit-scrollbar-track-piece 
                    background-color: #ffffff
                &::-webkit-scrollbar-thumb 
                    height: 50px
                    background-color: #666
                    border-radius: 3px
                &::-webkit-scrollbar-corner 
                    background-color: #999
                &::-webkit-resizer 
                    background-color: #666
        .RightBottomBlock
            width: 50%
            height: 80%
            display: flex
            justify-content: space-evenly
            align-items: center
            flex-direction: column
            .string
                display: flex
                width: 100%
                justify-content: space-around
                &:nth-child(2n)
                    background-color: darken(silver, 30%)
                &:nth-child(2n+1)
                    background-color: lighten(#26272b, 5%)
                & *
                    width: 50%
                    text-align: left
                    padding: 1%
                &:last-child .first_column
                    line-height: 210%
                    
@media screen and ( max-width: 500px )
  h1
    font-size: 5vw
    & *
        border: 1px solid red
  svg
    font-size: 7vw !important
  .wrapper
    height: 90vh !important
    .contentWrapper
      flex-direction: column
      justify-content: flex-start
      height: 60%
      & *
        width: 100%
      .leftContentWrapper
        height: 30%
        width: 100% !important
        background-size: cover !important
      .rightContentWrapper
        height: 70%
        justify-content: flex-start
        h1
          margin-top: 3%
          border-bottom: 1px solid silver
          height: 17%
          font-size: 7.3vw
        h4
          margin-top: 5%
          font-size: 4.4vw
          text-align: justify-all
          width: 90%
          height: 80% !important
    .bottom_block
      height: 34%
      flex-direction: column
      & *
        width: 100% !important
      .LeftBottomBlock
        height: 15vh !important
        .colorPanel
          grid-template-columns: 1fr 1fr !important
          height: 90% !important
      .RightBottomBlock
        height: 43% !important
      

</style>