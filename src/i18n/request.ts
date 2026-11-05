import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const activeLocale = 'en';

  return {
    locale: activeLocale,
    messages: (await import(`../../i18n/${activeLocale}.json`)).default,
  };
});
