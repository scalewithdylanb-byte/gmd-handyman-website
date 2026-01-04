import Link from "next/link";
import { Button } from "./Button";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
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

        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 md:flex">
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
        </div>
      </div>
    </header>
  );
}
