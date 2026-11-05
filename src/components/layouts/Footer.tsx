'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { siteConfig } from '@/config/site';
import { Logo } from '@/components/ui/Logo';
import { StoreBadges } from '@/components/ui/StoreBadges';
import { analytics } from '@/lib/analytics/core';
import { EventLocations, EventNames, EventSources } from '@/lib/analytics/types';

export function Footer() {
  const t = useTranslations('Footer');

  const linkGroups = [
    {
      title: t('product'),
      links: [
        { label: t('links.stories'), href: '/#features' },
        { label: t('links.howItWorks'), href: '/#how-it-works' },
        { label: t('links.faq'), href: '/#faq' },
      ],
    },
    {
      title: t('company'),
      links: [{ label: t('links.contact'), href: '/contact' }],
    },
    {
      title: t('legal'),
      links: [
        { label: t('links.privacyPolicy'), href: '/privacy-policy' },
        { label: t('links.termsOfService'), href: '/terms-of-service' },
      ],
    },
  ];

  return (
    <footer className="bg-background w-full px-4 py-12 md:px-6">
      <div className="border-border bg-muted/60 mx-auto max-w-7xl overflow-hidden rounded-4xl border">
        <div className="p-1.5">
          <div className="bg-card rounded-3xl shadow-sm">
            <div className="px-6 py-12 sm:px-10 md:px-12 md:py-16">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
                {/* Brand Column */}
                <div className="flex flex-col items-start lg:col-span-5">
                  <Link
                    href="/"
                    className="mb-5 inline-flex items-center"
                    onClick={() =>
                      analytics.trackEvent({
                        eventName: EventNames.LOGO_CLICKED,
                        properties: { location: EventLocations.FOOTER },
                      })
                    }
                  >
                    <Logo variant="inline-o" size="lg" />
                  </Link>

                  <p className="text-muted-foreground mb-6 max-w-md text-[15px] leading-relaxed">
                    {t('description')}
                  </p>

                  <StoreBadges location={EventLocations.FOOTER} size="sm" className="mb-6" />

                  <div className="text-muted-foreground flex flex-col gap-1 text-sm">
                    <a
                      href={`mailto:${siteConfig.supportEmail}`}
                      className="hover:text-primary font-medium transition-colors"
                    >
                      {siteConfig.supportEmail}
                    </a>
                    <span className="text-xs opacity-75">{siteConfig.company.legalName}</span>
                  </div>
                </div>

                {/* Navigation Columns */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                    {linkGroups.map((group) => (
                      <div key={group.title} className="flex flex-col gap-4">
                        <h4 className="text-foreground text-sm font-bold tracking-wider uppercase">
                          {group.title}
                        </h4>
                        <ul className="flex flex-col gap-3">
                          {group.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                className="text-muted-foreground hover:text-primary text-[15px] transition-colors"
                                onClick={() =>
                                  analytics.trackEvent({
                                    eventName: EventNames.NAVIGATION_CLICKED,
                                    properties: {
                                      destination: link.href,
                                      source: EventSources.FOOTER,
                                    },
                                  })
                                }
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="bg-muted/40 px-6 py-6 sm:px-10 md:px-12">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
            <p className="text-muted-foreground text-sm font-medium">{t('copyright')}</p>
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="text-muted-foreground hover:text-foreground text-xs transition-colors"
            >
              {siteConfig.supportEmail}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
