module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      // Включаем cssnano только в продакшн-сборке (если CI=true)
      ...(process.env.CI ? { cssnano: {} } : {})
    },
  };
  