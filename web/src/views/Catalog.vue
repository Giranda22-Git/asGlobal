<template>
    <div class="block" id="navCatalog">
        <div class="content">
            <div class="CatalogTitle">
                <h1>Выберите каталог</h1>
                <hr>
            </div>
            <div class="Catalog">
                <catalogItem/>
                <catalogItem class="catalogItem"
                    v-for="item in CatalogData"
                    :key="item._id"
                    :ItemData = "item"
                />
            </div>
        </div>
    </div>
</template>

<script>
import catalogItem from '@/components/catalogItem.vue'
export default {
    name: 'catalog',
    data: () => ({
        
    }),
    components: {
        catalogItem
    },
    props: {
        CatalogData: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="sass" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@320&display=swap')
    $catalogColor: lighten(#26272b, 3.25%)
    .block
        height: auto
        background-color: $catalogColor
        .content
            height: auto
            margin: 0 auto
            max-width: 80%
            .CatalogTitle
                height: 10vh
                text-align: center
                font-size: 1.5vh
                color: white
                display: flex
                flex-direction: column
                justify-content: center
                font-family: 'Roboto Slab', serif
                padding-top: 3vh
                hr
                    width: 100%
            .Catalog
                display: grid
                grid-template-columns: 1fr 1fr 1fr
                & *
                    height: 30vh
</style>