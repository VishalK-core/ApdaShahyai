import { createFileRoute } from "@tanstack/react-router";
import { PrefsProvider } from "@/components/portal/prefs";
import { UtilityBar, SiteHeader } from "@/components/portal/Header";
import { Hero, SideDock } from "@/components/portal/Hero";
import { AlertBanner, ServicesGrid, Triage, Roadmap } from "@/components/portal/Sections";
import { SchemesDirectory, OfficeDirectory, DocumentGuide, TrustSection } from "@/components/portal/Directory";
import { Footer, Saathi } from "@/components/portal/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AapdaSahai — Disaster Assistance & Recovery Portal, Moradabad" },
      { name: "description", content: "Find disaster relief schemes, document recovery help, district offices and step-by-step recovery plans for Moradabad, UP." },
      { property: "og:title", content: "AapdaSahai — Disaster Assistance & Recovery Portal" },
      { property: "og:description", content: "Citizen disaster relief and recovery guidance for Moradabad, Uttar Pradesh." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PrefsProvider>
      <UtilityBar />
      <SiteHeader />
      <main id="main">
        <Hero />
        <AlertBanner />
        <ServicesGrid />
        <Triage />
        <Roadmap />
        <SchemesDirectory />
        <OfficeDirectory />
        <DocumentGuide />
        <TrustSection />
      </main>
      <Footer />
      <SideDock />
      <Saathi />
    </PrefsProvider>
  );
}
