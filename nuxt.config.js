var routerBase = '/'
const projectName = 'ra41'


if (process.env.DEPLOY_ENV === 'duckpond') {
  routerBase = '/ra/'+projectName // Change to whatever the subdirecory is 
} if (process.env.DEPLOY_ENV === 'onsite') {
  routerBase = '/'+projectName // Name this whatever the mamp/lamp project filename is called
}


export default {
  router: {
    base: routerBase
  },

  target: 'static',
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
  babel: {
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


  generate: {
    dir: projectName,
    cli: 'If this build is to be used on an apache server (online or local), dont forget to add the .htaccess file'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
   
  }
}
