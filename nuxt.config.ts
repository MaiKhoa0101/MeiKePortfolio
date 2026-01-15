// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "app/",
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
        },
      ],
    },
  },
  googleFonts: {
    families: {
      // Sử dụng font Inter cho hiện đại
      'Inter': [400, 500, 600, 700, 800],
    },
    display: 'swap'
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.BASE_URL || 'http://localhost:4000'
    }
  }
});
