'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Flame, Clock, BookOpen } from 'lucide-react';

export function StatsProgressSection() {
  const t = useTranslations('Stats');

  const stats = [
    {
      key: 'streak',
      icon: Flame,
      colorClass: 'bg-orange-500/12 text-orange-600 dark:text-orange-400',
    },
    {
      key: 'listening',
      icon: Clock,
      colorClass: 'bg-sky-500/12 text-sky-600 dark:text-sky-400',
    },
    {
      key: 'words',
      icon: BookOpen,
      colorClass: 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-400',
    },
  ] as const;

  return (
    <section className="border-border/70 bg-muted/35 border-y py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-foreground mb-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
            {t('title')}
          </h2>
          <p className="text-muted-foreground text-base">{t('subtitle')}</p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.key}
                className="border-border bg-card flex flex-col items-center rounded-3xl border p-8 text-center shadow-xs"
              >
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${stat.colorClass}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-muted-foreground mb-1 text-xs font-bold tracking-wider uppercase">
                  {t(`items.${stat.key}.label`)}
                </span>
                <h3 className="text-foreground mb-2 text-3xl font-extrabold tracking-tight">
                  {t(`items.${stat.key}.value`)}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {t(`items.${stat.key}.detail`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
