const STATS = [
  { value: "20", label: "Capabilities" },
  { value: "285", label: "Passing tests" },
  { value: "100%", label: "Deterministic core" },
  { value: "9 weeks", label: "MVP build" },
];

export default function TrustStrip() {
  return (
    <section className="relative z-10 border-y border-[#2a2b2e] bg-[#121317]/50 py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </div>
              <div className="text-xs text-[#9ca3af] sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}