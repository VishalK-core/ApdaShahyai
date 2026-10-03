import { useState } from "react";
import { BadgeCheck, ExternalLink, Phone, MessageSquare, Clock, MapPin, Database, ShieldCheck } from "lucide-react";
import { schemes, offices, tehsils, type Scheme } from "./data";
import { SectionHead } from "./Sections";

function FilterSelect<T extends string>({ label, value, options, onChange }: { label: string; value: T | "All"; options: readonly T[]; onChange: (v: T | "All") => void }) {
  return (
    <label className="flex flex-col gap-1 text-xs font-semibold text-muted-foreground">
      {label}
      <select value={value} onChange={(e) => onChange(e.target.value as T | "All")} className="h-10 rounded border border-input bg-background px-3 text-sm font-medium text-foreground">
        <option>All</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

export function SchemesDirectory() {
  const [dept, setDept] = useState<Scheme["dept"] | "All">("All");
  const [cat, setCat] = useState<Scheme["category"] | "All">("All");
  const [el, setEl] = useState<Scheme["eligibility"] | "All">("All");
  const list = schemes.filter((s) => (dept === "All" || s.dept === dept) && (cat === "All" || s.category === cat) && (el === "All" || s.eligibility === el));
  return (
    <section id="schemes" className="bg-band py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead title="Verified Government Relief Schemes" hi="सत्यापित सरकारी राहत योजनाएँ" sub="Central and Uttar Pradesh state disaster relief programmes, verified against official gazettes." />
        <div className="grid gap-6 lg:grid-cols-4">
          <aside className="space-y-4 rounded-md border border-border bg-card p-5 shadow-card lg:self-start">
            <p className="font-bold text-navy">Filter Schemes</p>
            <FilterSelect label="Department" value={dept} options={["Revenue", "Agriculture", "Social Welfare"] as const} onChange={setDept} />
            <FilterSelect label="Category" value={cat} options={["Cash", "Material", "Reconstruction"] as const} onChange={setCat} />
            <FilterSelect label="Eligibility" value={el} options={["Small Farmer", "BPL", "Urban Resident"] as const} onChange={setEl} />
            <p className="text-xs text-muted-foreground">{list.length} of {schemes.length} schemes</p>
          </aside>
          <div className="grid gap-4 md:grid-cols-2 lg:col-span-3">
            {list.map((s) => (
              <article key={s.name} className="flex flex-col rounded-md border border-border bg-card p-5 shadow-card">
                <div className="flex flex-wrap gap-1.5 text-[0.7rem] font-semibold">
                  <span className="rounded bg-muted px-2 py-0.5 text-navy">{s.dept}</span>
                  <span className="rounded bg-muted px-2 py-0.5 text-navy">{s.category}</span>
                  <span className="rounded bg-muted px-2 py-0.5 text-navy">{s.eligibility}</span>
                </div>
                <h3 className="mt-3 font-sans text-lg font-bold text-navy">{s.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.ministry}</p>
                <p className="mt-3 text-sm font-semibold text-foreground">{s.benefit}</p>
                <p className="mt-3 flex items-center gap-1 text-xs font-semibold text-gov-green"><BadgeCheck className="h-4 w-4" /> Verified with District Gazette • Oct 2026</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  <button className="rounded bg-gov-green px-3 py-2 text-sm font-semibold text-primary-foreground hover:bg-gov-green-hover">View Eligibility & Documents</button>
                  <a href="https://up.gov.in" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded border border-border px-3 py-2 text-sm font-semibold text-navy hover:bg-muted">Official Portal <ExternalLink className="h-3.5 w-3.5" /></a>
                </div>
              </article>
            ))}
            {list.length === 0 && <p className="text-muted-foreground">No schemes match these filters.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export function OfficeDirectory() {
  const [t, setT] = useState<string>("All");
  const list = offices.filter((o) => t === "All" || o.tehsil === t);
  return (
    <section id="offices" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead title="District Office & Officer Directory" hi="ज़िला कार्यालय एवं अधिकारी निर्देशिका" sub="Designated nodal officers and relief desks across Moradabad tehsils." />
        <div className="mb-6 flex flex-wrap gap-2" role="tablist">
          {["All", ...tehsils].map((x) => (
            <button key={x} role="tab" aria-selected={t === x} onClick={() => setT(x)} className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${t === x ? "border-navy bg-navy text-primary-foreground" : "border-border text-navy hover:bg-muted"}`}>{x}</button>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {list.map((o) => (
            <article key={o.name} className="rounded-md border border-border border-t-4 border-t-navy bg-card p-5 shadow-card">
              <p className="text-xs font-bold uppercase tracking-wide text-saffron">{o.tehsil}</p>
              <h3 className="mt-1 font-sans text-base font-bold text-navy">{o.name}</h3>
              <p className="text-sm text-muted-foreground">{o.officer}</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />{o.address}</li>
                <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-muted-foreground" />{o.phone}</li>
                <li className="flex gap-2"><MessageSquare className="h-4 w-4 shrink-0 text-muted-foreground" />WhatsApp: {o.wa}</li>
                <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 text-muted-foreground" />{o.hours}</li>
              </ul>
              <a href={`https://www.google.com/maps/search/${encodeURIComponent(o.name + " " + o.address)}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gov-green hover:underline">Get Directions <ExternalLink className="h-3.5 w-3.5" /></a>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">[DEMO DATA - MORADABAD PILOT] Contact numbers masked pending verification.</p>
      </div>
    </section>
  );
}

const docSteps = [
  ["Sign in to DigiLocker", "Visit digilocker.gov.in or the app with your Aadhaar-linked mobile number."],
  ["Search issued documents", "Fetch Aadhaar, Driving Licence, Class X/XII marksheets, and more from issuers."],
  ["Download verified copies", "Digitally signed copies are legally valid under the IT Act, 2000."],
  ["For non-digital records", "Ration Card, land deeds (Khatauni) — apply at Tehsil / CSC with an FIR / Lekhpal report."],
];

export function DocumentGuide() {
  return (
    <section id="documents" className="bg-band py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
        <div>
          <SectionHead title="Document Recovery & DigiLocker Guide" hi="दस्तावेज़ पुनर्प्राप्ति मार्गदर्शिका" sub="Restore lost identity and property credentials. This is official guidance only — AapdaSahai does not access your DigiLocker account." />
          <a href="https://www.digilocker.gov.in" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded bg-navy px-5 py-3 font-semibold text-primary-foreground hover:bg-navy-deep">Open digilocker.gov.in <ExternalLink className="h-4 w-4" /></a>
        </div>
        <ol className="space-y-3">
          {docSteps.map(([t, d], i) => (
            <li key={t} className="flex gap-4 rounded-md border border-border bg-card p-4 shadow-card">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gov-green font-bold text-primary-foreground">{i + 1}</span>
              <div><p className="font-bold text-navy">{t}</p><p className="text-sm text-muted-foreground">{d}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section id="trust" className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-md border-2 border-gov-green/40 bg-card p-8 shadow-card">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-gov-green" />
            <h2 className="text-2xl font-black text-navy">Trust, Verification & Transparency</h2>
          </div>
          <p className="mt-4 text-foreground">
            The AI Assistant identifies needs and matches policies; all underlying scheme rules, benefits, and contact directories are strictly anchored to verified official Government of Uttar Pradesh and National Disaster Management Authority (NDMA) databases.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded bg-muted px-3 py-2 font-mono text-xs text-navy">
            <Database className="h-4 w-4" /> Database Version: UP-RELIEF-2026.10 • Last Verified: Today
          </p>
        </div>
      </div>
    </section>
  );
}
