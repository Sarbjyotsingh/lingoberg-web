'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { CrystalMark } from '@/components/ui/Logo';
import { StoreBadges } from '@/components/ui/StoreBadges';
import { EventLocations } from '@/lib/analytics/types';

function IPhoneMockup({
  src,
  className = '',
  delay = 0,
}: {
  src: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={`relative group ${className}`}
    >
      <div className="relative h-[440px] w-[215px] overflow-hidden rounded-[2.4rem] border-[6px] border-[#262930] bg-[#111] p-2.5 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.35)] sm:h-[510px] sm:w-[250px] lg:h-[570px] lg:w-[280px] lg:rounded-[2.8rem]">
        {/* Notch */}
        <div className="
          absolute top-0 left-1/2 z-20 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-[#111]
          sm:h-6 sm:w-28
        " />
        <div className="absolute top-2 left-1/2 z-20 h-1 w-10 -translate-x-1/2 rounded-full bg-[#222]" />

        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-white/5 lg:rounded-[2.1rem]">
          <Image src={src} alt="Lingoberg App Screenshot" fill className="object-cover" priority />
        </div>
      </div>

      {/* Subtle glass reflection */}
      <div className="pointer-events-none absolute inset-0 rounded-[2.4rem] bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-50 lg:rounded-[2.8rem]" />
    </motion.div>
  );
}

export function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-16 lg:pb-28 dark:bg-[#0B0F17]">
      {/* Ambient Radial Aura */}
      <div className="bg-primary/12 pointer-events-none absolute -top-36 left-1/2 z-0 h-[420px] w-[620px] -translate-x-1/2 rounded-full blur-[120px]" />

      {/* Subtle Architectural Grid Pattern (modeled on dmatexam) */}
      <div
        className="pointer-events-none absolute inset-0 left-1/2 z-0 w-screen -translate-x-1/2 opacity-[0.05] dark:opacity-[0.1]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 39px, var(--primary) 39px, var(--primary) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, var(--primary) 39px, var(--primary) 40px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Brand Pitch & Store CTAs */}
          <div className="flex flex-col items-center text-center lg:col-span-6 lg:items-start lg:text-left">
            <div className="border-primary/25 bg-primary/10 text-primary mb-6 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-xs font-bold tracking-wider uppercase shadow-2xs">
              <CrystalMark size={16} className="animate-logo-spin-wave" />
              <span>{t('badge')}</span>
            </div>

            <h1 className="text-foreground mb-6 text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-6xl lg:text-[4rem]">
              {t('titleLine1')} <br />
              <span className="text-primary font-black italic">{t('titleHighlight')}</span>
            </h1>

            <p className="text-muted-foreground mb-8 max-w-xl text-base leading-relaxed sm:text-xl">
              {t('subtitle')}
            </p>

            {/* Primary Store Badges */}
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <StoreBadges location={EventLocations.HERO} size="md" />
            </div>
          </div>

          {/* Right Column: Dual iPhone Mockups from Lingua Stories / Lingoberg */}
          <div className="relative flex items-center justify-center lg:col-span-6 lg:justify-end">
            <div className="relative flex h-[480px] w-full max-w-[340px] items-center justify-center sm:h-[580px] sm:max-w-[520px] lg:h-[640px] lg:max-w-[580px]">
              {/* Left Phone (Home Screen) */}
              <IPhoneMockup
                src="/images/hero-2.png"
                className="absolute bottom-2 left-0 z-10 -rotate-[8deg] scale-90 sm:left-2 sm:scale-95"
                delay={0.15}
              />

              {/* Right Phone (Audio Story Player) */}
              <IPhoneMockup
                src="/images/hero-1.png"
                className="absolute top-2 right-0 z-20 rotate-[7deg] scale-90 sm:right-2 sm:scale-100"
                delay={0.3}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
