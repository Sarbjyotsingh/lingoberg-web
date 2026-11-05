import { constructMetadata } from '@/lib/metadata';
import { PrivacyPolicyContent } from '@/features/legal/components/PrivacyPolicyContent';

export const metadata = constructMetadata({
  title: 'Privacy Policy',
  description:
    'Read how Lingoberg (operated by Abhyashala Technology Private Limited) collects, stores in EU Frankfurt (AWS eu-central-1), and protects your personal and voice exam data.',
  path: '/privacy-policy/',
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
