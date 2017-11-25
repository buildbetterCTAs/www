<template>
  <div class="cta-slider-wrapper">
    <div class="cta-with-slider" :style="{ maxWidth: width + 'px' }">
      <div :class="responsiveClass">
        <div class="rcta_embed" style="border-radius: 4px; background-color: #0E589A;">
          <div class="rcta_headline" style="color: #ffffff;">This is a powerful, eye-catching headline</div>
          <div class="rcta_description" style="color: #ffffff;">This is your secondary text that might explain why your reader should follow your call-to-action.</div>
          <div><nuxt-link class="rcta_button" to="/" style="background-color: #48A7F9; color: #ffffff">click here, reader!</nuxt-link></div>
        </div>
      </div>
    </div>
    <!-- SLIDER -->
    <div class="width-slider">
      <no-ssr>
        <slider v-model="width" min="300" max="1000" />
      </no-ssr>
    </div>
  </div>
</template>

<script>
  import slider from 'vue-range-slider'

  export default {
    name: 'cta',
    data () {
      return {
        width: 1000,
        displayElementWidth: 0
      }
    },
    computed: {
      responsiveClass () {
        const mediumLargeScreen = 800
        const mediumScreen = 768
        const smallScreen = 600
        const smallerScreen = 425
        const tinyScreen = 320

        const width = this.displayElementWidth

        if (width > mediumLargeScreen) {
          return ''
        } else if (width > mediumScreen) {
          return 'mediumLarge'
        } else if (width > smallScreen) {
          return 'medium'
        } else if (width > smallerScreen) {
          return 'small'
        } else if (width > tinyScreen) {
          return 'smaller'
        } else {
          return 'tiny'
        }
      }
    },
    methods: {
      calcWidth () {
        this.displayElementWidth = document.getElementsByClassName('cta-with-slider')[0].clientWidth
      }
    },
    mounted () {
      this.calcWidth()
      window.addEventListener('resize', () => {
        this.calcWidth()
      })
    },
    watch: {
      width () {
        this.calcWidth()
      }
    },
    components: {
      slider
    }
  }
</script>

<style lang="sass">

@import "~assets/css/brand"

//******************
// UTILITY WRAPPERS
//******************

.cta-slider-wrapper
  &:before,
  &:after
    position: absolute
    content: ''

    background-repeat: no-repeat
    background-position: center

    @media only screen and (max-width: 1024px)
      display: none

  &:before
    height: 45px
    width: 400px
    right: 0
    top: -55px
    background-image: url('~/assets/img/looks-like-this.svg')

  &:after
    height: 80px
    width: 380px
    right: 40px
    bottom: -80px
    background-image: url('~/assets/img/try-dragging.svg')

.cta-with-slider
  margin: 0 auto
  position: relative

.width-slider
  margin: 0 auto
  max-width: 1000px

  @media only screen and (max-width: 1024px)
    display: none


//******************
// VUE-RANGE-SLIDER
//******************

$slider-height: 48px
$slider-width: 100%
$rail-height: 12px
$knob-size: 28px
$rail-color: #e2e2e2
$rail-fill-color: $primary
$knob-color: #fff
$knob-border: 4px solid $primary
$knob-shadow: 0 4px 6px rgba(50, 50, 93, .11),  0 1px 3px rgba(0, 0, 0, .08)
$knob-shadow-hover: 0 7px 14px rgba(50, 50, 93, .1),  0 3px 6px rgba(0, 0, 0, .08)

.range-slider-knob
  transition: box-shadow .2s ease

  &:hover
    box-shadow: $knob-shadow-hover

@import "~vue-range-slider/dist/vue-range-slider.scss"

//******************
// CTA EMBED STYLES
//******************

// sass-lint:disable class-name-format
.rcta_embed
  transition: padding .2s ease, font-size .2s ease

//******************
// JS MEDIA QUERIES
//******************

// Medium-Large & Down
.mediumLarge,
.medium,
.small,
.smaller,
.tiny
  .rcta_column
    &.rcta_image
      display: none

// Medium & Down
.medium,
.small,
.smaller,
.tiny
  .rcta_embed
    padding: 40px

  .rcta_headline
    font-size: 36px

  .rcta_button
    height: 54px
    line-height: 54px
    margin-top: 8px

// Small & Down
.small,
.smaller,
.tiny
  .rcta_embed
    padding: 32px

  .rcta_headline
    font-size: 30px

  .rcta_button
    height: auto
    line-height: 2
    padding: 8px
    text-align: center
    width: 100%

// Smaller & Down
.smaller,
.tiny
  .rcta_embed
    padding: 24px

  .rcta_headline
    font-size: 28px

  .rcta_description
    font-size: 18px

// Tiny & Down
.tiny
  .rcta_embed
    padding: 16px

  .rcta_headline
    font-size: 24px
// sass-lint:enable class-name-format

</style>
