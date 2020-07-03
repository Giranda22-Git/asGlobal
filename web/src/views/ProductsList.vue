<template>
        <div class="content">
                <ProductsListItem/>
                <ProductsListItem/>
                <ProductsListItem/>
        </div>
</template>

<script>
import ProductsListItem from '../components/ProductsListItem.vue'
export default {
    name: 'ProductsList1',
    components:{
        ProductsListItem
    }
}
</script>

<style lang="sass" scroped>
    * 
        border: 1px solid red
    .content
        margin: 0 auto
        height: 100%
        width: 80%
        display: flex
        flex-direction: row
        justify-content: space-around
</style>