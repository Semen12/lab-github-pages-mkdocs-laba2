/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './theme/**/*.html', // Сканировать HTML-файлы в теме
      './docs/**/*.md',     // Сканировать Markdown для возможного встраивания HTML
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography'), // Плагин для красивой типографики контента
    ],
  }