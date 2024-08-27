import type { Metadata } from 'next';
import './styles/globals.css';
import { Roboto } from 'next/font/google';
import clsx from 'clsx';
import Header from './components/header';

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
      <body className={clsx('bg-bg-color max-w-[1440px] px-16 mx-auto', roboto.className)}>
        <Header>
          <main>{children}</main>
        </Header>
      </body>
    </html>
  );
}
