# Lingoberg Phase 2 Roadmap — `app.lingoberg.com` Web Portal

This document outlines the architecture for **Phase 2**, where mobile users of `lingoberg-app` (Flutter) and new web learners can sign in on `app.lingoberg.com` to access their German stories, vocabulary flashcards, subscriptions, and live AI Speaking & Listening Exam Simulators in the browser.

---

## 1. Subdomain & Build Switch

1. **Enable SSR Mode**:
   - Set environment variable `NEXT_BUILD_TARGET=amplify` in AWS Amplify.
   - `next.config.ts` automatically disables `output: 'export'` so dynamic API routes, server actions, and middleware run natively.
2. **Activate Subdomain Proxy**:
   - Rename `src/proxy.amplify.ts` to `src/proxy.ts`.
   - Requests to `app.lingoberg.com/*` are transparently rewritten to `src/app/(portal)/*` while `lingoberg.com/*` continues serving `src/app/(marketing)/*`.

---

## 2. Shared Authentication (`Firebase Auth` → AWS Backend)

`lingoberg-app` authenticates users via **Firebase Authentication** (Google Sign-In & Sign in with Apple) and syncs profiles to AWS (`eu-central-1`) keyed by `firebaseUid`:

- **Web Auth Flow**:
  - Initialize Firebase Web SDK in `src/features/auth/` using the same Firebase project as `lingoberg-app`.
  - Support Google Sign-In and Apple OAuth in the browser.
  - On sign-in, call the existing AWS Lambda `UserApiService` (`POST /users` and `GET /users/{firebaseUid}`) using the shared TypeScript contracts in `src/types/platform.ts` (`LingobergUserProfile`, `LingobergUserAnalytics`, `LingobergStoryProgress`).

---

## 3. Unified Subscriptions & Payment Gateways

To ensure a user who subscribes on iOS/Android automatically gets Pro/Exam access on Web—and vice versa:

- **Mobile Purchases**: Managed via Apple App Store & Google Play Store synced to **RevenueCat** (`app_user_id = firebaseUid`).
- **Web Purchases**:
  - Integrate **Razorpay** (for INR / UPI / Cards) and **Stripe** (for EUR / USD / SEPA) checkout sessions on `app.lingoberg.com/billing`.
  - Payment webhooks update the user's entitlement record in RevenueCat / AWS DynamoDB keyed by `firebaseUid`.
  - Both `lingoberg-app` and `lingoberg-web` read `LingobergEntitlementState` to unlock stories and exam simulations across all devices.

---

## 4. Browser-Based AI Exam Simulator (`src/features/exam-engine/`)

- **Listening Simulator (`Hören Teil 1–3`)**:
  - Fetch level manifest and audio tracks from `s3.eu-central-1.amazonaws.com/telc/{level}/listening/`.
  - Enforce official 1x / 2x playback rules, countdown timers, and instant item grading.
- **Speaking Simulator (`Sprechen Teil 1–3`)**:
  - Capture browser microphone audio via Web Audio API (`AudioContext` + 16kHz PCM worklet) and stream over `wss://voice.../exam`.
  - Render the 3D Examiner (`Herr Weber`) and AI Partner (`Lukas`) with real-time lip-sync / speaking state indicators.
  - Submit the completed session transcript to `/evaluate` and render the `FormblattM10Evaluation` scorecard (`src/types/platform.ts`).
