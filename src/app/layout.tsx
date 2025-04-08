// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { GlossaryProvider } from './GlossaryContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AGI Safety & Security - Interactive Guide',
  description: 'An interactive exploration of approaches to technical AGI safety and security, covering misuse, misalignment, and safety cases',
  keywords: 'AGI safety, AGI security, artificial general intelligence, misalignment, misuse, safety cases',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlossaryProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </GlossaryProvider>
      </body>
    </html>
  );
}