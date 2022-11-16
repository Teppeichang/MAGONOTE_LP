/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // 'media' or 'class',
  // purgeすることでビルド生成時の未使用のスタイルを除外する(=パフォーマンス向上)
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
