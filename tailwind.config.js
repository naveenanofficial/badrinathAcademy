/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins','sans-serif'],
        'kalnia': ['Kalnia','sans-serif'],
        'afacad': ['Afacad','sans-serif'],
        'novasquare': ['Nova Square','sans-serif']
      }
    }
   
  },
  plugins: [],
}