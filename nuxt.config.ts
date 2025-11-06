// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: [
    '@/assets/global.css'
  ],
  runtimeConfig: {
    MEAL_API: "https://www.themealdb.com/api/json/v1/1",
    public: {
    }
  }
})
