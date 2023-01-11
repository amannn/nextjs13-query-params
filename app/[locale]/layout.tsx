import {Inter} from '@next/font/google';
import {ReactNode} from 'react';
import './globals.css';

const inter = Inter({subsets: ['latin']});

type Props = {
  children: ReactNode;
};

export default function RootLayout({children}: Props) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
