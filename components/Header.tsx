 "use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./Button";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <Link href="#home" className="flex items-center gap-3 no-underline">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-lg font-bold text-white shadow">
            G
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-neutral-900">
              GMD Handyman
            </span>
            <span className="text-xs text-neutral-500">
              Reliable Home Services
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 md:flex" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="no-underline transition-colors hover:text-primary-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3 md:flex-none">
          <span className="hidden text-sm font-medium text-neutral-600 md:inline">
            Call: 407-467-2629
          </span>
          <Button href="mailto:gilhandyman407@gmail.com" size="md">
            Get a quote
          </Button>

          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-neutral-200 bg-white/95 backdrop-blur md:hidden" aria-label="Mobile navigation menu">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-10">
            <nav className="flex flex-col gap-2 text-base font-medium text-neutral-800" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-3 py-2 no-underline transition-colors hover:bg-primary-50 hover:text-primary-700"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 rounded-lg bg-neutral-50 p-4 ring-1 ring-neutral-200">
              <span className="text-sm font-semibold text-neutral-700">Get in touch</span>
              <div className="flex flex-wrap gap-2">
                <Button href="tel:+14074672629" size="md" variant="secondary" aria-label="Call 407-467-2629">
                  Call 407-467-2629
                </Button>
                <Button href="mailto:gilhandyman407@gmail.com" size="md" aria-label="Email gilhandyman407@gmail.com">
                  Email us
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
