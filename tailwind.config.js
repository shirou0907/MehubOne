const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D005A',
        info: '#053FFF',
        success: '#05A357',
        danger: '#E11900',
        warning: '#E6A23C',
        deactive: '#909399',
        'primary-text': '#0E162C',
        'secondary-text': '#878B96',
        'divide-lighter': '#EFF0F4',
        'divide-darker': '#DEE1E9',
      },
      container: {
        center: true,
      },
    },

    fontFamily: {
      sans: ['Manrope', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
