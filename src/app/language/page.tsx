'use client';
import { useTranslations, useLocale } from 'next-intl';

import LanguageSelector from './components/LanguageSelector';

export default function LanguagePage() {
  const t = useTranslations('language');
  const currentLocale = useLocale();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      <div className="max-w-md">
        <LanguageSelector currentLocale={currentLocale} />
      </div>
    </div>
  );
}
