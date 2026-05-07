'use client';

import { useTranslatorContext } from '@/shared/providers/translator.context';
import { ITranslator } from '@/shared/types/translator.interface';

export const useTranslator = (): ITranslator => {
  return useTranslatorContext();
};
