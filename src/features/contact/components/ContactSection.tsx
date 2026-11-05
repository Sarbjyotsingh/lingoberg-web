'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  Mail,
  Copy,
  Check,
  Clock,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Building2,
  Globe,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function ContactSection() {
  const t = useTranslations('Contact');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback no-op if clipboard permissions are restricted
    }
  };

  const supportTopics = [
    {
      icon: ShieldCheck,
      title: t('categories.account.title'),
      description: t('categories.account.desc'),
    },
    {
      icon: BookOpen,
      title: t('categories.exam.title'),
      description: t('categories.exam.desc'),
    },
    {
      icon: Globe,
      title: t('categories.technical.title'),
      description: t('categories.technical.desc'),
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-[440px] bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.14),transparent_65%)]"
      />

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="ice" className="mb-4 gap-1.5">
            <Sparkles className="text-primary h-3.5 w-3.5" />
            {t('tagline')}
          </Badge>
          <h1 className="text-foreground text-3xl font-extrabold tracking-tight sm:text-5xl">
            {t('pageTitle')}
          </h1>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
            {t('pageSubtitle')}
          </p>
        </div>

        {/* Primary Email Card */}
        <Card className="border-primary/30 bg-card/95 mt-10 shadow-lg">
          <CardContent className="p-6 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="flex items-start gap-4">
                <div className="bg-primary/12 text-primary flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-primary text-xs font-bold tracking-wider uppercase">
                    {t('emailCardTitle')}
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-foreground hover:text-primary mt-1 block font-mono text-xl font-extrabold sm:text-2xl"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <p className="text-muted-foreground mt-2 max-w-xl text-sm">
                    {t('categoriesSubtitle')}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Typical response within 24 hours</span>
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
                <Button
                  variant="outline"
                  onClick={handleCopyEmail}
                  className="rounded-xl font-semibold"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-500" />
                      {t('copied')}
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      {t('copyEmail')}
                    </>
                  )}
                </Button>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className={cn(buttonVariants({ variant: 'default' }), 'rounded-xl font-semibold')}
                >
                  <Mail className="h-4 w-4" />
                  {t('sendEmail')}
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support Categories */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {supportTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <Card key={topic.title} className="border-border/80 bg-card/90">
                <CardContent className="p-6">
                  <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-xl">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-foreground mt-4 text-base font-bold">{topic.title}</h2>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Company & Data Jurisdiction Details */}
        <Card className="border-border/80 bg-secondary/40 mt-8">
          <CardContent className="flex flex-col justify-between gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-start gap-4">
              <div className="bg-card text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-xs">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-foreground text-base font-bold">
                  {siteConfig.company.legalName}
                </h2>
                <p className="text-muted-foreground mt-1 font-mono text-xs">
                  CIN: {siteConfig.company.cin}
                </p>
                <p className="text-muted-foreground mt-1 text-sm">
                  Registered Office: {siteConfig.company.registeredAddress}
                </p>
                <p className="text-muted-foreground mt-1 text-xs">
                  Primary Cloud Infrastructure: {siteConfig.company.dataRegion}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
