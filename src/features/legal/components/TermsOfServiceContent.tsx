import { LegalPageLayout } from './LegalPageLayout';
import { siteConfig } from '@/config/site';

export function TermsOfServiceContent() {
  return (
    <LegalPageLayout
      badge="Terms of Service"
      title="TERMS OF SERVICE"
      subtitle="LINGOBERG"
      effectiveDate="February 19, 2026"
      lastUpdated="February 19, 2026"
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
          <li>Description of Services</li>
          <li>Eligibility</li>
          <li>Account Registration and Security</li>
          <li>Subscriptions, Payments, and Billing</li>
          <li>User Conduct and Content</li>
          <li>Cancellation and Refunds</li>
          <li>Intellectual Property Rights</li>
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
            stories, flashcards, visual interfaces, and other materials available through the
            App.
          </li>
          <li>
            <strong>&ldquo;Free Features&rdquo;</strong> means the features and content
            available to all Users without a Subscription.
          </li>
          <li>
            <strong>&ldquo;Premium Content&rdquo;</strong> means the features, content, and
            functionality available exclusively to Subscribers.
          </li>
          <li>
            <strong>&ldquo;Service&rdquo;</strong> means the Lingoberg application and all
            related services and functionality.
          </li>
          <li>
            <strong>&ldquo;Subscription&rdquo;</strong> means a paid recurring or one-time
            purchase that grants access to Premium Content.
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
        <h2>4. DESCRIPTION OF SERVICES</h2>
        <h3>4.1 Service Overview</h3>
        <p>Lingoberg provides:</p>
        <ul className="!list-none !pl-0">
          <li>
            (a) Language Learning Stories: Engaging AI-assisted narrative content;
          </li>
          <li>(b) Flashcards: Interactive vocabulary practice;</li>
          <li>(c) Audio Content: Audio for listening comprehension;</li>
          <li>(d) Progress Tracking &amp; Personalized Learning.</li>
        </ul>

        <h3>4.2 Educational Purpose &amp; AI Generation Notice</h3>
        <p>
          Our Service utilizes AI-assisted language learning content. Stories, translations,
          and learning materials may be generated or assisted by artificial intelligence.
          While we strive for high quality, AI-generated content may sometimes contain minor
          errors, linguistic inaccuracies, or inconsistencies. The Service is intended for
          educational purposes only and does not guarantee specific fluency outcomes, perfect
          accuracy, or replace formal language instruction.
        </p>
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
          account and data at any time via App settings or by emailing{' '}
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
        <h2>7. SUBSCRIPTIONS, PAYMENTS, AND BILLING</h2>
        <h3>7.1 Freemium Model</h3>
        <p>Lingoberg offers both Free Features and paid Premium Subscriptions.</p>

        <h3>7.2 Payment Processing</h3>
        <p>
          All payments are processed securely through Apple App Store or Google Play Store. We
          do not store payment information.
        </p>

        <h3>7.3 Automatic Renewal</h3>
        <p>
          Subscriptions automatically renew unless canceled before the end of the current
          billing period.
        </p>

        <h3>7.4 Free Trials</h3>
        <p>
          If we offer a free trial, you must cancel your subscription at least 24 hours before
          the end of the trial period to avoid being charged. Deleting the application does
          not cancel your subscription.
        </p>
      </section>

      <section id="conduct">
        <h2>8. USER CONDUCT AND CONTENT</h2>
        <p>
          You agree not to engage in security violations, harassment, intellectual property
          infringement, or commercial misuse. If you submit prompts, text, or feedback to our
          AI features or support (&ldquo;User Content&rdquo;), you grant us a worldwide,
          non-exclusive license to use this content to operate and improve the Service.
        </p>
      </section>

      <section id="refunds">
        <h2>9. CANCELLATION AND REFUNDS</h2>
        <p>
          You may cancel via Apple or Google account settings. All sales are final. Refund
          requests must be directed to the respective App Store platform.
        </p>
      </section>

      <section id="intellectual-property">
        <h2>10. INTELLECTUAL PROPERTY RIGHTS</h2>
        <p>
          The Service, AI narratives, and all Content are owned by the Company and protected
          by copyright/trademark laws. You receive a limited, non-transferable license for
          personal, educational use.
        </p>
      </section>

      <section id="disclaimers">
        <h2>11. DISCLAIMERS</h2>
        <p className="uppercase">
          THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;
          BASIS. WE EXPLICITLY DISCLAIM ANY WARRANTIES REGARDING THE LINGUISTIC PERFECTNESS OR
          RELIABILITY OF AI-GENERATED STORIES PROVIDED WITHIN THE APP. WE DO NOT GUARANTEE
          LEARNING OUTCOMES.
        </p>
      </section>

      <section id="liability">
        <h2>12. LIMITATION OF LIABILITY</h2>
        <p className="uppercase">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY SHALL NOT BE LIABLE FOR
          INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES. OUR TOTAL AGGREGATE LIABILITY SHALL
          NOT EXCEED THE AMOUNT PAID BY YOU IN THE PAST SIX (6) MONTHS, OR TEN US DOLLARS
          (\$10), WHICHEVER IS GREATER.
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
