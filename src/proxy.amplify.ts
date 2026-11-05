/**
 * Phase 2 Subdomain & Session Proxy Blueprint (`app.lingoberg.com`)
 *
 * In Phase 1 (`output: 'export'` on AWS S3 + CloudFront), Next.js proxy/middleware is inactive.
 * When migrating to AWS Amplify Hosting (`NEXT_BUILD_TARGET=amplify`) for Phase 2:
 * 1. Rename this file to `src/proxy.ts`.
 * 2. It rewrites `app.lingoberg.com/*` -> `/app/*` (or `/[locale]/app/*`),
 *    blocks direct `/app` access from the marketing root domain,
 *    sets the `lingoberg_is_eu` geo cookie from CloudFront headers,
 *    and verifies the Firebase Auth SSR session cookie.
 */

import { NextRequest, NextResponse } from 'next/server';

const EU_COUNTRIES = new Set([
  'AT',
  'BE',
  'BG',
  'HR',
  'CY',
  'CZ',
  'DK',
  'EE',
  'FI',
  'FR',
  'DE',
  'GR',
  'HU',
  'IE',
  'IT',
  'LV',
  'LT',
  'LU',
  'MT',
  'NL',
  'PL',
  'PT',
  'RO',
  'SK',
  'SI',
  'ES',
  'SE',
  'NO',
  'IS',
  'LI',
]);

function applyEUCookie(request: NextRequest, response: NextResponse): NextResponse {
  const country =
    request.headers.get('CloudFront-Viewer-Country') ||
    request.headers.get('x-vercel-ip-country') ||
    '';
  const isEU = EU_COUNTRIES.has(country.toUpperCase());

  response.cookies.set('lingoberg_is_eu', isEU ? '1' : '0', {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
  return response;
}

export async function proxy(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const isAppSubdomain = hostname.startsWith('app.');
  const url = request.nextUrl.clone();

  // Prevent direct access to /app/* from marketing domain
  if (!isAppSubdomain && /^\/app(\/.*)?$/.test(url.pathname)) {
    url.pathname = '/404';
    return applyEUCookie(request, NextResponse.rewrite(url));
  }

  // Rewrite app.lingoberg.com/{path} -> /app/{path}
  if (isAppSubdomain) {
    url.pathname = `/app${url.pathname === '/' ? '' : url.pathname}`;
    const rewriteResponse = NextResponse.rewrite(url);
    rewriteResponse.headers.set('x-current-path', url.pathname + url.search);
    return applyEUCookie(request, rewriteResponse);
  }

  const response = NextResponse.next();
  response.headers.set('x-current-path', request.nextUrl.pathname + request.nextUrl.search);
  return applyEUCookie(request, response);
}
