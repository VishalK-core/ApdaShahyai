import { useState } from "react";
import { Search, ChevronDown, BadgeCheck, Siren, MapPin, MessageCircle, Share2 } from "lucide-react";
import hero from "@/assets/hero-relief.jpg";
import { categories, trending, stats } from "./data";
import { usePrefs } from "./prefs";
import { Emblem } from "./Header";

export function Hero() {
  const [q, setQ] = useState("");
  const { t } = usePrefs();
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-primary-foreground" aria-labelledby="hero-title">
      <img src={hero} alt="" width={1920} height={1088} className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="hero-overlay absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-14 md:pt-20">
        <p className="text-xs font-bold tracking-[0.2em] text-tri-saffron">#DISASTERASSISTANCE / #CITIZENRECOVERY / #MORADABAD</p>
        <h1 id="hero-title" className="mt-4 max-w-3xl text-3xl font-black leading-tight md:text-5xl">
          {t("Help After Disaster. Clear Guidance for Recovery.", "आपदा के बाद सहायता। पुनर्प्राप्ति का सही मार्गदर्शन।")}
        </h1>
        <p className="mt-2 font-sans text-lg font-semibold text-primary-foreground/85">
          {t("आपदा के बाद सहायता • पुनर्प्राप्ति का सही मार्गदर्शन", "Help After Disaster • Clear Guidance for Recovery")}
        </p>
        <p className="mt-4 max-w-2xl text-base text-primary-foreground/85">
          Tell us what happened in plain language. We connect you directly with eligible government relief schemes, lost document recovery, nearest administrative offices, and verified recovery procedures.
        </p>

        <form id="search" onSubmit={(e) => e.preventDefault()} className="mt-8 flex max-w-4xl flex-col overflow-hidden rounded-md bg-background shadow-card sm:flex-row" role="search">
          <label className="relative flex items-center border-b border-border sm:border-b-0 sm:border-r">
            <span className="sr-only">Category</span>
            <select className="h-14 appearance-none bg-transparent pl-4 pr-9 text-sm font-semibold text-navy outline-none">
              {categories.map((c) => <option key={c}>{c}</option>)}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 h-4 w-4 text-muted-foreground" />
          </label>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Search"
            placeholder="Search for schemes, relief, document help, or describe your situation..."
            className="h-14 flex-1 bg-transparent px-4 text-foreground outline-none placeholder:text-muted-foreground"
          />
          <button className="flex h-14 items-center justify-center gap-2 bg-saffron px-8 font-semibold text-primary-foreground hover:bg-saffron-hover">
            <Search className="h-4 w-4" /> Search
          </button>
        </form>
        <div className="mt-4 flex max-w-4xl flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold">Trending Searches :</span>
          {trending.map((s) => (
            <button key={s} onClick={() => setQ(s)} className="rounded-full border border-primary-foreground/35 bg-primary-foreground/10 px-3 py-1 text-xs hover:bg-primary-foreground/20">{s}</button>
          ))}
        </div>

        <figure className="mt-12 flex max-w-2xl items-start gap-4 rounded-md border-l-4 border-tri-saffron bg-navy-deep/80 p-5 backdrop-blur">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-background"><Emblem className="h-9 w-9" /></div>
          <div>
            <blockquote className="font-serif text-sm italic leading-relaxed">
              “Our priority is ensuring that every affected family receives immediate relief, verified compensation, and complete administrative support without bureaucratic delays.”
            </blockquote>
            <figcaption className="mt-2 text-xs text-primary-foreground/80">
              <span className="font-bold text-primary-foreground">District Disaster Management Authority (DDMA), Moradabad</span> •{" "}
              <BadgeCheck className="inline h-3.5 w-3.5 text-tri-green" /> Verified Advisory (Last updated: Today)
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}

export function SideDock() {
  const items = [
    { i: Siren, l: "Emergency SOS / Helplines", h: "tel:112", c: "bg-alert" },
    { i: MapPin, l: "Find Nearest Relief Shelter", h: "#alert", c: "bg-gov-green" },
    { i: MessageCircle, l: "AapdaSahai Citizen Assistant", h: "#triage", c: "bg-navy" },
    { i: Share2, l: "Share Portal / Alerts", h: "#", c: "bg-saffron" },
  ];
  return (
    <aside className="fixed right-0 top-1/3 z-30 hidden flex-col md:flex" aria-label="Quick access">
      {items.map(({ i: I, l, h, c }) => (
        <a key={l} href={h} aria-label={l} title={l} className={`group flex items-center justify-end ${c} text-primary-foreground first:rounded-tl-md last:rounded-bl-md`}>
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold transition-all group-hover:max-w-52 group-hover:pl-3">{l}</span>
          <span className="p-3"><I className="h-5 w-5" /></span>
        </a>
      ))}
    </aside>
  );
}

export function StatsStrip() {
  return (
    <section aria-label="What this prototype covers" className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border md:grid-cols-3 lg:grid-cols-6 lg:divide-x">
        {stats.map((s) => (
          <div key={s.l} className="px-4 py-6 text-center">
            <div className="font-serif text-2xl font-black text-navy">{s.v}</div>
            <div className="mt-1 text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
