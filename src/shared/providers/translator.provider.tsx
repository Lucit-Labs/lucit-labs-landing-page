'use client';

import { ReactNode } from 'react';

import { useNextIntlTranslator } from '@/shared/infraestructure/adapters/intl-translator';

import TranslatorContext from './translator.context';

interface I18nProviderProps {
  children: ReactNode;
  namespace: string;
}

export const I18nProvider = ({ children, namespace }: I18nProviderProps) => {
  const translator = useNextIntlTranslator(namespace);

  return (
    <TranslatorContext.Provider value={translator}>
      {children}
    </TranslatorContext.Provider>
  );
};
