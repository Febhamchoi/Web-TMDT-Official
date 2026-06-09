import type React from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { CartProvider } from '@/context/cart-context';
import { AuthProvider } from '@/context/AuthContext';
import { ToasterProvider } from '@/components/toaster-provider';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weights: [400, 500, 600, 700],
});

export const metadata: Metadata = {
  title: 'TrendVibe - Fashion Store',
  description: 'Fashion Theme - Discover the latest trends in clothing and accessories',
  generator: 'Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={montserrat.variable}>
      <body suppressHydrationWarning className="font-montserrat">
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <CartProvider>
              {children}
              <ToasterProvider />
            </CartProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
