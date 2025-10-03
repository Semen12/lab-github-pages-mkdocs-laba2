# Лабораторная работа: Кастомный сайт и CI/CD


## Структура проекта

Проект состоит из нескольких основных частей:

- **docs/** — каталог с Markdown-документами (контент сайта);  
- **custom_theme/** — кастомная тема (HTML-шаблон + скомпилированные стили);  
- **src/** — исходный CSS-файл с директивами Tailwind;  
- **mkdocs.yml** — конфигурация MkDocs;  
- **requirements.txt** — зависимости Python;  
- **package.json** — зависимости Node.js для сборки фронтенда;  
- **.github/workflows/** — пайплайн GitHub Actions для CI/CD.  

---

1. Откройте проект и установите все зависимости:  
   `pip install -r requirements.txt`  
   `npm install`

2. Сборка и валидация:  
   `npm run build:css`  
   `npm run build:mkdocs`
   `npm run validate:html`

3. Минимизация HTML:  
   `npm run minify:html`

4. Запуск локального сервера MkDocs:  
   `mkdocs serve`

5. Автоматическая сборка:  
   `npm run build`