/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lani-teal': '#15A7B0',
      },
      rotate: {
        '30': '30deg',
      },
    },
  },
  plugins: [],
}
