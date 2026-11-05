import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface MetadataInput {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
}

const DEFAULT_KEYWORDS = [
  'Lingoberg',
  'Learn German',
  'German audio stories',
  'telc B1 speaking exam',
  'telc A1 exam preparation',
  'Goethe B1 exam practice',
  'AI German speaking partner',
  'German listening comprehension',
  'German vocabulary flashcards',
  'CEFR A1 A2 B1 B2 German',
];

export function constructMetadata({
  title = `${siteConfig.name} — ${siteConfig.tagline}`,
  description = siteConfig.description,
  keywords = [],
  path = '',
}: MetadataInput = {}): Metadata {
  const formattedTitle = title.includes('Lingoberg') ? title : `${title} | Lingoberg`;
  const normalizedPath = path ? (path.endsWith('/') ? path : `${path}/`) : '/';
  const canonicalUrl = `${siteConfig.url}${normalizedPath}`;
  const uniqueKeywords = Array.from(new Set([...keywords, ...DEFAULT_KEYWORDS]));

  return {
    metadataBase: new URL(siteConfig.url),
    title: formattedTitle,
    description,
    keywords: uniqueKeywords,
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        {
          url: '/mark-light.svg',
          media: '(prefers-color-scheme: light)',
          type: 'image/svg+xml',
        },
        {
          url: '/mark-dark.svg',
          media: '(prefers-color-scheme: dark)',
          type: 'image/svg+xml',
        },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
      shortcut: '/favicon.svg',
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    },
    openGraph: {
      title: formattedTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${siteConfig.url}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'Lingoberg — Master German Naturally & Ace Your Exams',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: formattedTitle,
      description,
      images: [`${siteConfig.url}/og-image.png`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
