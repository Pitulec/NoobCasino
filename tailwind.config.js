/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/*.{html, js}"
  ],
  theme: {
    extend: {
      colors: {
        'text': '#e0f3f3',
        'background': '#081314',
        'primary': '#92d4d5',
        'secondary': '#2f4b7b',
        'accent': '#485ab9',
       }
    },
  },  
  plugins: [],
}