<template>
  <div class="author">
    <div class="image">
      <img :src="image" :alt="name" />
    </div>
    <div class="info">
      <p v-text="name"></p>
      <p v-text="title"></p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      image: String,
      name: String,
      title: String
    }
  }
</script>

<style lang="sass">
  .author
    display: flex
    margin: 1.5rem 0

    .image
      margin-right: 16px

      img
        border-radius: 50px
        height: 50px
        width: 50px

    .info
      p:first-child
        font-weight: bold

      p:last-child
        color: rgba(#000, 0.32)

</style>
