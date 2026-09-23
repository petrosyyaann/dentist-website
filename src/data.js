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

// slides — файлы из public/img/cases (без расширения). dark: слайд на тёмном фоне, portrait: вертикальный слайд
export const cases = [
  {
    title: "Хронический пульпит зуба 3.6",
    tag: "Эндодонтия",
    slides: ["pulpitis-36-1", "pulpitis-36-2", "pulpitis-36-3"],
    portrait: true,
  },
  { title: "Скол зуба 2.3", tag: "Эндодонтия · Build-up", slides: ["chip-23"], portrait: true },
  { title: "Реставрация зуба 1.1", tag: "Реставрация", slides: ["restoration-11"] },
  { title: "Реставрация зуба 2.1", tag: "Реставрация", slides: ["restoration-21"] },
  {
    title: "Реставрация зуба 4.6",
    tag: "Гигиена · Терапия",
    slides: ["restoration-46-1", "restoration-46-2"],
    portrait: true,
  },
  { title: "Лечение кариеса 4.6", tag: "Терапия", slides: ["caries-46"] },
  { title: "Лечение зуба 4.5", tag: "Терапия", slides: ["treatment-45"], dark: true },
  { title: "Профессиональная гигиена полости рта", tag: "Гигиена", slides: ["hygiene-1"] },
  { title: "Профессиональная гигиена: до и после", tag: "Гигиена", slides: ["hygiene-2"], dark: true },
];

export const portfolioPreview = ["/img/p1-sm.jpg", "/img/p3-sm.jpg", "/img/p4-sm.jpg", "/img/p2-sm.jpg"];
