# Сайт devletmurzaev.netlify.app

Исходники восстановлены из опубликованной сборки (Vite + React 18 + Tailwind CSS 4 + motion).

## Структура

- `src/data.js`: опыт работы, образование, сертификаты, клинические случаи. Большинство правок делаются здесь.
- `src/App.jsx`: разметка всех секций.
- `src/components/Lightbox.jsx`: полноэкранный просмотр (стрелки, Esc, свайп, миниатюры).
- `public/img/certs/`: сертификаты в JPG; `public/img/cases/`: клинические карточки в WebP (`name.webp` и `name-sm.webp`). Исходные JPG сохранены для прежних ссылок.
- `src/entry-server.jsx`, `scripts/prerender.mjs`: готовая HTML-разметка и встроенные стили, чтобы страница отображалась до загрузки JavaScript. Интерактивные элементы подключаются через React hydration.
- `dist/`: готовая сборка для публикации.

## Как добавить сертификат или кейс

1. Для сертификатов положить `имя.jpg` и `имя-sm.jpg` в `public/img/certs/`. Для кейсов — квадратные `имя.webp` (до 2000 px) и `имя-sm.webp` (720 px) в `public/img/cases/`. Обложка с суффиксом `_01_cover` показывается целиком. Каждый кейс хранится в отдельной подпапке; `slides` содержит пути без расширения, сначала обложку, затем этапы по номерам. Карусель открывает только слайды выбранного кейса.
2. Добавить запись в `certificates` или `cases` в `src/data.js`.
3. Пересобрать: `npm run build`.

## Команды

```bash
npm install      # один раз
npm run dev      # локальный просмотр, http://localhost:5173
npm run build    # сборка в dist/
```

## Публикация

Netlify → проект devletmurzaev → Deploys → перетащить папку `dist` в блок «Drag and drop your project folder here».

Чтобы код больше не терялся, можно залить проект в GitHub и подключить репозиторий в Netlify (Build command `npm run build`, Publish directory `dist`). Тогда сайт будет обновляться после каждого push.

Кейсы подготовлены из 17 папок архива `devletmurzaev_clinical_carousels_JPG` (92 слайда). Оптимизированные WebP лежат в `public/img/cases/case_01/` … `case_17/`. Шрифт Montserrat подключён локально из `public/fonts/`; лицензия OFL сохранена рядом.
