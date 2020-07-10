<template>
    <div class="block" id="navCatalog">
        <div class="content">
            <catalogItem class="catalogItem"
                v-for="item in CatalogData"
                :key="item.id"
                :ItemData = "item"
            />
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
    $catalogColor: lighten(#26272b, 3.25%)
    .block
        height: auto
        background-color: $catalogColor
    .content
        height: auto
        margin: 0 auto
        max-width: 80%
        display: grid
        grid-template-columns: 1fr 1fr 1fr
        & *
            border: .3vw solid transparent
            height: 30vh
</style>