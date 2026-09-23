import { useMemo, useState } from "react";
import { motion } from "motion/react";
import Lightbox from "./components/Lightbox.jsx";
import { HeroIcon, CrownIcon, ToothIcon, ArcIcon, CirclesIcon, ZoomIcon, socials } from "./components/icons.jsx";
import { experience, education, certificates, cases, portfolioPreview } from "./data.js";

const Z = motion;

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = (s) => ({ hidden: {}, visible: { transition: { staggerChildren: s } } });

const btn =
  "group relative px-6 sm:px-10 py-4 sm:py-5 border border-white/30 hover:bg-white hover:text-black transition-all duration-500 w-full sm:w-auto";
const btnText = "text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase";
const eyebrow = "text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase opacity-30";

const navLinks = [
  ["#philosophy", "Подход"],
  ["#expertise", "Экспертиза"],
  ["#experience", "Опыт"],
  ["#education", "Образование"],
  ["#certificates", "Сертификаты"],
  ["#portfolio", "Кейсы"],
  ["#contact", "Контакт"],
];

function SectionTitle({ children, light = false, className = "mb-12 sm:mb-16 lg:mb-24" }) {
  return (
    <Z.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tighter mb-4 sm:mb-6">{children}</h2>
      <div className={`h-px w-20 sm:w-32 ${light ? "bg-black/20" : "bg-white/20"}`} />
    </Z.div>
  );
}

