import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/**
 * Phase 1 defaults to static export (`output: 'export'`) for AWS S3 + CloudFront.
 * Set `NEXT_BUILD_TARGET=amplify` in Phase 2 when deploying SSR + `app.lingoberg.com` on AWS Amplify.
 */
const isStaticExport = process.env.NEXT_BUILD_TARGET !== 'amplify';

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: 'export',
        trailingSlash: true,
        images: {
          unoptimized: true,
        },
      }
    : {
        async headers() {
          return [
            {
              source: '/:path*/app/exams/:examPath*',
              headers: [
                { key: 'X-Frame-Options', value: 'DENY' },
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'Referrer-Policy', value: 'no-referrer' },
                { key: 'Permissions-Policy', value: 'clipboard-read=(), clipboard-write=()' },
                { key: 'Content-Security-Policy', value: "frame-ancestors 'none'" },
              ],
            },
          ];
        },
      }),
};

if (process.env.NODE_ENV === 'development') {
  nextConfig.allowedDevOrigins = ['app.127.0.0.1.nip.io', 'app.localhost'];
}

export default withNextIntl(nextConfig);
