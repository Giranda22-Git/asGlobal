<template>
    <div class="block">
        <div class="content">
            <ProductsListItem
            v-for="index in ProductListData"
            :key="index._id"
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
import axios from 'axios'
import ProductsListItem from '@/components/ProductsListItem.vue'
import ProductModal from '@/components/ProductModal.vue'


export default {
    name: 'ProductsList',
    data: () => ({
        isModalVisible: false,
        SelectedProduct: null,

        ProductListData: null
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
    },
    mounted() {
        axios.get('http://localhost:3000/Catalogs/' + this.$route.params.id)
        .then( response => {this.ProductListData = response.data.products; console.log(response.data.products)} )
        .catch(function (error) {
            console.log(error);
        })
    }
}
</script>


<style lang="sass" scoped>
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