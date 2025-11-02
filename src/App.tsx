import { useState } from 'react';
import { motion } from "framer-motion";
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { ToothIcon, MicroscopeIcon, CrownIcon } from './assets/icons';
import { galleryImages, clinicImages, socials } from './components/consts'

export default function App() {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Minimal Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-5 flex justify-between items-center">
          <div className="tracking-[0.3em] text-[10px] sm:text-xs opacity-70">
            ДЕВЛЕТМУРЗАЕВ
          </div>
          <div className="hidden md:flex gap-6 lg:gap-10 text-xs tracking-[0.15em] opacity-50">
            <a href="#philosophy" className="hover:opacity-100 transition-opacity duration-300">ПОДХОД</a>
            <a href="#expertise" className="hover:opacity-100 transition-opacity duration-300">ЭКСПЕРТИЗА</a>
            <a href="#education" className="hover:opacity-100 transition-opacity duration-300">ОБРАЗОВАНИЕ</a>
            <a href="#contact" className="hover:opacity-100 transition-opacity duration-300">КОНТАКТ</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Bold & Artistic */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24 pb-12 sm:pb-0 relative">

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 sm:gap-16 items-center relative z-10">
          <motion.div
            className="space-y-10 sm:space-y-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Decorative Element */}
            <motion.div
              className="flex items-center gap-4 sm:gap-6"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 border border-white/20">
                <MicroscopeIcon />
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
            </motion.div>

            <motion.div
              className="space-y-6 sm:space-y-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >
              <motion.div className="space-y-3" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: .7 } } }}>
                <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase opacity-40">
                  Независимый практикующий врач
                </p>
                <h1 className="space-y-1">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl tracking-tighter">
                    Исламутдин
                  </div>
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl tracking-tighter opacity-50">
                    Девлетмурзаев
                  </div>
                </h1>
              </motion.div>

              <motion.div className="max-w-lg space-y-4 sm:space-y-6" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: .7 } } }}>
                <div className="h-px bg-white/20 w-16 sm:w-24"></div>
                <p className="text-sm sm:text-base leading-relaxed opacity-70">
                  Современная стоматология<br />
                  как искусство точности
                </p>
                <p className="text-xs sm:text-sm leading-loose opacity-50">
                  Эндодонтия • Ортопедия • Эстетическая реставрация
                </p>
              </motion.div>

              <motion.div className="pt-4 sm:pt-6" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: .7 } } }}>
                <a href="#contact">
                  <button className="group relative px-6 sm:px-10 py-4 sm:py-5 border border-white/30 hover:bg-white hover:text-black transition-all duration-500 w-full sm:w-auto">
                    <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase">Записаться на приём</span>
                  </button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Portrait with Artistic Treatment */}
          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <div className="absolute -inset-2 sm:-inset-4 border border-white/10"></div>
            <div className="aspect-[3/4] relative overflow-hidden">
              <ImageWithFallback
                src="/main.jpg"
                alt="Девлетмурзаев Исламутдин"
                className="w-full h-full object-cover contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            {/* Floating Dental Icons */}
            <motion.div
              className="hidden sm:block absolute -right-4 sm:-right-8 top-1/4 w-16 sm:w-20 h-16 sm:h-20 border border-white/20 bg-black/50 backdrop-blur p-3 sm:p-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <CrownIcon />
            </motion.div>

            <motion.div
              className="hidden sm:block absolute -left-4 sm:-left-8 bottom-1/4 w-16 sm:w-20 h-16 sm:h-20 border border-white/20 bg-black/50 backdrop-blur p-3 sm:p-4"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <ToothIcon />
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Philosophy Grid - Bold Visual */}
      <section id="philosophy" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">

          <motion.div
            className="mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tighter mb-4 sm:mb-6">Философия практики</h2>
            <div className="h-px bg-white/20 w-20 sm:w-32"></div>
          </motion.div>

          {/* Detailed Philosophy */}
          <motion.div
            className="grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 max-w-6xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            <motion.div
              className="space-y-6 sm:space-y-8"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: .8, ease: "easeOut" } } }}
            >
              <motion.div className="border-l border-white/20 pl-4 sm:pl-6" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: .8 } } }}>
                <h3 className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 tracking-tight">Работа под увеличением</h3>
                <p className="text-xs sm:text-sm leading-loose opacity-60">
                  Бинокуляры на каждой процедуре.<br />
                  Точность на микронном уровне.
                </p>
              </motion.div>

              <motion.div className="border-l border-white/20 pl-4 sm:pl-6" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: .8 } } }}>
                <h3 className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 tracking-tight">Коффердам-изоляция</h3>
                <p className="text-xs sm:text-sm leading-loose opacity-60">
                  Стерильность рабочего поля.<br />
                  Предсказуемость результата.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6 sm:space-y-8"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: .8, ease: "easeOut", delay: 0.1 } } }}
            >
              <motion.div className="border-l border-white/20 pl-4 sm:pl-6" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: .8 } } }}>
                <h3 className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 tracking-tight">Работа в четыре руки</h3>
                <p className="text-xs sm:text-sm leading-loose opacity-60">
                  Оптимизация каждого этапа.<br />
                  Максимальный комфорт.
                </p>
              </motion.div>

              <motion.div className="border-l border-white/20 pl-4 sm:pl-6" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: .8 } } }}>
                <h3 className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 tracking-tight">Доказательная медицина</h3>
                <p className="text-xs sm:text-sm leading-loose opacity-60">
                  Научно подтверждённые методики.<br />
                  Современные международные стандарты.
                </p>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </section>


      {/* Clinical Expertise - Large Format */}
      <section id="expertise" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          <motion.div
            className="mb-12 sm:mb-16 lg:mb-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tighter mb-4 sm:mb-6">Клиническая экспертиза</h2>
            <div className="h-px bg-white/20 w-20 sm:w-32"></div>
          </motion.div>

          <div className="space-y-0">

            {/* Endodontics */}
            <motion.div
              className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 border-t border-white/10 py-8 sm:py-12 lg:py-16 hover:bg-zinc-950 transition-colors duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .9, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="lg:col-span-2">
                <div className="text-[10px] sm:text-xs tracking-[0.3em] uppercase opacity-30">01</div>
              </div>
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .8, delay: .1 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-4 sm:mb-6">
                  <ToothIcon />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-3 sm:mb-4">Эндодонтия</h3>
                <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase opacity-40">
                  Лечение корневых каналов
                </p>
              </motion.div>
              <motion.div
                className="lg:col-span-7 space-y-4 sm:space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .8, delay: .15 }}
              >
                <p className="text-sm sm:text-base leading-loose opacity-70">
                  Лечение корневых каналов под увеличением.<br />
                  Современные никель-титановые инструменты.<br />
                  Термопластическая обтурация.
                </p>
                <div className="text-xs sm:text-sm opacity-50 pt-2 sm:pt-4 space-y-2">
                  <div>→ Сложная анатомия</div>
                  <div>→ Повторное лечение</div>
                  <div>→ Фотопротокол этапов</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Prosthetics */}
            <motion.div
              className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 border-t border-white/10 py-8 sm:py-12 lg:py-16 hover:bg-zinc-950 transition-colors duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .9, ease: "easeOut", delay: .1 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="lg:col-span-2">
                <div className="text-[10px] sm:text-xs tracking-[0.3em] uppercase opacity-30">02</div>
              </div>
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .8, delay: .2 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-4 sm:mb-6">
                  <CrownIcon />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-3 sm:mb-4">Ортопедия</h3>
                <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase opacity-40">
                  Протезирование
                </p>
              </motion.div>
              <motion.div
                className="lg:col-span-7 space-y-4 sm:space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .8, delay: .25 }}
              >
                <p className="text-sm sm:text-base leading-loose opacity-70">
                  Несъёмное и съёмное протезирование.<br />
                  Цифровые протоколы: сканирование, CAD/CAM.<br />
                  Работа с керамикой и диоксидом циркония.
                </p>
                <div className="text-xs sm:text-sm opacity-50 pt-2 sm:pt-4 space-y-2">
                  <div>→ Виниры и вкладки</div>
                  <div>→ Коронки и мосты</div>
                  <div>→ Протезирование на имплантатах</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Restorative */}
            <motion.div
              className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 border-t border-white/10 py-8 sm:py-12 lg:py-16 hover:bg-zinc-950 transition-colors duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .9, ease: "easeOut", delay: .15 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="lg:col-span-2">
                <div className="text-[10px] sm:text-xs tracking-[0.3em] uppercase opacity-30">03</div>
              </div>
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .8, delay: .25 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-4 sm:mb-6">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
                    <path d="M12 24c0-6 4-12 12-12s12 6 12 12" strokeLinecap="round" />
                    <path d="M15 24c0-4 3-8 9-8s9 4 9 8" strokeLinecap="round" />
                    <path d="M18 24c0-2 2-4 6-4s6 2 6 4" strokeLinecap="round" />
                    <line x1="24" y1="12" x2="24" y2="8" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-3 sm:mb-4">Эстетика</h3>
                <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase opacity-40">
                  Реставрация улыбки
                </p>
              </motion.div>
              <motion.div
                className="lg:col-span-7 space-y-4 sm:space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .8, delay: .3 }}
              >
                <p className="text-sm sm:text-base leading-loose opacity-70">
                  Прямые композитные реставрации.<br />
                  Композитные виниры.<br />
                  Минимально инвазивная стоматология.
                </p>
                <div className="text-xs sm:text-sm opacity-50 pt-2 sm:pt-4 space-y-2">
                  <div>→ Многослойная техника</div>
                  <div>→ Коррекция формы и цвета</div>
                  <div>→ Естественная прозрачность</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Therapeutic */}
            <motion.div
              className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 border-t border-b border-white/10 py-8 sm:py-12 lg:py-16 hover:bg-zinc-950 transition-colors duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .9, ease: "easeOut", delay: .2 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="lg:col-span-2">
                <div className="text-[10px] sm:text-xs tracking-[0.3em] uppercase opacity-30">04</div>
              </div>
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .8, delay: .35 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-4 sm:mb-6">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
                    <circle cx="24" cy="24" r="12" strokeLinecap="round" />
                    <circle cx="24" cy="24" r="8" strokeLinecap="round" />
                    <circle cx="24" cy="24" r="4" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-3 sm:mb-4">Терапия</h3>
                <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase opacity-40">
                  Консервативное лечение
                </p>
              </motion.div>
              <motion.div
                className="lg:col-span-7 space-y-4 sm:space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .8, delay: .4 }}
              >
                <p className="text-sm sm:text-base leading-loose opacity-70">
                  Лечение кариеса с применением коффердама.<br />
                  Профессиональная гигиена полости рта.<br />
                  Профилактика стоматологических заболеваний.
                </p>
                <div className="text-xs sm:text-sm opacity-50 pt-2 sm:pt-4 space-y-2">
                  <div>→ Диагностика на ранних стадиях</div>
                  <div>→ Адгезивные протоколы</div>
                  <div>→ Индивидуальная профилактика</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* Education - Structured */}
      <section id="education" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto">

          <motion.div
            className="mb-12 sm:mb-16 lg:mb-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tighter mb-4 sm:mb-6">Образование</h2>
            <div className="h-px bg-white/20 w-20 sm:w-32"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">

            {/* Left Column */}
            <motion.div
              className="space-y-10 sm:space-y-12 lg:space-y-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2 }
                }
              }}
            >
              <motion.div
                className="border-l-2 border-white/20 pl-4 sm:pl-6 lg:pl-8"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: .9, ease: "easeOut" } } }}
              >
                <div className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase opacity-30 mb-4 sm:mb-6">
                  Базовое образование
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 tracking-tight">
                  Тверской государственный<br />медицинский университет
                </h3>
                <p className="text-xs sm:text-sm opacity-50">Специальность: Стоматология</p>
              </motion.div>

              <motion.div
                className="border-l-2 border-white/20 pl-4 sm:pl-6 lg:pl-8"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: .9, ease: "easeOut", delay: .1 } } }}
              >
                <div className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase opacity-30 mb-4 sm:mb-6">
                  Ординатура
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 tracking-tight">
                  НИИ им. Семашко
                </h3>
                <p className="text-xs sm:text-sm opacity-50">Специальность: Ортопедическая стоматология</p>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .9, ease: "easeOut", delay: .2 }}
            >
              <div className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase opacity-30 mb-6 sm:mb-8">
                Повышение квалификации
              </div>

              <motion.div
                className="space-y-4 sm:space-y-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.12 }
                  }
                }}
              >

                <motion.div
                  className="flex items-start gap-3 sm:gap-4 group"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: .7 } } }}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover:bg-white transition-colors"></div>
                  <p className="text-xs sm:text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                    Курс «ПРОСТО ЭНДО»
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 sm:gap-4 group"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: .7 } } }}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover:bg-white transition-colors"></div>
                  <p className="text-xs sm:text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                    Ортопедия Step by Step
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 sm:gap-4 group"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: .7 } } }}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover:bg-white transition-colors"></div>
                  <p className="text-xs sm:text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                    Прямые реставрации и композитные виниры
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 sm:gap-4 group"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: .7 } } }}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover:bg-white transition-colors"></div>
                  <p className="text-xs sm:text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                    Имплантационный протокол Nobel
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 sm:gap-4 group"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: .7 } } }}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover:bg-white transition-colors"></div>
                  <p className="text-xs sm:text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                    Терапевтическая стоматология
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 sm:gap-4 group"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: .7 } } }}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover:bg-white transition-colors"></div>
                  <p className="text-xs sm:text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                    Имплантология: основы и протоколы
                  </p>
                </motion.div>

              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* Portfolio Section with Gallery */}
      <section id="portfolio" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          {!showGallery ? (
            <motion.div
              className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                className="space-y-8 sm:space-y-12"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .9, ease: "easeOut", delay: .1 }}
              >
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tighter mb-4 sm:mb-6">Клинические случаи</h2>
                  <div className="h-px bg-white/20 w-20 sm:w-32"></div>
                </div>

                <p className="text-sm sm:text-base leading-loose opacity-60 max-w-lg">
                  Фотопротокол лечения.<br />
                  Документация всех этапов работы.<br />
                  До и после.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: .97 }}
                  onClick={() => setShowGallery(true)}
                  className="group relative px-6 sm:px-10 py-4 sm:py-5 border border-white/30 hover:bg-white hover:text-black transition-all duration-500 w-full sm:w-auto"
                >
                  <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase">Смотреть портфолио</span>
                </motion.button>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-3 sm:gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: .12 }
                  }
                }}
              >
                {clinicImages.map((value, i) => (
                  <motion.div
                    key={i}
                    className="aspect-square overflow-hidden"
                    variants={{ hidden: { opacity: 0, scale: .9 }, visible: { opacity: 1, scale: 1, transition: { duration: .6 } } }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <ImageWithFallback
                      src={value}
                      alt="Case"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              className="space-y-8 sm:space-y-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .9, ease: "easeOut" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tighter mb-4 sm:mb-6">Клинические случаи</h2>
                  <div className="h-px bg-white/20 w-20 sm:w-32"></div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: .97 }}
                  onClick={() => {
                    setShowGallery(false);
                    setSelectedImage(null);
                  }}
                  className="group relative px-6 sm:px-10 py-4 sm:py-5 border border-white/30 hover:bg-white hover:text-black transition-all duration-500 w-full sm:w-auto"
                >
                  <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase">Закрыть галерею</span>
                </motion.button>
              </div>

              {/* Gallery Grid */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: .1 }
                  }
                }}
              >
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className="aspect-square overflow-hidden border border-white/10 cursor-pointer group relative"
                    variants={{ hidden: { opacity: 0, scale: .9 }, visible: { opacity: 1, scale: 1, transition: { duration: .5 } } }}
                    whileHover={{ scale: 1.04 }}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`Клинический случай ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="w-8 h-8 sm:w-12 sm:h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* External Portfolio Link */}
              <motion.div
                className="pt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .8, delay: .2 }}
              >
                <p className="text-xs sm:text-sm opacity-50 mb-6">Полное портфолио доступно на Tilda</p>
                <a
                  href="https://devletmurzaev.tilda.ws/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: .97 }}
                    className="group relative px-6 sm:px-10 py-4 sm:py-5 border border-white/30 hover:bg-white hover:text-black transition-all duration-500 w-full sm:w-auto"
                  >
                    <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase">Открыть внешнее портфолио</span>
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>


      {/* Lightbox for selected image */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .5, ease: "easeOut" }}
        >
          <motion.button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white transition-colors"
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .4, delay: .1 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8 sm:w-12 sm:h-12">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </motion.button>

          <motion.div
            className="max-w-5xl w-full"
            initial={{ scale: .85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: .5, ease: "easeOut", delay: .05 }}
          >
            <ImageWithFallback
              src={selectedImage}
              alt="Клинический случай"
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Contact - Bold */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white text-black">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            <motion.div
              className="space-y-8 sm:space-y-12"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .9, ease: "easeOut", delay: .1 }}
            >
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tighter mb-4 sm:mb-6">Консультация</h2>
                <div className="h-px bg-black/20 w-20 sm:w-32"></div>
              </div>

              <p className="text-sm sm:text-base leading-loose opacity-60 max-w-md">
                Запись на приём.<br />
                Консультация и диагностика.<br />
                Индивидуальный план лечения.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
                {/* Socials */}
                {socials.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: .95 }}
                    transition={{ duration: .25 }}
                    className="w-12 h-12 sm:w-16 sm:h-16 border border-black/10 hover:border-black/40 hover:bg-black/5 transition-all duration-300 p-2 sm:p-3 group"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="space-y-10 sm:space-y-12 lg:space-y-16"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .9, ease: "easeOut", delay: .2 }}
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase opacity-40">
                  Телефон
                </div>
                <a
                  href="tel:+79255522001"
                  className="block text-2xl sm:text-3xl tracking-tight hover:opacity-60 transition-opacity"
                >
                  +7 925 552 20 01
                </a>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase opacity-40">
                  Email
                </div>
                <a
                  href="mailto:islam_dalgat05@mail.ru"
                  className="block text-base sm:text-lg lg:text-xl tracking-tight hover:opacity-60 transition-opacity break-all"
                >
                  islam_dalgat05@mail.ru
                </a>
              </div>

              <div className="pt-6 sm:pt-8 border-t border-black/10">
                <div className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase opacity-40 mb-3 sm:mb-4">
                  География практики
                </div>
                <div className="text-base sm:text-lg">
                  <span className="opacity-60">Москва</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>


      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 opacity-30">
            <div className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-center md:text-left">
              © 2025 И.М. ДЕВЛЕТМУРЗАЕВ
            </div>
            <div className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-center md:text-right">
              НЕЗАВИСИМЫЙ ПРАКТИКУЮЩИЙ ВРАЧ-СТОМАТОЛОГ
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
