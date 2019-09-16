import ampify from './src/plugins/ampify'
import createAsciiArt from './src/plugins/createAsciiArt'

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/Umisyo.github.io/'
        }
      }
    : {}

export default {
  ...routerBase,
  mode: 'universal',
  srcDir: './src',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '高専を中退して株式会社ゆめみでフロントエンドエンジニアとして働いています。'
      },
      { property: 'og:title', content: 'Souta Kusunoki' },
      {
        property: 'og:description',
        content:
          '高専を中退して株式会社ゆめみでフロントエンドエンジニアとして働いています。'
      },
      {
        property: 'og:image',
        content:
          'https://res.cloudinary.com/umisyo/image/upload/f_auto/v1568269864/Portfolio/icon_zmntgo.webp'
      },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@ihcamonoihS' }
    ],
    link: [
      { rel: 'canonical', href: '/' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'amphtml', href: './amp' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/styles/common.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  hooks: {
    // This hook is called before saving the html to flat file
    'generate:page': page => {
      page.html = createAsciiArt(page.html)
      if (page.route === '/amp') {
        page.html = ampify(page.html)
      }
    },
    // This hook is called before serving the html to the browser
    'render:route': (url, page, { req, res }) => {
      page.html = createAsciiArt(page.html)
      if (page.route === '/amp') {
        page.html = ampify(page.html)
      }
    }
  }
}
