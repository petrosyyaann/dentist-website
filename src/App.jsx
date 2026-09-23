import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Lightbox from "./components/Lightbox.jsx";
import { ZoomIcon, socials } from "./components/icons.jsx";
import { experience, education, certificates, cases } from "./data.js";

const Z = motion;

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const stagger = (s) => ({ hidden: {}, visible: { transition: { staggerChildren: s } } });
const inView = { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-60px" } };

const eyebrow = "text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/35";
const sectionPad = "py-20 sm:py-28 lg:py-32 px-5 sm:px-8 lg:px-12";
const outlineBtn =
  "inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 border border-white/30 text-[11px] sm:text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-colors duration-500";

// В контактах и меню показываем только мессенджеры
const messengers = socials.filter((s) => ["WhatsApp", "Telegram"].includes(s.label));

const navLinks = [
  ["#expertise", "Экспертиза"],
  ["#experience", "Опыт"],
  ["#education", "Образование"],
  ["#portfolio", "Кейсы"],
  ["#contact", "Контакты"],
];

const expertise = [
  ["Эндодонтия", "Лечение каналов при сложной анатомии и повторное лечение под увеличением."],
  ["Ортопедия", "Вкладки, коронки, виниры и протезирование на имплантатах."],
  ["Реставрация", "Восстановление формы и функции зуба с сохранением здоровых тканей."],
  ["Терапия", "Диагностика, лечение кариеса и профилактика осложнений."],
];

function SectionTitle({ index, children, aside }) {
  return (
    <Z.div className="mb-10 sm:mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5" {...inView} variants={fadeUp}>
      <div>
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <span className={eyebrow}>{index}</span>
          <span className="h-px w-8 bg-white/20" />
        </div>
        <h2 className="text-[34px] leading-[1.05] sm:text-5xl lg:text-7xl tracking-tighter">{children}</h2>
      </div>
      {aside}
    </Z.div>
  );
}

// Небольшая текстовая кнопка «Показать все»
function MoreLink({ open, onClick, total }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 pb-1 border-b border-white/20 hover:border-white/60 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
    >
      {open ? "Свернуть" : `Показать все (${total})`}
      <svg viewBox="0 0 12 12" className={`w-2.5 h-2.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`} fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M6 1v10M1 6h10" />
      </svg>
    </button>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [box, setBox] = useState({ items: [], index: null });
  const [showBar, setShowBar] = useState(false);
  const [allCourses, setAllCourses] = useState(false);
  const [allCases, setAllCases] = useState(false);
  const coursesRef = useRef(null);
  const casesRef = useRef(null);

  const courses = certificates.filter((c) => c.kind === "course");
  const awards = certificates.filter((c) => c.kind === "award");

  // Нижняя кнопка записи на телефоне: видна после первого экрана и прячется у блока контактов
  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const pastHero = window.scrollY > window.innerHeight * 0.8;
      const atContact = contact && contact.getBoundingClientRect().top < window.innerHeight;
      setShowBar(pastHero && !atContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Пока открыто мобильное меню, страница под ним не прокручивается
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // При сворачивании списка возвращаемся к его началу, чтобы не потеряться на странице
  const toggle = (open, set, ref) => {
    if (open && ref.current) ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    set(!open);
  };

  const certItems = useMemo(
    () => certificates.map((c) => ({ src: c.src, thumb: c.thumb, title: c.title, subtitle: `${c.org} · ${c.year}` })),
    []
  );

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

  const courseRow = (c, i) => (
    <Z.button
      key={c.id}
      onClick={() => openCert(c.id)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: i * 0.03 }}
      className="w-full text-left flex items-start gap-4 sm:gap-6 group py-4 border-t border-white/10"
    >
      <span className="text-[11px] sm:text-xs tabular-nums text-white/30 mt-0.5 w-9 flex-shrink-0">{c.year}</span>
      <span className="flex-1 min-w-0">
        <span className="block text-sm sm:text-[15px] leading-snug text-white/75 group-hover:text-white transition-colors">{c.title}</span>
        <span className="block text-xs text-white/30 mt-1.5">{c.org}</span>
      </span>
      <ZoomIcon className="w-4 h-4 flex-shrink-0 mt-0.5 text-white/20 group-hover:text-white/70 transition-colors" />
    </Z.button>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden antialiased">
      {/* Навигация */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-14 lg:h-16 flex justify-between items-center">
          <a href="#" onClick={() => setMenuOpen(false)} className="tracking-[0.3em] text-[11px] sm:text-xs text-white/80">
            ДЕВЛЕТМУРЗАЕВ
          </a>
          <div className="hidden lg:flex gap-10 text-xs tracking-[0.15em] uppercase text-white/50">
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} className="hover:text-white transition-colors duration-300">
                {label}
              </a>
            ))}
          </div>
          <button
            className="lg:hidden w-11 h-11 -mr-3 flex items-center justify-center"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Меню"
            aria-expanded={menuOpen}
          >
            <span className="relative w-6 h-3 block">
              <span className={`absolute left-0 right-0 h-px bg-white transition-all duration-300 ${menuOpen ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 right-0 h-px bg-white transition-all duration-300 ${menuOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </nav>

      {/* Мобильное меню */}
      <AnimatePresence>
        {menuOpen && (
          <Z.div
            className="lg:hidden fixed inset-0 z-40 bg-black pt-14 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Z.nav className="flex-1 flex flex-col justify-center px-5" initial="hidden" animate="visible" variants={stagger(0.05)}>
              {navLinks.map(([href, label], i) => (
                <Z.a key={href} href={href} onClick={() => setMenuOpen(false)} variants={fadeUp} className="flex items-baseline gap-4 py-3">
                  <span className="text-[10px] tabular-nums text-white/30">0{i + 1}</span>
                  <span className="text-[30px] leading-tight tracking-tight">{label}</span>
                </Z.a>
              ))}
            </Z.nav>
            <div className="px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] flex items-center justify-between border-t border-white/10 pt-5">
              <a href="tel:+79255522001" className="text-sm tracking-wide text-white/70">
                +7 925 552 20 01
              </a>
              <div className="flex gap-5">
                {messengers.map((s) => (
                  <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-5 h-5 text-white/60">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </Z.div>
        )}
      </AnimatePresence>

      {/* Первый экран */}
      <header className="relative">
        {/* Телефон и планшет: фото на весь экран, текст поверх */}
        <div className="lg:hidden absolute inset-0 overflow-hidden">
          <Z.img
            src="/img/main.jpg"
            alt=""
            fetchPriority="high"
            className="w-full h-full object-cover object-[50%_15%] contrast-125"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 via-40% to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-[100svh] min-h-[600px] lg:h-auto lg:min-h-screen lg:pt-28 lg:pb-16 flex lg:grid lg:grid-cols-2 lg:gap-16 items-end lg:items-center">
          <Z.div className="w-full pb-12 sm:pb-16 lg:pb-0" initial="hidden" animate="visible" variants={stagger(0.14)}>
            <Z.p variants={fadeUp} className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/55 mb-5 lg:mb-8">
              Врач-стоматолог · Москва
            </Z.p>
            <Z.h1 variants={fadeUp} className="text-[44px] leading-[0.95] sm:text-7xl tracking-tighter">
              Исламутдин
              <br />
              <span className="text-white/45">Девлетмурзаев</span>
            </Z.h1>
            <Z.div variants={fadeUp} className="h-px w-16 bg-white/25 mt-7 lg:mt-10" />
            <Z.p variants={fadeUp} className="mt-5 lg:mt-6 text-sm sm:text-base text-white/60 tracking-wide">
              Эндодонтия · Ортопедия · Терапия
            </Z.p>
            <Z.div variants={fadeUp} className="mt-9 lg:mt-12">
              <a href="#contact" className={`${outlineBtn} w-full sm:w-auto bg-black/20 backdrop-blur-sm`}>
                Записаться на приём
              </a>
            </Z.div>
          </Z.div>

          {/* Десктоп: крупное фото справа */}
          <Z.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="aspect-[4/5] max-h-[calc(100vh-9rem)] ml-auto relative overflow-hidden">
              <img src="/img/main.jpg" alt="Исламутдин Девлетмурзаев, врач-стоматолог" className="w-full h-full object-cover object-top contrast-125" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent via-35% to-transparent" />
            </div>
          </Z.div>
        </div>
      </header>

      {/* Экспертиза */}
      <section id="expertise" className={sectionPad}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle index="01">Клиническая экспертиза</SectionTitle>
          <Z.div className="grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-10 lg:gap-x-12" {...inView} variants={stagger(0.1)}>
            {expertise.map(([title, text], i) => (
              <Z.div
                key={title}
                variants={fadeUp}
                className="grid grid-cols-[2.5rem_1fr] sm:block py-6 sm:py-0 sm:pt-7 sm:pb-12 border-t border-white/15 last:border-b sm:last:border-b-0"
              >
                <span className="text-[11px] tabular-nums text-white/30 pt-1.5 sm:pt-0">0{i + 1}</span>
                <div className="sm:mt-10 lg:mt-14">
                  <h3 className="text-2xl lg:text-[28px] tracking-tight leading-none">{title}</h3>
                  <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-white/50 max-w-xs">{text}</p>
                </div>
              </Z.div>
            ))}
          </Z.div>
        </div>
      </section>

      {/* Опыт работы */}
      <section id="experience" className={`${sectionPad} border-t border-white/10`}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle index="02">Опыт работы</SectionTitle>
          <Z.div {...inView} variants={stagger(0.15)}>
            {experience.map((job) => (
              <Z.div
                key={job.place}
                variants={fadeUp}
                className="py-7 lg:py-12 border-t last:border-b border-white/10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12"
              >
                <div className="lg:col-span-4 flex items-center gap-3 mb-3 lg:mb-0">
                  {job.current && (
                    <span className="relative flex w-1.5 h-1.5">
                      <span className="absolute inline-flex w-full h-full rounded-full bg-white opacity-60 animate-ping" />
                      <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-white" />
                    </span>
                  )}
                  <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white/45">{job.period}</span>
                </div>
                <h3 className="lg:col-span-4 text-[28px] sm:text-4xl tracking-tight leading-none">{job.place}</h3>
                <p className="lg:col-span-4 lg:text-right text-sm sm:text-base text-white/50 mt-2 lg:mt-0">
                  {job.role} · {job.city}
                </p>
              </Z.div>
            ))}
          </Z.div>
        </div>
      </section>

      {/* Образование */}
      <section id="education" className={`${sectionPad} border-t border-white/10`}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle index="03">Образование</SectionTitle>
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">
            <Z.div className="lg:col-span-5 space-y-10 lg:space-y-14" {...inView} variants={stagger(0.15)}>
              {education.map((e) => (
                <Z.div key={e.label} variants={fadeUp}>
                  <div className={`${eyebrow} mb-4`}>
                    {e.label} <span className="text-white/60 ml-2">{e.years}</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl tracking-tight leading-snug">
                    {e.title[0]}
                    <br />
                    {e.title[1]}
                  </h3>
                  <p className="text-sm text-white/45 mt-2">{e.note}</p>
                </Z.div>
              ))}
            </Z.div>

            <div className="lg:col-span-7 space-y-14">
              <div ref={coursesRef} className="scroll-mt-20">
                <div className={`${eyebrow} mb-4`}>Повышение квалификации</div>
                <div className="border-b border-white/10">{(allCourses ? courses : courses.slice(0, 4)).map(courseRow)}</div>
                {courses.length > 4 && (
                  <div className="mt-6">
                    <MoreLink open={allCourses} total={courses.length} onClick={() => toggle(allCourses, setAllCourses, coursesRef)} />
                  </div>
                )}
              </div>
              {awards.length > 0 && (
                <div>
                  <div className={`${eyebrow} mb-4`}>Награды</div>
                  <div className="border-b border-white/10">{awards.map(courseRow)}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Клинические случаи */}
      <section id="portfolio" ref={casesRef} className={`${sectionPad} border-t border-white/10`}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle index="04">Клинические случаи</SectionTitle>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-12">
            {cases.map((c, i) => {
              const hidden = allCases ? "" : i >= 6 ? "hidden" : i >= 4 ? "hidden lg:block" : "";
              return (
                <Z.button
                  key={c.title + i}
                  onClick={() => openCase(i)}
                  className={`${hidden} group text-left`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`relative aspect-[4/3] overflow-hidden ${c.dark ? "bg-zinc-900" : "bg-white"}`}>
                    <img
                      src={`/img/cases/${c.slides[0]}-sm.jpg`}
                      alt={`${c.title}: фото до и после лечения`}
                      loading="lazy"
                      className="w-full h-full object-contain p-1.5 sm:p-3 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-3 sm:pt-4">
                    <div className="text-[10px] tracking-[0.15em] uppercase text-white/35 mb-1 truncate">
                      {c.tag}
                      {c.slides.length > 1 && <span className="text-white/25"> · {c.slides.length} фото</span>}
                    </div>
                    <div className="text-sm sm:text-lg leading-snug tracking-tight text-white/85 group-hover:text-white transition-colors line-clamp-2 min-h-[2lh]">{c.title}</div>
                  </div>
                </Z.button>
              );
            })}
          </div>

          {cases.length > 4 && (
            <div className={`mt-10 sm:mt-14 text-center ${cases.length <= 6 ? "lg:hidden" : ""}`}>
              <MoreLink open={allCases} total={cases.length} onClick={() => toggle(allCases, setAllCases, casesRef)} />
            </div>
          )}
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 bg-white text-black">
        <Z.div className="max-w-7xl mx-auto" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }}>
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            <Z.div className="space-y-8 sm:space-y-12" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}>
              <div>
                <h2 className="text-[34px] sm:text-5xl lg:text-7xl tracking-tighter mb-4 sm:mb-6">Консультация</h2>
                <div className="h-px bg-black/20 w-20 sm:w-32" />
              </div>
              <p className="text-sm sm:text-base leading-loose opacity-60 max-w-md">
                Запись на приём.
                <br />
                Консультация и диагностика.
                <br />
                Индивидуальный план лечения.
              </p>
              <div className="flex gap-6 sm:gap-8 pt-2 sm:pt-6">
                {messengers.map((s) => (
                  <Z.a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="w-8 h-8 sm:w-9 sm:h-9 opacity-80 hover:opacity-100 transition-opacity group"
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
            </Z.div>
          </div>
        </Z.div>
      </section>

      <footer className="py-8 sm:py-12 px-5 sm:px-8 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 opacity-30">
            <div className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-center md:text-left">© {new Date().getFullYear()} И.М. ДЕВЛЕТМУРЗАЕВ</div>
            <div className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-center md:text-right">ВРАЧ-СТОМАТОЛОГ</div>
          </div>
        </div>
      </footer>

      {/* Кнопка записи внизу экрана на телефоне */}
      <AnimatePresence>
        {showBar && !menuOpen && box.index === null && (
          <Z.div
            className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-black/85 backdrop-blur-xl border-t border-white/10 px-5 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <a href="#contact" className="block py-3.5 border border-white/30 text-center text-[11px] tracking-[0.25em] uppercase">
              Записаться на приём
            </a>
          </Z.div>
        )}
      </AnimatePresence>

      <Lightbox items={box.items} index={box.index} onClose={() => setBox((b) => ({ ...b, index: null }))} onChange={(i) => setBox((b) => ({ ...b, index: i }))} />
    </div>
  );
}
