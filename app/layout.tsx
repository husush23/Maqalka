import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navabar';
import Footer from '@/components/Footer';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: {
    default: 'Maqalka',
    template: '%s - Maqalka',
  },
  description:
    '  Xaqiijinta xogta dhagahaaga soo gaarta, shaandayn iyo kala saarid!',
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
            <head>
        <meta name="theme-color" content="#0e1226" /> {/* Add theme-color */}
      </head>
      <body className={`${inter.className} bg-primary text-secondary`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
