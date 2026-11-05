'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FaqSection() {
  const t = useTranslations('Faq');
  const keys = ['q1', 'q2', 'q3', 'q4', 'q5'] as const;

  return (
    <section id="faq" className="border-border/70 bg-muted/30 border-t py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <Badge variant="brand" className="mb-4">
            {t('eyebrow')}
          </Badge>
          <h2 className="text-foreground mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t('title')}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">{t('subtitle')}</p>
        </div>

        <div className="border-border bg-card rounded-3xl border px-6 py-2 shadow-xs sm:px-8">
          <Accordion>
            {keys.map((key) => (
              <AccordionItem key={key} value={key}>
                <AccordionTrigger>{t(`items.${key}.question`)}</AccordionTrigger>
                <AccordionContent>{t(`items.${key}.answer`)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
