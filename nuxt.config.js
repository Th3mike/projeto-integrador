export default {
  target: 'static',
  router: {
    base: '/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'stacy-store',
    htmlAttrs: {
      lang: 'pt-br'
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
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://i18n.nuxtjs.org/
    'nuxt-i18n'
  ],
  i18n: {
    lazy: true,
    detectBrowserLanguage: {
      cookieKey: 'i18n-locale',
    },
    strategy: 'no_prefix',
    defaultLocale: 'pt',
    langDir: 'lang',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.js'
      },
      {
        code: 'pt',
        iso: 'pt-BR',
        name: 'Português',
        file: 'pt.js'
      }
    ],
  },
  // i18n: {
  //   lazy: true,
  //   detectBrowserLanguage: {
  //     cookieKey: 'i18n-locale',
  //   },
  //   strategy: 'no_prefix',
  //   defaultLocale: 'en',
  //   langDir: 'lang',
  //   locales: [
  //     {
  //       code: 'en',
  //       iso: 'en-US',
  //       name: 'English',
  //       file: 'en.js'
  //     },
  //     {
  //       code: 'pt',
  //       iso: 'pt-BR',
  //       name: 'Português',
  //       file: 'pt.js'
  //     }
  //   ]
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
