'use server';

import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';

const validLocales = new Set(['en', 'es']);

export async function changeLocale(newLocale: string) {
    if (!validLocales.has(newLocale)) {
    throw new Error(`Invalid locale: ${newLocale}`);
  }

  const cookieStore = await cookies();
  cookieStore.set('NEXT_LOCALE', newLocale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax'
  });

  const headersList = await headers();
  const referer = headersList.get('referer');
  
  if (referer) {
    const url = new URL(referer);
    redirect(url.pathname + url.search);
  } else {
    redirect('/');
  }
}
