export const siteConfig = {
  name: 'Lingoberg',
  formerName: 'Lingua Stories',
  tagline: 'Master German Naturally & Ace Your Exams',
  description:
    'Learn German through immersive audio stories with real-time word-sync, smart flashcards, and official-format AI Speaking & Listening Exam Simulators for telc and Goethe (A1–B2).',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://lingoberg.com',
  appSubdomainUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://app.lingoberg.com',
  supportEmail: 'contact@lingoberg.com',
  contact: {
    email: 'contact@lingoberg.com',
  },
  locale: 'en',
  supportedAppLanguages: [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'ar', label: 'العربية', flag: '🇦🇪' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'uk', label: 'Українська', flag: '🇺🇦' },
  ],
  stores: {
    appStoreUrl: 'https://apps.apple.com/us/app/lingua-stories-learn-language/id6757151593',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.linguastories.app.lingua_stories',
    appleSubscriptionsUrl: 'https://apps.apple.com/account/subscriptions',
    playSubscriptionsUrl: 'https://play.google.com/store/account/subscriptions',
  },
  links: {
    appStore: 'https://apps.apple.com/us/app/lingua-stories-learn-language/id6757151593',
    playStore: 'https://play.google.com/store/apps/details?id=com.linguastories.app.lingua_stories',
  },
  company: {
    legalName: 'ABHYASHALA TECHNOLOGY PRIVATE LIMITED',
    cin: 'U72900DL2020PTC373454',
    incorporationDate: 'December 20, 2020',
    addressLine1: 'D-56/6 F/F L/P Badarpur Extn, Tajpur Road',
    addressLine2: 'Badarpur, New Delhi, Delhi, India - 110044',
    registeredAddress:
      'D-56/6 F/F L/P Badarpur Extn, Tajpur Road, Badarpur, New Delhi, Delhi, India - 110044',
    primaryCloudRegion: 'AWS Europe (Frankfurt, Germany - eu-central-1)',
    dataRegion: 'AWS Europe (Frankfurt, Germany - eu-central-1)',
    effectiveLegalDate: 'November 5, 2026',
  },
  features: {
    isWebExamLive: false,
  },
} as const;

export type SiteConfig = typeof siteConfig;
