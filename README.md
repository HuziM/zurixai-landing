# ZurixAI Landing

Marketing site for [ZurixAI](https://zurixai.com) — the quality gate for AI-generated code.

## Stack

- Next.js 16 (App Router) — static export via `output: "export"`
- React 19, TypeScript (strict)
- Tailwind CSS v4
- `lucide-react` icons, `motion` (Framer Motion) scroll reveals
- Deployed to Cloudflare Pages

## Development

```bash
npm install
npm run dev        # local dev server
npm run lint       # eslint
npm run build      # static export → out/
```

## Deploy

Cloudflare Workers static assets (project: `zurixai`):

```bash
npm run build
npx wrangler login      # one-time OAuth
npx wrangler deploy     # reads wrangler.jsonc
```

- Serves the built `out/` directory as static assets from `zurixai.com` (custom domain on the `zurixai.com` zone).
- `wrangler.jsonc` wires the static assets + custom-domain route; deploys are reproducible and don't depend on any dashboard state.
- Deploy requires the `npx wrangler login` OAuth token in place.

## Content

Site copy lives in `src/data/site.ts` (pricing tiers, changelog, FAQ, feature cards). Components are one-per-section in `src/components/`.

## Notes

- Fonts self-hosted via `next/font/google` — no external requests.
- Dark theme (`#0a0a0a` + emerald `#34d399`), mobile-first responsive, `prefers-reduced-motion` respected.
- Requires `allow-scripts=*` in `.npmrc` for Next's postinstall scripts (dev machine npm policy).