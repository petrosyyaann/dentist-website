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
  { title: "Протезирование на имплантатах", tag: "Ортопедия", id: "case_01", slides: ["case_01/case_01_01_cover", "case_01/case_01_02", "case_01/case_01_03", "case_01/case_01_04", "case_01/case_01_05", "case_01/case_01_06", "case_01/case_01_07", "case_01/case_01_08", "case_01/case_01_09", "case_01/case_01_10", "case_01/case_01_11"] },
  { title: "Эндодонтия и коронка на зуб 1.5", tag: "Эндодонтия · Ортопедия", id: "case_02", slides: ["case_02/case_02_01_cover", "case_02/case_02_02", "case_02/case_02_03", "case_02/case_02_04", "case_02/case_02_05"] },
  { title: "Перелечивание с извлечением фрагментов", tag: "Эндодонтия", id: "case_03", slides: ["case_03/case_03_01_cover", "case_03/case_03_02", "case_03/case_03_03", "case_03/case_03_04", "case_03/case_03_05", "case_03/case_03_06", "case_03/case_03_07", "case_03/case_03_08", "case_03/case_03_09", "case_03/case_03_10"] },
  { title: "Перелечивание зуба 3.6", tag: "Эндодонтия", id: "case_04", slides: ["case_04/case_04_01_cover", "case_04/case_04_02", "case_04/case_04_03", "case_04/case_04_04", "case_04/case_04_05", "case_04/case_04_06", "case_04/case_04_07"] },
  { title: "Перелечивание зуба 2.6", tag: "Эндодонтия", id: "case_05", slides: ["case_05/case_05_01_cover", "case_05/case_05_02", "case_05/case_05_03", "case_05/case_05_04", "case_05/case_05_05"] },
  { title: "Первичное эндодонтическое лечение 3.6", tag: "Эндодонтия", id: "case_06", slides: ["case_06/case_06_01_cover", "case_06/case_06_02", "case_06/case_06_03", "case_06/case_06_04", "case_06/case_06_05"] },
  { title: "Восстановление разрушенного зуба 3.5", tag: "Эндодонтия · Build-up", id: "case_07", slides: ["case_07/case_07_01_cover", "case_07/case_07_02", "case_07/case_07_03", "case_07/case_07_04", "case_07/case_07_05"] },
  { title: "Эндодонтические этапы лечения 3.7", tag: "Эндодонтия", id: "case_08", slides: ["case_08/case_08_01_cover", "case_08/case_08_02", "case_08/case_08_03", "case_08/case_08_04", "case_08/case_08_05"] },
  { title: "Эндодонтическое лечение зуба 4.6", tag: "Эндодонтия", id: "case_09", slides: ["case_09/case_09_01_cover", "case_09/case_09_02", "case_09/case_09_03", "case_09/case_09_04"] },
  { title: "Реставрации фронтальной группы", tag: "Реставрация", id: "case_10", slides: ["case_10/case_10_01_cover", "case_10/case_10_02", "case_10/case_10_03", "case_10/case_10_04", "case_10/case_10_05", "case_10/case_10_06", "case_10/case_10_07", "case_10/case_10_08"] },
  { title: "Восстановление МОД-дефекта 1.6", tag: "Реставрация", id: "case_11", slides: ["case_11/case_11_01_cover", "case_11/case_11_02", "case_11/case_11_03", "case_11/case_11_04"] },
  { title: "Реставрация зуба 3.7", tag: "Реставрация", id: "case_12", slides: ["case_12/case_12_01_cover", "case_12/case_12_02", "case_12/case_12_03", "case_12/case_12_04"] },
  { title: "Реставрация зубов 2.5 и 2.6", tag: "Реставрация", id: "case_13", slides: ["case_13/case_13_01_cover", "case_13/case_13_02", "case_13/case_13_03", "case_13/case_13_04"] },
  { title: "Реставрация премоляров 1.4 и 1.5", tag: "Реставрация", id: "case_14", slides: ["case_14/case_14_01_cover", "case_14/case_14_02", "case_14/case_14_03"] },
  { title: "Глубокий дистальный дефект 1.7", tag: "Реставрация", id: "case_15", slides: ["case_15/case_15_01_cover", "case_15/case_15_02", "case_15/case_15_03", "case_15/case_15_04", "case_15/case_15_05"] },
  { title: "Клиновидные дефекты 1.3 и 1.4", tag: "Реставрация", id: "case_16", slides: ["case_16/case_16_01_cover", "case_16/case_16_02", "case_16/case_16_03"] },
  { title: "Прямая реставрация зубов 4.6 и 4.7", tag: "Реставрация", id: "case_17", slides: ["case_17/case_17_01_cover", "case_17/case_17_02", "case_17/case_17_03", "case_17/case_17_04"] },
];

export const portfolioPreview = ["/img/p1-sm.jpg", "/img/p3-sm.jpg", "/img/p4-sm.jpg", "/img/p2-sm.jpg"];
