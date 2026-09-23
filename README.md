# Сайт devletmurzaev.netlify.app

Исходники восстановлены из опубликованной сборки (Vite + React 18 + Tailwind CSS 4 + motion).

## Структура

- `src/data.js`: опыт работы, образование, сертификаты, клинические случаи. Большинство правок делаются здесь.
- `src/App.jsx`: разметка всех секций.
- `src/components/Lightbox.jsx`: полноэкранный просмотр (стрелки, Esc, свайп, миниатюры).
- `public/img/certs/`, `public/img/cases/`: изображения. У каждого есть полная версия `name.jpg` и превью `name-sm.jpg`.
- `dist/`: готовая сборка для публикации.

## Как добавить сертификат или кейс

1. Положить `имя.jpg` (до ~2000 px по длинной стороне) и `имя-sm.jpg` (~720 px) в `public/img/certs/` или `public/img/cases/`.
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
