import { useState } from "react";
import { Menu, Search, Phone, Sun, Moon, X, ShieldCheck } from "lucide-react";
import { usePrefs } from "./prefs";

export function Emblem({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path d="M24 3 6 9v13c0 11 7.6 19.6 18 23 10.4-3.4 18-12 18-23V9L24 3Z" className="fill-navy" />
      <path d="M24 7 10 11.7V22c0 8.7 5.8 15.6 14 18.6 8.2-3 14-9.9 14-18.6V11.7L24 7Z" className="fill-background" />
      <path d="M14 27c3-1 6 .5 8 3l2 2 2-2c2-2.5 5-4 8-3-1.5 4.5-5.5 7.6-10 9-4.5-1.4-8.5-4.5-10-9Z" className="fill-gov-green" />
      <path d="M24 13c-3.5 3-5 6.3-4.2 9.6.6 2.4 2.3 3.9 4.2 4.4 1.9-.5 3.6-2 4.2-4.4.8-3.3-.7-6.6-4.2-9.6Z" className="fill-saffron" />
    </svg>
  );
}

const nav = [
  ["Home", "#main"],
  ["Get Assistance", "#triage"],
  ["Relief Schemes", "#schemes"],
  ["Government Offices", "#offices"],
  ["Document Recovery", "#documents"],
  ["Alerts & Advisories", "#alert"],
  ["About", "#trust"],
];

export function UtilityBar() {
  const { size, setSize, hc, setHc, lang, setLang } = usePrefs();
  const btn = "px-1.5 py-0.5 rounded hover:bg-primary-foreground/15 focus-visible:outline-2 focus-visible:outline-saffron";
  return (
    <div className="bg-navy-deep text-primary-foreground text-xs">
      <div className="tricolor h-[3px]" />
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5">
        <div className="flex items-center gap-2 font-semibold tracking-wide">
          <span className="flex h-3 w-4 flex-col overflow-hidden rounded-[1px]" aria-hidden>
            <span className="flex-1 bg-tri-saffron" /><span className="flex-1 bg-background" /><span className="flex-1 bg-tri-green" />
          </span>
          <span className="hidden sm:inline">CITIZEN DISASTER ASSISTANCE PORTAL | MORADABAD DISTRICT</span>
          <span className="sm:hidden">MORADABAD DISTRICT</span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#main" className="sr-only focus:not-sr-only focus:rounded focus:bg-saffron focus:px-2">Skip to main content</a>
          <a href="#main" className="hidden md:inline hover:underline">Skip to main content</a>
          <span className="flex items-center gap-0.5 border-l border-primary-foreground/20 pl-3" aria-label="Text size">
            <button className={btn} onClick={() => setSize(Math.max(14, size - 1))} aria-label="Decrease text size">A-</button>
            <button className={btn} onClick={() => setSize(16)} aria-label="Default text size">A</button>
            <button className={btn} onClick={() => setSize(Math.min(20, size + 1))} aria-label="Increase text size">A+</button>
          </span>
          <button className={`${btn} flex items-center gap-1 border-l border-primary-foreground/20 pl-3`} onClick={() => setHc(!hc)} aria-pressed={hc} aria-label="Toggle high contrast">
            {hc ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />} Contrast
          </button>
          <div className="flex overflow-hidden rounded-full border border-primary-foreground/30" role="group" aria-label="Language">
            <button onClick={() => setLang("en")} aria-pressed={lang === "en"} className={`px-2 py-0.5 ${lang === "en" ? "bg-primary-foreground text-navy-deep" : ""}`}>English</button>
            <button onClick={() => setLang("hi")} aria-pressed={lang === "hi"} className={`px-2 py-0.5 ${lang === "hi" ? "bg-primary-foreground text-navy-deep" : ""}`}>हिंदी</button>
          </div>
          <a href="tel:112" className="flex items-center gap-1 rounded-full bg-alert px-2.5 py-0.5 font-semibold">
            <Phone className="h-3 w-3" /> Emergency: 112 / 1077
          </a>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = usePrefs();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        <a href="#main" className="flex items-center gap-3">
          <Emblem />
          <div className="leading-tight">
            <div className="font-serif text-[1.375rem] font-black text-navy">
              AapdaSahai <span className="font-sans text-base font-semibold text-muted-foreground">आपदा सहाय</span>
            </div>
            <div className="text-xs text-muted-foreground">{t("Disaster Assistance & Recovery Portal", "आपदा सहायता एवं पुनर्प्राप्ति पोर्टल")}</div>
          </div>
        </a>
        <div className="hidden h-10 border-l border-border pl-4 text-xs leading-tight text-muted-foreground xl:block">
          District Administration Initiative<br /><span className="font-semibold text-foreground">Moradabad, Uttar Pradesh</span>
        </div>
        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map(([l, h]) => (
            <a key={l} href={h} className="rounded px-2.5 py-2 text-sm font-medium text-foreground hover:bg-muted hover:text-gov-green">{l}</a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <a href="#search" aria-label="Search" className="rounded p-2 hover:bg-muted"><Search className="h-5 w-5" /></a>
          <button className="hidden rounded-full bg-gov-green px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-gov-green-hover sm:block">Sign In →</button>
          <button className="rounded p-2 hover:bg-muted lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-4 py-2 lg:hidden">
          {nav.map(([l, h]) => (
            <a key={l} href={h} onClick={() => setOpen(false)} className="block border-b border-border py-3 text-sm font-medium last:border-0">{l}</a>
          ))}
          <button className="my-3 w-full rounded-full bg-gov-green py-2 text-sm font-medium text-primary-foreground">Sign In →</button>
        </nav>
      )}
    </header>
  );
}

export { ShieldCheck };
