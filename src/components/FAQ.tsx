"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/data/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative z-10 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`rounded-xl border bg-[#121317] transition-colors ${
                  isOpen ? "border-[#34d399]/40" : "border-[#2a2b2e]"
                }`}
              >
                <button
                  className="flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left text-sm font-medium text-white transition-colors hover:text-[#34d399]"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#6b7280] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-sm leading-relaxed text-[#9ca3af]">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}