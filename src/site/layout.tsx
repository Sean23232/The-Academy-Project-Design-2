import { useEffect, useState } from "react";
import { A, Logo, buttonClass } from "./ui";
import {
  DONATE_URL,
  EMAIL,
  FB,
  IG,
  LI,
  LOCATION,
  PHONE_DISPLAY,
  PHONE_TEL,
  nav,
  type PageId,
} from "./data";
import { NewsletterForm } from "./forms";

export function Header({ page }: { page: PageId }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-line/80 bg-ivory/92 backdrop-blur-md ${scrolled ? "shadow-[0_8px_24px_rgba(28,36,48,0.04)]" : ""}`}
    >
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Logo />
        <nav className="ml-auto hidden items-center gap-0.5 min-[1180px]:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = page === item.id;
            return (
              <a
                key={item.id}
                href={`#/${item.id}`}
                aria-current={active ? "page" : undefined}
                className={`px-2.5 py-2 text-[14px] font-medium ${active ? "text-tap" : "text-ink-soft hover:text-ink"}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <div className="ml-auto hidden items-center gap-2 min-[1180px]:ml-3 min-[1180px]:flex">
          <A to="register" variant="ghost" className="px-4">
            Join / Register
          </A>
          <A to={DONATE_URL} variant="red">
            Donate
          </A>
        </div>
        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center border border-line text-ink min-[1180px]:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="fixed inset-0 top-[4.5rem] z-40 overflow-y-auto bg-ivory px-5 pb-28 pt-6 min-[1180px]:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#/${item.id}`}
                className="border-b border-line py-4 font-display text-3xl text-ink"
                aria-current={page === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
            <a href="#/register" className="border-b border-line py-4 font-display text-3xl text-ink">
              Join / Register
            </a>
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <A to={DONATE_URL} variant="red">
              Donate
            </A>
            <A to="register" variant="ghost">
              Register a youth
            </A>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink pb-24 text-ivory md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <a href="#/" className="inline-flex items-center gap-3" aria-label="The Academy Project home">
            <img src="https://static.wixstatic.com/media/6bc62c_ce1ff9244b834f90af5fd0dfc0d6641d~mv2.jpeg/v1/fill/w_120,h_128,al_c,q_85,usm_0.66_1.00_0.01/TAP.jpg" alt="" className="h-14 w-12 bg-ivory object-contain p-1" />
            <span>
              <span className="block font-display text-lg">The Academy Project</span>
              <span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.16em] text-[#e7b7bc]">Los Angeles</span>
            </span>
          </a>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ivory/80">
            Resources, advocacy, and support for foster youth in Los Angeles through empowerment, education, and community.
          </p>
          <p className="mt-4 text-sm text-ivory/60">Bright Minds + Brighter Futures</p>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#e7b7bc]">Explore</h2>
          <ul className="mt-4 space-y-2 text-[15px]">
            {nav.map((item) => (
              <li key={item.id}>
                <a className="text-ivory/85 hover:text-white" href={`#/${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#e7b7bc]">Contact</h2>
          <ul className="mt-4 space-y-2 text-[15px] text-ivory/85">
            <li>
              <a className="hover:text-white" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={`tel:${PHONE_TEL}`}>
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>{LOCATION}</li>
          </ul>
          <h2 className="mt-8 text-[12px] font-bold uppercase tracking-[0.16em] text-[#e7b7bc]">Social</h2>
          <ul className="mt-4 space-y-2 text-[15px]">
            <li>
              <a className="text-ivory/85 hover:text-white" href={IG} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a className="text-ivory/85 hover:text-white" href={LI} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="text-ivory/85 hover:text-white" href={FB} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#e7b7bc]">Stay connected</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ivory/75">Get the latest updates by joining our mailing list.</p>
          <NewsletterForm tone="dark" />
          <div className="mt-6 flex flex-wrap gap-2">
            <A to={DONATE_URL} variant="red" className="px-4">
              Donate
            </A>
            <a href="#/register" className={buttonClass("line", "px-4")}>
              Register
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-sm text-ivory/55 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} The Academy Project. A 501(c)(3) nonprofit organization.</p>
          <p>Helping foster youth thrive · Los Angeles</p>
        </div>
      </div>
    </footer>
  );
}

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-ivory/95 p-2 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a href="#/register" className={buttonClass("ghost")}>
          Register
        </a>
        <A to={DONATE_URL} variant="red">
          Donate
        </A>
      </div>
    </div>
  );
}
