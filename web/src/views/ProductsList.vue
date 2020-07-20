<template>
    <div class="block">
        <div class="content">
            <ProductsListItem
            v-for="index in ProductListData"
            :key="index.id"
            :ItemData = "index"
            @viewDetails = "viewDetails"
            />
            <ProductModal class="modal"
                v-show="isModalVisible"
                @close="closeModal"
                :SelectedProduct="SelectedProduct"
            />
        </div>
    </div>
</template>

<script>
import ProductsListItem from '@/components/ProductsListItem.vue'
import ProductModal from '@/components/ProductModal.vue'


export default {
    name: 'ProductsList1',
    data: () => ({
        isModalVisible: false,
        SelectedProduct: null,
        ProductListData: [
            { id: 0, Name: 'SportLine', img: 'sportline.jpg', Description: 'Это специально разработанный гетерогенный ПВХ напольный материал для многофункциональных спортивных и игровых залов.', startedPrice:"100" },
            { id: 1, Name: 'productName1', img: 'productimage.jpg', Description: '2', startedPrice:"100" },
            { id: 2, Name: 'productName2', img: 'productimage.jpg', Description: '3', startedPrice:"100" },
            { id: 3, Name: 'productName3', img: 'productimage.jpg', Description: '4', startedPrice:"100" },
            { id: 4, Name: 'productName4', img: 'productimage.jpg', Description: '5', startedPrice:"100" },
            { id: 5, Name: 'productName5', img: 'productimage.jpg', Description: '6', startedPrice:"100" },
            { id: 6, Name: 'productName6', img: 'productimage.jpg', Description: '7', startedPrice:"100" },
            { id: 7, Name: 'productName7', img: 'productimage.jpg', Description: '8', startedPrice:"100" }
        ]
    }),
    components:{
        ProductsListItem,
        ProductModal
    },
    methods: {
        closeModal() {
            this.isModalVisible = false;
        },
        viewDetails(product) {
            this.SelectedProduct = product
            this.isModalVisible = true;
        }
    }
}
</script>


<style lang="sass" scroped>
    $Color: lighten(#26272b, 6.25%)
    .block
        height: 100%
        background-color: $Color
        color: white
        .content
            height: auto
            max-width: 80%
            margin: 0 auto
            display: grid
            grid-template-columns: 1fr 1fr 1fr
            grid-gap: .4vw
            
            &:first-child
                margin-top: 7vh
        .modal
            position: fixed
            left: 15%
            top: 16%        
    @media (min-width: 800px) and (max-width: 1280px)
        .content
            width: 100% !important
</style>