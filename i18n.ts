/* eslint-disable import/no-default-export -- required */
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { type Locale, locales } from './config/i18n';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) notFound();

  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- required
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
