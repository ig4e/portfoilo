'use client';

import { LanguagesIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { Locale } from '@/config/i18n';
import { locales } from '@/config/i18n';
import useViewport from '@/hooks/use-viewport';
import { usePathname, useRouter } from '@/lib/navigation';

export function LocaleSelector() {
  const { isMobile } = useViewport();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('locale-selector');
  const tModals = useTranslations('modals');

  function setLocale(locale: Locale) {
    router.push(pathname, { locale });
  }

  if (isMobile)
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon">
            <LanguagesIcon className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">{t('locale-select')}</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{t('locale-select')}</DrawerTitle>
          </DrawerHeader>

          <div className="space-y-2">
            {locales.map((locale) => {
              return (
                <Button
                  key={locale}
                  variant="secondary"
                  className="w-full"
                  onClick={() => {
                    setLocale(locale);
                  }}
                >
                  {t(locale)}
                </Button>
              );
            })}
          </div>

          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline" className="w-full">
                {tModals('cancel')}
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <LanguagesIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t('locale-select')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t('locale-select')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            setLocale('ar-EG');
          }}
        >
          <LanguagesIcon className="h-4 w-4" />
          {t('ar-EG')}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setLocale('en-US');
          }}
        >
          <LanguagesIcon className="h-4 w-4" />
          {t('en-US')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
