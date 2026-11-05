import type { ReactNode } from 'react';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { Providers } from '@/components/Providers';
import { CookieConsent } from '@/components/ui/CookieConsent';
import { constructMetadata } from '@/lib/metadata';
import enMessages from '../../i18n/en.json';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = constructMetadata();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background text-foreground selection:bg-primary/20 selection:text-primary min-h-screen font-sans antialiased">
        <NextIntlClientProvider locale="en" messages={enMessages}>
          <Providers>
            {children}
            <CookieConsent />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
