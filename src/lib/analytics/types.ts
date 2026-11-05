export const EventNames = {
  LOGO_CLICKED: 'logo_clicked',
  NAVIGATION_CLICKED: 'navigation_clicked',
  STORE_CTA_CLICKED: 'store_cta_clicked',
  EXAM_PREVIEW_INTERACTED: 'exam_preview_interacted',
  LOADING_MODAL_DEMO_OPENED: 'loading_modal_demo_opened',
  CONTACT_EMAIL_COPIED: 'contact_email_copied',
  WEB_EXAM_WAITLIST_CLICKED: 'web_exam_waitlist_clicked',
} as const;

export type EventName = (typeof EventNames)[keyof typeof EventNames];

export const EventLocations = {
  HEADER_DESKTOP: 'header_desktop',
  HEADER_MOBILE: 'header_mobile',
  HERO: 'hero',
  BENTO_FEATURES: 'bento_features',
  EXAM_SHOWCASE: 'exam_showcase',
  CTA_BANNER: 'cta_banner',
  FOOTER: 'footer',
  CONTACT_PAGE: 'contact_page',
} as const;

export type EventLocation = (typeof EventLocations)[keyof typeof EventLocations];

export const EventSources = {
  DESKTOP: 'desktop',
  MOBILE: 'mobile',
  FOOTER: 'footer',
} as const;

export type EventSource = (typeof EventSources)[keyof typeof EventSources];

export interface AnalyticsEventPayload {
  eventName: EventName;
  properties?: Record<string, string | number | boolean | undefined>;
}
