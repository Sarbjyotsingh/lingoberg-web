import { LegalPageLayout } from './LegalPageLayout';
import { siteConfig } from '@/config/site';

export function TermsOfServiceContent() {
  return (
    <LegalPageLayout
      badge="Terms of Service"
      title="TERMS OF SERVICE"
      subtitle="LINGOBERG"
      effectiveDate="November 10, 2026"
      lastUpdated="November 10, 2026"
    >
      <div className="rounded-2xl border border-border/80 bg-secondary/40 p-6">
        <p className="mb-3 font-bold text-foreground">
          IMPORTANT: PLEASE READ THESE TERMS CAREFULLY BEFORE USING LINGOBERG
        </p>
        <p className="mb-3">
          These Terms of Service (&ldquo;Terms,&rdquo; &ldquo;Terms of Service,&rdquo; or
          &ldquo;Agreement&rdquo;) constitute a legally binding agreement between you
          (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and{' '}
          <strong>{siteConfig.company.legalName}</strong> (&ldquo;Company,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), governing your access to
          and use of the Lingoberg mobile application (&ldquo;App&rdquo; or
          &ldquo;Service&rdquo;), available on iOS and Android platforms.
        </p>
        <p className="font-bold text-foreground">
          BY DOWNLOADING, INSTALLING, ACCESSING, OR USING THE APP, YOU ACKNOWLEDGE THAT YOU
          HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE. IF YOU DO
          NOT AGREE TO THESE TERMS, DO NOT DOWNLOAD, INSTALL, ACCESS, OR USE THE APP.
        </p>
      </div>

      <nav className="rounded-2xl border border-border/80 bg-secondary/30 p-6">
        <h2 className="!mt-0 mb-4 text-base font-bold tracking-wider uppercase text-foreground">
          Table of Contents
        </h2>
        <ol className="grid list-decimal grid-cols-1 gap-x-8 gap-y-2 pl-5 text-sm md:grid-cols-2">
          <li>Definitions</li>
          <li>Acceptance of Terms</li>
          <li>Changes to Terms</li>
          <li>Description of Services &amp; AI Disclaimers</li>
          <li>Eligibility</li>
          <li>Account Registration and Security</li>
          <li>Subscriptions, Exam Credits, Payments, and Billing</li>
          <li>User Conduct, Voice &amp; Photo Submissions</li>
          <li>Cancellation, Credit Forfeiture, and Refunds</li>
          <li>Intellectual Property &amp; Trademark Disclaimer</li>
          <li>Disclaimers</li>
          <li>Limitation of Liability</li>
          <li>Governing Law and Jurisdiction</li>
          <li>Dispute Resolution</li>
          <li>Compliance with Indian Laws</li>
          <li>Contact Information</li>
        </ol>
      </nav>

      <section id="definitions">
        <h2>1. DEFINITIONS</h2>
        <p>For the purposes of these Terms of Service, the following definitions apply:</p>
        <ul>
          <li>
            <strong>&ldquo;Account&rdquo;</strong> means the unique account created for you to
            access our Service.
          </li>
          <li>
            <strong>&ldquo;App&rdquo; or &ldquo;Application&rdquo;</strong> means the
            Lingoberg mobile application available on iOS and Android platforms.
          </li>
          <li>
            <strong>&ldquo;Company&rdquo;</strong> refers to {siteConfig.company.legalName},
            D-56/6 F/F L/P BADARPUR EXTN TAJPUR ROAD, BADARPUR, NEW DELHI, DELHI, India.
          </li>
          <li>
            <strong>&ldquo;Content&rdquo;</strong> means all text, images, audio, video,
            stories, flashcards, exam booklets, prompts, animated avatars, evaluation rubrics,
            visual interfaces, and other materials available through the App.
          </li>
          <li>
            <strong>&ldquo;Exam Simulator&rdquo;</strong> means the interactive CEFR A1–B1
            German exam preparation modules available in the App, covering Listening
            (&ldquo;Hören&rdquo;), Speaking (&ldquo;Sprechen&rdquo;), Reading
            (&ldquo;Lesen&rdquo;), Writing (&ldquo;Schreiben&rdquo;), and Language Elements
            (&ldquo;Sprachbausteine&rdquo;).
          </li>
          <li>
            <strong>&ldquo;AI Credits&rdquo; or &ldquo;Exam Credits&rdquo;</strong> means the
            virtual in-app units (denominated as <code>credits</code>) required to initiate and
            evaluate AI-powered Speaking (&ldquo;Sprechen&rdquo;) and Writing
            (&ldquo;Schreiben&rdquo;) exam tasks.
          </li>
          <li>
            <strong>&ldquo;Subscription Credits&rdquo;</strong> means the periodic allocation
            of AI Credits granted as part of an active Weekly, Monthly, or Quarterly
            Subscription, which are valid solely during the current billing cycle, do not roll
            over to the next billing period, and expire automatically at the end of each cycle.
          </li>
          <li>
            <strong>&ldquo;Top-Up Credits&rdquo; or &ldquo;Consumable Credit Packs&rdquo;</strong>{' '}
            means one-time purchased AI Credit refill packs (+5, +15, or +35 AI Credits) that
            do not expire at the end of a billing cycle and remain in your Account until
            consumed or until Account deletion.
          </li>
          <li>
            <strong>&ldquo;Free Features&rdquo;</strong> means the limited features and content
            available without a paid Subscription or AI Credits (specifically selected stories
            and <code>Teil 1</code> of <code>Exam 01</code> in non-credit objective modules).
          </li>
          <li>
            <strong>&ldquo;Premium Content&rdquo;</strong> means the full library of 15+ exam
            papers, stories, and features unlocked via an active Subscription and/or AI
            Credits.
          </li>
          <li>
            <strong>&ldquo;Service&rdquo;</strong> means the Lingoberg application, cloud
            voice/evaluation engine, and all related services and functionality.
          </li>
          <li>
            <strong>&ldquo;Subscription&rdquo;</strong> means a recurring paid plan (Weekly,
            Monthly, or Quarterly) that unlocks the full exam catalog and grants periodic
            Subscription Credits.
          </li>
          <li>
            <strong>&ldquo;Third-Party Platform&rdquo;</strong> means Apple App Store, Google
            Play Store, and any other platform through which the App is distributed.
          </li>
        </ul>
      </section>

      <section id="acceptance">
        <h2>2. ACCEPTANCE OF TERMS</h2>
        <p>By accessing or using Lingoberg, you affirm that:</p>
        <ul className="!list-none !pl-0">
          <li>
            (a) You have read, understood, and agree to be legally bound by these Terms;
          </li>
          <li>(b) You have the legal capacity to enter into this Agreement;</li>
          <li>
            (c) You are at least 13 years of age (or 16 where required), or using it with the
            consent of a legal guardian;
          </li>
          <li>
            (d) You will comply with all applicable local, state, national, and international
            laws.
          </li>
        </ul>
      </section>

      <section id="changes">
        <h2>3. CHANGES TO TERMS</h2>
        <p>
          We reserve the right to modify these Terms at any time. Material changes will be
          communicated via the App or email. Your continued access to or use of the Service
          after modifications become effective constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section id="services">
        <h2>4. DESCRIPTION OF SERVICES &amp; AI DISCLAIMERS</h2>
        <h3>4.1 Service Overview</h3>
        <p>Lingoberg provides a comprehensive German learning and exam preparation platform:</p>
        <ul className="!list-none !pl-0">
          <li>
            <strong>(a) Graded German Audio Stories &amp; Smart Flashcards (A1–C1):</strong>{' '}
            Immersive narrative stories with native German narration, real-time word-sync
            highlighting, one-tap dictionary translations, and personal vocabulary flashcards;
          </li>
          <li>
            <strong>
              (b) Listening (&ldquo;Hören&rdquo;), Reading (&ldquo;Lesen&rdquo;) &amp;
              Sprachbausteine Practice (A1 &amp; B1):
            </strong>{' '}
            Structured practice modules across <code>Teil 1–3</code> featuring authentic audio,
            classified ads, headline matching, grammar and vocabulary cloze emails, adjustable
            Reading Mode text scaling, transcripts, and instant answer explanations;
          </li>
          <li>
            <strong>
              (c) AI Writing Exam Simulator &amp; Handwriting Vision OCR (&ldquo;Schreiben&rdquo;
              — A1 &amp; B1):
            </strong>{' '}
            Interactive registration form completion (<code>Formular</code>) and guided email
            composition (<code>Antwortbogen S30</code>) supporting both direct typing and camera
            or gallery upload of up to two (2) pages of handwritten German answer sheets for
            automated Vision OCR transcription, criterion-by-criterion CEFR rubric grading,
            corrected submissions, and full-score model answers;
          </li>
          <li>
            <strong>
              (d) AI Speaking Exam Simulator (&ldquo;Sprechen&rdquo; — A1 &amp; B1):
            </strong>{' '}
            Real-time conversational oral exam simulations (<code>Teil 1</code>,{' '}
            <code>Teil 2</code>, <code>Teil 3</code>, and Full Mock Exams) with animated AI
            Examiner and Candidate Partner avatars, interactive keyword cards
            (<code>Wortkarten</code>) and picture cards (<code>Bildkarten</code>), live
            speech-to-text transcription, and automated post-exam scorecards.
          </li>
        </ul>

        <h3>4.2 Educational Purpose, Simulated Exam Scoring &amp; AI Limitations</h3>
        <p>
          Our Service utilizes artificial intelligence, automated speech-to-text (STT)
          recognition, optical character recognition (Vision OCR), neural text-to-speech (TTS),
          and large language models (LLMs) to simulate exams and evaluate your German. While we
          calibrate our grading engines closely to official CEFR A1 and B1 rubrics (such as{' '}
          <code>Formblatt M10</code> and <code>S60</code>), you expressly acknowledge and agree
          that:
        </p>
        <ul>
          <li>
            <strong>Practice Estimates Only (No Official Certificate):</strong> All numerical
            scores, criterion grades (<code>A</code>, <code>B</code>, <code>C</code>,{' '}
            <code>D</code>), pass/fail indicators (<code>60%</code> threshold), spoken mistake
            diffs (&ldquo;You said&rdquo; &rarr; &ldquo;Better in German&rdquo;), writing
            corrections, and feedback are <strong>simulated practice estimates</strong>.
            Completing or passing a simulated exam on Lingoberg does <strong>not</strong> grant
            any official language certificate or qualification and does <strong>not</strong>{' '}
            guarantee that you will pass an official <code>telc</code>,{' '}
            <code>Goethe-Institut</code>, <code>ÖSD</code>, or <code>DTZ</code> examination.
          </li>
          <li>
            <strong>Speech Recognition &amp; Handwriting OCR Limitations:</strong> Automated
            STT and Vision OCR may occasionally misinterpret spoken accents, background noise,
            hesitations, or handwritten characters (marking unclear words as{' '}
            <code>[unleserlich]</code>), and AI evaluators may occasionally make grading
            mistakes or differ from human examiners.
          </li>
        </ul>
      </section>

      <section id="eligibility">
        <h2>5. ELIGIBILITY</h2>
        <p>
          You must be at least 13 years of age (or 16 in certain jurisdictions) or use the App
          under the supervision of a parent/legal guardian who accepts these Terms.
        </p>
      </section>

      <section id="account">
        <h2>6. ACCOUNT REGISTRATION AND SECURITY</h2>
        <p>
          You are responsible for providing accurate registration information and maintaining
          the security of your credentials. Each User may only maintain one Account, and
          sharing access is prohibited.
        </p>
        <p className="mt-3">
          <strong>Account Deletion:</strong> You have the right to request deletion of your
          account and personal data at any time via App settings or by emailing{' '}
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="font-semibold text-primary hover:underline"
          >
            {siteConfig.supportEmail}
          </a>
          .
        </p>
      </section>

      <section id="subscriptions">
        <h2>7. SUBSCRIPTIONS, EXAM CREDITS, PAYMENTS, AND BILLING</h2>

        <h3>7.1 Free Access vs. Subscription Tiers</h3>
        <ul>
          <li>
            <strong>No Free Credits on Startup:</strong> Users do <strong>not</strong> receive
            free AI Credits upon downloading the App, launching the App, or creating an
            Account.
          </li>
          <li>
            <strong>Free Tier Scope:</strong> Without a Subscription, you may access{' '}
            <strong>
              <code>Teil 1</code> of <code>Exam 01</code>
            </strong>{' '}
            in non-credit objective modules and selected free stories. All remaining exam parts
            (<code>Teil 2</code>, <code>Teil 3</code>, Full Exams), AI-evaluated Speaking
            (&ldquo;Sprechen&rdquo;) and Writing (&ldquo;Schreiben&rdquo;) tasks, and{' '}
            <code>Exams 02–15+</code> are locked and require an active Subscription and/or AI
            Credits.
          </li>
          <li>
            <strong>Auto-Renewing Subscription Plans:</strong> We offer Weekly, Monthly, and
            Quarterly Subscriptions (&ldquo;Exam Success Premium&rdquo;). An active
            Subscription unlocks 100% of our 15+ exam papers across levels and grants a
            recurring allocation of Subscription Credits each billing cycle (<strong>12 AI
            Credits / week</strong> on Weekly, <strong>45 AI Credits / month</strong> on
            Monthly, or <strong>135 AI Credits / quarter</strong> on Quarterly).
          </li>
          <li>
            <strong>Consumable Credit Top-Up Packs:</strong> We also offer one-time Consumable
            Credit Refill Packs (<strong>+5 Credits</strong>, <strong>+15 Credits</strong>, and{' '}
            <strong>+35 Credits</strong>) for users who wish to top up their AI Credit balance.
          </li>
        </ul>

        <h3>7.2 AI Credit Consumption Rates</h3>
        <p>AI Credits are consumed according to the following fixed schedule:</p>
        <ul>
          <li>
            <strong>Full Speaking Mock Exam (&ldquo;Sprechen&rdquo; — Teil 1 + Teil 2 + Teil 3):</strong>{' '}
            <strong>3 AI Credits</strong> per session;
          </li>
          <li>
            <strong>Single Speaking Section (&ldquo;Sprechen&rdquo; — Teil 1, Teil 2, or Teil 3):</strong>{' '}
            <strong>1 AI Credit</strong> per session;
          </li>
          <li>
            <strong>Writing Exam Task (&ldquo;Schreiben&rdquo; — Typed or Handwritten Photo OCR):</strong>{' '}
            <strong>1 AI Credit</strong> per submission;
          </li>
          <li>
            <strong>
              Reading (&ldquo;Lesen&rdquo;), Listening (&ldquo;Hören&rdquo;), Sprachbausteine,
              Audio Stories &amp; Flashcards:
            </strong>{' '}
            <strong>0 AI Credits</strong> (unlimited practice within unlocked content).
          </li>
        </ul>

        <h3>7.3 Non-Rollover of Subscription Credits vs. Permanent Top-Up Credits</h3>
        <ul>
          <li>
            <strong>Subscription Credits Do NOT Roll Over:</strong> Subscription Credits
            granted with a Weekly, Monthly, or Quarterly plan apply strictly to the billing
            cycle in which they are issued. <strong>Unused Subscription Credits do not roll
            over</strong> to the next week, month, or quarter and expire automatically at the
            end of each billing period.
          </li>
          <li>
            <strong>Top-Up Credits Are Kept All the Time:</strong> Top-Up Credits purchased via
            one-time Consumable Credit Packs (+5, +15, or +35 Credits) <strong>never
            expire</strong> at the end of a billing cycle and are retained in your Account
            balance at all times (even if a Subscription expires or is canceled) until you use
            them or delete your Account.
          </li>
        </ul>

        <h3>
          7.4 Immediate Upfront Credit Deduction &amp; Strict Non-Refund / Forfeiture Policy
        </h3>
        <div className="my-4 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-5">
          <p className="mb-2 font-bold text-foreground">
            ⚠️ IMPORTANT NOTICE REGARDING IMMEDIATE CREDIT DEDUCTION ON EXAM START:
          </p>
          <p className="text-sm leading-relaxed">
            AI Credits (<strong>1 Credit</strong> for a single Speaking Teil or Writing task,
            or <strong>3 Credits</strong> for a Full Speaking Exam) are{' '}
            <strong>deducted immediately as soon as the exam session starts</strong> (or when a
            Writing evaluation is submitted). Once deducted,{' '}
            <strong>
              credits are strictly non-refundable and will NOT be restored or re-credited under
              any circumstances
            </strong>
            , including if the App or your phone closes by mistake, your battery dies, your
            internet connection drops, or you exit the exam early for any reason.
          </p>
        </div>
        <p>
          By tapping &ldquo;Start Exam,&rdquo; &ldquo;Start Practice,&rdquo; or submitting a
          Writing task, you acknowledge and agree that the required AI Credits are consumed
          immediately upfront to provision cloud AI compute and voice sessions, and will{' '}
          <strong>never be refunded, restored, or credited back</strong> in the event of:
        </p>
        <ul className="!list-none !pl-0">
          <li>
            (a) <strong>Accidental or Intentional App Closure:</strong> Closing, minimizing, or
            force-quitting the App by mistake, swiping back, navigating to another screen, or
            confirming exit on the in-app <em>&ldquo;Leave &amp; Forfeit Credit&rdquo;</em>{' '}
            warning dialog;
          </li>
          <li>
            (b) <strong>Phone or Device Interruptions:</strong> Your phone or tablet powering
            off, dead battery, device reboot, operating system crash, accidental screen lock,
            or interruption by an incoming phone call, alarm, or notification;
          </li>
          <li>
            (c) <strong>Network or Connectivity Drops:</strong> Loss of Wi-Fi or cellular data
            connection, weak signal, WebSocket disconnection, or network timeout during an
            active exam;
          </li>
          <li>
            (d) <strong>User or Environmental Issues:</strong> Microphone or camera permission
            denial, background noise, silent audio turns, blurry or illegible handwritten
            photos, or leaving an exam incomplete for any other reason whatsoever.
          </li>
        </ul>

        <h3>7.5 Payment Processing, Automatic Renewal &amp; Virtual Currency Status</h3>
        <p>
          All payments are processed securely through Apple App Store or Google Play Store. We
          do not store your payment card details. Subscriptions automatically renew unless
          canceled at least 24 hours before the end of the current billing period in your Apple
          or Google account settings. Deleting the App does not cancel your Subscription. AI
          Credits are licensed virtual in-app items with <strong>no monetary or cash
          value</strong>, cannot be exchanged for cash, and cannot be transferred between
          users or accounts.
        </p>
      </section>

      <section id="conduct">
        <h2>8. USER CONDUCT, VOICE &amp; PHOTO SUBMISSIONS</h2>
        <p>
          You agree not to engage in security violations, harassment, intellectual property
          infringement, or commercial misuse, including attempting to scrape, reverse-engineer,
          or abuse our live voice WebSocket or AI evaluation endpoints.
        </p>
        <p className="mt-3">
          When recording voice responses in Speaking (&ldquo;Sprechen&rdquo;) or uploading
          photos of handwritten exam sheets in Writing (&ldquo;Schreiben&rdquo;) (&ldquo;User
          Content&rdquo;), you grant us a limited, non-exclusive license to process, transcribe,
          evaluate, and archive such content in our secure European cloud storage to deliver
          the Service to you. You must only upload photographs of your own handwritten German
          practice texts and must not upload unlawful content, faces, government IDs, or third
          parties&rsquo; personal data.
        </p>
      </section>

      <section id="refunds">
        <h2>9. CANCELLATION, CREDIT FORFEITURE, AND REFUNDS</h2>
        <p>
          You may cancel an auto-renewing Subscription at any time via your Apple App Store or
          Google Play Store account settings; cancellation takes effect at the end of the
          current billing cycle. <strong>All sales of Subscriptions and Consumable Credit
          Top-Up Packs are final and non-refundable.</strong>
        </p>
        <p className="mt-3">
          <strong>No Refunds for Used, Expired, or Forfeited AI Credits:</strong> As stated in
          Section 7.3 and Section 7.4, unused Subscription Credits expire at the end of each
          billing period without rolling over, and AI Credits deducted when an exam starts are
          forfeited immediately if the session is interrupted by accidental app closure, phone
          shutdown, network failure, or user exit. Neither the Company nor any Third-Party
          Platform provides monetary refunds or credit restorations for used, expired, or
          forfeited AI Credits. Any statutory refund requests for store billing errors must be
          directed to Apple App Store or Google Play Store in accordance with their respective
          policies.
        </p>
      </section>

      <section id="intellectual-property">
        <h2>10. INTELLECTUAL PROPERTY &amp; TRADEMARK DISCLAIMER</h2>
        <p>
          The Service, original stories, exam practice booklets, audio recordings, 3D/2D
          animated avatars, software code, and all Content are owned by the Company and
          protected by copyright and trademark laws. You receive a limited, non-exclusive,
          non-transferable, revocable license to use the App strictly for personal,
          non-commercial educational purposes.
        </p>
        <p className="mt-3">
          <strong>Independent Platform &amp; Non-Affiliation Disclaimer:</strong> Lingoberg is
          an independent educational platform and is <strong>not</strong> affiliated with,
          endorsed by, authorized by, or sponsored by <strong>telc gGmbH</strong>, the{' '}
          <strong>Goethe-Institut e.V.</strong>, <strong>ÖSD</strong>, or any official
          examination institution. References to <code>telc Deutsch A1</code>,{' '}
          <code>telc Deutsch B1</code>, <code>Start Deutsch 1</code>,{' '}
          <code>Zertifikat Deutsch</code>, <code>Formblatt M10</code>,{' '}
          <code>Antwortbogen S30</code>, <code>Sprachbausteine</code>, or CEFR levels (A1–C1)
          are used strictly for descriptive purposes to indicate the proficiency level and
          structural format of our independent practice simulations. All third-party trademarks
          belong to their respective owners.
        </p>
      </section>

      <section id="disclaimers">
        <h2>11. DISCLAIMERS</h2>
        <p className="uppercase">
          THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;
          BASIS. WE EXPLICITLY DISCLAIM ANY WARRANTIES REGARDING THE LINGUISTIC PERFECTION,
          TRANSCRIPTION ACCURACY, OR GRADING RELIABILITY OF AI-GENERATED STORIES, VOICE
          EXAMINERS, VISION OCR, OR EXAM EVALUATIONS PROVIDED WITHIN THE APP. WE DO NOT
          GUARANTEE LEARNING OUTCOMES OR OFFICIAL EXAMINATION PASS RATES.
        </p>
      </section>

      <section id="liability">
        <h2>12. LIMITATION OF LIABILITY</h2>
        <p className="uppercase">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY SHALL NOT BE LIABLE FOR
          INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, INCLUDING ANY LOSS OF EXAM CREDITS
          CAUSED BY DEVICE CLOSURE, BATTERY FAILURE, OR INTERNET DISCONNECTION. OUR TOTAL
          AGGREGATE LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU IN THE PAST SIX (6)
          MONTHS, OR TEN US DOLLARS (\$10), WHICHEVER IS GREATER.
        </p>
      </section>

      <section id="governing-law">
        <h2>13. GOVERNING LAW AND JURISDICTION</h2>
        <p>
          These Terms shall be governed by the laws of India. The courts in New Delhi, India
          shall have exclusive jurisdiction.
        </p>
      </section>

      <section id="dispute-resolution">
        <h2>14. DISPUTE RESOLUTION</h2>
        <p>
          We encourage attempting informal resolution first. If unresolved, disputes will be
          settled through binding arbitration in New Delhi, India under the Arbitration and
          Conciliation Act, 1996.
        </p>
      </section>

      <section id="compliance">
        <h2>15. COMPLIANCE WITH INDIAN LAWS</h2>
        <p>
          We comply with the Information Technology Act, 2000. For grievances, contact the
          Grievance Officer at{' '}
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="font-semibold text-primary hover:underline"
          >
            {siteConfig.supportEmail}
          </a>
          .
        </p>
      </section>

      <section id="contact">
        <h2>16. CONTACT INFORMATION</h2>
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
