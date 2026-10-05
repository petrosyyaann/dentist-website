import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";

/** Shared viewer: case slides use a minimal layout; certificates retain details. */
export default function Lightbox({ items, index, onClose, onChange, minimal = false }) {
  const open = index !== null && index >= 0 && index < items.length;
  const touch = useRef(null);
  const dialog = useRef(null);
  const count = items.length;
  const item = open ? items[index] : null;
  const go = (step) => onChange((index + step + count) % count);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") { event.preventDefault(); onClose(); }
      if (event.key === "ArrowRight") { event.preventDefault(); go(1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); go(-1); }
      if (event.key === "Tab") {
        const controls = [...dialog.current.querySelectorAll('button, a[href]')]
          .filter((el) => el.getClientRects().length && !el.disabled);
        const first = controls[0], last = controls[controls.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog.current)) {
          event.preventDefault(); last?.focus();
        } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === dialog.current)) {
          event.preventDefault(); first?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, count, onClose, onChange]);

  const onTouchStart = (event) => {
    touch.current = event.touches.length === 1
      ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
  };
  const onTouchEnd = (event) => {
    if (!touch.current || event.touches.length || !event.changedTouches.length) return;
    const end = event.changedTouches[0];
    const dx = end.clientX - touch.current.x, dy = end.clientY - touch.current.y;
    touch.current = null;
    if (count > 1 && Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.2) go(dx < 0 ? 1 : -1);
  };

  if (typeof document === "undefined") return null;
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div ref={dialog} tabIndex={-1} key="lightbox"
          className="fixed inset-0 z-[60] bg-black flex flex-col text-white lightbox outline-none"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }} role="dialog" aria-modal="true" aria-label={item.title}>
          <div className="flex items-center justify-between gap-3 px-3 sm:px-5 shrink-0">
            <div className="min-w-0">
              <div className="text-[11px] tracking-[0.15em] text-white/45 tabular-nums" role="status" aria-live="polite" aria-atomic="true">
                {index + 1} / {count}
              </div>
              {!minimal && <>
                <div className="text-sm leading-snug">{item.title}</div>
                {item.subtitle && <div className="text-xs text-white/50">{item.subtitle}</div>}
              </>}
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <a href={item.src} target="_blank" rel="noopener noreferrer" aria-label="Открыть в полном размере"
                className="w-11 h-11 flex items-center justify-center text-white/50 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-5 h-5" aria-hidden="true">
                  <path d="M14 4h6v6M20 4l-8 8M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5" />
                </svg>
              </a>
              <button onClick={onClose} aria-label="Закрыть"
                className="w-11 h-11 flex items-center justify-center text-white/60 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6" aria-hidden="true">
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-1 min-h-0 gap-1 px-1 sm:px-2">
            {count > 1 && <div className="hidden sm:flex items-center"><NavButton side="left" onClick={() => go(-1)} /></div>}
            <div className="relative flex-1 min-w-0 min-h-0"
              onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} onTouchCancel={() => { touch.current = null; }}>
              <LightboxImage key={item.src} item={item} />
            </div>
            {count > 1 && <div className="hidden sm:flex items-center"><NavButton side="right" onClick={() => go(1)} /></div>}
          </div>
          {count > 1 && <div className="sm:hidden flex justify-center items-center gap-10 py-1 shrink-0">
            <NavButton side="left" onClick={() => go(-1)} />
            <NavButton side="right" onClick={() => go(1)} />
          </div>}
          {!minimal && count > 1 && (
            <div className="px-3 py-2 shrink-0 flex gap-2 overflow-x-auto">
              {items.map((slide, i) => <button key={slide.src} onClick={() => onChange(i)}
                aria-label={`Показать ${i + 1}`} aria-current={i === index ? "true" : undefined}
                className={`shrink-0 w-12 h-12 border ${i === index ? "border-white" : "border-white/20 opacity-50"}`}>
                <img src={slide.thumb || slide.src} alt="" loading="lazy" className="w-full h-full object-contain" />
              </button>)}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>, document.body
  );
}

function NavButton({ side, onClick }) {
  const left = side === "left";
  return <button onClick={onClick} aria-label={left ? "Предыдущее" : "Следующее"}
    className="w-12 h-12 flex items-center justify-center text-white/55 hover:text-white transition-colors">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6" aria-hidden="true">
      <path d={left ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>;
}

// A visible preview avoids blank frames during slow or cached image loads.
function LightboxImage({ item }) {
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const src = attempt ? `${item.src}?retry=${attempt}` : item.src;
  return <div className="absolute inset-0 flex flex-col lightbox-image">
    <div className="relative flex-1 min-h-0">
      <img src={item.thumb || item.src} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-contain" />
      {!failed && <img key={src} src={src} alt={item.title} draggable={false}
        onError={() => setFailed(true)} className="absolute inset-0 w-full h-full object-contain" />}
    </div>
    {failed && <button className="shrink-0 text-white/70 text-xs py-3" onClick={() => { setFailed(false); setAttempt((n) => n + 1); }}>
      Фото не загрузилось — повторить
    </button>}
  </div>;
}
