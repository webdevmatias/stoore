/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          secondary: '#F9A620', //laranja base
          primary: '#0F1111', //azul escuro base
          primaryDark: '#D38300',
          raisinBlack: '#272838'
      },
    },
  },
  plugins: [],
}