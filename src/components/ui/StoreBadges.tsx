'use client';

import React from 'react';
import { siteConfig } from '@/config/site';
import { analytics } from '@/lib/analytics/core';
import { EventNames, type EventLocation } from '@/lib/analytics/types';
import { cn } from '@/lib/utils';

interface StoreBadgesProps {
  location: EventLocation;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function StoreBadges({ location, size = 'md', className = '' }: StoreBadgesProps) {
  const heightClass = size === 'sm' ? 'h-10 px-3.5' : size === 'lg' ? 'h-14 px-5' : 'h-12 px-4';

  return (
    <div className={cn('flex flex-wrap items-center gap-3.5', className)}>
      {/* Apple App Store Badge */}
      <a
        href={siteConfig.stores.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          analytics.trackEvent({
            eventName: EventNames.STORE_CTA_CLICKED,
            properties: { store: 'ios_app_store', location },
          })
        }
        className={cn(
          'group inline-flex items-center gap-3 rounded-xl border border-white/15 bg-[#0A192F] text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#112645] hover:shadow-xl active:translate-y-0 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800',
          heightClass,
        )}
        aria-label="Download Lingoberg on the Apple App Store"
      >
        <svg className="h-6 w-6 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.96 6.33c.67-.81 1.12-1.94 1-3.08-.96.04-2.13.64-2.82 1.45-.61.71-1.15 1.86-1.01 2.96 1.08.08 2.16-.52 2.83-1.33Z" />
        </svg>
        <div className="flex flex-col text-left leading-none">
          <span className="text-[10px] font-medium tracking-wide text-slate-300">
            Download on the
          </span>
          <span className="text-sm font-bold tracking-tight sm:text-[15px]">App Store</span>
        </div>
      </a>

      {/* Google Play Badge */}
      <a
        href={siteConfig.stores.playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          analytics.trackEvent({
            eventName: EventNames.STORE_CTA_CLICKED,
            properties: { store: 'google_play', location },
          })
        }
        className={cn(
          'group inline-flex items-center gap-3 rounded-xl border border-white/15 bg-[#0A192F] text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#112645] hover:shadow-xl active:translate-y-0 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800',
          heightClass,
        )}
        aria-label="Get Lingoberg on Google Play"
      >
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3.61 1.814L13.793 12 3.61 22.186a1.47 1.47 0 0 1-.61-1.199V3.013c0-.49.236-.93.61-1.199Z"
            fill="#38BDF8"
          />
          <path
            d="M17.185 8.608L13.793 12l3.392 3.392 3.832-2.189c.69-.394.69-1.212 0-1.606l-3.832-2.989Z"
            fill="#FBBF24"
          />
          <path
            d="M3.61 22.186L13.793 12l3.392 3.392-11.96 6.835c-.583.333-1.227.27-1.615-.041Z"
            fill="#F43F5E"
          />
          <path
            d="M3.61 1.814c.388-.311 1.032-.374 1.615-.041l11.96 6.835L13.793 12 3.61 1.814Z"
            fill="#34D399"
          />
        </svg>
        <div className="flex flex-col text-left leading-none">
          <span className="text-[10px] font-medium tracking-wide text-slate-300 uppercase">
            Get it on
          </span>
          <span className="text-sm font-bold tracking-tight sm:text-[15px]">Google Play</span>
        </div>
      </a>
    </div>
  );
}
