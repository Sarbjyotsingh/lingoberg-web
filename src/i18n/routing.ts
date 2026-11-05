'use client';

import NextLink from 'next/link';
import { usePathname as useNextPathname, useRouter as useNextRouter } from 'next/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en'],
  defaultLocale: 'en',
  localePrefix: 'never',
});

/**
 * In Phase 1 (AWS S3 + CloudFront static export), routes live at clean root paths (`/`, `/exams/`, `/privacy-policy/`).
 * Exporting unified navigation primitives here lets all feature/layout components stay 100% compatible
 * when Phase 2 switches to AWS Amplify SSR + multi-locale routing.
 */
export const Link = NextLink;
export const usePathname = useNextPathname;
export const useRouter = useNextRouter;
