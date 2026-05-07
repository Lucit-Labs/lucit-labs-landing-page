'use client';

import { createContext, useContext } from 'react';

import { ITranslator } from '@/shared/types/translator.interface';

const TranslatorContext = createContext<ITranslator | null>(null);

export const useTranslatorContext = () => {
  const context = useContext(TranslatorContext);
  if (!context) {
    throw new Error('useTranslatorContext must be used within an I18nProvider');
  }
  return context;
};

export default TranslatorContext;
