import { constructMetadata } from '@/lib/metadata';
import { ContactSection } from '@/features/contact/components/ContactSection';

export const metadata = constructMetadata({
  title: 'Contact & Learner Support',
  description:
    'Get in touch with the Lingoberg team for account support, subscription billing, German audio stories, or AI Exam Simulator inquiries.',
  path: '/contact/',
});

export default function ContactPage() {
  return <ContactSection />;
}
