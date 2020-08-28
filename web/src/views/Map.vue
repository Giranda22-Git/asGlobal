<template>
    <div class="map_block"  id="navContacts">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d363.270943661805!2d76.90215321631406!3d43.24791018155828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369ba713887b9%3A0x87c1984b3e69a37d!2z0KLQtdGF0L3QvtC70Y7QutGBINCa0L7QvNC_0LvQtdC60YIg0KLRgNC10LnQtA!5e0!3m2!1sru!2skz!4v1597727400491!5m2!1sru!2skz" width="80%" height="100%" frameborder="0" class="map" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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