export default {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './app.vue',
      './nuxt.config.{js,ts}'
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Public', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: []
  }
  