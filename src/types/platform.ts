/**
 * Cross-Platform Domain & DTO Contracts (Lingoberg Mobile App <-> Lingoberg Web Phase 2)
 *
 * Mirrors `lingoberg-app/lib/CORE/networking/user_api_service.dart` and
 * `lingoberg-app/lib/CORE/models/telc_exam_structure.dart` so mobile and web share
 * the exact same Firebase UID identity, AWS DynamoDB documents, and entitlements.
 */

export type AuthProviderType = 'google' | 'apple';

export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export type ExamSystem = 'telc' | 'goethe';

export type ExamSectionType = 'listening' | 'speaking';

export type SubscriptionPlanTier = 'free' | 'pro' | 'exam_pass';

export type PaymentSource = 'revenuecat_ios' | 'revenuecat_android' | 'razorpay_web' | 'stripe_web';

export interface LingobergUserProfileDTO {
  /** Primary key shared across Firebase Auth, AWS DynamoDB, RevenueCat, and Amplitude */
  firebaseUid: string;
  email: string;
  name?: string;
  avatarUrl?: string;
  authProvider: AuthProviderType;
  preferences: {
    targetLanguage: 'de';
    appLocale: 'en' | 'es' | 'ar' | 'tr' | 'ru' | 'uk';
    currentLevel: CefrLevel;
  };
  gdpr: {
    tosAccepted: boolean;
    privacyAccepted: boolean;
    marketingOptIn: boolean;
    acceptedAtIso: string;
  };
}

export interface UnifiedEntitlementDTO {
  firebaseUid: string;
  planTier: SubscriptionPlanTier;
  status: 'active' | 'grace_period' | 'expired';
  source: PaymentSource;
  hasUnlimitedStories: boolean;
  hasPracticeExamAccess: boolean;
  speakingMockCreditsRemaining: number;
  expiresAtIso: string | null;
}

export interface UserLearningAnalyticsDTO {
  firebaseUid: string;
  currentStreakDays: number;
  longestStreakDays: number;
  totalListeningMinutes: number;
  storiesCompletedCount: number;
  wordsSavedCount: number;
}

export interface ExamAttemptDTO {
  attemptId: string;
  firebaseUid: string;
  examSystem: ExamSystem;
  level: CefrLevel;
  section: ExamSectionType;
  mode: 'practice' | 'mock_exam';
  /** Recorded server-side on start to validate total elapsed time on submission */
  startedAtIso: string;
  completedAtIso: string | null;
  scoreEarned: number | null;
  maxScore: number;
  passed: boolean | null;
  /** Structured Formblatt M10 / Goethe rubric breakdown for Speaking evaluations */
  rubricBreakdown?: {
    taskFulfillment: number;
    fluencyAndInteraction: number;
    repertoireAndVocabulary: number;
    grammaticalAccuracy: number;
    pronunciationAndIntonation: number;
    feedbackSummary: string;
  };
}
