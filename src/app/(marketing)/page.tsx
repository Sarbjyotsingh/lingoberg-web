import { HeroSection } from '@/features/marketing/components/HeroSection';
import { BentoFeaturesSection } from '@/features/marketing/components/BentoFeaturesSection';
import { HowItWorksSection } from '@/features/marketing/components/HowItWorksSection';
import { StatsProgressSection } from '@/features/marketing/components/StatsProgressSection';
import { TestimonialsSection } from '@/features/marketing/components/TestimonialsSection';
import { FaqSection } from '@/features/marketing/components/FaqSection';
import { DownloadCtaSection } from '@/features/marketing/components/DownloadCtaSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BentoFeaturesSection />
      <HowItWorksSection />
      <StatsProgressSection />
      <TestimonialsSection />
      <FaqSection />
      <DownloadCtaSection />
    </>
  );
}
