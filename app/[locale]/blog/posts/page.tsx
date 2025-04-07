import { RedirectType } from 'next/navigation';
import { redirect } from '@/lib/navigation';
import { type Locale } from '@/config/i18n';

async function Posts({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  redirect(
    {
      href: '/blog',
      locale,
    },
    RedirectType.replace,
  );
}

export default Posts;
