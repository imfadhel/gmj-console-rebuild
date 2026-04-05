// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Outfit: [300, 400, 500, 600, 700, 800],
      'Plus Jakarta Sans': [300, 400, 500, 600, 700]
    },
    display: 'swap'
  }
})
