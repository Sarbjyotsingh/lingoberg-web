import React from 'react';
import { cn } from '@/lib/utils';

interface CrystalMarkProps {
  size?: number;
  className?: string;
  forceMode?: 'light' | 'dark' | 'mono-white';
}

/**
 * Standalone Lingoberg Crystal Mountain Mark SVG (`viewBox="-2 -2 38 43"`).
 * Derived with 0px coordinate drift from `branding.html`.
 */
export function CrystalMark({ size, className = '', forceMode }: CrystalMarkProps) {
  const height = size ? Math.round(size * (43 / 38)) : undefined;

  const chassisClass =
    forceMode === 'mono-white'
      ? 'stroke-white/90'
      : forceMode === 'dark'
        ? 'stroke-[#94A3B8]'
        : forceMode === 'light'
          ? 'stroke-[#0A192F]'
          : 'stroke-[#0A192F] dark:stroke-[#94A3B8]';

  const ridgeClass =
    forceMode === 'mono-white'
      ? 'stroke-white'
      : forceMode === 'dark'
        ? 'stroke-[#0A84FF]'
        : forceMode === 'light'
          ? 'stroke-[#0284C7]'
          : 'stroke-[#0284C7] dark:stroke-[#0A84FF]';

  return (
    <svg
      width={size}
      height={height}
      viewBox="-2 -2 38 43"
      fill="none"
      style={{ overflow: 'visible' }}
      className={cn('shrink-0 origin-center', className)}
      aria-hidden="true"
    >
      <g
        className={cn('transition-colors duration-200', chassisClass)}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32.53 28.352V9.999m0 18.353-15.854 9.176" />
        <path d="M32.53 10 16.676.826" />
        <path strokeMiterlimit="10" d="m32.53 9.999-12.188.884L9.22 16.63" />
        <path d="M16.676.827.827 10" />
        <path d="M.827 9.999v18.353" />
        <path strokeMiterlimit="10" d="M.827 9.999 9.22 16.63" />
        <path d="m.827 28.352 15.849 9.176" />
        <path
          strokeMiterlimit="10"
          d="M.827 28.352l17.293 2.945m-1.444 6.23 1.444-6.23M9.22 16.63l8.9 14.666m0 .001 7.279-6.896"
        />
      </g>
      <g
        className={cn('transition-colors duration-200', ridgeClass)}
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path strokeMiterlimit="10" d="m32.53 28.352-7.131-3.95" />
        <path strokeMiterlimit="10" d="m16.676.827 8.723 23.574M16.676.827 9.22 16.63" />
        <path strokeMiterlimit="10" d="M.827 28.352 9.22 16.63" />
      </g>
    </svg>
  );
}

interface LogoProps {
  /**
   * `inline-o` (Default): "Ling[💎]berg" where the 'o' is replaced by the crystal mark.
   * `mark`: Standalone crystal mark icon.
   * `mark-left`: Crystal mark on the left + "Lingoberg" wordmark.
   */
  variant?: 'inline-o' | 'mark' | 'mark-left';
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  forceMode?: 'light' | 'dark' | 'mono-white';
  spinOnHover?: boolean;
  className?: string;
}

const SIZE_CLASSES = {
  sm: 'text-[22px]',
  md: 'text-[27px]',
  lg: 'text-[34px]',
  xl: 'text-[44px]',
} as const;

export function Logo({
  variant = 'inline-o',
  size = 'md',
  forceMode,
  spinOnHover = true,
  className = '',
}: LogoProps) {
  if (variant === 'mark') {
    const px = typeof size === 'number' ? size : size === 'sm' ? 22 : size === 'lg' ? 38 : 28;
    return (
      <span className={cn('group/logo inline-flex items-center', className)} aria-label="Lingoberg">
        <CrystalMark
          size={px}
          forceMode={forceMode}
          className={cn(
            spinOnHover &&
              'group-hover/logo:animate-logo-spin-wave transition-transform duration-500 ease-out',
          )}
        />
      </span>
    );
  }

  const textSizeClass = typeof size === 'number' ? '' : SIZE_CLASSES[size];
  const inlineStyle = typeof size === 'number' ? { fontSize: `${size}px` } : undefined;

  const lingoColor =
    forceMode === 'mono-white'
      ? 'text-white'
      : forceMode === 'dark'
        ? 'text-[#CBD5E1]'
        : forceMode === 'light'
          ? 'text-[#0A192F]'
          : 'text-[#0A192F] dark:text-[#CBD5E1]';

  const bergColor =
    forceMode === 'mono-white'
      ? 'text-white'
      : forceMode === 'dark'
        ? 'text-[#0A84FF]'
        : forceMode === 'light'
          ? 'text-[#0284C7]'
          : 'text-[#0284C7] dark:text-[#0A84FF]';

  if (variant === 'mark-left') {
    const markPx = typeof size === 'number' ? size : size === 'sm' ? 24 : size === 'lg' ? 36 : 28;
    return (
      <span
        className={cn(
          'group/logo inline-flex items-center gap-2.5 font-sans leading-none font-extrabold tracking-[-0.03em] select-none',
          textSizeClass,
          className,
        )}
        style={inlineStyle}
        aria-label="Lingoberg"
      >
        <CrystalMark
          size={markPx}
          forceMode={forceMode}
          className={cn(
            spinOnHover &&
              'group-hover/logo:animate-logo-spin-wave transition-transform duration-500 ease-out',
          )}
        />
        <span>
          <span className={lingoColor}>Lingo</span>
          <span className={bergColor}>berg</span>
        </span>
      </span>
    );
  }

  // Default: Inline-'o' Crystal Wordmark (Ling[💎]berg) from branding.html Section 0
  return (
    <span
      className={cn(
        'group/logo inline-flex items-baseline font-sans leading-none font-extrabold tracking-[-0.035em] select-none',
        textSizeClass,
        className,
      )}
      style={inlineStyle}
      aria-label="Lingoberg"
    >
      <span className={cn('font-extrabold transition-colors duration-200', lingoColor)} aria-hidden="true">
        Ling
      </span>
      <CrystalMark
        forceMode={forceMode}
        className={cn(
          'mx-[0.06em] h-[0.68em] w-auto translate-y-[0.04em]',
          spinOnHover &&
            'group-hover/logo:animate-logo-spin-wave transition-transform duration-500 ease-out',
        )}
      />
      <span className={cn('font-extrabold transition-colors duration-200', bergColor)} aria-hidden="true">
        berg
      </span>
    </span>
  );
}

export default Logo;
