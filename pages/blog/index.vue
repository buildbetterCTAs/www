<template>
  <div>
    <section>
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <article class="box blog-listing">
              <h1 class="title is-5">Why We Built Responsive CTA Builder</h1>
              <h2>By Daniel J. Murphy <span class="date">November 26, 2017</span></h2>
              <p>About a year ago, we made a discovery. The calls-to-action (CTAs) on our company’s blog weren’t performing as well as they could. So we decided to fix that.</p>
              <nuxt-link to="/blog/introduction">Read</nuxt-link>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    layout: 'blog',
    name: 'blog'
  }
</script>
