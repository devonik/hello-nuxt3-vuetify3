// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    //If you have enabled Take Over Mode or installed the TypeScript Vue Plugin (Volar), you can disable generating the shim for *.vue files in your nuxt.config file. See https://nuxt.com/docs/getting-started/installation#prerequisites
    typescript: {
        shim: false
      },
      css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
