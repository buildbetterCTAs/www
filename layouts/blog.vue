<template>
  <div>
    <!-- HEADER -->
    <header>
      <app-header/>
    </header>

    <!-- MAIN -->
    <main>
      <banner>
        <h1 slot="title" class="title"><nuxt-link to="/blog">The Build Better CTAs Blog</nuxt-link></h1>
      </banner>
      <nuxt class="blog"/>
    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <app-footer/>
    </footer>

    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5a1970c73bd3a9d9" async></script>
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
  .date
    color: rgba(#000, .32)
    margin-bottom: .75rem

  .blog-listing
    .title
      margin-bottom: .5rem

    h2,
    p
      margin-bottom: .75rem

  .blog
    section
      padding: 0 1.5rem
      margin-top: 40px

    .post.container
      max-width: 800px

    .content
      img
        width: 100%
        display: block
        margin: 40px auto
        box-shadow: 0 4px 6px rgba(50, 50, 93, .11),  0 1px 3px rgba(0, 0, 0, .08)

      .rcta_image img
        margin: initial
        box-shadow: initial

</style>
