import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navabar';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Maqalka',
  description: 'A mysterious block',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-primary`}>{children}</body>
    </html>
  );
}
