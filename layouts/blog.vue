<template>
  <div>
    <!-- HEADER -->
    <header>
      <app-header/>
    </header>

    <!-- MAIN -->
    <main>
      <banner>
        <p slot="title" class="title"><nuxt-link to="/blog">The Build Better CTAs Blog</nuxt-link></p>
      </banner>
      <nuxt class="blog"/>
    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <app-footer/>
    </footer>
  </div>
</template>

<script>
  import banner from '~/components/banner'
  import appHeader from '~/components/header'
  import appFooter from '~/components/footer'

  export default {
    components: {
      banner,
      'app-header': appHeader,
      'app-footer': appFooter
    },
    head () {
      return {
        title: 'The Build Better CTAs Blog'
      }
    }
  }
</script>

<style lang="sass">
  .blog
    section
      padding: 0 1.5rem
      margin-top: 40px

    .content
      max-width: 800px
      margin: 0 auto

      img
        width: 100%
        display: block
        margin: 40px auto
        box-shadow: 0 4px 6px rgba(50, 50, 93, .11),  0 1px 3px rgba(0, 0, 0, .08)

      .rcta_image img
        margin: initial
        box-shadow: initial

</style>
