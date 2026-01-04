import Link from "next/link";
import { Button } from "./Button";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-12 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
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
            </div>
            <p className="text-neutral-700">
              Quality repairs, installations, and maintenance delivered with clear
              communication and respect for your home.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="mailto:gilhandyman407@gmail.com" size="md">
                Get a free quote
              </Button>
              <Button href="tel:+14074672629" variant="secondary" size="md">
                Call 407-467-2629
              </Button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                Quick links
              </h3>
              <ul className="space-y-2 text-sm text-neutral-700">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="no-underline transition-colors hover:text-primary-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                Contact
              </h3>
              <div className="space-y-2 text-sm text-neutral-700">
                <p>Phone: 407-467-2629</p>
                <p>Email: gilhandyman407@gmail.com</p>
                <p>Service area: Greater GMD region</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} GMD Handyman Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
