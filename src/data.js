// Все тексты и списки сайта. Чтобы обновить сайт, обычно достаточно поменять этот файл.

export const experience = [
  {
    place: "True Dent",
    city: "Москва",
    role: "Врач-стоматолог общей практики",
    period: "Октябрь 2025 — н.в.",
    current: true,
  },
  {
    place: "Mavie dental",
    city: "Москва",
    role: "Врач-стоматолог",
    period: "Ноябрь 2024 — январь 2026",
  },
];

export const education = [
  {
    label: "Базовое образование",
    years: "2020 — 2025",
    title: ["Тверской государственный", "медицинский университет"],
    note: "Специалитет: Стоматология",
  },
  {
    label: "Ординатура",
    years: "2025 — 2027",
    title: ["НИИ общественного здоровья", "им. Н.А. Семашко"],
    note: "Специальность: Ортопедическая стоматология",
  },
];

// kind: "course" — курс / конгресс, "award" — диплом, награда
export const certificates = [
  {
    id: "avs-school-2026",
    kind: "course",
    year: 2026,
    title: "Восстановление разрушенных зубов. Сложные дефекты. Штифты",
    org: "AVS school, Юрий Арутюнов",
  },
  {
    id: "stomweb-2025",
    kind: "course",
    year: 2025,
    title: "Терапевтическая практика от реставраций до сложного перелечивания",
    org: "Stomweb, Иван Казадаев",
  },
  {
    id: "dental-guru-implant-2024",
    kind: "course",
    year: 2024,
    title: "Базовый курс по имплантации: хирургический и ортопедический протокол",
    org: "Dental Guru, Юрий Седов, Артур Тумашевич",
  },
  {
    id: "ortho-step-by-step-2024",
    kind: "course",
    year: 2024,
    title: "Ортопедия Step by step",
    org: "aikdent.school, Айк Погосян, Хачатур Абовян",
  },
  {
    id: "prosto-endo-2024",
    kind: "course",
    year: 2024,
    title: "ПРОСТО ЭНДО",
    org: "Bendstomatology, Кирилл Гончаров",
  },
  {
    id: "nobel-2024",
    kind: "course",
    year: 2024,
    title: "Хирургический протокол имплантации Nobel",
    org: "Nobel Biocare, Александр Бобровский",
  },
  {
    id: "aikdent-congress-2024",
    kind: "course",
    year: 2024,
    title: "Международный стоматологический конгресс",
    org: "aikdent.school",
  },
  {
    id: "tokuyama-veneers-2022",
    kind: "course",
    year: 2022,
    title: "Прямые реставрации фронтальной группы зубов, композитные виниры, инъекционная методика",
    org: "Tokuyama Dental (PROTECO), Зилия Чайка",
  },
  {
    id: "olympiad-2024",
    kind: "award",
    year: 2024,
    title: "Диплом II степени, 12-я студенческая олимпиада по ортопедической стоматологии",
    org: "Тверской ГМУ",
  },
  {
    id: "conference-2024",
    kind: "award",
    year: 2024,
    title: "Диплом за II место, конференция «Актуальные вопросы экспериментальной и клинической медицины — 2024»",
    org: "Тверской ГМУ",
  },
].map((c) => ({
  ...c,
  src: `/img/certs/${c.id}.jpg`,
  thumb: `/img/certs/${c.id}-sm.jpg`,
}));

// slides — файлы из public/img/cases (без расширения).
export const cases = [
  { title: "Протезирование на имплантатах", tag: "Ортопедия", slides: ["case_01_montserrat"], dark: true },
  { title: "Эндодонтия и коронка на зуб 1.5", tag: "Эндодонтия · Ортопедия", slides: ["case_02_montserrat"], dark: true },
  { title: "Перелечивание с извлечением фрагментов", tag: "Эндодонтия", slides: ["case_03_montserrat"], dark: true },
  { title: "Перелечивание зуба 3.6", tag: "Эндодонтия", slides: ["case_04_montserrat"], dark: true },
  { title: "Перелечивание зуба 2.6", tag: "Эндодонтия", slides: ["case_05_montserrat"], dark: true },
  { title: "Первичное эндодонтическое лечение 3.6", tag: "Эндодонтия", slides: ["case_06_montserrat"], dark: true },
  { title: "Восстановление разрушенного зуба 3.5", tag: "Эндодонтия · Build-up", slides: ["case_07_montserrat"], dark: true },
  { title: "Эндодонтические этапы лечения 3.7", tag: "Эндодонтия", slides: ["case_08_montserrat"], dark: true },
  { title: "Эндодонтическое лечение зуба 4.6", tag: "Эндодонтия", slides: ["case_09_montserrat"], dark: true },
  { title: "Реставрации фронтальной группы", tag: "Реставрация", slides: ["case_10_montserrat"], dark: true },
  { title: "Восстановление МОД-дефекта 1.6", tag: "Реставрация", slides: ["case_11_montserrat"], dark: true },
  { title: "Реставрация зуба 3.7", tag: "Реставрация", slides: ["case_12_montserrat"], dark: true },
  { title: "Реставрация зубов 2.5 и 2.6", tag: "Реставрация", slides: ["case_13_montserrat"], dark: true },
  { title: "Реставрация премоляров 1.4 и 1.5", tag: "Реставрация", slides: ["case_14_montserrat"], dark: true },
  { title: "Глубокий дистальный дефект 1.7", tag: "Реставрация", slides: ["case_15_montserrat"], dark: true },
  { title: "Клиновидные дефекты 1.3 и 1.4", tag: "Реставрация", slides: ["case_16_montserrat"], dark: true },
  { title: "Прямая реставрация зубов 4.6 и 4.7", tag: "Реставрация", slides: ["case_17_montserrat"], dark: true },
];

export const portfolioPreview = ["/img/p1-sm.jpg", "/img/p3-sm.jpg", "/img/p4-sm.jpg", "/img/p2-sm.jpg"];
