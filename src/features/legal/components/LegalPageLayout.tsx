import type { ReactNode } from 'react';
import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/config/site';

interface LegalPageLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  effectiveDate: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalPageLayout({
  badge,
  title,
  subtitle,
  effectiveDate,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-muted-foreground hover:text-primary inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Lingoberg Home
        </Link>

        <div className="border-border/80 bg-card mt-6 rounded-3xl border p-6 shadow-sm sm:p-10 md:p-12">
          <div className="border-border/70 border-b pb-8">
            <Badge variant="ice" className="mb-3 gap-1.5">
              <Shield className="text-primary h-3.5 w-3.5" />
              {badge}
            </Badge>
            <h1 className="text-foreground text-3xl font-extrabold tracking-tight sm:text-4xl">
              {title}
            </h1>
            <p className="text-muted-foreground mt-3 text-base">{subtitle}</p>
            <div className="text-muted-foreground mt-4 flex flex-wrap items-center gap-4 font-mono text-xs">
              <span>Effective Date: {effectiveDate}</span>
              <span>•</span>
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>

          <div className="text-muted-foreground [&_h2]:text-foreground [&_h3]:text-foreground [&_strong]:text-foreground mt-8 space-y-8 text-sm leading-relaxed sm:text-base [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h3]:mt-5 [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-bold [&_strong]:font-semibold [&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            {children}
          </div>

          <div className="border-border/70 bg-secondary/40 text-muted-foreground mt-12 rounded-2xl border p-6 text-xs">
            <p className="text-foreground font-bold">{siteConfig.company.legalName}</p>
            <p className="mt-1 font-mono">CIN: {siteConfig.company.cin}</p>
            <p className="mt-1">Registered Address: {siteConfig.company.registeredAddress}</p>
            <p className="mt-1">
              Contact &amp; Data Protection Inquiries:{' '}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-primary font-semibold hover:underline"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
