import TerminalMockup from "./TerminalMockup";
import Reveal from "./Reveal";
import { LINKS } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Glow blobs */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-200px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#34d399] opacity-15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-100px] left-[20%] h-[400px] w-[400px] rounded-full bg-[#818cf8] opacity-15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2a2b2e] bg-[#121317]/80 px-4 py-1.5 text-xs font-medium text-[#9ca3af] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#34d399]" />
            v5.0 · Open source · MIT licensed
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            The quality gate for
            <br />
            <span className="text-[#34d399]">AI-generated code</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#9ca3af]">
            Catch broken packages, phantom imports, and code slop{" "}
            <em className="not-italic text-white">before</em> they reach
            production. Runs on every PR — deterministic core, optional LLM
            brain.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={LINKS.githubApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-[#34d399] px-6 py-3 text-base font-semibold text-[#0a0a0a] shadow-[0_0_32px_rgba(52,211,153,0.25)] transition-colors hover:bg-[#2dd4bf]"
            >
              Add to GitHub →
            </a>
            <a
              href={LINKS.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-[#2a2b2e] px-6 py-3 text-base font-medium text-[#9ca3af] transition-colors hover:border-[#34d399] hover:text-white"
            >
              Documentation
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <TerminalMockup />
        </Reveal>
      </div>
    </section>
  );
}