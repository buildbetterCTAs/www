<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-left">
        <nuxt-link to="/" class="nav-item is-brand">
          <img src="~/assets/img/logo.svg" alt="Responsive CTA Builder">
        </nuxt-link>
      </div>
      <div class="nav-right">
        <nuxt-link to="/#features" class="nav-item is-hidden-mobile">Features</nuxt-link>
        <!-- <nuxt-link to="docs" class="nav-item is-hidden-mobile">Documentation</nuxt-link> -->
        <nuxt-link to="blog" class="nav-item is-hidden-mobile">Blog</nuxt-link>
        <div class="nav-item is-hidden-mobile">
          <div class="field is-grouped">
            <p class="control">
              <a href="https://app.responsivectabuilder.com" class="button is-primary">Login</a>
            </p>
          </div>
        </div>
      </div>
      <span class="nav-toggle" @click="toggleNav()" :class="{ 'is-active': nav }">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu is-hidden-tablet" :class="{ 'is-active': nav }">
        <nuxt-link to="/" class="nav-item">Home</nuxt-link>
        <a href="/#features" class="nav-item">Features</a>
        <!-- <nuxt-link to="docs" class="nav-item">Documentation</nuxt-link> -->
        <nuxt-link to="blog" class="nav-item">Blog</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'www-header',
    data: function () {
      return {
        nav: false
      }
    },
    methods: {
      toggleNav: function () {
        if (this.nav !== true) {
          this.nav = true
        } else {
          this.nav = false
        }
      }
    }
  }
</script>
