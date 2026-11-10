import { LegalPageLayout } from './LegalPageLayout';
import { siteConfig } from '@/config/site';

export function PrivacyPolicyContent() {
  return (
    <LegalPageLayout
      badge="Privacy Policy"
      title="PRIVACY POLICY"
      subtitle="LINGOBERG"
      effectiveDate="November 10, 2026"
      lastUpdated="November 10, 2026"
    >
      <section>
        <h2>1. INTRODUCTION</h2>
        <p>
          Welcome to Lingoberg (&ldquo;App,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;), a mobile German language learning and exam simulation application
          operated by <strong>{siteConfig.company.legalName}</strong> (&ldquo;Company&rdquo;),
          a company incorporated under the laws of India.
        </p>
        <p className="mt-4">
          This Privacy Policy explains how we collect, use, disclose, and safeguard your
          information when you use our mobile application available on iOS and Android
          platforms, including our graded audio stories and our 5-skill CEFR A1–B1 Exam
          Simulator (Listening <code>Hören</code>, Speaking <code>Sprechen</code>, Reading{' '}
          <code>Lesen</code>, Writing <code>Schreiben</code>, and{' '}
          <code>Sprachbausteine</code>). This Privacy Policy applies to all users of the App,
          regardless of location, and describes your privacy rights under applicable laws
          including the General Data Protection Regulation (GDPR), the California Consumer
          Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA), the
          California Online Privacy Protection Act (CalOPPA), and Indian data protection laws.
        </p>
        <p className="mt-4">
          Please read this Privacy Policy carefully. By downloading, accessing, or using
          Lingoberg, you acknowledge that you have read, understood, and agree to be bound by
          the terms of this Privacy Policy. If you do not agree with the terms of this Privacy
          Policy, please do not access or use the App.
        </p>

        <div className="mt-6 rounded-2xl border border-border/80 bg-secondary/40 p-6">
          <p className="mb-2 font-semibold text-foreground">Company Contact Information:</p>
          <p>{siteConfig.company.legalName}</p>
          <p>D-56/6 F/F L/P BADARPUR EXTN TAJPUR ROAD</p>
          <p>BADARPUR, NEW DELHI, DELHI</p>
          <p className="mb-4">Delhi, India - 110044</p>

          <p className="mb-1 font-semibold text-foreground">
            For privacy-related inquiries:
          </p>
          <p>
            Email:{' '}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="font-semibold text-primary hover:underline"
            >
              {siteConfig.supportEmail}
            </a>
          </p>
        </div>
      </section>

      <section>
        <h2>2. INFORMATION WE COLLECT</h2>
        <p>
          We collect information that you provide directly to us, information that is
          collected automatically when you use our App, and information from third-party
          sources. The types of information we collect depend on how you interact with our
          App.
        </p>

        <h3>2.1 Personal Information You Provide</h3>
        <p>
          When you create an account, practice stories or exams, or communicate with us, we may
          collect the following categories of personal information:
        </p>

        <div className="my-6 overflow-x-auto">
          <table className="min-w-full border-collapse border border-border text-left text-sm">
            <thead>
              <tr className="bg-secondary/60">
                <th className="border border-border p-3 font-semibold text-foreground">
                  Category
                </th>
                <th className="border border-border p-3 font-semibold text-foreground">
                  Specific Data Elements
                </th>
                <th className="border border-border p-3 font-semibold text-foreground">
                  Purpose &amp; GDPR Legal Basis
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3 font-medium text-foreground">
                  Account Information
                </td>
                <td className="border border-border p-3">
                  Name, Email Address, pseudonymous Account ID (<code>firebaseUid</code>)
                </td>
                <td className="border border-border p-3">
                  Account creation, authentication, cross-device sync, communication (Art.
                  6(1)(b) GDPR)
                </td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium text-foreground">
                  Voice &amp; Speaking Exam Data (<code>Sprechen</code>)
                </td>
                <td className="border border-border p-3">
                  Microphone voice recordings (<code>turn_XX.input.wav</code> captured during
                  Speaking Exam sessions), speech-to-text transcripts (<code>user_text</code>),
                  synthesized AI examiner/partner audio responses, turn metadata, and{' '}
                  <code>Formblatt M10</code> / <code>M10-A1</code> evaluation scorecards
                  (scores, criterion grades <code>A–D</code>, spoken mistake diffs, and
                  feedback)
                </td>
                <td className="border border-border p-3">
                  Transcribing your spoken German responses, generating live AI examiner and
                  partner dialogue, grading your speaking performance, and maintaining your
                  attempt history (Art. 6(1)(b) GDPR)
                </td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium text-foreground">
                  Writing Exam &amp; Handwritten Photo Data (<code>Schreiben</code>)
                </td>
                <td className="border border-border p-3">
                  Typed German form and email responses (<code>submission_text</code>),
                  photographed or uploaded images of handwritten German exam sheets (up to 2
                  pages per attempt, <code>images/page_01.jpg</code>–<code>page_02.jpg</code>),
                  Vision OCR transcripts (<code>ocr_text</code>), and AI writing rubric
                  scorecards
                </td>
                <td className="border border-border p-3">
                  Performing optical character recognition (Vision OCR) on handwritten German
                  answer sheets, grading your writing against CEFR A1/B1 rubrics, and saving
                  your attempt history (Art. 6(1)(b) GDPR)
                </td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium text-foreground">
                  Subscription &amp; Exam Credit Balance Data
                </td>
                <td className="border border-border p-3">
                  Active subscription tier (Weekly, Monthly, Quarterly), non-expiring Top-Up
                  Credit Pack purchases (+5, +15, +35 Credits), non-rollover Subscription
                  Credit grants (12, 45, 135 Credits), real-time AI Credit balance (
                  <code>credits</code>), and upfront credit deduction (<code>spend</code>) logs
                  when an exam starts
                </td>
                <td className="border border-border p-3">
                  Verifying entitlements, provisioning AI exam sessions, deducting credits on
                  exam start, and preventing abuse (Art. 6(1)(b) &amp; 6(1)(f) GDPR)
                </td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium text-foreground">
                  Learning &amp; Exam Progress Data
                </td>
                <td className="border border-border p-3">
                  Selected CEFR level (A1–C1), story listening progress, saved vocabulary
                  flashcards, and scores/attempts across Listening (<code>Hören</code>),
                  Speaking (<code>Sprechen</code>), Reading (<code>Lesen</code>), Writing (
                  <code>Schreiben</code>), and <code>Sprachbausteine</code>
                </td>
                <td className="border border-border p-3">
                  Personalization of your learning experience, progress tracking, and exam
                  readiness analytics (Art. 6(1)(b) GDPR)
                </td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium text-foreground">
                  User Preferences
                </td>
                <td className="border border-border p-3">
                  App UI language (<code>ui_locale</code>: EN, DE, ES, TR, AR, RU, UK),
                  notification reminders, Reading Mode text zoom scale, and theme settings
                </td>
                <td className="border border-border p-3">
                  Localizing AI feedback into your language and customizing app display (Art.
                  6(1)(b) GDPR)
                </td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium text-foreground">
                  Communications
                </td>
                <td className="border border-border p-3">
                  Correspondence with our support team, feedback, survey responses
                </td>
                <td className="border border-border p-3">
                  Customer support and service improvement (Art. 6(1)(b) &amp; 6(1)(f) GDPR)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>2.2 Device Permissions &amp; Information Collected Automatically</h3>
        <div className="my-6 rounded-2xl border border-primary/25 bg-primary/5 p-5">
          <h4 className="mb-2 font-semibold text-foreground">
            Microphone, Camera &amp; Photo Library Permissions
          </h4>
          <ul>
            <li>
              <strong>Microphone Access (<code>NSMicrophoneUsageDescription</code> /{' '}
              <code>RECORD_AUDIO</code>):</strong> Our App requests microphone access solely
              when you actively tap the record button during an AI Speaking Exam (
              <code>Sprechen</code>). The App never records audio in the background or outside
              an active speaking turn.
            </li>
            <li>
              <strong>Camera &amp; Photo Library Access (<code>NSCameraUsageDescription</code>{' '}
              &amp; <code>NSPhotoLibraryUsageDescription</code>):</strong> Our App requests
              camera or photo library access solely when you select the{' '}
              <em>Handwritten Paper</em> option in a Writing Exam (<code>Schreiben</code>) to
              photograph or upload up to two (2) pages of your handwritten German answer sheet
              (<code>Antwortbogen S30</code>) for Vision OCR transcription and grading.{' '}
              <strong>Privacy Tip:</strong> Please photograph only your handwritten German text
              and avoid including faces, government IDs, or unrelated personal documents in
              uploaded images.
            </li>
          </ul>
        </div>

        <p>
          When you access or use our App, we also automatically collect certain technical
          information, including:
        </p>

        <div className="my-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border/70 bg-secondary/30 p-5">
            <h4 className="mb-2 font-semibold text-foreground">Device Information</h4>
            <ul>
              <li>Device model and manufacturer</li>
              <li>Operating system type and version</li>
              <li>Device locale and language settings</li>
              <li>Timezone</li>
              <li>
                <strong>Hardware Identifier</strong> (Android) and{' '}
                <strong>IdentifierForVendor</strong> (iOS) – these device identifiers are
                collected and linked to our attribution partner, AppsFlyer, to measure
                installation sources and marketing effectiveness
              </li>
              <li>Unique device identifiers</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border/70 bg-secondary/30 p-5">
            <h4 className="mb-2 font-semibold text-foreground">Usage Information</h4>
            <ul>
              <li>App interaction data (features used, exam modules practiced, screens viewed)</li>
              <li>Session duration, exam turn latency, and frequency</li>
              <li>Learning patterns and engagement metrics</li>
            </ul>
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-border/70 bg-secondary/30 p-5">
          <h4 className="mb-2 font-semibold text-foreground">
            Performance and Stability Data
          </h4>
          <ul>
            <li>
              <strong>Firebase Performance Monitoring:</strong> Collects app performance
              metrics including startup time, network latency, and screen rendering times to
              help us optimize the user experience
            </li>
            <li>
              <strong>Firebase Crashlytics:</strong> Collects crash reports and error logs,
              including device state at the time of a crash, to help us identify and fix
              stability issues
            </li>
          </ul>
        </div>

        <div className="mb-6 rounded-2xl border border-border/70 bg-secondary/30 p-5">
          <h4 className="mb-2 font-semibold text-foreground">Network Information</h4>
          <ul>
            <li>IP address and encrypted WebSocket (<code>WSS</code>) session state</li>
            <li>
              General location information (country, region, city) derived from IP address
            </li>
            <li>Network connection type</li>
          </ul>
        </div>

        <h3>2.3 Information from Third-Party Sources</h3>
        <p>We may receive information about you from third-party services, including:</p>
        <ul>
          <li>
            <strong>Authentication providers:</strong> If you choose to sign in using a
            third-party service (e.g., Google, Apple), we receive basic profile information as
            permitted by your privacy settings with that service.
          </li>
          <li>
            <strong>Attribution partners:</strong> We receive information from AppsFlyer about
            how you discovered and installed our App.
          </li>
          <li>
            <strong>Payment &amp; Entitlement platforms:</strong> Apple App Store, Google Play
            Store, and RevenueCat provide us with transaction confirmations, active
            subscription status (<code>Exam Success Premium</code>), and virtual currency (
            <code>credits</code>) balances (but never your payment card numbers).
          </li>
        </ul>

        <h3>2.4 Payment, Subscription &amp; Virtual Credit Ledger Information</h3>
        <p>
          We do <strong>not</strong> directly collect or store your credit card, debit card, or
          bank account information. All financial payment processing for Weekly, Monthly, and
          Quarterly Subscriptions and Consumable Credit Top-Up Packs (+5, +15, +35 Credits) is
          handled securely by Apple App Store (for iOS) and Google Play Store (for Android).
        </p>
        <p className="mt-3">
          We use <strong>RevenueCat</strong> and our <strong>EU Exam Engine</strong> to verify
          your subscription entitlements, track your non-rollover Subscription Credits and
          non-expiring Top-Up Credits, and record immediate upfront credit deductions (
          <code>spend</code> transactions) the moment you start a Speaking or Writing exam.
        </p>
      </section>

      <section>
        <h2>3. HOW WE USE YOUR INFORMATION</h2>
        <p>We use the information we collect for the following purposes:</p>

        <div className="my-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3>3.1 Service Delivery &amp; Exam Simulation</h3>
            <ul>
              <li>To create and manage your Account</li>
              <li>To provide audio stories, flashcards, and all 5 exam modules</li>
              <li>
                To transcribe spoken German turns and generate live AI examiner and partner
                responses
              </li>
              <li>
                To perform Vision OCR on photographed handwritten German writing sheets and
                grade submissions against CEFR rubrics
              </li>
              <li>
                To manage your Subscription, deduct AI Credits upon exam start, and maintain
                your attempt history
              </li>
              <li>To communicate updates and respond to support inquiries</li>
            </ul>
          </div>

          <div>
            <h3>3.2 Analytics &amp; Performance</h3>
            <ul>
              <li>To analyze usage patterns and exam completion trends</li>
              <li>To monitor accuracy and latency of AI voice and grading pipelines</li>
              <li>To diagnose technical problems and WebSocket disconnects</li>
              <li>To measure App performance and optimize UX</li>
            </ul>
          </div>

          <div>
            <h3>3.3 Marketing &amp; Communications</h3>
            <ul>
              <li>To send newsletters and educational content (with your consent)</li>
              <li>To measure advertising campaign effectiveness</li>
              <li>To attribute installations to marketing channels</li>
              <li>To create custom audiences for advertising</li>
            </ul>
          </div>

          <div>
            <h3>3.4 Security, Auditing &amp; Compliance</h3>
            <ul>
              <li>To detect and prevent fraud, credit abuse, and endpoint scraping</li>
              <li>To audit AI evaluation quality and enforce per-attempt cost guardrails</li>
              <li>To comply with legal and tax obligations</li>
              <li>To protect the rights and safety of users</li>
            </ul>
          </div>
        </div>

        <h3>3.5 Legal Bases for Processing (EEA, UK, Swiss Users)</h3>
        <p>
          If you are located in the EEA, UK, or Switzerland, we process your personal data
          based on contract performance (Art. 6(1)(b) GDPR — delivering the stories, AI
          speaking/writing exams, and credit management you request), legitimate interests
          (Art. 6(1)(f) GDPR — security, quality assurance, and fraud prevention), consent
          (Art. 6(1)(a) GDPR — microphone/camera permissions and optional marketing), and legal
          obligations (Art. 6(1)(c) GDPR).
        </p>
        <p className="mt-3">
          You may withdraw your consent at any time (for example, by revoking microphone or
          camera permissions in your device settings or opting out of marketing emails),
          without affecting the lawfulness of processing based on consent before its
          withdrawal.
        </p>
      </section>

      <section>
        <h2>4. DATA SHARING AND DISCLOSURE</h2>
        <p>
          We do not sell your personal information for monetary consideration. However, we may
          share your information with:
        </p>
        <ul>
          <li>
            <strong>Service Providers &amp; Sub-Processors:</strong> Cloud hosting and storage
            providers, subscription and virtual currency management (RevenueCat), AI speech,
            vision OCR, and evaluation APIs, analytics providers, and customer support tools
            who process data strictly on our behalf.
          </li>
          <li>
            <strong>Marketing Partners:</strong> Advertising platforms (via pixels/SDKs) for
            measuring ad effectiveness and audience creation.
          </li>
          <li>
            <strong>Business Transfers:</strong> In connection with a merger, acquisition, or
            sale of assets.
          </li>
          <li>
            <strong>Legal Requirements:</strong> To comply with laws, legal processes, or to
            protect rights and safety.
          </li>
          <li>
            <strong>With Your Consent:</strong> When you have explicitly agreed to share your
            information.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. THIRD-PARTY SERVICES, AI SUB-PROCESSORS, AND SDKs</h2>
        <p>
          Our App integrates the following third-party services and AI sub-processors:
        </p>

        <div className="mt-4 space-y-5">
          <div>
            <h3>5.1 Firebase (Google LLC)</h3>
            <p>
              Used for authentication, analytics, crash reporting, and performance monitoring.{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                Privacy Policy
              </a>
            </p>
          </div>

          <div>
            <h3>5.2 AppsFlyer</h3>
            <p>
              Used for mobile attribution and marketing analytics.{' '}
              <a
                href="https://www.appsflyer.com/legal/services-privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                Privacy Policy
              </a>
            </p>
          </div>

          <div>
            <h3>5.3 RevenueCat</h3>
            <p>
              Used for subscription entitlement management (<code>Exam Success Premium</code>)
              and in-app virtual currency (<code>credits</code>) balance, grant, expiration,
              and upfront deduction tracking across Apple App Store and Google Play Store.{' '}
              <a
                href="https://www.revenuecat.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                Privacy Policy
              </a>
            </p>
          </div>

          <div>
            <h3>5.4 Amplitude</h3>
            <p>
              Used for product analytics, event tracking, and understanding user engagement to
              improve the product experience.
            </p>
          </div>

          <div>
            <h3>5.5 Marketing Pixels</h3>
            <p>
              We use tracking technologies from Facebook (Meta), Google Ads, TikTok, and
              Reddit for ad measurement and audience creation.
            </p>
          </div>

          <div>
            <h3>5.6 AI, Voice &amp; Vision OCR Service Providers</h3>
            <p>
              To power our real-time Speaking Exam Simulator (<code>Sprechen</code>) and
              Writing Exam Evaluator &amp; Handwriting Vision OCR (<code>Schreiben</code>), our
              EU Exam Engine routes requests through the following specialized AI
              sub-processors:
            </p>
            <ul className="mt-3">
              <li>
                <strong>
                  Amazon Web Services EMEA SARL (Frankfurt, Germany —{' '}
                  <code>eu-central-1</code>):
                </strong>{' '}
                Hosts our Exam Engine on AWS Lightsail, stores exam manifests and encrypted
                user attempt archives on <strong>Amazon S3</strong> (including spoken audio
                files <code>turn_XX.input.wav</code>, synthesized audio{' '}
                <code>output.mp3</code>, uploaded handwritten exam sheet photos{' '}
                <code>images/page_XX.jpg</code>, transcripts, and evaluation scorecards), and
                runs <strong>Anthropic Claude Sonnet 4.5</strong> and{' '}
                <strong>Claude Haiku 4.5 (including Vision OCR)</strong> via{' '}
                <strong>AWS Bedrock in Frankfurt (<code>eu-central-1</code>)</strong> for live
                dialogue, handwritten German OCR transcription, and CEFR speaking/writing
                rubric evaluation.{' '}
                <a
                  href="https://aws.amazon.com/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  AWS Privacy Notice
                </a>
              </li>
              <li>
                <strong>Groq, Inc. (USA — EU SCCs):</strong> Processes spoken audio segments
                for low-latency Speech-to-Text transcription (<code>whisper-large-v3</code>)
                and fallback conversational inference during Speaking Exams.{' '}
                <a
                  href="https://groq.com/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  Groq Privacy Policy
                </a>
              </li>
              <li>
                <strong>OpenAI, L.L.C. (USA — EU SCCs):</strong> Processes turn-routing
                decisions, fallback Speech-to-Text transcription, fallback Vision OCR and
                speaking/writing rubric grading (<code>gpt-4o-mini</code>), and fallback speech
                synthesis.{' '}
                <a
                  href="https://openai.com/policies/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  OpenAI Privacy Policy
                </a>
              </li>
              <li>
                <strong>ElevenLabs, Inc. (USA / EU — EU SCCs):</strong> Synthesizes dynamic
                German speech (<code>eleven_flash_v2_5</code> /{' '}
                <code>eleven_multilingual_v2</code>) for AI Examiner and Candidate Partner
                voices. Only AI-generated German text prompts are sent to ElevenLabs; your own
                recorded voice is never shared with ElevenLabs.{' '}
                <a
                  href="https://elevenlabs.io/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  ElevenLabs Privacy Policy
                </a>
              </li>
            </ul>
            <p className="mt-3">
              <strong>Pseudonymization &amp; Zero AI Model Training Guarantee:</strong> Requests
              transmitted to AI sub-processors include only the relevant audio turn,
              handwritten sheet image, or exam transcript together with a pseudonymous session
              or user identifier (<code>user_id</code> / <code>attempt_id</code>)—never your
              name or email address. Under our commercial API agreements with AWS Bedrock,
              Groq, OpenAI, and ElevenLabs, your audio recordings, handwritten photos, and
              transcripts are <strong>never</strong> used to train their foundation models.
            </p>
          </div>

          <div>
            <h3>5.7 Local On-Device Storage vs. Cloud-Archived Exam Attempts</h3>
            <p>
              <strong>Just Audio Background:</strong> Functions locally on your device for
              story and listening exam audio playback.
            </p>
            <p className="mt-2">
              <strong>Hive (On-Device Storage):</strong> Story progress, saved vocabulary
              words, Reading Mode text zoom preferences, cached credit balances, and objective
              exam progress for Reading (<code>Lesen</code>) and{' '}
              <code>Sprachbausteine</code> are stored locally on your device via Hive. By
              contrast, AI Speaking (<code>Sprechen</code>) voice turns and AI Writing (
              <code>Schreiben</code>) submissions and handwritten photos are processed by our
              EU Exam Engine and archived in Amazon S3 (<code>eu-central-1</code>) under your
              pseudonymous <code>user_id</code> so you can review your evaluations and attempt
              history.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>6. IN-APP ADVERTISING</h2>
        <div className="my-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
          <p className="font-semibold text-emerald-700 dark:text-emerald-300">
            🚫 Lingoberg is an ad-free experience. We do not display third-party
            advertisements within the application.
          </p>
        </div>
        <p>
          We operate on a subscription and exam credit model. Your learning and exam
          preparation experience will never be interrupted by third-party advertisements.
        </p>
      </section>

      <section>
        <h2>7. EMAIL MARKETING</h2>
        <p>
          We may send account notifications, updates, educational content, and newsletters.
          You can opt out of marketing emails via the &ldquo;unsubscribe&rdquo; link or by
          contacting us. Transactional emails cannot be opted out of.
        </p>
      </section>

      <section>
        <h2>8. DATA STORAGE, SECURITY, AND INTERNATIONAL TRANSFERS</h2>
        <p>
          Our primary application servers, Exam Engine, Amazon S3 audio/photo archives, and
          primary AWS Bedrock AI evaluators are hosted on{' '}
          <strong>AWS in Frankfurt, Germany (<code>eu-central-1</code>)</strong>. Data may be
          accessed from our headquarters in <strong>India</strong> for engineering and customer
          support, and specific AI or infrastructure sub-processors (such as Groq, OpenAI,
          ElevenLabs, RevenueCat, and Firebase) may process pseudonymous data in the{' '}
          <strong>United States</strong>. We ensure compliance with GDPR Chapter V using
          European Commission Standard Contractual Clauses (SCCs, Art. 46(2)(c) GDPR) and
          strict technical safeguards.
        </p>
        <p className="mt-3">
          We implement industry-standard security measures (TLS/WSS encryption in transit,
          AES-256 encryption at rest in Amazon S3, and strict IAM access controls) to protect
          your data, though no internet transmission is 100% secure.
        </p>
      </section>

      <section>
        <h2>9. DATA RETENTION</h2>
        <p>
          We retain personal information only as long as necessary to fulfill the purposes
          described in this Privacy Policy and comply with legal obligations:
        </p>
        <ul>
          <li>
            <strong>Personal Identifiable Information (Name, Email, Account Profile):</strong>{' '}
            Retained only as long as your Account is active. Upon receiving an account deletion
            request (via in-app settings or email), we purge your personal data from our active
            databases within <strong>30 days</strong>.
          </li>
          <li>
            <strong>
              Speaking Exam Audio Recordings (<code>input.wav</code>), Writing Exam Handwritten
              Photos (<code>images/page_XX.jpg</code>), Transcripts &amp; Scorecards (AWS S3{' '}
              <code>eu-central-1</code>):
            </strong>{' '}
            Retained in encrypted Amazon S3 storage in Frankfurt while your Account is active
            so you can review past exam attempts and scorecards, and to support quality
            assurance and credit ledger auditing. Upon an Account deletion request, all S3
            voice recordings, handwritten exam photos, transcripts, and evaluation files
            associated with your <code>user_id</code> are permanently deleted within{' '}
            <strong>30 days</strong>.
          </li>
          <li>
            <strong>Account Backups (after deletion):</strong> Encrypted disaster-recovery
            backup snapshots may be retained for up to 90 days before automatic overwrite.
          </li>
          <li>
            <strong>Identifiable Usage &amp; Analytics Data:</strong> Retained for up to 26
            months for product analytics purposes.
          </li>
          <li>
            <strong>Anonymized/Aggregated Data:</strong> May be retained indefinitely for
            research and service improvement.
          </li>
        </ul>
      </section>

      <section>
        <h2>10. YOUR RIGHTS (GDPR)</h2>
        <p>
          EEA, UK, and Swiss residents have rights to access, rectify, erase, restrict
          processing, data portability, and object to processing.
        </p>
        <p className="mt-3">
          Additionally, you have the right to lodge a complaint with a supervisory authority
          in your country of residence if you believe your data processing violates applicable
          laws.
        </p>
        <p className="mt-3">
          Contact us at{' '}
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="font-semibold text-primary hover:underline"
          >
            {siteConfig.supportEmail}
          </a>{' '}
          to exercise these rights.
        </p>
      </section>

      <section>
        <h2>11. CALIFORNIA PRIVACY RIGHTS (CCPA/CPRA)</h2>
        <p>
          California residents have rights to know, delete, correct,{' '}
          <strong>limit the use of sensitive personal information</strong>, and opt-out of
          &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal info.
        </p>
        <p className="mt-3">
          While we don&rsquo;t sell data for money, using marketing pixels (Meta, Google,
          etc.) may be considered &ldquo;selling&rdquo; or &ldquo;sharing&rdquo; under CA law.
          You can opt-out by emailing us or adjusting device/platform settings.
        </p>
      </section>

      <section>
        <h2>12. CalOPPA &amp; GPC COMPLIANCE</h2>
        <p>
          We do not currently respond to Do Not Track (DNT) signals. However, we are actively
          evaluating standard browser and device opt-out mechanisms like the Global Privacy
          Control (GPC).
        </p>
      </section>

      <section>
        <h2>13. CHILDREN&rsquo;S PRIVACY</h2>
        <p>
          Lingoberg is not directed at children under 13 (or 16 where applicable). We do not
          knowingly collect data from them. Contact us if you believe we have such data.
        </p>
      </section>

      <section>
        <h2>14. CHANGES TO THIS POLICY</h2>
        <p>
          We may update this policy. Material changes will be notified via app or email.
          Continued use constitutes acceptance.
        </p>
      </section>

      <section>
        <h2>15. CONTACT US</h2>
        <p>
          <strong>{siteConfig.company.legalName}</strong>
        </p>
        <p>D-56/6 F/F L/P BADARPUR EXTN TAJPUR ROAD</p>
        <p>BADARPUR, NEW DELHI, DELHI</p>
        <p className="mb-3">Delhi, India - 110044</p>
        <p>
          Email:{' '}
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="font-semibold text-primary hover:underline"
          >
            {siteConfig.supportEmail}
          </a>
        </p>
      </section>
    </LegalPageLayout>
  );
}
