/** @type {import('tailwindcss').Config} */
module.exports = {
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
      fontFamily: {
        mPlus2c: ['m-plus-2c', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
