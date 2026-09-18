import Reveal from "./Reveal";
import { CHANGELOG } from "@/data/site";

export default function Changelog() {
  return (
    <section className="relative z-10 bg-[#121317]/30 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Shipping fast.
          </h2>
          <p className="mt-4 text-lg text-[#9ca3af]">
            Real commits. Real features. Every week.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CHANGELOG.map((entry, i) => (
            <Reveal key={entry.title} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-[#2a2b2e] bg-[#0d0d0d] p-5">
                <div className="mb-2 font-mono text-xs text-[#6b7280]">
                  {entry.date}
                </div>
                <h3 className="text-base font-semibold text-white">
                  {entry.title}
                </h3>
                <p className="mt-1 text-sm text-[#9ca3af]">{entry.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}