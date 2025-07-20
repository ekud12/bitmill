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
        colors: {
          galah: {
            pink: '#e8a7b3',       // Soft Pink - hover, highlights
            rose: '#c76078',       // Deep Rose - primary
            feather: '#cdd0d4',    // Feather Gray - background/code block
            gray: '#8e959f',       // Cool Gray - text, subtle UI
            slate: '#5b5e61',      // Shadow Slate - borders, dark sections
            white: '#f3f4f6',      // Accent White - background
          },
        },
      },
    },
    plugins: []
  }
  