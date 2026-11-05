'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Headphones, Languages, Layers, CloudDownload } from 'lucide-react';

export function BentoFeaturesSection() {
  const t = useTranslations('Features');

  const cards = [
    {
      key: 'stories',
      icon: Headphones,
      spanClass: 'lg:col-span-7',
      accentClass: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
      highlight: true,
      levels: ['Beginner', 'Intermediate', 'Advanced'],
    },
    {
      key: 'wordSync',
      icon: Languages,
      spanClass: 'lg:col-span-5',
      accentClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    },
    {
      key: 'flashcards',
      icon: Layers,
      spanClass: 'lg:col-span-5',
      accentClass: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
    },
    {
      key: 'offline',
      icon: CloudDownload,
      spanClass: 'lg:col-span-7',
      accentClass: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
    },
  ] as const;

  return (
    <section id="features" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="brand" className="mb-4">
            {t('eyebrow')}
          </Badge>
          <h2 className="text-foreground mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
            {t('subtitle')}
          </p>
        </div>

        {/* 12-Column Bento Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.key}
                className={cn(
                  'group border-border bg-card hover:border-primary/40 relative flex flex-col justify-between overflow-hidden rounded-3xl border p-7 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-8',
                  card.spanClass,
                )}
              >
                {'highlight' in card && card.highlight && (
                  <div className="bg-primary/5 pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full blur-3xl transition-opacity group-hover:opacity-100" />
                )}

                <div>
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div
                      className={cn(
                        'flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105',
                        card.accentClass,
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="border-border bg-muted/70 text-muted-foreground rounded-full border px-3 py-1 font-mono text-[11px] font-bold tracking-wider uppercase">
                      {t(`items.${card.key}.badge`)}
                    </span>
                  </div>

                  <h3 className="text-foreground mb-3 text-xl font-bold tracking-tight sm:text-2xl">
                    {t(`items.${card.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed sm:text-base">
                    {t(`items.${card.key}.description`)}
                  </p>

                  {'levels' in card && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {card.levels.map((level) => (
                        <span
                          key={level}
                          className="border-border bg-secondary/60 text-muted-foreground rounded-md border px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase"
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
