import type { Metadata } from 'next';
import './styles/globals.css';
import { Roboto } from 'next/font/google';
import clsx from 'clsx';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'LearnLingo',
  description:
    'LearnLingo - find the perfect foreign language teacher for you. A wide selection of professional teachers, with convenient search options by language, level, and type of lessons. Start your language journey with us today!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx('bg-bg-color', roboto.className)}>{children}</body>
    </html>
  );
}
