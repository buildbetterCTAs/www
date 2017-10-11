module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Responsive CTA Builder',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Responsive CTA Builder' },
      /* Chrome Theme */
      { name: 'theme-color', content: '#1385E8' },
      /* SEO */
      { property: 'og:title', content: 'Responsive CTA Builder' },
      { property: 'og:description', content: 'Build better calls-to-action.' },
      { property: 'og:image', content: 'thumb.png' },
      { property: 'og:url', content: 'https://responsivectabuilder.com/' },
      { name: 'twitter:title', content: 'Responsive CTA Builder' },
      { name: 'twitter:description', content: 'Build better calls-to-action.' },
      { name: 'twitter:image', content: 'thumb.png' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      /* Favicons */
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'icon', type: 'image/png', href: 'favicon-32x32.png', size: '32x32' },
      { rel: 'icon', type: 'image/png', href: 'favicon-16x16.png', size: '32x32' },
      { rel: 'apple-touch-icon', href: 'apple-touch-icon.png', size: '180x180' },
      { rel: 'mask-icon', href: 'safari-pinned-tab.svg', color: '#0E589A' },
      { rel: 'manifest', href: 'manifest.json' },
      /* FontAwesome */
      { rel: 'stylesheet', href: '//use.fontawesome.com/0135b4d647.css' }
    ]
  },
  /*
  ** Styles
  */
  css: [
    '@/assets/css/main.scss'
  ],
  /*
  ** Plugins
  */
  plugins: [
    '~plugins/buefy'
  ],
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/sitemap'
  ],
  /*
  ** Customize sitemap.xml generation
  */
  sitemap: {
    hostname: 'https://responsivectabuilder.com',
    generate: true
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#1385E8' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
