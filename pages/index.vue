<template>
  <div>
    <!-- HEADER -->
    <header>
      <!-- INTRO SECTION -->
      <section class="hero">
        <div class="hero-head">
          <app-header/>
          <div class="container hero-text">
            <div class="has-text-centered">
              <h1 class="title is-spaced is-2">Build better calls-to-action</h1>
              <h2 class="subtitle">Responsive CTA Builder helps marketers build responsive calls-to-action which will convert more traffic into visitors than your current bitmap image call-to-action. Give it a try, for free.</h2>
            </div>
          </div>
        </div>
        <div class="hero-body cta">
          <div class="container">
            <cta/>
          </div>
        </div>
        <div class="hero-footer has-text-centered">
          <div style="margin-bottom: 100px;">
            <a rel="noopener" href="https://app.responsivectabuilder.com" class="button is-danger is-medium">Try Building Your Own</a>
          </div>
        </div>
      </section>
    </header>
    <!-- MAIN -->
    <main>
      <!-- SUPPORTING SECTION -->
      <section class="hero is-primary is-medium is-bold">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h3 class="title">Why should you use a <strong>Responsive CTA</strong> over an Image CTA?</h3>
          </div>
        </div>
      </section>
      <!-- FEATURES SECTION -->
      <section id="features">
        <div class="features features-lined">
          <!-- ONE -->
          <div class="feature-block block1">
            <div class="container">
              <div class="columns">
                <div class="column">
                  <img src="~/assets/img/devices.svg">
                </div>
                <div class="column">
                  <h4 class="title is-4"><strong>Works on all devices</strong></h4>
                  <p>Responsive CTAs make your call-to-action reader friendly on all devices: computers, tablets and mobile phones.</p>
                </div>
              </div>
            </div>
          </div>
          <!-- TWO -->
          <div class="feature-block block2">
            <div class="container">
              <div class="columns columns-reverse">
                <div class="column">
                  <img src="~/assets/img/clicks.svg">
                </div>
                <div class="column">
                  <h4 class="title is-4"><strong>Proven better performance</strong></h4>
                  <p>Responsive CTAs are proven to perform better than image CTAs. We’ve seen <strong>2.5x more clicks</strong> on Responsive CTAs than Image CTAs.</p>
                </div>
              </div>
            </div>
          </div>
          <!-- THREE -->
          <div class="feature-block block3">
            <div class="container">
              <div class="columns">
                <div class="column">
                  <img src="~/assets/img/dashboard.svg">
                </div>
                <div class="column">
                  <h4 class="title is-4"><strong>Works with HubSpot</strong></h4>
                  <p>You can link your HubSpot CTA tracking with our Responsive CTA Builder. Build beautiful Responsive CTAs but don’t lose any tracking or reporting capabilities.</p>
                </div>
              </div>
            </div>
          </div>
          <!-- FOUR -->
          <div class="feature-block block4">
            <div class="container">
              <div class="columns columns-reverse">
                <div class="column">
                  <img src="~/assets/img/keyword.svg">
                </div>
                <div class="column">
                  <h4 class="title is-4"><strong>Enhanced SEO benefits</strong></h4>
                  <p>Forget trying to fit your long tail keywords into your alt text for an image CTA. With Responsive CTAs just add your keywords into the header, secondary text or button text.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- CTA -->
        <div class="features">
          <div class="feature-block block2">
            <div class="container">
              <div class="rcta_embed" style="border-radius: 4px; background-color: #1385E8;">
                <div class="rcta_headline" style="color: #ffffff;">Ready to make a beautiful, responsive CTA?</div>
                <div class="rcta_description" style="color: #ffffff;">Yes, it can look as good as this call-to-action AND match your company's branding guidelines.</div>
                <a class="rcta_button" href="https://app.responsivectabuilder.com" target="_blank" style="background-color: #ff3860; color: #ffffff;">CREATE YOUR OWN CTA</a>
              </div>
            </div>
          </div>
        </div>
        <!-- /CTA -->
      </section>
    </main>
  </div>
</template>

<script>
  import cta from '~/components/cta'
  import appHeader from '~/components/header'

  export default {
    components: {
      cta,
      'app-header': appHeader
    }
  }
</script>

<style lang="sass">
  @import "~assets/css/brand"

  .hero-body.cta
    @media only screen and (min-width: 1024px)
      min-height: 600px
      padding: 6rem 1.5rem

  .features
    position: relative

    &-lined
      @media only screen and (min-width: 1024px)
        &:before
          content: ''
          width: 2px

          background-image: linear-gradient($dodger 33%, rgba(white, 0) 0%)
          background-position: right
          background-size: 2px 24px
          background-repeat: repeat-y

          position: absolute
          top: 40px
          bottom: -60px
          z-index: 2
          right: 50%
          transform: translateX(50%)

    .feature-block
      padding: 80px 0

      &.block1
        background-color: white
      &.block2
        background-color: darken(white, 2.5%)
      &.block3
        background-color: darken(white, 5%)
      &.block4
        background-color: darken(white, 7.5%)

    .columns
      align-items: center

      @media only screen and (min-width: 1024px)
        $columnPadding: 2.5rem

        .column
          &:first-child
            padding-right: $columnPadding
          &:last-child
            padding-left: $columnPadding

        &-reverse
          flex-direction: row-reverse

          .column
            &:first-child
              padding-left: $columnPadding
            &:last-child
              padding-right: $columnPadding

</style>
