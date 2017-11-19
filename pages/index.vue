<template>
  <div>
    <!-- HEADER -->
    <header>
      <!-- INTRO SECTION -->
      <section class="hero is-fullheight">
        <div class="hero-head">
          <app-header/>
          <!-- HEADLINE -->
          <div class="container hero-text">
            <div class="has-text-centered">
              <h1 class="title is-spaced is-2">Build better calls-to-action</h1>
              <h2 class="subtitle">Responsive CTA Builder helps marketers build responsive calls-to-action which will convert more traffic into visitors than your current bitmap image call-to-action. Give it a try, for free.</h2>
            </div>
          </div>
        </div>
        <div class="hero-body">
          <div class="container">
            <cta/>
          </div>
        </div>
        <div class="hero-footer has-text-centered">
          <div style="margin-bottom: 80px;">
            <a href="https://app.responsivectabuilder.com" class="button is-danger is-medium">Try Building Your Own</a>
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
        <div class="features">
          <!-- ONE -->
          <div class="feature-block block1">
            <div class="container">
              <div class="columns">
                <div class="column">
                  <img src="~/assets/img/devices.svg">
                </div>
                <div class="column is-narrow"></div>
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
              <div class="columns">
                <div class="column">
                  <h4 class="title is-4"><strong>Proven better performance</strong></h4>
                  <p>Responsive CTAs are proven to perform better than image CTAs. We’ve seen <strong>2.5x more clicks</strong> on Responsive CTAs than Image CTAs.</p>
                </div>
                <div class="column is-narrow"></div>
                <div class="column">
                  <img src="~/assets/img/clicks.svg">
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
                <div class="column is-narrow"></div>
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
              <div class="columns">
                <div class="column">
                  <h4 class="title is-4"><strong>Enhanced SEO benefits</strong></h4>
                  <p>Forget trying to fit your long tail keywords into your alt text for an image CTA. With Responsive CTAs just add your keywords into the header, secondary text or button text.</p>
                </div>
                <div class="column is-narrow"></div>
                <div class="column">
                  <img src="~/assets/img/keyword.svg">
                </div>
              </div>
            </div>
          </div>
          <!-- CTA -->
          <div class="feature-block block2">
            <div class="container">
              <!-- CTA -->
              <div class="rcta_embed" style="border-radius: 4px; background-color: #1385E8;">
                <div class="rcta_headline" style="color: #ffffff;">Ready to make a beautiful, responsive CTA?</div>
                <div class="rcta_description" style="color: #ffffff;">Yes, it can look as good as this call-to-action AND match your company's branding guidelines.</div>
                <a class="rcta_button" href="https://app.responsivectabuilder.com" target="_blank" style="background-color: #ff3860; color: #ffffff;">CREATE YOUR OWN CTA</a>
              </div>
              <!-- /CTA -->
            </div>
          </div>
        </div>
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
