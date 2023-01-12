/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      'xxs': '280px', // min-width
      'duo': '540px',
      'lg': '1024px',
    },
  },
  plugins: [  require('tailwind-scrollbar-hide'),],
}
