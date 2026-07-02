import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import I18nProvider from '../i18n-provider';

export const metadata: Metadata = {
  title: 'Hajar Portfolio',
  description: 'Portfolio de Hajar Sandid'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="dark" suppressHydrationWarning>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
