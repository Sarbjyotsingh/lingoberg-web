'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/badge';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  const t = useTranslations('Testimonials');

  const testimonials = [
    {
      key: 'sarah',
      avatar: '/images/avatars/avatar_sarah_m.png',
    },
    {
      key: 'lukas',
      avatar: '/images/avatars/avatar_lukas_k.png',
    },
    {
      key: 'elena',
      avatar: '/images/avatars/avatar_elena_r.png',
    },
  ] as const;

  return (
    <section id="testimonials" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="brand" className="mb-4">
            {t('eyebrow')}
          </Badge>
          <h2 className="text-foreground mb-4 text-2xl font-extrabold tracking-tight italic sm:text-4xl">
            {t('title')}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.key}
              className="group border-border bg-card relative flex flex-col justify-between overflow-hidden rounded-3xl border p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <Quote className="text-primary/10 absolute top-6 right-6 h-14 w-14 transition-transform group-hover:scale-110" />
              <p className="text-foreground relative z-10 mb-8 text-base leading-relaxed">
                &ldquo;{t(`items.${item.key}.text`)}&rdquo;
              </p>

              <div className="relative z-10 flex items-center gap-3.5">
                <div className="border-primary/20 relative h-12 w-12 overflow-hidden rounded-full border-2">
                  <Image
                    src={item.avatar}
                    alt={t(`items.${item.key}.name`)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-foreground text-sm font-bold">{t(`items.${item.key}.name`)}</p>
                  <p className="text-muted-foreground text-xs font-semibold">
                    {t(`items.${item.key}.role`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
