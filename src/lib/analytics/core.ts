import type { AnalyticsEventPayload } from './types';

class AnalyticsManager {
  private consentGranted = false;

  public updateConsent(granted: boolean) {
    this.consentGranted = granted;
  }

  public hasConsent(): boolean {
    if (typeof window === 'undefined') return false;
    return this.consentGranted || localStorage.getItem('cookie-consent') === 'accepted';
  }

  public trackEvent({ eventName, properties = {} }: AnalyticsEventPayload) {
    if (typeof window === 'undefined') return;
    if (!this.hasConsent()) return;

    // Dispatch to Google Analytics (gtag) if present
    const win = window as unknown as {
      gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
    };
    if (typeof win.gtag === 'function') {
      win.gtag('event', eventName, properties);
    }

    if (process.env.NODE_ENV === 'development') {
      console.debug('[Lingoberg Analytics]', eventName, properties);
    }
  }
}

export const analytics = new AnalyticsManager();
