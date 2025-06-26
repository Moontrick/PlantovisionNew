
import { Metadata } from 'next';
import '@/public/assets/index.scss';
import Script from 'next/script';
import { LayoutProps } from './types';
import 'slick-carousel/slick/slick.css';

export const dynamic = 'force-dynamic';

export function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'en' }];
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
      </head>
      <body>
        <main>{children}</main>
        <div style={{ position: 'absolute' }} id="modal-root" />
      </body>
    </html>
  );
}
