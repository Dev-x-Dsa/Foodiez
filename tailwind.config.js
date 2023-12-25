/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'Open': ['Open Sans', 'sans- serif'],
        'Roboto': ['Roboto', 'sans- serif']
      },
      // backgroundImage: {
      //   'hero': "url('images/pizza.jpg')",
      // }
    },
  },
  plugins: [],
}