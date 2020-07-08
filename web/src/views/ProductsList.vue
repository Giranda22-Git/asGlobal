<template>
        <div class="content">
            Id: {{ $route.params.id }}
            <div class="line"
                v-for="index in (Math.floor(ProductListData.length / 4))"
                :key = 'index'
            >
                    <ProductsListItem
                    :key="ProductListData[index].id"
                    :ItemData = "ProductListData[(index * 4) - 4]"
                    @viewDetails = "viewDetails"
                    />
                    <ProductsListItem
                    :key="ProductListData[index].id + 1"
                    :ItemData = "ProductListData[(index * 4) - 3]"
                    @viewDetails = "viewDetails"
                    />
                    <ProductsListItem
                    :key="ProductListData[index].id + 2"
                    :ItemData = "ProductListData[(index * 4) - 2]"
                    @viewDetails = "viewDetails"
                    />
                    <ProductsListItem
                    :key="ProductListData[index].id + 3"
                    :ItemData = "ProductListData[(index * 4) - 1]"
                    @viewDetails = "viewDetails"
                    />
            </div>
            <ProductModal class="modal"
                v-show="isModalVisible"
                @close="closeModal"
                :SelectedProduct="SelectedProduct"
            />
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
            { id: 0, Name: 'productName0', img: 'productimage.jpg', Description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo hic aliquam commodi? Architecto repellendus eaque labore provident quibusdam hic pariatur. At doloremque, autem sapiente facilis aperiam optio beatae magnam maxime perspiciatis aliquid. Numquam vero dolores corrupti pariatur! Saepe iusto eveniet explicabo, qui fugit reprehenderit. Eligendi veniam veritatis sint eos ducimus.', startedPrice:"100" },
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
    // * 
    //     border: 1px solid red
    
        
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