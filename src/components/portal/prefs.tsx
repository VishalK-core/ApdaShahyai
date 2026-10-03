import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Lang = "en" | "hi";
type Prefs = {
  lang: Lang;
  setLang: (l: Lang) => void;
  size: number;
  setSize: (n: number) => void;
  hc: boolean;
  setHc: (b: boolean) => void;
  t: (en: string, hi: string) => string;
};

const Ctx = createContext<Prefs | null>(null);

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [size, setSize] = useState(16);
  const [hc, setHc] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--base-size", `${size}px`);
  }, [size]);
  useEffect(() => {
    document.documentElement.classList.toggle("hc", hc);
  }, [hc]);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <Ctx.Provider value={{ lang, setLang, size, setSize, hc, setHc, t: (en, hi) => (lang === "en" ? en : hi) }}>
      {children}
    </Ctx.Provider>
  );
}

export function usePrefs() {
  const c = useContext(Ctx);
  if (!c) throw new Error("usePrefs outside provider");
  return c;
}