const plural = (n, [one, few, many]) => {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return few;
  return many;
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [certFilter, setCertFilter] = useState("all");
  const [box, setBox] = useState({ items: [], index: null });

  // Все сертификаты для просмотра (листаются по порядку)
  const certItems = useMemo(
    () => certificates.map((c) => ({ src: c.src, thumb: c.thumb, title: c.title, subtitle: `${c.org} · ${c.year}` })),
    []
  );
  const visibleCerts = certFilter === "all" ? certificates : certificates.filter((c) => c.kind === certFilter);

  // Кейсы: все слайды подряд, чтобы стрелками можно было пройти всё портфолио
  const caseItems = useMemo(
    () =>
      cases.flatMap((c) =>
        c.slides.map((s, i) => ({
          src: `/img/cases/${s}.jpg`,
          thumb: `/img/cases/${s}-sm.jpg`,
          title: c.title,
          subtitle: c.slides.length > 1 ? `${c.tag} · слайд ${i + 1} из ${c.slides.length}` : c.tag,
        }))
      ),
    []
  );
  const caseStart = useMemo(() => {
    let n = 0;
    return cases.map((c) => {
      const start = n;
      n += c.slides.length;
      return start;
    });
  }, []);

  const openCert = (id) => setBox({ items: certItems, index: certificates.findIndex((c) => c.id === id) });
  const openCase = (i) => setBox({ items: caseItems, index: caseStart[i] });

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-5 flex justify-between items-center">
          <a href="#" className="tracking-[0.3em] text-[10px] sm:text-xs opacity-70">ДЕВЛЕТМУРЗАЕВ</a>
          <div className="hidden lg:flex gap-8 xl:gap-10 text-xs tracking-[0.15em] opacity-50 uppercase">
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} className="hover:opacity-100 transition-opacity duration-300">
                {label}
              </a>
            ))}
          </div>
          <button
            className="lg:hidden w-8 h-8 -mr-1 flex items-center justify-center opacity-70"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Меню"
            aria-expanded={menuOpen}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-white/10 px-4 sm:px-6 py-4 flex flex-col">
            {navLinks.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-xs tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Первый экран */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24 pb-12 sm:pb-0 relative">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 sm:gap-16 items-center relative z-10">
          <Z.div className="space-y-10 sm:space-y-16" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
            <Z.div className="flex items-center gap-4 sm:gap-6" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 border border-white/20">
                <HeroIcon />
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
            </Z.div>
            <Z.div className="space-y-6 sm:space-y-8" initial="hidden" animate="visible" variants={stagger(0.15)}>
              <Z.div className="space-y-3" variants={fadeUp}>
                <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase opacity-40">Независимый практикующий врач</p>
                <h1 className="space-y-1">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl tracking-tighter">Исламутдин</div>
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl tracking-tighter opacity-50">Девлетмурзаев</div>
                </h1>
              </Z.div>
              <Z.div className="max-w-lg space-y-4 sm:space-y-6" variants={fadeUp}>
                <div className="h-px bg-white/20 w-16 sm:w-24" />
                <p className="text-sm sm:text-base leading-relaxed opacity-70">
                  Современная стоматология
                  <br />
                  как искусство точности
                </p>
                <p className="text-xs sm:text-sm leading-loose opacity-50">Эндодонтия • Ортопедия • Эстетическая реставрация</p>
              </Z.div>
              <Z.div className="pt-4 sm:pt-6" variants={fadeUp}>
                <a href="#contact">
                  <button className={btn}>
                    <span className={btnText}>Записаться на приём</span>
                  </button>
                </a>
              </Z.div>
            </Z.div>
          </Z.div>
          <Z.div className="relative mt-8 lg:mt-0" initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}>
            <div className="absolute -inset-2 sm:-inset-4 border border-white/10" />
            <div className="aspect-[3/4] relative overflow-hidden">
              <img src="/img/main.jpg" alt="Девлетмурзаев Исламутдин" className="w-full h-full object-cover contrast-125" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <Z.div
              className="hidden sm:block absolute -right-4 sm:-right-8 top-1/4 w-16 sm:w-20 h-16 sm:h-20 border border-white/20 bg-black/50 backdrop-blur p-3 sm:p-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <CrownIcon />
            </Z.div>
            <Z.div
              className="hidden sm:block absolute -left-4 sm:-left-8 bottom-1/4 w-16 sm:w-20 h-16 sm:h-20 border border-white/20 bg-black/50 backdrop-blur p-3 sm:p-4"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <ToothIcon />
            </Z.div>
          </Z.div>
        </div>
      </section>

      {/* Философия */}
      <section id="philosophy" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionTitle className="mb-12 sm:mb-16 lg:mb-20">Философия практики</SectionTitle>
          <Z.div className="grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 max-w-6xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger(0.15)}>
            {[
              [
                ["Работа под увеличением", "Точная и деликатная работа под бинокулярами.", "Контроль анатомии, уважение к здоровым тканям."],
                ["Изоляция рабочего поля", "Коффердам для стерильности и биологического контроля среды.", "Минимизация бактериальной нагрузки и повышение адгезии."],
              ],
              [
                ["Ассистирование", "Работа в четыре руки для высокой стерильности и точности.", "Рационализация времени и снижение операционной нагрузки."],
                ["Доказательный подход", "Клинические решения на основе современных исследований и протоколов.", "Приоритет — биологическая целостность и долговечность результата."],
              ],
            ].map((col, ci) => (
              <Z.div
                key={ci}
                className="space-y-6 sm:space-y-8"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: ci * 0.1 } } }}
              >
                {col.map(([title, l1, l2]) => (
                  <Z.div key={title} className="border-l border-white/20 pl-4 sm:pl-6" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 tracking-tight">{title}</h3>
                    <p className="text-xs sm:text-sm leading-loose opacity-60">
                      {l1}
                      <br />
                      {l2}
                    </p>
                  </Z.div>
                ))}
              </Z.div>
            ))}
          </Z.div>
        </div>
      </section>

      {/* Экспертиза */}
      <section id="expertise" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Клиническая экспертиза</SectionTitle>
          <div className="space-y-0">
            {[
              ["01", <ToothIcon />, "Эндодонтия", "Сохранение витальности и структуры", ["Эндодонтия с прицельным контролем анатомии и деликатным доступом.", "Биосовместимые материалы, 3D-обтурация, сохранение максимума здоровых тканей."], ["Трудная анатомия", "Повторное лечение", "Документирование процессов"]],
              ["02", <CrownIcon />, "Ортопедия", "Биомиметическое восстановление", ["Персонализированные реставрации, цифровая диагностика и планирование.", "Протезирование с учётом окклюзии и тканевой биологии."], ["Виниры и вкладки", "Коронки и мосты", "Работа с имплантатами"]],
              ["03", <ArcIcon />, "Эстетика", "Минимально инвазивные реставрации", ["Биомиметическая адгезивная стоматология.", "Восстановление анатомии с сохранением тканей и природной оптики."], ["Послойная техника", "Индивидуальный подбор цвета и формы", "Нативная прозрачность"]],
              ["04", <CirclesIcon />, "Терапия", "Сохранение биологии зуба", ["Минимальная инвазия, точная диагностика и профилактика рецидивов.", "Комплексный подход к здоровью твёрдых и мягких тканей."], ["Ранняя диагностика", "Современные адгезивные протоколы", "Персонализированная профилактика"]],
            ].map(([num, icon, title, sub, text, points], i, arr) => (
              <Z.div
                key={num}
                className={`grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 border-t ${i === arr.length - 1 ? "border-b" : ""} border-white/10 py-8 sm:py-12 lg:py-16 hover:bg-zinc-950 transition-colors duration-500`}
              >
                <div className="lg:col-span-2">
                  <div className="text-[10px] sm:text-xs tracking-[0.3em] uppercase opacity-30">{num}</div>
                </div>
                <div className="lg:col-span-3">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-4 sm:mb-6">{icon}</div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-3 sm:mb-4">{title}</h3>
                  <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase opacity-40">{sub}</p>
                </div>
                <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                  <p className="text-sm sm:text-base leading-loose opacity-70">
                    {text[0]}
                    <br />
                    {text[1]}
                  </p>
                  <div className="text-xs sm:text-sm opacity-50 pt-2 sm:pt-4 space-y-2">
                    {points.map((p) => (
                      <div key={p}>→ {p}</div>
                    ))}
                  </div>
                </div>
              </Z.div>
            ))}
          </div>
        </div>
      </section>

      {/* Опыт работы */}
      <section id="experience" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Опыт работы</SectionTitle>
          <Z.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger(0.15)}>
            {experience.map((job, i) => (
              <Z.div
                key={job.place}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                className={`grid lg:grid-cols-12 lg:items-center gap-4 sm:gap-6 lg:gap-12 border-t ${i === experience.length - 1 ? "border-b" : ""} border-white/10 py-8 sm:py-10 lg:py-14 hover:bg-zinc-950 transition-colors duration-500`}
              >
                <div className="lg:col-span-4 flex items-center gap-3">
                  {job.current && (
                    <span className="relative flex w-2 h-2 flex-shrink-0">
                      <span className="absolute inline-flex w-full h-full rounded-full bg-white opacity-60 animate-ping" />
                      <span className="relative inline-flex w-2 h-2 rounded-full bg-white" />
                    </span>
                  )}
                  <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase opacity-50">{job.period}</span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-2">{job.place}</h3>
                  <p className="text-xs sm:text-sm opacity-40">г. {job.city}</p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <p className="text-sm sm:text-base opacity-70">{job.role}</p>
                </div>
              </Z.div>
            ))}
          </Z.div>
        </div>
      </section>

      {/* Образование */}
      <section id="education" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Образование</SectionTitle>
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            <Z.div className="space-y-10 sm:space-y-12 lg:space-y-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger(0.2)}>
              {education.map((e, i) => (
                <Z.div
                  key={e.label}
                  className="border-l-2 border-white/20 pl-4 sm:pl-6 lg:pl-8"
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut", delay: i * 0.1 } } }}
                >
                  <div className={`${eyebrow} mb-4 sm:mb-6`}>
                    {e.label} <span className="opacity-100 ml-2">{e.years}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 tracking-tight">
                    {e.title[0]}
                    <br />
                    {e.title[1]}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-50">{e.note}</p>
                </Z.div>
              ))}
            </Z.div>

            <Z.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}>
              <div className={`${eyebrow} mb-6 sm:mb-8`}>Повышение квалификации</div>
              <Z.div className="space-y-1" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger(0.08)}>
                {certificates
                  .filter((c) => c.kind === "course")
                  .map((c) => (
                    <Z.button
                      key={c.id}
                      onClick={() => openCert(c.id)}
                      className="w-full text-left flex items-start gap-3 sm:gap-4 group py-2"
                      variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-[10px] sm:text-xs tracking-[0.15em] opacity-30 group-hover:opacity-70 transition-opacity mt-0.5 w-9 flex-shrink-0">{c.year}</span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-xs sm:text-sm opacity-70 group-hover:opacity-100 transition-opacity">{c.title}</span>
                        <span className="block text-[11px] sm:text-xs opacity-30 mt-1">{c.org}</span>
                      </span>
                      <span className="text-[10px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-60 transition-opacity mt-0.5 hidden sm:block">Сертификат</span>
                    </Z.button>
                  ))}
              </Z.div>
            </Z.div>
          </div>
        </div>
      </section>

      {/* Сертификаты */}
      <section id="certificates" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16 lg:mb-20">
            <SectionTitle className="">Сертификаты и дипломы</SectionTitle>
            <div className="flex gap-2 sm:gap-3">
              {[
                ["all", "Все"],
                ["course", "Курсы"],
                ["award", "Награды"],
              ].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setCertFilter(key)}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 border text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                    certFilter === key ? "bg-white text-black border-white" : "border-white/20 opacity-60 hover:opacity-100 hover:border-white/50"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <Z.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {visibleCerts.map((c) => (
              <Z.button
                layout
                key={c.id}
                onClick={() => openCert(c.id)}
                className="group text-left border border-white/10 hover:border-white/30 transition-colors duration-500 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden p-3 sm:p-4 flex items-center justify-center">
                  <img src={c.thumb} alt={c.title} loading="lazy" className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIcon className="w-8 h-8 sm:w-10 sm:h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col gap-2">
                  <div className="text-[10px] tracking-[0.2em] uppercase opacity-30">
                    {c.year} · {c.kind === "award" ? "Награда" : "Курс"}
                  </div>
                  <div className="text-xs sm:text-sm leading-snug opacity-80 line-clamp-3">{c.title}</div>
                  <div className="text-[11px] sm:text-xs opacity-40 mt-auto">{c.org}</div>
                </div>
              </Z.button>
            ))}
          </Z.div>
        </div>
      </section>

      {/* Клинические случаи */}
      <section id="portfolio" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <Z.div
            className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center mb-16 sm:mb-20 lg:mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Z.div className="space-y-8 sm:space-y-12" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}>
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tighter mb-4 sm:mb-6">Клинические случаи</h2>
                <div className="h-px bg-white/20 w-20 sm:w-32" />
              </div>
              <p className="text-sm sm:text-base leading-loose opacity-60 max-w-lg">
                Фотопротокол лечения.
                <br />
                Документация всех этапов работы.
                <br />
                До и после.
              </p>
              <Z.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} onClick={() => openCase(0)} className={btn}>
                <span className={btnText}>Смотреть портфолио</span>
              </Z.button>
            </Z.div>
            <Z.div className="grid grid-cols-2 gap-3 sm:gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger(0.12)}>
              {portfolioPreview.map((src, i) => (
                <Z.div key={src} className="aspect-square overflow-hidden" variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } }} whileHover={{ scale: 1.03 }}>
                  <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                </Z.div>
              ))}
            </Z.div>
          </Z.div>

          <Z.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.08)}>
            {cases.map((c, i) => (
              <Z.button
                key={c.title + i}
                onClick={() => openCase(i)}
                className="group text-left border border-white/10 hover:border-white/30 transition-colors duration-500"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              >
                <div className={`relative aspect-[4/3] overflow-hidden ${c.dark ? "bg-black" : "bg-white"}`}>
                  <img
                    src={`/img/cases/${c.slides[0]}-sm.jpg`}
                    alt={c.title}
                    loading="lazy"
                    className={`w-full h-full ${c.portrait ? "object-cover object-top" : "object-contain p-2 sm:p-3"} transition-transform duration-700 group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIcon className="w-10 h-10 sm:w-12 sm:h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  {c.slides.length > 1 && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/70 backdrop-blur text-[10px] tracking-[0.15em] uppercase">
                      {c.slides.length} {plural(c.slides.length, ["слайд", "слайда", "слайдов"])}
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-5 border-t border-white/10">
                  <div className="text-[10px] tracking-[0.2em] uppercase opacity-30 mb-2">
                    {String(i + 1).padStart(2, "0")} · {c.tag}
                  </div>
                  <div className="text-base sm:text-lg tracking-tight">{c.title}</div>
                </div>
              </Z.button>
            ))}
          </Z.div>

          <Z.div className="pt-12 sm:pt-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-xs sm:text-sm opacity-50 mb-6">Полное портфолио доступно на Tilda</p>
            <a href="https://devletmurzaev.tilda.ws/" target="_blank" rel="noopener noreferrer">
              <Z.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className={btn}>
                <span className={btnText}>Открыть внешнее портфолио</span>
              </Z.button>
            </a>
          </Z.div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white text-black">
        <Z.div className="max-w-7xl mx-auto" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }}>
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            <Z.div className="space-y-8 sm:space-y-12" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}>
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tighter mb-4 sm:mb-6">Консультация</h2>
                <div className="h-px bg-black/20 w-20 sm:w-32" />
              </div>
              <p className="text-sm sm:text-base leading-loose opacity-60 max-w-md">
                Запись на приём.
                <br />
                Консультация и диагностика.
                <br />
                Индивидуальный план лечения.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
                {socials.map((s) => (
                  <Z.a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="w-12 h-12 sm:w-16 sm:h-16 border border-black/10 hover:border-black/40 hover:bg-black/5 transition-all duration-300 p-2 sm:p-3 group"
                  >
                    {s.icon}
                  </Z.a>
                ))}
              </div>
            </Z.div>
            <Z.div className="space-y-10 sm:space-y-12 lg:space-y-16" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}>
              <div className="space-y-3 sm:space-y-4">
                <div className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase opacity-40">Телефон</div>
                <a href="tel:+79255522001" className="block text-2xl sm:text-3xl tracking-tight hover:opacity-60 transition-opacity">
                  +7 925 552 20 01
                </a>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase opacity-40">Email</div>
                <a href="mailto:islam_dalgat05@mail.ru" className="block text-base sm:text-lg lg:text-xl tracking-tight hover:opacity-60 transition-opacity break-all">
                  islam_dalgat05@mail.ru
                </a>
              </div>
              <div className="pt-6 sm:pt-8 border-t border-black/10">
                <div className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase opacity-40 mb-3 sm:mb-4">География практики</div>
                <div className="text-base sm:text-lg">
                  <span className="opacity-60">Москва</span>
                </div>
              </div>
            </Z.div>
          </div>
        </Z.div>
      </section>

      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 opacity-30">
            <div className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-center md:text-left">© {new Date().getFullYear()} И.М. ДЕВЛЕТМУРЗАЕВ</div>
            <div className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-center md:text-right">НЕЗАВИСИМЫЙ ПРАКТИКУЮЩИЙ ВРАЧ-СТОМАТОЛОГ</div>
          </div>
        </div>
      </footer>

      <Lightbox items={box.items} index={box.index} onClose={() => setBox((b) => ({ ...b, index: null }))} onChange={(i) => setBox((b) => ({ ...b, index: i }))} />
    </div>
  );
}
