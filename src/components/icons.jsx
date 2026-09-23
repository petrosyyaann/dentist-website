export const HeroIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
    <path d="M18 38h12M24 38v-6M18 18l6-6 6 6M30 18c0 4-2 6-6 6s-6-2-6-6M24 24v8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="14" y1="42" x2="34" y2="42" strokeLinecap="round" />
  </svg>
);

export const CrownIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
    <path d="M10 20l4 8h20l4-8-6 4-8-8-8 8-6-4z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 28h24v6c0 1-1 2-2 2H14c-1 0-2-1-2-2v-6z" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="20" r="2" />
    <circle cx="24" cy="16" r="2" />
    <circle cx="38" cy="20" r="2" />
  </svg>
);

export const ToothIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
    <path d="M18 14c0-3 2-6 6-6s6 3 6 6v8c0 8-2 16-4 18-1 1-2 2-2 2s-1-1-2-2c-2-2-4-10-4-18v-8z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 18c0-2 1.5-4 4-4s4 2 4 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArcIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
    <path d="M12 24c0-6 4-12 12-12s12 6 12 12" strokeLinecap="round" />
    <path d="M15 24c0-4 3-8 9-8s9 4 9 8" strokeLinecap="round" />
    <path d="M18 24c0-2 2-4 6-4s6 2 6 4" strokeLinecap="round" />
    <line x1="24" y1="12" x2="24" y2="8" strokeLinecap="round" />
  </svg>
);

export const CirclesIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
    <circle cx="24" cy="24" r="12" />
    <circle cx="24" cy="24" r="8" />
    <circle cx="24" cy="24" r="4" />
  </svg>
);

export const ZoomIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

const socialIconClass = "group-hover:scale-110 transition-transform";

export const socials = [
  {
    href: "https://api.whatsapp.com/send/?phone=79255522001&text&type=phone_number&app_absent=0",
    label: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={socialIconClass}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" strokeWidth="0" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: "https://t.me/IslamDEVLET05",
    label: "Telegram",
    icon: (
      <svg viewBox="2 2 20 20" fill="none" stroke="currentColor" strokeWidth="1" className={socialIconClass}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" strokeWidth="0" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: "https://vk.com/islamdevlet",
    label: "ВКонтакте",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={socialIconClass}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.84 11.15c.65.66 1.34 1.28 1.91 2 .25.32.49.65.66 1.03.23.53.02 1.11-.43 1.14h-1.44c-.73.06-1.31-.23-1.8-.72-.38-.38-.73-.78-1.08-1.18-.15-.17-.3-.33-.49-.45-.36-.24-.67-.17-.87.2-.2.38-.25.8-.27 1.22-.03.63-.21.8-.85.83-1.37.07-2.67-.14-3.88-.85-1.07-.63-1.9-1.48-2.61-2.47C3.55 12.1 2.78 10.18 2.1 8.22c-.15-.44-.04-.68.44-.69h1.44c.37.01.61.21.76.55.49 1.13 1.08 2.19 1.85 3.15.21.26.42.52.69.7.3.2.53.14.67-.2.09-.21.13-.44.15-.67.06-.77.07-1.54-.03-2.31-.07-.5-.35-.82-.85-.92-.25-.05-.22-.15-.09-.31.2-.24.39-.39.76-.39h2.82c.44.09.54.29.6.73l.01 3.13c0 .17.09.68.41.79.26.09.43-.11.58-.27.7-.73 1.2-1.59 1.65-2.49.2-.4.37-.82.54-1.23.12-.31.32-.47.67-.46h1.6c.05 0 .1 0 .15.01.44.07.56.25.43.68-.2.65-.6 1.19-1 1.73-.43.58-.89 1.14-1.31 1.73-.38.52-.35.78.1 1.23z" strokeWidth="0" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: "tel:+79255522001",
    label: "Телефон",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={socialIconClass}>
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "mailto:islam_dalgat05@mail.ru",
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={socialIconClass}>
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];
