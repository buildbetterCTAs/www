<template>
  <div>
    <!-- HEADER -->
    <header>
      <app-header></app-header>
    </header>
    <!-- MAIN -->
    <main>
      <banner>
        <p slot="title" class="title">Blog</p>
      </banner>
      <div class="container">
        <section class="hero">
          <div class="hero-body has-text-centered">
            <h1 class="title is-spaced is-2 dodgerText">The Build Better CTAs Blog</h1>
          </div>
        </section>
        <div class="columns">
          <div class="column is-half">
            <div class="box helpBox">
              <h1 class="title is-5 is-spaced">Why We Build Responsive CTA Builder</h1>
              <p class="subtitle is-6">About a year ago, we made a discovery. The calls-to-action (CTAs) on our company’s blog weren’t performing as well as they could. So we decided to fix that.</p>
              <router-link to="/blog/introduction">Read</router-link>
            </div>
          </div>
          <!-- <div class="column">
            <div class="box helpBox">
              <h1 class="title is-5 is-spaced">Blog Post</h1>
              <p class="subtitle is-6">Blog Post Meta</p>
              <router-link to="working-with-hubspot">Read</router-link>
            </div>
          </div> -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import appHeader from '~/components/header'
  import banner from '~/components/banner'

  export default {
    name: 'blog',
    meta: {
      title: 'Blog'
    },
    data: function () {
      return {}
    },
    components: {
      'app-header': appHeader,
      banner
    }
  }
</script>
