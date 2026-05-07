import { getRequestConfig } from 'next-intl/server';

const locales = new Set(['en', 'es']);
const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locale || defaultLocale;
  const validLocale =
    resolvedLocale && locales.has(resolvedLocale)
      ? resolvedLocale
      : defaultLocale;
  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default,
  };
});
