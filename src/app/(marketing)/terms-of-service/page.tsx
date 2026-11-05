import { constructMetadata } from '@/lib/metadata';
import { TermsOfServiceContent } from '@/features/legal/components/TermsOfServiceContent';

export const metadata = constructMetadata({
  title: 'Terms of Service',
  description:
    'Terms of Service governing your use of the Lingoberg mobile apps, website, German audio stories, and AI Speaking & Listening Exam Simulators.',
  path: '/terms-of-service/',
});

export default function TermsOfServicePage() {
  return <TermsOfServiceContent />;
}
