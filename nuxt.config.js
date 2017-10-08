module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Responsive CTA Builder',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Responsive CTA Builder' }
    ],
    link: [
      /* Favicons */
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      /* FontAwesome Icons for Bulma */
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
