'use client';

import React from 'react';
import { AlertTriangle, RefreshCw, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CrystalMark } from '@/components/ui/Logo';

interface LoadingModalProps {
  isOpen: boolean;
  status?: 'loading' | 'error';
  badge?: string;
  title?: string;
  message?: string;
  errorMessage?: string;
  progressPercent?: number;
  onRetry?: () => void;
  onClose?: () => void;
}

/**
 * Official Lingoberg Loading Modal (`branding.html` Section 2 & `dmatexam/LoadingModal.tsx`).
 * Features the 5-phase 3.5s `logo-spin-wave` rotation, ambient radial glow, context pill,
 * and shimmer progress bar.
 */
export function LoadingModal({
  isOpen,
  status = 'loading',
  badge = 'GERMAN TELC B1 · SPEAKING',
  title = 'Preparing Speaking Exam',
  message = 'Setting up interactive 3D examiner & voice stream...',
  errorMessage = 'Failed to load exam modules. Please check your internet connection and try again.',
  progressPercent = 68,
  onRetry,
  onClose,
}: LoadingModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-md duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="loading-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-card/96 text-card-foreground border-border/90 animate-in zoom-in-95 relative flex w-full max-w-[380px] flex-col items-center gap-5 rounded-[20px] border px-8 pt-10 pb-8 shadow-2xl backdrop-blur-md duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {onClose && (
          <Button
            type="button"
            variant="ghost"
            size="icon-xs"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground absolute top-4 right-4 rounded-lg p-1.5 transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </Button>
        )}

        {status === 'loading' ? (
          <>
            {/* Crystal Mark with Ambient Aura */}
            <div className="relative flex h-[70px] w-[70px] items-center justify-center">
              <div className="bg-primary/25 dark:bg-primary/35 animate-pulse-subtle absolute -inset-3 rounded-full blur-xl" />
              <CrystalMark size={52} className="animate-logo-spin-wave relative z-10" />
            </div>

            {/* Badge, Title & Message */}
            <div className="flex w-full flex-col items-center gap-1.5 text-center">
              {badge && (
                <span className="border-primary/25 bg-primary/10 text-primary mb-1 inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold tracking-wider uppercase">
                  {badge}
                </span>
              )}
              <h3
                id="loading-modal-title"
                className="text-foreground text-lg font-bold tracking-tight sm:text-xl"
              >
                {title}
              </h3>
              <p className="text-muted-foreground animate-pulse-subtle text-xs font-medium sm:text-sm">
                {message}
              </p>
            </div>

            {/* Shimmer Progress Track */}
            <div className="bg-border/80 relative h-1.5 w-full overflow-hidden rounded-full">
              <div
                className="bg-primary relative h-full overflow-hidden rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              >
                <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="relative flex items-center justify-center">
              <div className="bg-destructive/10 text-destructive flex h-16 w-16 items-center justify-center rounded-full">
                <AlertTriangle className="h-8 w-8" />
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 text-center">
              <h3
                id="loading-modal-title"
                className="text-foreground text-lg font-bold tracking-tight"
              >
                Failed to Load
              </h3>
              <p className="text-muted-foreground text-xs font-normal sm:text-sm">{errorMessage}</p>
            </div>

            <div className="mt-2 flex w-full gap-2">
              {onClose && (
                <Button variant="outline" onClick={onClose} className="w-full font-semibold">
                  Cancel
                </Button>
              )}
              {onRetry && (
                <Button
                  onClick={onRetry}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full gap-2 font-semibold"
                >
                  <RefreshCw className="h-4 w-4" /> Retry
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoadingModal;
