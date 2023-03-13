/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // 'media' or 'class',
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
  },
  content: [],
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#FBFBFB',
          700: '#242424',
        },
        purple: {
          800: '#6C0ECA',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
