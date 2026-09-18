const LINES = [
  { status: "ok", text: "Imports validated — 47 modules scanned" },
  { status: "ok", text: "Supply chain — all 23 packages verified" },
  { status: "ok", text: "Drift detection — no deviations found" },
  { status: "warn", text: "Schema drift — 2 endpoints outdated" },
  { status: "ok", text: "Rules compliance — 8/8 passed" },
] as const;

const STATUS_COLOR = {
  ok: "text-[#34d399]",
  warn: "text-[#eab308]",
} as const;

const STATUS_GLYPH = {
  ok: "✓",
  warn: "⚠",
} as const;

export default function TerminalMockup() {
  return (
    <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-xl border border-[#2a2b2e] bg-[#0d0d0d] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-[#2a2b2e] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ef4444]/80" />
        <span className="h-3 w-3 rounded-full bg-[#eab308]/80" />
        <span className="h-3 w-3 rounded-full bg-[#34d399]/80" />
        <span className="ml-3 font-mono text-xs text-[#6b7280]">
          zurix check · zurixai-backend
        </span>
      </div>

      <div className="overflow-x-auto p-4 font-mono text-xs leading-relaxed sm:p-6 sm:text-sm">
        <div className="text-[#9ca3af]">
          $ <span className="text-white">zurix check</span>
        </div>
        <div className="mt-3 space-y-1.5">
          {LINES.map((line) => (
            <div key={line.text} className={STATUS_COLOR[line.status]}>
              {STATUS_GLYPH[line.status]} {line.text}
            </div>
          ))}
        </div>
        <div className="mt-4 border-t border-[#2a2b2e] pt-3 text-[#6b7280]">
          <span className="font-semibold text-[#34d399]">PASS</span> with 1
          warning · 20 checks · 0.04s
        </div>
      </div>
    </div>
  );
}