import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <Logo variant="inline-o" size="lg" className="mb-8" />
      <div className="border-primary/25 bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs font-bold">
        <Compass className="h-3.5 w-3.5" />
        404 · SEITE NICHT GEFUNDEN
      </div>
      <h1 className="text-foreground mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
        Lost on the Glacier?
      </h1>
      <p className="text-muted-foreground mt-3 max-w-md text-base">
        The page you are looking for does not exist or has moved to a new trail on Lingoberg.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'rounded-xl font-bold')}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <Link
          href="/contact/"
          className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'rounded-xl font-bold')}
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}
