<template>
    <div class="map_block"  id="navContacts">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.1645861894635!2d76.89922581486526!3d43.24797228655832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883694736ceb607%3A0x435550e609d3c253!2z0YPQu9C40YbQsCDQmtCw0YDQsNGB0LDQuSDQkdCw0YLRi9GA0LAgMTc4LCDQkNC70LzQsNGC0YsgMDUwMDAw!5e0!3m2!1sru!2skz!4v1599305409151!5m2!1sru!2skz" width="80%" height="100%" frameborder="0" class="map" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
</template>

<script>
export default {
    name: 'Map'
}
</script>

<style lang="sass" scoped>
.map_block
    height: 55vh
    display: flex
    justify-content: center
@media screen and ( max-width: 480px )
    .map_block
        height: 30vh
</style>