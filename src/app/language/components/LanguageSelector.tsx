'use client';

import { useTransition } from 'react';

import { useTranslations } from 'next-intl';

import { changeLocale } from '@/shared/infraestructure/actions/changeLocale';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

interface LanguageSelectorProps {
  readonly currentLocale: string;
}

export default function LanguageSelector({
  currentLocale,
}: LanguageSelectorProps) {
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('language');
  const handleLanguageChange = (locale: string) => {
    startTransition(() => {
      changeLocale(locale);
    });
  };

  return (
    <div className="space-y-4">
      <label
        htmlFor="language-select"
        className="block text-sm font-medium text-gray-700"
      >
        {t('select')}
      </label>
      <select
        id="language-select"
        value={currentLocale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        disabled={isPending}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.flag} {language.name}
          </option>
        ))}
      </select>

      {isPending && <p className="text-sm text-gray-500">{t('changing')}</p>}

      <div className="grid gap-2 mt-4">
        <p className="text-sm text-gray-600">{t('clickToChange')}</p>
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            disabled={isPending || currentLocale === language.code}
            className={`flex items-center gap-2 px-4 py-2 rounded-md border transition-colors ${
              currentLocale === language.code
                ? 'bg-blue-100 border-blue-300 text-blue-800'
                : 'bg-white border-gray-300 hover:bg-gray-50 text-gray-700'
            } disabled:opacity-50`}
          >
            <span className="text-xl">{language.flag}</span>
            <span>{language.name}</span>
            {currentLocale === language.code && (
              <span className="ml-auto text-xs text-blue-600">
                {t('current')}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
