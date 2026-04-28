"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV = [
  { href: "/services/asl", label: "ASL Interpretation" },
  { href: "/services/transcription", label: "Transcription" },
  { href: "/services/foreign-language", label: "Foreign Language" },
  { href: "/services/on-demand", label: "On-Demand" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Pages with a dark hero where the header should start in light mode
  const overDarkHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Display in light mode (over hero) or dark mode (scrolled / non-home pages)
  const lightMode = overDarkHero && !scrolled && !open;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        lightMode
          ? "bg-transparent"
          : "bg-bone/90 backdrop-blur-md border-b border-haze-light/40"
      }`}
    >
      <div className="container-x flex items-center justify-between h-24">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Virtual VRI home"
        >
          <Image
            src="/images/logo.png"
            alt="Virtual VRI — Video Remote Interpreting"
            width={220}
            height={180}
            priority
            className={`h-16 sm:h-20 w-auto transition-all duration-300 group-hover:scale-105 ${
              lightMode ? "brightness-0 invert opacity-95" : ""
            }`}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors relative group ${
                lightMode ? "text-bone hover:text-teal-200" : "text-ink hover:text-plum"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                  lightMode ? "bg-teal-200" : "bg-teal"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:8664409140"
            className={`hidden md:flex items-center gap-2 text-sm transition-colors ${
              lightMode ? "text-bone hover:text-teal-200" : "text-ink hover:text-plum"
            }`}
            aria-label="Call us at 866-440-9140"
          >
            <svg
              className={`w-4 h-4 ${lightMode ? "text-teal-200" : "text-teal"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            866-440-9140
          </a>
          <Link
            href="/request-quote"
            className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
              lightMode
                ? "bg-teal text-white hover:bg-teal-600"
                : "bg-plum text-bone hover:bg-plum-deep"
            }`}
          >
            Request a Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className={`lg:hidden p-2 ${lightMode ? "text-bone" : "text-ink"}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-0 top-24 bg-bone z-30 overflow-y-auto animate-fade-in"
        >
          <nav className="container-x py-8 flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-4 px-4 text-lg font-display text-plum-deep border-b border-haze-light/40 hover:bg-plum/5 rounded-md transition-colors"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:8664409140"
                className="btn-secondary w-full"
                onClick={() => setOpen(false)}
              >
                Call 866-440-9140
              </a>
              <Link
                href="/request-quote"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Request a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
