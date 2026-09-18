import { Check } from "lucide-react";
import Reveal from "./Reveal";
import { PRICING, LINKS } from "@/data/site";

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Start free. Scale when you ship.
          </h2>
          <p className="mt-4 text-lg text-[#9ca3af]">
            14-day cardless trial on Pro. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PRICING.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-xl border bg-[#121317] p-6 sm:p-8 ${
                  tier.highlighted
                    ? "border-2 border-[#34d399] shadow-[0_0_48px_rgba(52,211,153,0.1)]"
                    : "border-[#2a2b2e]"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#34d399] px-3 py-0.5 text-xs font-semibold text-[#0a0a0a]">
                    Most popular
                  </div>
                )}

                <div
                  className={`mb-2 text-sm font-medium ${
                    tier.highlighted ? "text-[#34d399]" : "text-[#9ca3af]"
                  }`}
                >
                  {tier.name}
                </div>
                <div className="text-4xl font-bold text-white">
                  {tier.price}
                  <span className="text-lg font-normal text-[#9ca3af]">
                    /mo
                  </span>
                </div>
                <div className="mt-1 text-sm text-[#6b7280]">{tier.sub}</div>

                <ul className="mt-6 flex-1 space-y-2 text-sm text-[#9ca3af]">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-0.5 text-[#34d399]">
                        <Check className="h-4 w-4" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={LINKS.githubApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 block w-full rounded-md py-2.5 text-center text-sm transition-colors ${
                    tier.highlighted
                      ? "bg-[#34d399] font-semibold text-[#0a0a0a] hover:bg-[#2dd4bf]"
                      : "border border-[#2a2b2e] font-medium text-[#9ca3af] hover:border-[#34d399] hover:text-white"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}