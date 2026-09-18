export const LINKS = {
  githubApp: "https://github.com/apps/zurixai",
  repo: "https://github.com/HuziM/zurixai-backend",
  docs: "https://github.com/HuziM/zurixai-backend#readme",
  issues: "https://github.com/HuziM/zurixai-backend/issues",
  license: "https://github.com/HuziM/zurixai-backend/blob/main/LICENSE",
};

export interface Feature {
  title: string;
  body: string;
  icon: string;
  wide?: boolean;
}

export const FEATURES: Feature[] = [
  {
    title: "Supply chain never trusts the index",
    body: "Registry outage? Missing package? ZurixAI distinguishes 'unavailable' from 'doesn't exist' and flags suspicious versions with a suspicion score.",
    icon: "plus-circle",
  },
  {
    title: "Phantom import triage",
    body: "AI hallucinates packages that don't exist. ZurixAI scans every import against the registry and catches phantoms before they break CI.",
    icon: "shield-check",
  },
  {
    title: "Stack trace → failing test",
    body: "Paste a Python or Node stack trace. Get a structured breakdown, culprit identification, and a stub failing test — ready for AI to fill in the body.",
    icon: "bug",
  },
  {
    title: "Schema drift patches",
    body: "Detects drift across TypeScript, GraphQL, OpenAPI, and JSON Schema definitions. Generates migration patch skeletons — fix the gap without starting from scratch.",
    icon: "database",
  },
  {
    title: "Micro-mock runner",
    body: "Auto-discovers test files, generates minimal failing tests from AST analysis, and runs them in a sandboxed subprocess. Zero LLM required.",
    icon: "play",
  },
  {
    title: "Rules as contract",
    body: "Define quality rules in .zurix/rules.md. Enforce naming conventions, import patterns, required tests, and forbidden patterns across every PR. The rule file is the contract — the engine is the enforcer.",
    icon: "file-text",
    wide: true,
  },
];

export interface Tier {
  name: string;
  price: string;
  sub: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export const PRICING: Tier[] = [
  {
    name: "Free",
    price: "$0",
    sub: "15 tasks · $1.00 overage",
    features: [
      "Import validation",
      "Supply chain scan",
      "Drift detection",
      "Rules enforcement",
    ],
    cta: "Get started",
  },
  {
    name: "Pro",
    price: "$19",
    sub: "300 tasks · $0.50 overage",
    features: [
      "Everything in Free",
      "Pre-PR quality patching",
      "Micro-mock test runner",
      "Bug → test generation",
      "Schema enforcement",
      "Interactive TUI",
      "Full audit trail",
    ],
    cta: "Start 14-day trial",
    highlighted: true,
  },
  {
    name: "BYOK",
    price: "$12",
    sub: "Unlimited tasks",
    features: [
      "Everything in Pro",
      "Bring your own API key",
      "Unlimited tasks, zero overage",
      "Persistent memory across runs",
    ],
    cta: "Start 14-day trial",
  },
];

export interface ChangelogEntry {
  date: string;
  title: string;
  body: string;
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    date: "Sep 18, 2026",
    title: "Bug-to-test parser",
    body: "Paste a stack trace, get a structured breakdown and stub failing test. Python + Node.",
  },
  {
    date: "Sep 17, 2026",
    title: "Interactive TUI dashboard",
    body: "Terminal-native UI via Textual. Keyboard navigation, results view, zero config.",
  },
  {
    date: "Sep 16, 2026",
    title: "Supply-chain registry intelligence",
    body: "Distinguishes registry outages from missing packages. Suspicion scoring on every dependency.",
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQS: FaqItem[] = [
  {
    q: "Do I need API keys to get started?",
    a: "No. The deterministic core (imports, supply chain, drift, rules, schemas, TUI) runs with zero configuration. Optional LLM features (AI-powered patches, bug-to-test body generation) use your own API key via BYOK.",
  },
  {
    q: "What happens after the 14-day trial?",
    a: "Your card is charged $19/mo for Pro or $12/mo for BYOK. Cancel anytime before the trial ends and you won't be charged. No card required to start.",
  },
  {
    q: "Is ZurixAI open source?",
    a: "Yes. The CLI engine, TUI, and all deterministic checks are MIT-licensed and available on GitHub. The proprietary engine (LLM integration, cloud sync, billing) powers the hosted service.",
  },
  {
    q: "How is this different from GitHub Advanced Security?",
    a: "GHAS focuses on known vulnerabilities (CodeQL, Dependabot). ZurixAI catches AI-specific problems: hallucinated packages, phantom imports, schema drift from AI rewrites, and broken dependencies that static analysis misses. They complement each other.",
  },
  {
    q: "Does it support Python and JavaScript/TypeScript?",
    a: "Yes. Both languages are fully supported for import validation, supply chain, stack-trace parsing, micro-mock generation, and schema detection. More languages coming.",
  },
];