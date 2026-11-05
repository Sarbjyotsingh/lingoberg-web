'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { analytics } from '@/lib/analytics/core';
import { EventLocations, EventNames, EventSources, type EventSource } from '@/lib/analytics/types';
import { Logo } from '@/components/ui/Logo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { StoreBadges } from '@/components/ui/StoreBadges';
import { buttonVariants } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ArrowUpRight } from 'lucide-react';

export function Navigation() {
  const t = useTranslations('Navbar');
  const pathname = usePathname();

  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const tryScroll = () => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      requestAnimationFrame(() => requestAnimationFrame(tryScroll));
    }
  }, []);

  const handleHashClick = React.useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement>,
      hash: string,
      destination: string,
      source: EventSource,
    ) => {
      analytics.trackEvent({
        eventName: EventNames.NAVIGATION_CLICKED,
        properties: { destination, source },
      });

      if (pathname === '/' || pathname === '') {
        const element = document.getElementById(hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `#${hash}`);
        }
      }
    },
    [pathname],
  );

  const isContactActive = pathname?.startsWith('/contact');

  const navLinkClass = (active?: boolean) =>
    cn(
      'group/item relative flex h-16 items-center px-3 text-[15px] font-semibold transition-colors duration-200',
      active ? 'text-primary' : 'text-muted-foreground hover:text-primary',
    );

  return (
    <header className="border-border/80 bg-background/85 sticky top-0 z-40 w-full border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo (Inline-'o' Ling[💎]berg) */}
        <Link
          href="/"
          className="flex items-center py-1"
          onClick={() =>
            analytics.trackEvent({
              eventName: EventNames.LOGO_CLICKED,
              properties: { location: EventLocations.HEADER_DESKTOP },
            })
          }
        >
          <Logo variant="inline-o" size="md" />
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden h-full items-stretch gap-2 lg:flex" aria-label="Main navigation">
          <Link
            href="/#features"
            className={navLinkClass(false)}
            onClick={(e) => handleHashClick(e, 'features', '/#features', EventSources.DESKTOP)}
          >
            {t('features')}
            <span className="bg-primary absolute right-3 bottom-0 left-3 h-[3px] origin-center scale-x-0 rounded-full transition-transform duration-200 group-hover/item:scale-x-100" />
          </Link>

          <Link
            href="/#how-it-works"
            className={navLinkClass(false)}
            onClick={(e) =>
              handleHashClick(e, 'how-it-works', '/#how-it-works', EventSources.DESKTOP)
            }
          >
            {t('howItWorks')}
            <span className="bg-primary absolute right-3 bottom-0 left-3 h-[3px] origin-center scale-x-0 rounded-full transition-transform duration-200 group-hover/item:scale-x-100" />
          </Link>

          <Link
            href="/#faq"
            className={navLinkClass(false)}
            onClick={(e) => handleHashClick(e, 'faq', '/#faq', EventSources.DESKTOP)}
          >
            {t('faq')}
            <span className="bg-primary absolute right-3 bottom-0 left-3 h-[3px] origin-center scale-x-0 rounded-full transition-transform duration-200 group-hover/item:scale-x-100" />
          </Link>

          <Link
            href="/contact"
            className={navLinkClass(isContactActive)}
            onClick={() =>
              analytics.trackEvent({
                eventName: EventNames.NAVIGATION_CLICKED,
                properties: { destination: '/contact', source: EventSources.DESKTOP },
              })
            }
          >
            {t('contact')}
            <span
              className={cn(
                'bg-primary absolute right-3 bottom-0 left-3 h-[3px] origin-center rounded-full transition-transform duration-200',
                isContactActive ? 'scale-x-100' : 'scale-x-0 group-hover/item:scale-x-100',
              )}
            />
          </Link>
        </nav>

        {/* Right Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <a
            href={siteConfig.stores.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: 'default' }),
              'bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-full px-5 text-sm font-bold shadow-sm transition-all active:scale-[0.98]',
            )}
            onClick={() =>
              analytics.trackEvent({
                eventName: EventNames.STORE_CTA_CLICKED,
                properties: { store: 'header_get_app', location: EventLocations.HEADER_DESKTOP },
              })
            }
          >
            <span>{t('getApp')}</span>
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </a>
        </div>

        {/* Mobile Actions & Drawer */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger className="text-foreground hover:bg-muted inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors focus:outline-none">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-border bg-background text-foreground flex w-[310px] flex-col gap-6 border-l p-6 sm:w-[380px]"
            >
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() =>
                    analytics.trackEvent({
                      eventName: EventNames.LOGO_CLICKED,
                      properties: { location: EventLocations.HEADER_MOBILE },
                    })
                  }
                >
                  <Logo variant="inline-o" size="md" />
                </Link>
              </div>

              <div className="flex flex-col gap-1 pt-2">
                <Link
                  href="/#features"
                  className="hover:text-primary block py-2.5 text-lg font-semibold transition-colors"
                  onClick={(e) => handleHashClick(e, 'features', '/#features', EventSources.MOBILE)}
                >
                  <SheetClose className="w-full text-left">{t('features')}</SheetClose>
                </Link>

                <Link
                  href="/#how-it-works"
                  className="hover:text-primary block py-2.5 text-lg font-semibold transition-colors"
                  onClick={(e) =>
                    handleHashClick(e, 'how-it-works', '/#how-it-works', EventSources.MOBILE)
                  }
                >
                  <SheetClose className="w-full text-left">{t('howItWorks')}</SheetClose>
                </Link>

                <Link
                  href="/#faq"
                  className="hover:text-primary block py-2.5 text-lg font-semibold transition-colors"
                  onClick={(e) => handleHashClick(e, 'faq', '/#faq', EventSources.MOBILE)}
                >
                  <SheetClose className="w-full text-left">{t('faq')}</SheetClose>
                </Link>

                <Link
                  href="/contact"
                  className="hover:text-primary block py-2.5 text-lg font-semibold transition-colors"
                  onClick={() =>
                    analytics.trackEvent({
                      eventName: EventNames.NAVIGATION_CLICKED,
                      properties: { destination: '/contact', source: EventSources.MOBILE },
                    })
                  }
                >
                  <SheetClose className="w-full text-left">{t('contact')}</SheetClose>
                </Link>
              </div>

              <div className="border-border mt-auto flex flex-col gap-4 border-t pt-6">
                <span className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                  Download Lingoberg
                </span>
                <StoreBadges location={EventLocations.HEADER_MOBILE} size="sm" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
