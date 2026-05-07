import React, { ReactNode } from 'react';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';

import { I18nProvider } from '@/shared/providers/translator.provider';
import enMessages from '../../messages/en.json';

import type { Metadata } from 'next';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lucit Labs',
  description:
    'Lucit Labs builds modern software for medical, economic, fintech, and architectural domains with AI modernization and compliance-ready engineering.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = 'en';
  const messages = enMessages;

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <I18nProvider namespace="Common">
            <AntdRegistry>{children}</AntdRegistry>
          </I18nProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
