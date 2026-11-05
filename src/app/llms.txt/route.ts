import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

export function GET() {
  const content = `# ${siteConfig.name} — Learn German the natural way.

> Dive into captivating stories and let immersive, story-based lessons make mastering German fun, effortless, and effective.

## Overview
- **Brand**: ${siteConfig.name}
- **Website**: ${siteConfig.url}
- **Company**: ${siteConfig.company.legalName}
- **Support**: ${siteConfig.supportEmail}

## Core Features
1. **Immersive Audio Stories**: Learn by listening to stories tailored for all skill levels, from Beginner up to Advanced.
2. **Interactive Word-Sync**: Words highlight as they are spoken. Tap any word for instant translations.
3. **Personal Vocabulary**: Save difficult words and practice them later with smart flashcards.
4. **Offline Freedom**: Download your favorite stories and learn anywhere, even without internet.

## Key URLs
- Home: ${siteConfig.url}/
- Contact & Support: ${siteConfig.url}/contact/
- Privacy Policy: ${siteConfig.url}/privacy-policy/
- Terms of Service: ${siteConfig.url}/terms-of-service/
- Apple App Store: ${siteConfig.stores.appStoreUrl}
- Google Play Store: ${siteConfig.stores.playStoreUrl}
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
