'use client';

import type { ReactNode } from 'react';
import { LanguageProvider } from './context/LanguageContext';

export default function I18nProvider({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
