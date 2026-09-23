import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * Полноэкранный просмотр изображений.
 * items: [{ src, title, subtitle }]
 * Управление: стрелки ← →, Esc, свайп на телефоне, клик по фону — закрыть.
 */
export default function Lightbox({ items, index, onClose, onChange }) {
  const open = index !== null && index >= 0;
  const touch = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const count = items.length;
  const item = open ? items[index] : null;

  const go = (step) => {
    if (!open) return;
    onChange((index + step + count) % count);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, index]);

  // Предзагрузка соседних изображений
  useEffect(() => {
    if (!open || count < 2) return;
    [1, -1].forEach((s) => {
      const img = new Image();
      img.src = items[(index + s + count) % count].src;
    });
  }, [open, index]);

  useEffect(() => setLoaded(false), [index]);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    if (!touch.current || e.touches.length > 0) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
    else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="lightbox"
          className="fixed inset-0 z-[60] bg-black flex flex-col text-white select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          {/* Верхняя панель */}
          <div className="flex items-start justify-between gap-4 px-4 sm:px-8 pt-4 sm:pt-6 pb-3">
            <div className="min-w-0">
              <div className="text-[10px] sm:text-xs tracking-[0.25em] uppercase opacity-40 mb-1">
                {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </div>
              <div className="text-sm sm:text-base leading-snug">{item.title}</div>
              {item.subtitle && <div className="text-xs sm:text-sm opacity-50 mt-1">{item.subtitle}</div>}
            </div>
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <a
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                aria-label="Открыть в полном размере"
                title="Открыть в полном размере"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6 sm:w-7 sm:h-7">
                  <path d="M14 4h6v6M20 4l-8 8M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <button
                onClick={onClose}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                aria-label="Закрыть"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8 sm:w-10 sm:h-10">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Изображение */}
          <div
            className="relative flex-1 min-h-0 flex items-center justify-center px-2 sm:px-20"
            onClick={(e) => e.target === e.currentTarget && onClose()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-8 h-8 border border-white/20 border-t-white/70 rounded-full animate-spin" />
              </div>
            )}
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={item.src}
                src={item.src}
                alt={item.title}
                onLoad={() => setLoaded(true)}
                className="max-w-full max-h-full object-contain"
                draggable={false}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: loaded ? 1 : 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            </AnimatePresence>

            {count > 1 && (
              <>
                <NavButton side="left" onClick={() => go(-1)} />
                <NavButton side="right" onClick={() => go(1)} />
              </>
            )}
          </div>

          {/* Миниатюры */}
          {count > 1 && (
            <div className="px-4 sm:px-8 py-3 sm:py-4">
              <div className="flex gap-2 overflow-x-auto justify-start sm:justify-center pb-1">
                {items.map((it, i) => (
                  <button
                    key={it.src}
                    onClick={() => onChange(i)}
                    className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 overflow-hidden border transition-all duration-300 ${
                      i === index ? "border-white opacity-100" : "border-white/10 opacity-40 hover:opacity-80"
                    }`}
                    aria-label={`Показать ${i + 1}`}
                  >
                    <img src={it.thumb || it.src} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function NavButton({ side, onClick }) {
  const left = side === "left";
  return (
    <button
      onClick={onClick}
      className={`hidden sm:flex absolute top-1/2 -translate-y-1/2 ${
        left ? "left-3 lg:left-6" : "right-3 lg:right-6"
      } w-12 h-12 lg:w-14 lg:h-14 items-center justify-center border border-white/20 bg-black/40 backdrop-blur text-white/70 hover:text-white hover:border-white/60 transition-colors`}
      aria-label={left ? "Предыдущее" : "Следующее"}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6">
        <path d={left ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
