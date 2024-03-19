import React from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { Icons } from './icons';

function Loader({
  className,
  isLoading = true,
}: {
  className?: string;
  isLoading?: boolean;
}) {
  const t = useTranslations('loader');

  if (!isLoading) return;

  return (
    <div
      className={cn(
        'absolute inset-0 z-40 flex h-full min-h-32 w-full items-center justify-center rounded-md border bg-muted/25 backdrop-blur-xl',
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <Icons.spinner className="h-8 w-8 animate-spin" />
        <span className="text">{t('loading')}</span>
      </div>
    </div>
  );
}

export { Loader };
