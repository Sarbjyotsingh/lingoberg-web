# Lingoberg Web (`lingoberg.com`)

Official website for **Lingoberg** (_Speak Beyond the Tip_) — the German language learning app combining **CEFR A1–B2 Audio Stories** (with real-time word-by-word sync) and **AI 3D Speaking & Listening Exam Simulators** (`telc` & `Goethe` A1–B2 graded on official Formblatt M10 criteria).

---

## Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript 5.9
- **Styling**: Tailwind CSS v4 + Glacial Ice Design System (`Plus Jakarta Sans` + `JetBrains Mono`)
- **Localization**: `next-intl` (`i18n/en.json`)
- **Animations**: Framer Motion + CSS 3D Crystal Loader
- **Deployment (Phase 1)**: Static Export (`output: 'export'`) → AWS S3 + CloudFront (`scripts/deploy-s3.sh`)
- **Deployment (Phase 2)**: SSR/Hybrid (`NEXT_BUILD_TARGET=amplify`) → AWS Amplify (`amplify.yml`)

---

## Getting Started

```bash
# Install dependencies
bun install

# Start development server (http://localhost:3000)
bun run dev

# Run TypeScript check & ESLint
bun run typecheck
bun run lint

# Build static export into ./out
bun run build
```

---

## Project Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) — Feature-sliced folder structure, Glacial Ice design system, and asset separation policy.
- [APP_SUBDOMAIN_PLAN.md](./APP_SUBDOMAIN_PLAN.md) — Phase 2 roadmap for `app.lingoberg.com` (Firebase Auth sync, Razorpay/Stripe + RevenueCat entitlements, and browser AI Exam Simulator).
- `design/brand-kit/branding.html` — Non-bundled brand identity showcase and mobile splash screen gallery.
