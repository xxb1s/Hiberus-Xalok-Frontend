import forms from '@tailwindcss/forms'
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/vue-tailwind-datepicker/**/*.js'],
  theme: {
    extend: {
      colors: {
        'vtd-primary': colors.zinc,
        'vtd-secondary': colors.zinc
      }
    }
  },
  plugins: [forms]
}
