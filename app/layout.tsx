import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Smartskatt.no - Finn dine glemte skattefradrag | Oppdatert for 2026',
  description: 'Vi oversetter komplekse norske skatteregler til enkle sparegrep. Bruk vår skatteveiviser for å finne fradrag du har krav på.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50 antialiased relative selection:bg-blue-200 selection:text-blue-900">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 z-[-1] h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),rgba(255,255,255,0))]"></div>
        </div>
        
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
