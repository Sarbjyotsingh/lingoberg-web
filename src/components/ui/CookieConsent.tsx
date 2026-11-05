/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useEffect, useState } from 'react';
import { Button } from './button';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { analytics } from '@/lib/analytics/core';

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const t = useTranslations('CookieConsent');

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    } else if (consent === 'accepted') {
      analytics.updateConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    analytics.updateConsent(true);
    window.dispatchEvent(new Event('cookie-consent-updated'));
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    analytics.updateConsent(false);
    window.dispatchEvent(new Event('cookie-consent-updated'));
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div
      className="fixed right-0 bottom-0 left-0 z-50 p-4"
      role="region"
      aria-label="Cookie consent banner"
    >
      <div className="border-border bg-card/95 mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl border p-4 shadow-xl backdrop-blur-md sm:flex-row sm:px-6">
        <div className="text-muted-foreground text-sm">
          {t('message')}
          <Link href="/privacy-policy" className="text-primary font-semibold hover:underline">
            {t('privacyPolicy')}
          </Link>
          .
        </div>
        <div className="flex shrink-0 gap-2.5">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            {t('decline')}
          </Button>
          <Button size="sm" onClick={handleAccept}>
            {t('acceptAll')}
          </Button>
        </div>
      </div>
    </div>
  );
}
