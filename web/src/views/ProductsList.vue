<template>
    <div class="block">
        <div class="content" v-if="this.ProductListData != null">
            Id: {{ $route.params.id }}
            <div class="line" 
                v-for="index in (Math.floor(ProductListData.length / 3))"
                :key = 'index'
            >
                    <ProductsListItem
                    :key="ProductListData[index].id"
                    :ItemData = "ProductListData[(index * 3) - 3]"
                    @viewDetails = "viewDetails"
                    />
                    <ProductsListItem
                    :key="ProductListData[index].id + 1"
                    :ItemData = "ProductListData[(index * 3) - 2]"
                    @viewDetails = "viewDetails"
                    />
                    <ProductsListItem
                    :key="ProductListData[index].id + 2"
                    :ItemData = "ProductListData[(index * 3) - 1]"
                    @viewDetails = "viewDetails"
                    />
            </div>{{ ProductListData }}
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

<style lang="sass" scroped>
    // * 
    //     border: 1px solid red
    $Color: lighten(#26272b, 6.25%)
    .block
        height: 100%
        background-color: $Color
        color: white
    .content
        margin: 0 auto
        height: 100%
        width: 80%
        display: flex
        flex-direction: column
        justify-content: space-around
        .line
            height: 80vh
            display: flex
            flex-direction: row
            justify-content: space-around
            &:first-child
                margin-top: 7vh
        .modal
            position: fixed
            left: 15%
            top: 20%
            
        @media (max-width: 800px)
            .line
                flex-direction: column !important
                height: 300vh
                & *
                    width: 90% !important
                    margin: 0 auto
    @media (min-width: 800px) and (max-width: 1280px)
        .content
            width: 100% !important
        .line
            height: 55vh !important
            & *
                height: 50vh !important
</style>