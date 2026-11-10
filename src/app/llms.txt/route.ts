import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

export function buildLlmsTxtContent(): string {
  const languages = siteConfig.supportedAppLanguages
    .map((lang) => `${lang.label} (${lang.code})`)
    .join(', ');

  return `# ${siteConfig.name} — ${siteConfig.tagline}

> ${siteConfig.description}

## Overview
- **Brand**: ${siteConfig.name}
- **Website**: ${siteConfig.url}
- **Company**: ${siteConfig.company.legalName} (CIN: ${siteConfig.company.cin})
- **Support Email**: ${siteConfig.supportEmail}
- **Data & AI Region**: ${siteConfig.company.primaryCloudRegion}
- **Supported App UI & Translation Languages**: ${languages}

## Core V2 Features
1. **Full 5-Skill telc German A1 & B1 Exam Simulator**: Practice Hören (Listening), Sprechen (Speaking), Lesen (Reading), Schreiben (Writing), and B1 Sprachbausteine (Grammar & Cloze) across 15+ full mock exams per module.
2. **Live AI Speaking Exam (Sprechen)**: Real-time oral exam simulations (Teil 1–3) with two animated AI avatars (Examiner & Candidate Partner), Wortkarten, Bildkarten, joint planning sheets, and official Formblatt M10 / M10-A1 scorecards with inline speech corrections.
3. **Writing Exam & Handwritten Photo Vision OCR (Schreiben)**: Practice digital Antwortbogen S30 emails/letters, A1 Formular + Kurze Nachricht, or upload 1–2 photos of handwritten paper sheets graded via AWS Bedrock Vision OCR and CEFR rubrics.
4. **Immersive German Audio Stories & Flashcards (A1–C1)**: Graded stories with real-time word-sync highlighting, one-tap contextual translations, and personal flashcard decks.

## Free Access, Subscriptions & AI Exam Credits
- **Free Access on Startup**: Zero (0) free AI Exam Credits are granted on account creation. Teil 1 of Exam 01 across exam modules is unlocked for free so users can preview the simulator; all remaining Teile and Exam 02–15+ sets are locked until unlocked via Pro or Credit Top-Up Packs.
- **Credit Costs**:
  - Full Speaking Exam (Sprechen — all 3 Teile + Formblatt M10): 3 Credits
  - Single Speaking Part (Sprechen — 1 Teil practice): 1 Credit
  - Writing Evaluation (Schreiben — typed or Handwritten Photo Vision OCR): 1 Credit
  - Objective Modules & Stories (Lesen, Hören, Sprachbausteine, Audio Stories): 0 Credits
- **Subscription Credits vs. Top-Up Credits**:
  - Subscription Credits (Weekly: 12/week, Monthly: 45/month, 3-Month: 135/quarter) reset each billing cycle and do NOT roll over.
  - Credit Top-Up Packs (+5, +15, +35 Credits) are permanent and never expire.
- **Immediate Deduction Policy**: Credits are deducted upfront as soon as an AI Speaking or Writing session starts and are non-refundable if the phone or app closes mid-session.

## Key URLs
- [Home](${siteConfig.url}/): Overview of the 5-skill telc A1 & B1 exam suite and German stories
- [Contact & Support](${siteConfig.url}/contact/): Customer support, billing inquiries, and account deletion requests
- [Privacy Policy](${siteConfig.url}/privacy-policy/): GDPR & DPDPA data protection, voice/handwriting processing, and EU cloud hosting
- [Terms of Service](${siteConfig.url}/terms-of-service/): Subscriptions, AI Exam Credits, non-refund rules, and telc/Goethe disclaimer
- [iOS App Store](${siteConfig.stores.appStoreUrl}): Download Lingoberg for iPhone and iPad
- [Google Play Store](${siteConfig.stores.playStoreUrl}): Download Lingoberg for Android
`;
}

export function GET() {
  return new Response(buildLlmsTxtContent(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
