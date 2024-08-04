/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{jsx,tsx,ts,js}'
  ],
  theme: {
    extend: {

    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui:{
    themes:['winter','dracula']
  }
}

