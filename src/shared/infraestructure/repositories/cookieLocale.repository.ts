import { cookies } from 'next/headers';
import { ILocaleRepository } from '@/shared/types/translator.interface';

export class CookieLocaleRepository implements ILocaleRepository {
  private readonly COOKIE_NAME = 'NEXT_LOCALE';

  async getLocale(): Promise<string> {
    const cookieStore = await cookies();
    return cookieStore.get(this.COOKIE_NAME)?.value || 'en';
  }

  async setLocale(locale: string): Promise<void> {
    // Note: In Next.js, setting cookies must happen in a Server Action or Route Handler
    const cookieStore = await cookies();
    cookieStore.set(this.COOKIE_NAME, locale);
  }
}
