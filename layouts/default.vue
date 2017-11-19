<template>
  <div>
    <nuxt/>

    <!-- FOOTER -->
    <footer class="footer">
      <app-footer/>
    </footer>
  </div>
</template>

<script>
  import appFooter from '~/components/footer'

  export default {
    components: {
      'app-footer': appFooter
    }
  }
</script>
