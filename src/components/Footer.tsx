import { LINKS } from "@/data/site";

const PRODUCT_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-[#2a2b2e] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2 text-lg font-bold text-white">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-[#34d399] text-xs font-bold text-[#0a0a0a]">
                Z
              </span>
              ZurixAI
            </div>
            <p className="text-sm leading-relaxed text-[#6b7280]">
              The quality gate for AI-generated code. Open source core. MIT
              licensed.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Product</h4>
            <ul className="space-y-2 text-sm text-[#6b7280]">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-[#34d399]">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={LINKS.githubApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#34d399]"
                >
                  Install
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Developers</h4>
            <ul className="space-y-2 text-sm text-[#6b7280]">
              <li>
                <a
                  href={LINKS.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#34d399]"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={LINKS.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#34d399]"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href={LINKS.license}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#34d399]"
                >
                  MIT License
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Connect</h4>
            <ul className="space-y-2 text-sm text-[#6b7280]">
              <li>
                <a
                  href={LINKS.issues}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#34d399]"
                >
                  Issues
                </a>
              </li>
              <li>
                <a
                  href={LINKS.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#34d399]"
                >
                  Discussions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#2a2b2e] pt-6 text-xs text-[#6b7280] sm:flex-row">
          <div>© {year} ZurixAI. MIT License.</div>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#34d399]" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}