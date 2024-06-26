import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Cairo, Inter } from 'next/font/google';
import Script from 'next/script';
import { DirectionProvider } from '@/components/direction-provider';
import { MotionProvider } from '@/components/motion-provider';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ThemeProvider } from '@/components/theme-provider';
import type { Locale } from '@/config/i18n';
import { siteConfig } from '@/config/site';
import { ApolloWrapper } from '@/lib/apollo-wrapper';
import { cn } from '@/lib/utils';
import '../globals.css';
import { TRPCReactProvider } from '@/trpc/react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-ar',
});

export const metadata: Metadata = {
  title: 'Home - Ahmed Mohamed',
  description: siteConfig.description,
  openGraph: {
    title: 'Home - Ahmed Mohamed',
    description: siteConfig.description,
    type: 'profile',
    locale: 'en-US',
    alternateLocale: 'ar-EG',
    countryName: 'EG',
    firstName: 'Ahmed',
    lastName: 'Mohamed',
    username: 'Sekai',
    gender: 'male',
    images: ['/og.png'],
  },
  creator: 'Ahmed Mohamed',
  category: 'profile',
  keywords:
    'Ahmed, Mohamed, Ahmed Mohamed, Sekai, Fullstack web dev, discordjs dev, nextjs dev, react dev, developer',
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? 'https://portfoilo-umber.vercel.app/'
      : `http://localhost:${process.env.PORT ?? 3000}`,
  ),
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const { locale } = params;

  unstable_setRequestLocale(locale);
  const messages = useMessages();
  const dir = locale === 'ar-EG' ? 'rtl' : 'ltr';

  return (
    <html dir={dir} lang={locale}>
      <TRPCReactProvider>
        <DirectionProvider dir={dir}>
          <body
            className={cn(
              'min-h-screen bg-background antialiased',
              inter.className,
              cairo.className,
            )}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              disableTransitionOnChange
              enableSystem
            >
              <ApolloWrapper>
                <NextIntlClientProvider messages={messages}>
                  <MotionProvider reducedMotion="user">
                    <SiteHeader />
                    <div>{children}</div>
                    <SiteFooter />
                  </MotionProvider>
                </NextIntlClientProvider>
              </ApolloWrapper>
            </ThemeProvider>
            <SpeedInsights />
          </body>
        </DirectionProvider>
      </TRPCReactProvider>

      <Script
        data-website-id="5e7d095f-b63e-49a5-b4b5-9bbe5f60c764"
        defer
        src="https://eu.umami.is/script.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
