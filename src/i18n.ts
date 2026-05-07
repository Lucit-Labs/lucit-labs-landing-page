import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

const locales = new Set(['en', 'es']);
const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  let resolvedLocale = locale;

  if (!resolvedLocale) {
    const cookieStore = await cookies();
    const localeCookie = cookieStore.get('NEXT_LOCALE');
    resolvedLocale = localeCookie?.value || defaultLocale;
  }
  const validLocale =
    resolvedLocale && locales.has(resolvedLocale)
      ? resolvedLocale
      : defaultLocale;
  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default,
  };
});
