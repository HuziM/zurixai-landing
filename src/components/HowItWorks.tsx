import Reveal from "./Reveal";

const STEPS = [
  {
    step: "1",
    title: "Install the GitHub App",
    body: "One click. ZurixAI connects to your repo and runs on every new PR automatically.",
  },
  {
    step: "2",
    title: "Push a PR",
    body: "ZurixAI scans imports, supply chain, drift, rules, and schemas. Runs in seconds, not minutes.",
  },
  {
    step: "3",
    title: "Get a quality gate",
    body: "A pass/fail check run with details, fix suggestions, and audit trail — posted directly on the PR.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative z-10 bg-[#121317]/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Three steps. Zero config.
          </h2>
          <p className="mt-4 text-lg text-[#9ca3af]">
            No API keys required for the deterministic core.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.1} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#34d399]/10 text-lg font-bold text-[#34d399]">
                {s.step}
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-[#9ca3af]">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}