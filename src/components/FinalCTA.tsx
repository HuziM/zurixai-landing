import Reveal from "./Reveal";
import { LINKS } from "@/data/site";

export default function FinalCTA() {
  return (
    <section className="relative z-10 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <div className="rounded-2xl border border-[#2a2b2e] bg-gradient-to-b from-[#121317] to-[#0a0a0a] px-6 py-14 text-center sm:px-14 sm:py-20">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ship code that works.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#9ca3af]">
              Install the GitHub App. Push a PR. ZurixAI catches what the
              linter misses.
            </p>
            <div className="mt-10">
              <a
                href={LINKS.githubApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-[#34d399] px-8 py-3.5 text-base font-semibold text-[#0a0a0a] shadow-[0_0_48px_rgba(52,211,153,0.2)] transition-colors hover:bg-[#2dd4bf]"
              >
                Add ZurixAI to your repo →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}