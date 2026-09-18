"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LINKS } from "@/data/site";

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-[#2a2b2e] bg-[#0a0a0a]/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-lg font-bold text-white">
            <span className="flex h-7 w-7 items-center justify-center rounded bg-[#34d399] text-xs font-bold text-[#0a0a0a]">
              Z
            </span>
            ZurixAI
          </a>

          <div className="hidden items-center gap-8 text-sm text-[#9ca3af] md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={LINKS.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a
              href={LINKS.githubApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-[#34d399] px-4 py-2 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-[#2dd4bf]"
            >
              Add to GitHub
            </a>
          </div>

          <button
            className="p-2 text-[#9ca3af] hover:text-white md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="space-y-3 pb-4 text-sm text-[#9ca3af] md:hidden">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block transition-colors hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={LINKS.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a
              href={LINKS.githubApp}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md bg-[#34d399] px-4 py-2 text-center font-semibold text-[#0a0a0a]"
            >
              Add to GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}