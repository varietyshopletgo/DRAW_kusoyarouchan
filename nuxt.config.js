export default {
  mode:"spa",
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    title: "20470912'",
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      },
      { hid: 'og:site_name', property: 'og:site_name', content: '20470912' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://zealous-chandrasekhar-8fae19.netlify.app/' },
      { hid: 'og:title', property: 'og:title', content: 'クソ野郎ちゃん｜v2.0' },
      { hid: 'og:description', property: 'og:description', content: 'わたしが全部引き受けてやるよ' },
      { hid: 'og:image', property: 'og:image', content: 'https://reiwacity-linebot.s3-ap-northeast-1.amazonaws.com/ogp.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },　//twitterの画像サイズ      
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:"https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdn.materialdesignicons.com/4.2.95/css/materialdesignicons.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/earlyaccess/nikukyu.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/earlyaccess/hannari.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Sawarabi+Gothic"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Sawarabi+Mincho"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [

  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: "~/plugins/pixi",
      ssr: false
    },
    {
      src: '~/plugins/vueTyper.js'
    },
    {
      src: '~/plugins/particleEffectButton.js'
    },
    {
      src: '~/plugins/vue-swal'
    },
    {
      src: '~/plugins/adobe-fonts'
    },    
    {
      src: '~/plugins/vue-hacker-text.js',
      mode: 'client'
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
  ],
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
