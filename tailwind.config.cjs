/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#a855f7',
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.gray,
        red: colors.red,
        blue: colors.blue,
        pink: colors.pink,
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [require('daisyui')],
}
