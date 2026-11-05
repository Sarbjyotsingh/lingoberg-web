'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { CrystalMark } from '@/components/ui/Logo';
import { StoreBadges } from '@/components/ui/StoreBadges';
import { EventLocations } from '@/lib/analytics/types';

export function DownloadCtaSection() {
  const t = useTranslations('Cta');

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-4xl border border-sky-400/20 bg-gradient-to-br from-[#0A192F] via-[#0F2547] to-[#0284C7] px-6 py-16 text-center text-white shadow-2xl sm:px-12 lg:py-20">
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/25 blur-3xl" />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wider uppercase backdrop-blur-xs">
              <CrystalMark size={16} forceMode="mono-white" className="animate-logo-spin-wave" />
              <span>{t('badge')}</span>
            </div>

            <h2 className="mb-5 text-3xl leading-tight font-extrabold tracking-tight sm:text-5xl">
              {t('title')}
            </h2>

            <p className="mb-10 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              {t('subtitle')}
            </p>

            <StoreBadges
              location={EventLocations.CTA_BANNER}
              size="lg"
              className="justify-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
