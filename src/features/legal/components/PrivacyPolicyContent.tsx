import { LegalPageLayout } from './LegalPageLayout';
import { siteConfig } from '@/config/site';

export function PrivacyPolicyContent() {
  return (
    <LegalPageLayout
      badge="Privacy Policy"
      title="PRIVACY POLICY"
      subtitle="LINGOBERG"
      effectiveDate="February 19, 2026"
      lastUpdated="February 19, 2026"
    >
      <section>
        <h2>1. INTRODUCTION</h2>
        <p>
          Welcome to Lingoberg (&ldquo;App,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;), a mobile language learning application operated by{' '}
          <strong>{siteConfig.company.legalName}</strong> (&ldquo;Company&rdquo;), a company
          incorporated under the laws of India.
        </p>
        <p className="mt-4">
          This Privacy Policy explains how we collect, use, disclose, and safeguard your
          information when you use our mobile application available on iOS and Android
          platforms. This Privacy Policy applies to all users of the App, regardless of
          location, and describes your privacy rights under applicable laws including the
          General Data Protection Regulation (GDPR), the California Consumer Privacy Act
          (CCPA) as amended by the California Privacy Rights Act (CPRA), and the California
          Online Privacy Protection Act (CalOPPA).
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
          When you create an account, use our services, or communicate with us, we may collect
          the following personal information:
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
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3 font-medium text-foreground">
                  Account Information
                </td>
                <td className="border border-border p-3">Name, Email Address</td>
                <td className="border border-border p-3">
                  Account creation, authentication, communication
                </td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium text-foreground">
                  Learning Data
                </td>
                <td className="border border-border p-3">
                  Progress tracking, learning statistics, lesson completion status, quiz
                  scores, achievements
                </td>
                <td className="border border-border p-3">
                  Personalization of learning experience, progress tracking
                </td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium text-foreground">
                  User Preferences
                </td>
                <td className="border border-border p-3">
                  Language preferences, notification settings, learning goals, app settings
                </td>
                <td className="border border-border p-3">
                  Customization and personalization
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
                  Customer support, service improvement
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>2.2 Information Collected Automatically</h3>
        <p>
          When you access or use our App, we automatically collect certain information,
          including:
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
              <li>App interaction data (features used, screens viewed)</li>
              <li>Session duration and frequency</li>
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
            <li>IP address</li>
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
            <strong>Payment platforms:</strong> Apple App Store and Google Play Store provide
            us with transaction confirmations and subscription status (but not your payment
            card details).
          </li>
        </ul>

        <h3>2.4 Payment Information</h3>
        <p>
          We do <strong>not</strong> directly collect or store your payment card information.
          All payment processing for subscriptions is handled securely by Apple App Store (for
          iOS) and Google Play Store (for Android). We use RevenueCat to manage subscription
          infrastructure, which receives transaction data from these platforms to verify your
          subscription status. For information on how these platforms handle your payment
          information, please refer to their respective privacy policies.
        </p>
      </section>

      <section>
        <h2>3. HOW WE USE YOUR INFORMATION</h2>
        <p>We use the information we collect for the following purposes:</p>

        <div className="my-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3>3.1 Service Delivery &amp; Improvement</h3>
            <ul>
              <li>To create and manage your account</li>
              <li>To provide, operate, and maintain the App</li>
              <li>To personalize your learning experience</li>
              <li>To track learning progress and provide statistics</li>
              <li>To process and manage your subscription</li>
              <li>To communicate updates and respond to inquiries</li>
            </ul>
          </div>

          <div>
            <h3>3.2 Analytics &amp; Performance</h3>
            <ul>
              <li>To analyze usage patterns and trends</li>
              <li>To monitor effectiveness of App features</li>
              <li>To diagnose technical problems</li>
              <li>To measure App performance and optimize UX</li>
            </ul>
          </div>

          <div>
            <h3>3.3 Marketing &amp; Communications</h3>
            <ul>
              <li>To send newsletters and educational content</li>
              <li>To measure advertising campaign effectiveness</li>
              <li>To attribute installations to marketing channels</li>
              <li>To create custom audiences for advertising</li>
            </ul>
          </div>

          <div>
            <h3>3.4 Security &amp; Compliance</h3>
            <ul>
              <li>To detect and prevent fraud and security breaches</li>
              <li>To verify identity and prevent unauthorized access</li>
              <li>To comply with legal obligations</li>
              <li>To protect rights and safety of users</li>
            </ul>
          </div>
        </div>

        <h3>3.5 Legal Bases for Processing (EEA, UK, Swiss Users)</h3>
        <p>
          If you are located in the EEA, UK, or Switzerland, we process your personal data
          based on contract performance, legitimate interests, consent, and legal obligations
          as applicable under GDPR.
        </p>
        <p className="mt-3">
          You may withdraw your consent at any time where we rely on consent for processing,
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
            <strong>Service Providers:</strong> Cloud hosting, analytics, subscription
            management, AI content generation APIs, customer support, and email providers who
            perform services on our behalf.
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
        <h2>5. THIRD-PARTY SERVICES AND SDKs</h2>
        <p>
          Our App integrates third-party services that may collect data according to their own
          privacy policies:
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
              Used for subscription infrastructure management.{' '}
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
            <h3>5.6 AI Service Providers</h3>
            <p>
              We utilize third-party artificial intelligence providers (e.g., OpenAI,
              Anthropic, or similar services) to format and generate the language learning
              content and stories. When doing so, no Personally Identifiable Information is
              shared with these models; only the required context data.
            </p>
          </div>

          <div>
            <h3>5.7 Local Features</h3>
            <p>
              <strong>Just Audio Background:</strong> Functions locally for background audio
              playback.
            </p>
            <p>
              <strong>Hive:</strong> Local data storage for offline functionality.
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
          We operate on a freemium/subscription model. Your learning experience will never be
          interrupted by advertisements.
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
          Our primary servers are hosted on <strong>AWS in Frankfurt, Germany</strong>. Data
          may be transferred to our headquarters in <strong>India</strong>. We ensure
          compliance with applicable laws using Standard Contractual Clauses (SCCs) and other
          safeguards.
        </p>
        <p className="mt-3">
          We implement industry-standard security measures (encryption, access controls) to
          protect your data, though no internet transmission is 100% secure.
        </p>
      </section>

      <section>
        <h2>9. DATA RETENTION</h2>
        <p>
          We retain personal information as long as necessary to fulfill collection purposes
          and legal obligations:
        </p>
        <ul>
          <li>
            <strong>Personal Identifiable Information (Name, Email):</strong> Retained only as
            long as your account is active. Upon receiving a deletion request, we will purge
            your personal data from our active databases within <strong>30 days</strong>.
          </li>
          <li>
            <strong>Account Information (after deletion):</strong> Backup copies may be
            retained for up to 90 days for disaster recovery purposes before complete removal.
          </li>
          <li>
            <strong>Identifiable Usage Data:</strong> Retained for up to 26 months for
            analytics purposes.
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
