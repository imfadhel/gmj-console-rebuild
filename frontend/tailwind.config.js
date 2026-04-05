/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0B9BE2',
          50: '#E1F3FC',
          100: '#CBEBFA',
          200: '#A0DAF6',
          300: '#75C8F2',
          400: '#4AB7ED',
          500: '#0B9BE2',
          600: '#097EBA',
          700: '#076192',
          800: '#05446A',
          900: '#032742',
        },
        secondary: {
          DEFAULT: '#E7935B',
          50: '#FDF4EF',
          100: '#FAEAE0',
          200: '#F4CEB4',
          300: '#EFB388',
          400: '#E9985E',
          500: '#E7935B',
          600: '#D57B43',
          700: '#AE6232',
          800: '#874A21',
          900: '#603311',
        }
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}
