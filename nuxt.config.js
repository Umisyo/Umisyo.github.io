import ampify from './src/plugins/ampify'
import createAsciiArt  from './src/plugins/createAsciiArt'

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
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'canonical', href: '/' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'amphtml', href:'./amp'}
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
