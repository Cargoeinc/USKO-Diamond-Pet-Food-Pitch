/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'usko-blue': '#eb0028',
        'usko-blue-light': '#ff1a3d',
        'usko-blue-dark': '#cc0023',
      },
    },
  },
  plugins: [],
} 