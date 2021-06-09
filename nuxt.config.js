export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  env: {
    productionMode: 'apache'
  },

  router: {
  //  base: '/ra/4.1'
  },
  //ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mather4',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/colors.scss',
    '~/assets/scss/type.scss',
    '~/assets/scss/main.scss'

  ],
  gsap: {
    extraPlugins: {
      cssRule: true,
    }
  },


  
  babel:{
    plugins: [
   
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/mixins',
    '~/plugins/vidle.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
