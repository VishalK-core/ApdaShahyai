import { useState } from "react";
import {
  AlertTriangle, X, Home, IndianRupee, FileText, HeartPulse, Building2, Waves, Users, ListChecks, ArrowRight, Mic, Sparkles,
} from "lucide-react";

export function AlertBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <section id="alert" role="alert" className="border-y-2 border-alert bg-alert/5">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-alert" />
          <div>
            <span className="rounded bg-alert px-2 py-0.5 text-xs font-bold tracking-wide text-primary-foreground">MODERATE FLOOD ADVISORY • RAMGANGA BASIN (MORADABAD)</span>
            <p className="mt-1.5 text-sm text-foreground">
              Ramganga river level 1.2 m below danger mark and rising. 2 SDRF teams deployed at Katghar & Lakri Fazalpur. 14 shelters active across Sadar and Kanth.
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Updated 15 mins ago • Source: UP State Disaster Management Authority (UPSDMA)</p>
          </div>
        </div>
        <div className="flex items-center gap-2 md:ml-auto">
          <a href="#offices" className="whitespace-nowrap rounded border border-alert px-4 py-2 text-sm font-semibold text-alert hover:bg-alert hover:text-primary-foreground">View Safe Shelters & Advisory Details →</a>
          <button onClick={() => setOpen(false)} aria-label="Dismiss advisory" className="rounded p-2 hover:bg-muted"><X className="h-4 w-4" /></button>
        </div>
      </div>
    </section>
  );
}

const services = [
  { i: Home, t: "Housing & Structural Damage", d: "Relief for damaged homes, pucca/kuccha house compensation." },
  { i: IndianRupee, t: "Financial Relief & Compensation", d: "SDRF grants, ex-gratia assistance, crop loss claims." },
  { i: FileText, t: "Document Recovery & DigiLocker", d: "Reissuing lost Aadhaar, Voter ID, Ration Cards, Land Deeds." },
  { i: HeartPulse, t: "Healthcare & Medical Camps", d: "Emergency health units, post-flood sanitation, epidemic control." },
  { i: Building2, t: "District Office Directory", d: "Tehsildar, Lekhpal, Collectorate, and Block Development offices." },
  { i: Waves, t: "Disaster Alerts & Shelter Locator", d: "Live inundation maps, verified shelter capacity, dry ration distribution." },
  { i: Users, t: "Family & Vulnerable Support", d: "Special provisions for elderly, women, children, and disabled citizens." },
  { i: ListChecks, t: "Comprehensive Scheme Finder", d: "Filter all central and UP state disaster relief programs." },
];

export function SectionHead({ title, sub, hi }: { title: string; sub: string; hi?: string }) {
  return (
    <div className="mb-8 max-w-3xl">
      <div className="mb-3 h-1 w-14 bg-saffron" />
      <h2 className="text-2xl font-black text-navy md:text-3xl">{title}</h2>
      {hi && <p className="mt-1 font-semibold text-muted-foreground">{hi}</p>}
      <p className="mt-2 text-muted-foreground">{sub}</p>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <section className="bg-band py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead title="How Can AapdaSahai Help You Today?" hi="आज हम आपकी कैसे सहायता कर सकते हैं?" sub="Select a recovery domain to explore step-by-step assistance, required forms, and designated nodal officers." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ i: I, t, d }) => (
            <a key={t} href="#schemes" className="group rounded-md border border-border bg-card p-5 shadow-card transition hover:-translate-y-0.5 hover:border-gov-green">
              <div className="flex h-11 w-11 items-center justify-center rounded bg-accent text-accent-foreground"><I className="h-5 w-5" /></div>
              <h3 className="mt-4 font-sans text-base font-bold text-navy">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gov-green">Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const samples = [
  "My home in Moradabad was submerged by floodwaters, and my family documents were washed away.",
  "My shop incurred heavy inventory loss due to severe waterlogging.",
  "I need medical assistance and safe drinking water for my village.",
];

export function Triage() {
  const [text, setText] = useState("");
  const [plan, setPlan] = useState(false);
  return (
    <section id="triage" className="py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHead title="You don’t need to know the scheme name. Just explain what you lost." sub="In times of distress, navigating administrative bureaucracy is overwhelming. Describe your loss in Hindi or English, and our verified system maps out your full recovery checklist." />
        </div>
        <div className="rounded-md border border-border bg-card p-6 shadow-card lg:col-span-3">
          <label htmlFor="situation" className="text-sm font-bold text-navy">Tell us what happened • क्या हुआ, बताइए</label>
          <div className="relative mt-2">
            <textarea id="situation" rows={5} value={text} onChange={(e) => { setText(e.target.value); setPlan(false); }}
              placeholder="e.g. Hamare ghar mein paani bhar gaya aur ration card kho gaya…"
              className="w-full resize-none rounded border border-input bg-background p-3 pr-12 text-sm outline-none focus:border-gov-green focus:ring-2 focus:ring-gov-green/20" />
            <button aria-label="Speak your situation" className="absolute bottom-3 right-3 rounded-full bg-muted p-2 text-navy hover:bg-accent"><Mic className="h-4 w-4" /></button>
          </div>
          <p className="mt-3 text-xs font-semibold text-muted-foreground">Try a sample situation:</p>
          <div className="mt-2 flex flex-col gap-2">
            {samples.map((s) => (
              <button key={s} onClick={() => { setText(s); setPlan(false); }} className="rounded border border-dashed border-border px-3 py-2 text-left text-sm text-foreground hover:border-gov-green hover:bg-accent">“{s}”</button>
            ))}
          </div>
          <button disabled={!text.trim()} onClick={() => setPlan(true)} className="mt-5 inline-flex items-center gap-2 rounded bg-gov-green px-5 py-3 font-semibold text-primary-foreground hover:bg-gov-green-hover disabled:opacity-50">
            <Sparkles className="h-4 w-4" /> Generate My Recovery Plan →
          </button>
          {plan && (
            <div className="mt-5 rounded border-l-4 border-gov-green bg-accent p-4 text-sm">
              <p className="font-bold text-navy">Preliminary recovery checklist <span className="text-xs font-normal text-muted-foreground">[DEMO DATA - MORADABAD PILOT]</span></p>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-foreground">
                <li>Register damage with your area Lekhpal within 7 days (Tehsil Office).</li>
                <li>Apply: UP House Reconstruction Assistance — up to ₹1,20,000.</li>
                <li>Restore Aadhaar & Ration Card via DigiLocker / CSC centre.</li>
                <li>Claim clothing & utensil assistance (₹5,000 per family).</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const steps = [
  ["01", "Tell Your Situation", "Type, speak, or select your loss details."],
  ["02", "Needs Categorization", "Automated triage across shelter, finance, medical, and documentation."],
  ["03", "Verified Scheme Matching", "Matched against UP State & National Disaster Management guidelines."],
  ["04", "Actionable Next Steps", "Exact designated office, required officer, application form, and timeline."],
];

export function Roadmap() {
  return (
    <section className="bg-navy py-16 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-3 h-1 w-14 bg-saffron" />
        <h2 className="text-2xl font-black md:text-3xl">Your 4-Step Recovery Roadmap</h2>
        <ol className="relative mt-10 grid gap-8 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-primary-foreground/25 md:block" aria-hidden />
          {steps.map(([n, t, d]) => (
            <li key={n} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-tri-saffron bg-navy font-serif font-black">{n}</div>
              <h3 className="mt-4 font-sans text-lg font-bold">{t}</h3>
              <p className="mt-1 text-sm text-primary-foreground/80">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
