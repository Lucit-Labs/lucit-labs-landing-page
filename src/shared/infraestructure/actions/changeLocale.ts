const validLocales = new Set(['en', 'es']);

export async function changeLocale(newLocale: string) {
  if (!validLocales.has(newLocale)) {
    throw new Error(`Invalid locale: ${newLocale}`);
  }

  document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
  window.location.reload();
}
