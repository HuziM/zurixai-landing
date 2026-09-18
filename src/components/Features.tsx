import {
  PlusCircle,
  ShieldCheck,
  Bug,
  Database,
  Play,
  FileText,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { FEATURES } from "@/data/site";

const ICONS: Record<string, LucideIcon> = {
  "plus-circle": PlusCircle,
  "shield-check": ShieldCheck,
  bug: Bug,
  database: Database,
  play: Play,
  "file-text": FileText,
};

export default function Features() {
  return (
    <section id="features" className="relative z-10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Never ship broken code again.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#9ca3af]">
            Six problems AI code creates. Six ways ZurixAI catches them —
            before a human ever reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = ICONS[feature.icon] ?? ShieldCheck;
            return (
              <Reveal
                key={feature.title}
                delay={(i % 3) * 0.05}
                className={feature.wide ? "lg:col-span-2" : undefined}
              >
                <div className="h-full rounded-xl border border-[#2a2b2e] bg-[#121317] p-6 transition-colors hover:border-[#34d399]/40">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#34d399]/10 text-[#34d399]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.wide ? (
                      <>
                        Rules as contract —{" "}
                        <code className="font-mono text-sm text-[#34d399]">
                          .zurix/rules.md
                        </code>
                      </>
                    ) : (
                      feature.title
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#9ca3af]">
                    {feature.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}