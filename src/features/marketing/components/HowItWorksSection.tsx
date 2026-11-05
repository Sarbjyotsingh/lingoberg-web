'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/badge';
import { Headphones, BookmarkCheck, Award } from 'lucide-react';

export function HowItWorksSection() {
  const t = useTranslations('HowItWorks');

  const steps = [
    { key: 'step1', icon: Headphones },
    { key: 'step2', icon: BookmarkCheck },
    { key: 'step3', icon: Award },
  ] as const;

  return (
    <section id="how-it-works" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="brand" className="mb-4">
            {t('eyebrow')}
          </Badge>
          <h2 className="text-foreground mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.key}
                className="border-border bg-card relative flex flex-col rounded-3xl border p-8 shadow-xs"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-2xl">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-primary/25 font-mono text-3xl font-extrabold">
                    {t(`steps.${step.key}.number`)}
                  </span>
                </div>
                <h3 className="text-foreground mb-3 text-xl font-bold">
                  {t(`steps.${step.key}.title`)}
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  {t(`steps.${step.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
