# Установка окружения и структура проекта

## Требования

- Python (версия: например, 3.xx)  
- virtualenv  
- Git  

## Шаги установки

1. Создать директорию проекта  
2. Создать виртуальное окружение:  
   ```bash
   python3 -m virtualenv .venv, далее
   source .venv/bin/activate или
   .\.ven\Scripts\activate.ps1  - для Windows
   ```
   3. Установить зависимости:  
   ```bash
   pip install -r requirements.txt
   ```
   4. Запустить MkDocs:  
   ```bash
   mkdocs serve
   ```

## Структура проекта

- docs/ — файлы контента (markdown)
- mkdocs.yml — конфигурация MkDocs
- requirements.txt — зависимости
- .github/workflows/ — файлы автоматизации CI/CD
- README.md — описание проекта