import { useState } from "react";
import { MessageCircle, Mic, X, Send } from "lucide-react";
import { Emblem } from "./Header";

export function Footer() {
  const col = "space-y-2 text-sm text-primary-foreground/80";
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="tricolor h-[3px]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-background p-1"><Emblem className="h-9 w-9" /></span>
            <div><p className="font-serif text-lg font-black">AapdaSahai</p><p className="text-xs text-primary-foreground/70">आपदा सहाय</p></div>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/80">District Citizen Assistance Initiative • Moradabad, Uttar Pradesh</p>
        </div>
        <div>
          <p className="mb-3 font-bold">Helplines</p>
          <ul className={col}><li>Emergency: 112</li><li>District Disaster Cell: 1077</li><li>Ambulance: 108</li><li>Collectorate Moradabad: 0591-24XXXXX</li></ul>
        </div>
        <div>
          <p className="mb-3 font-bold">Important Links</p>
          <ul className={col}>{["Terms of Use", "Privacy Policy", "Hyperlinking Policy", "Copyright Policy", "GIGW Accessibility Statement"].map((l) => <li key={l}><a href="#" className="hover:underline">{l}</a></li>)}</ul>
        </div>
        <div>
          <p className="mb-3 font-bold">Official Portals</p>
          <ul className={col}>
            {[["UP.gov.in", "https://up.gov.in"], ["NDMA", "https://ndma.gov.in"], ["India.gov.in", "https://india.gov.in"], ["MyGov", "https://mygov.in"], ["myScheme", "https://myscheme.gov.in"]].map(([l, h]) => (
              <li key={l}><a href={h} target="_blank" rel="noreferrer" className="hover:underline">{l} ↗</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs leading-relaxed text-primary-foreground/70">
          AapdaSahai is a citizen-first disaster guidance platform developed for public welfare and assistance. It is designed to assist citizens in accessing government relief schemes and does not replace statutory administrative bodies or emergency services (112).
        </p>
      </div>
    </footer>
  );
}

export function Saathi() {
  const [open, setOpen] = useState(false);
  const quick = ["Check Flood Compensation", "Lost Aadhaar Card", "Nearest Relief Camp", "Talk in Hindi"];
  return (
    <>
      {open && (
        <div role="dialog" aria-label="AapdaSahai Citizen Assistant" className="fixed bottom-24 right-4 z-50 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-md border border-border bg-card shadow-card">
          <div className="flex items-center justify-between bg-navy px-4 py-3 text-primary-foreground">
            <div><p className="text-sm font-bold">AapdaSahai Citizen Assistant</p><p className="text-xs text-primary-foreground/80">जन सहायता साथी</p></div>
            <button onClick={() => setOpen(false)} aria-label="Close assistant"><X className="h-5 w-5" /></button>
          </div>
          <div className="space-y-3 p-4">
            <p className="rounded bg-muted p-3 text-sm">नमस्ते! Namaste. How can I help you with disaster relief today?</p>
            <div className="flex flex-wrap gap-2">
              {quick.map((q) => <button key={q} className="rounded-full border border-gov-green px-3 py-1 text-xs font-semibold text-gov-green hover:bg-accent">{q}</button>)}
            </div>
          </div>
          <div className="flex items-center gap-2 border-t border-border p-3">
            <button aria-label="Voice query" className="rounded-full bg-muted p-2 text-navy"><Mic className="h-4 w-4" /></button>
            <input aria-label="Type your question" placeholder="Type your question…" className="flex-1 bg-transparent text-sm outline-none" />
            <button aria-label="Send" className="rounded-full bg-gov-green p-2 text-primary-foreground"><Send className="h-4 w-4" /></button>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} aria-label="Open AapdaSahai Saathi" className="fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-full bg-gov-green py-2 pl-2 pr-4 text-primary-foreground shadow-card hover:bg-gov-green-hover">
        <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-background text-gov-green">
          <MessageCircle className="h-5 w-5" />
          <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-background bg-tri-green" />
        </span>
        <span className="text-left leading-tight"><span className="block text-sm font-bold">AapdaSahai Saathi</span><span className="block text-[0.7rem]">नमस्ते • Hello</span></span>
      </button>
    </>
  );
}
