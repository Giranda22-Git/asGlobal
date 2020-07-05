<template>
        <div class="content">
            <div class="line" 
                v-for="index in (Math.floor(ProductListData.length / 4)+1)"
                :key = 'index'
            >
                    <ProductsListItem
                    :key="ProductListData[index].id"
                    :ItemData = "ProductListData[(index * 4) - 4]"
                    />
                    <ProductsListItem
                    :key="ProductListData[index].id + 1"
                    :ItemData = "ProductListData[(index * 4) - 3]"
                    />
                    <ProductsListItem
                    :key="ProductListData[index].id + 2"
                    :ItemData = "ProductListData[(index * 4) - 2]"
                    />
                    <ProductsListItem
                    :key="ProductListData[index].id + 3"
                    :ItemData = "ProductListData[(index * 4) - 1]"
                    />
            </div>
        </div>
</template>

<script>
import ProductsListItem from '../components/ProductsListItem.vue'
export default {
    name: 'ProductsList1',
    data: () => ({
      ProductListData: [
        { id: 0, name: 'productName0', Image: 'productimage.jpg', text: '1' },
        { id: 1, name: 'productName1', Image: 'productimage.jpg', text: '2' },
        { id: 2, name: 'productName2', Image: 'productimage.jpg', text: '3' },
        { id: 3, name: 'productName3', Image: 'productimage.jpg', text: '4' },
        { id: 4, name: 'productName4', Image: 'productimage.jpg', text: '5' },
        { id: 5, name: 'productName5', Image: 'productimage.jpg', text: '6' },
        { id: 6, name: 'productName6', Image: 'productimage.jpg', text: '7' },
        { id: 7, name: 'productName7', Image: 'productimage.jpg', text: '8' }
      ]
    }),
    components:{
        ProductsListItem
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
            

</style>