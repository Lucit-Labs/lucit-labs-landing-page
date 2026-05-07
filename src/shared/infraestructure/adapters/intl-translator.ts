import { useTranslations, useLocale } from 'next-intl';

import {
  ITranslator,
  TranslatorVariables,
} from '@/shared/types/translator.interface';

/**
 * This adapter wraps next-intl.
 * If in the future we decide to change the i18n library, we only need to modify this file.
 */
export function useNextIntlTranslator(namespace: string): ITranslator {
  const translate = useTranslations(namespace);
  const locale = useLocale();

  return {
    t: (key: string, variables?: TranslatorVariables) =>
      translate(key, variables),
    getLocale: () => locale,
  };
}
