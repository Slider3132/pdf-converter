Конвертер тексту в PDF

Простий застосунок на React (Next.js), який дозволяє користувачам конвертувати введений текст у PDF-документ.

🚀 Технологічний стек

React (Next.js 15) — App Router

TypeScript — типізація

Tailwind CSS — стилізація

Axios — для запитів до API

@react-pdf-viewer/core — для відображення PDF

Jest + React Testing Library — для юніт-тестів

🌐 Змінні оточення
Створи файл .env у корені проєкту:

DOMAIN=https://api.example.com
API_KEY=your-api-key

⚠️ Файл .env не додається до репозиторію.

🧪 Запуск проєкту

Встановлення залежностей:

npm install

Запуск локального сервера:

npm run dev

Запуск тестів:

npm run test

📌 Основні модулі

🔄 convertTextToPDF

Надсилає POST-запит на ${DOMAIN}/create-pdf?apiKey=${API_KEY}

Очікує відповідь у форматі Blob (PDF)

📦 ConverterModule

Основна логіка застосунку:

Введення тексту у TextInput

Конвертація введеного тексту у Pdf та відображення у PdfViewer

Ведображення історії через HistoryWidget

PDF зберігається у localStorage у форматі base64

📄 PdfViewer

Відображає PDF-файл з base64, конвертований у Blob

Працює з @react-pdf-viewer/core

🕘 HistoryWidget

Показує список попередніх PDF-файлів, які можна переглядати

✅ Покриття тестами

convert.test.tsx

Мокує convertTextToPDF

Симулює введення тексту та клік

Перевіряє, що API викликане з правильним аргументом

Переконується, що PDF зʼявляється на екрані

📬 Зворотній звʼязок

Pull requests і пропозиції — вітаються!

© 2025, Тестове завдання Universe Group
