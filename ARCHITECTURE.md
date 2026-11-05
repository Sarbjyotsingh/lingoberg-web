# Lingoberg Web — Architecture & Design System

## 1. Overview

`lingoberg-web` is the official web platform for **Lingoberg** (rebranded from _Lingua Stories_), built with **Next.js 16 (App Router)**, **React 19**, **TypeScript 5.9**, **Tailwind CSS v4**, and **next-intl**.

The codebase follows the **Feature-Sliced Architecture** proven in `dmatexam` and the **Dual-Target Build Strategy** proven in `abhyashala-web`:

- **Phase 1 (Current — `lingoberg.com`)**: Static export (`output: 'export'`, `trailingSlash: true`) deployed to **AWS S3 + CloudFront** via `scripts/deploy-s3.sh`.
- **Phase 2 (Next — `app.lingoberg.com`)**: Full-stack SSR/hybrid build (`NEXT_BUILD_TARGET=amplify`) deployed to **AWS Amplify** with subdomain routing (`src/proxy.amplify.ts`), Firebase Auth (`firebaseUid`), AWS DynamoDB/Lambda sync, and live WebSocket/WebRTC Exam Simulators.

---

## 2. Directory Structure

```text
lingoberg-web/
├── design/
│   └── brand-kit/                 # Non-bundled raw brand exploration & mobile splash assets
│       ├── branding.html          # Interactive brand guidelines & splash showcase
│       └── assets/                # 40 SVG/PNG logos, marks, and mobile splash screens
├── i18n/
│   └── en.json                    # Centralized UI copy & translations
├── public/                        # Strictly production-bundled web assets (< 250 KB)
│   ├── images/avatars/            # Testimonial learner avatars
│   ├── favicon.ico / .svg / .png  # Multi-size favicons
│   ├── apple-touch-icon.png       # 180x180 iOS home screen icon
│   ├── og-image.png               # Social OpenGraph preview image
│   └── logo-*.svg / mark-*.svg    # Inline-'o' and crystal mark SVGs
├── scripts/
│   └── deploy-s3.sh               # AWS S3 sync + CloudFront invalidation script
├── src/
│   ├── app/                       # Next.js App Router (thin routing layer)
│   │   ├── (marketing)/           # Public marketing, exam showcase, contact & legal routes
│   │   ├── llms.txt/route.ts      # AI crawler context endpoint (force-static)
│   │   ├── manifest.ts            # Web app manifest (force-static)
│   │   ├── robots.ts              # Robots.txt generator (force-static)
│   │   ├── sitemap.ts             # XML Sitemap generator (force-static)
│   │   ├── globals.css            # Tailwind v4 glacial ice theme tokens & animations
│   │   ├── layout.tsx             # Root HTML shell, Plus Jakarta Sans + JetBrains Mono
│   │   └── not-found.tsx          # Branded 404 page
│   ├── components/
│   │   ├── layouts/               # Navigation & Footer
│   │   ├── ui/                    # Reusable UI primitives (Logo, LoadingModal, StoreBadges, etc.)
│   │   └── Providers.tsx          # ThemeProvider wrapper
│   ├── config/
│   │   └── site.ts                # Single source of truth for URLs, legal entity & links
│   ├── features/                  # Feature-Sliced domain modules
│   │   ├── marketing/             # Homepage sections (Hero, Bento, ExamHighlight, FAQ, etc.)
│   │   ├── exams/                 # /exams interactive CEFR A1–B2 Speaking & Listening showcase
│   │   ├── contact/               # /contact learner support & company details
│   │   └── legal/                 # Privacy, Terms, Refund, and Pricing policy views
│   ├── i18n/                      # next-intl routing & request config
│   ├── lib/                       # Metadata builder, analytics facade, class merger
│   ├── types/
│   │   └── platform.ts            # Cross-platform contracts shared with lingoberg-app
│   └── proxy.amplify.ts           # Phase 2 subdomain + locale middleware for AWS Amplify
├── amplify.yml                    # AWS Amplify build pipeline config
└── next.config.ts                 # Dual-mode Static Export / Amplify SSR configuration
```

---

## 3. Glacial Ice Brand System

- **Typography**:
  - Display & UI: `Plus Jakarta Sans` (`--font-sans`)
  - Badges, CEFR Levels & Exam Timers: `JetBrains Mono` (`--font-mono`)
- **Primary Wordmark (`<Logo variant="inline-o" />`)**:
  - Renders `Ling` + `<CrystalMark />` (replacing the letter `o`) + `berg`.
- **Color Palette**:
  - **Light Mode**: Ice surface `#F8FAFC`, Pure white cards `#FFFFFF`, Deep Navy text `#0F172A`, Crystal Sky accent `#0EA5E9`.
  - **Dark Mode**: Deep Glacial Navy `#0B192C`, Elevated Slate `#112239`, Frost White `#F0F9FF`, Luminous Ice `#38BDF8`.

---

## 4. Non-Bundled Asset Policy

Mobile-only splash screens (`splash-screen-*`, `splash-variant3-*`, `logo-splash-*`, `logo-stacked-*`) and `branding.html` live inside `design/brand-kit/`. Next.js only bundles files from `public/` and `src/`, keeping the production `out/` bundle lean and fast.
