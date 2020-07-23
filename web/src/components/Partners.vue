<template>
  <div class="wrapper">
    <div class="topContent"
      :style="{'background': 'url(' + require('../assets/' + Partner.imageName) + ') center no-repeat', 'background-size': 'cover'}"
    >
    </div>
    <div class="bottomContent">
      {{ Partner.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Partners",
  data: () => ({

  }),
  props: {
    Partner: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
    background-color: #26272b
    .topContent
      width: 90%
      height: 60%
    .bottomContent
      height: 30%
      width: 100%
      text-align: center
</style>