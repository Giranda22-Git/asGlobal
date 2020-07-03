<template>
    <div class="block">
        <div class="content">
            <div class="line" 
                v-for="index in (Math.floor(CatalogData.length / 3)+1)"
                :key = 'index'
            >
                <catalogItem class="catalogItem"
                    :key="CatalogData[index].id"
                    :ItemData = "CatalogData[(index * 3) - 3]"
                />
                <catalogItem class="catalogItem"
                    :key="CatalogData[index].id + 1"
                    :ItemData = "CatalogData[(index * 3) - 2]"
                />
                <catalogItem class="catalogItem"
                    :key="CatalogData[index].id + 2"
                    :ItemData = "CatalogData[(index * 3) - 1]"
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
        iteratorN: 0
    }),
    components: {
        catalogItem
    },
    props: {
        CatalogData: {
            type: Array,
            default: () => []
        },
    }
}
</script>

<style lang="sass" scoped>
    $catalogColor: lighten(#26272b, 3.25%)
    .block
        height: 70vh
        background-color: $catalogColor
    .content
        height: 100%
        margin: 0 auto
        max-width: 1280px
        height: 100%
        display: flex
        flex-direction: column
        align-items: center
        overflow: auto

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

        .line
            min-height: 50%
            display: flex
            flex-direction: row

            .catalogItem
                height: 100%
    
</style>