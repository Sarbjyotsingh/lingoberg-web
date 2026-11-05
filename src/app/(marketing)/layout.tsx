import type { ReactNode } from 'react';
import { Navigation } from '@/components/layouts/Navigation';
import { Footer } from '@/components/layouts/Footer';

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
