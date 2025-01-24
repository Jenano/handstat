/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        cerna: '#404145',
        bgCustom: '#F5F7F9',
        text2: '#787878', 
        active: '#1e90ff',
        pickOpn: '#56ccf2',
        navGray: '#999999'
      },

      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

