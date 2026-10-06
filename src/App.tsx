import { useEffect, useState } from "react";
import { Footer, Header, MobileDock } from "./site/layout";
import { HomePage } from "./site/Home";
import { AboutPage, ContactPage, GivePage, ImpactPage, InvolvedPage, ModelPage, ProgramsPage, RegisterPage } from "./site/Pages";
import { pageTitles, type PageId } from "./site/data";
import { usePageReveal } from "./site/ui";

const pages: PageId[] = ["home", "about", "model", "programs", "impact", "give", "involved", "contact", "register"];

function parseHash() {
  const raw = window.location.hash.replace(/^#/, "").replace(/^\//, "");
  const [pageRaw, section] = raw.split("/").filter(Boolean);
  const page = pages.includes(pageRaw as PageId) ? (pageRaw as PageId) : "home";
  return { page: pageRaw ? page : "home", section };
}

export default function App() {
  const [route, setRoute] = useState(parseHash);
  usePageReveal(`${route.page}-${route.section ?? ""}`);

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    const title = pageTitles[route.page];
    document.title = route.page === "home" ? title : `${title} · The Academy Project`;
    const target = route.section ? document.getElementById(route.section) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [route]);

  return (
    <>
      <Header page={route.page} />
      <main id="main" className="pb-20 md:pb-0">
        {route.page === "home" && <HomePage />}
        {route.page === "about" && <AboutPage />}
        {route.page === "model" && <ModelPage />}
        {route.page === "programs" && <ProgramsPage />}
        {route.page === "impact" && <ImpactPage />}
        {route.page === "give" && <GivePage />}
        {route.page === "involved" && <InvolvedPage />}
        {route.page === "contact" && <ContactPage section={route.section} />}
        {route.page === "register" && <RegisterPage />}
      </main>
      <Footer />
      <MobileDock />
    </>
  );
}
