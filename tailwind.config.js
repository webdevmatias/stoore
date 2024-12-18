/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: '#F9A620', //laranja base
          primaryDark: '#D38300',
          raisinBlack: '#272838'
      },
    },
  },
  plugins: [],
}