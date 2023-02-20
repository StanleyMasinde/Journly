/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7d5a50',
        secondary: '#fcdec0'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
