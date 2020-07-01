<template>
    <div class="block">
        <div class="content">
            <div class="line">
                <catalogItem class="catalogItem" />
                <catalogItem class="catalogItem" />
                <catalogItem class="catalogItem" />
            </div>
            <div class="line">
                <catalogItem class="catalogItem" />
                <catalogItem class="catalogItem" />
                <catalogItem class="catalogItem" />
            </div>
        </div>
    </div>
</template>

<script>
import catalogItem from '@/components/catalogItem.vue'
export default {
    name: 'catalog',
    components: {
        catalogItem
    }
}
</script>

<style lang="sass" scoped>
    *
        border: 1px solid red
    .block
        height: 70vh
    .content
        margin: 0 auto
        max-width: 1280px
        height: 100%
        display: grid
        grid-template-columns: 1fr 1fr 1fr

        .line
            grid-template-rows: 1fr 1fr
    
</style>