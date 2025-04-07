import { SpeedInsights } from '@vercel/speed-insights/next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Cairo, Inter } from 'next/font/google';
import Script from 'next/script';
import { type Metadata } from 'next/dist/types';
import { notFound } from 'next/navigation';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
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
import { routing } from '@/i18n/routing';

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

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: Locale }>;
  }>,
) {
  const { children, params } = props;
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
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
                <NextIntlClientProvider locale={locale}>
                  <MotionProvider reducedMotion="user">
                    <SiteHeader />
                    <div>
                      <NuqsAdapter>{children}</NuqsAdapter>
                    </div>
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
