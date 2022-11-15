/** @type {import('tailwindcss').Config} */
module.exports = {
  // jit(Just In Timeモード = 必要に応じてスタイルを反映するモード ビルド時間が早い)
  mode: 'jit',
  darkMode: false, // 'media' or 'class',
  // purgeすることでビルド生成時の未使用のスタイルを除外する(=パフォーマンス向上)
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
