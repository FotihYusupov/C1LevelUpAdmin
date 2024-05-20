export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      url: 'http://localhost:3001/api'
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light'
},
})