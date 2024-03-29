'use client';

import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import * as React from 'react';
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
import { useViewport } from '@/hooks/use-viewport';

const modes = ['light', 'dark', 'system'] as const;

export function ModeToggle() {
  const { isMobile } = useViewport();
  const { setTheme } = useTheme();
  const t = useTranslations('mode-toggle');
  const tModals = useTranslations('modals');
  const [open, setOpen] = React.useState(false);

  if (isMobile)
    return (
      <Drawer onOpenChange={setOpen} open={open}>
        <DrawerTrigger asChild>
          <Button size="icon" variant="ghost">
            <SunIcon className="block h-[1.2rem] w-[1.2rem] dark:hidden" />
            <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] dark:block" />
            <span className="sr-only">{t('toggle-theme')}</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{t('toggle-theme')}</DrawerTitle>
          </DrawerHeader>

          <div className="space-y-2">
            {modes.map((mode) => {
              let ModeIcon;

              switch (mode) {
                case 'light':
                  ModeIcon = SunIcon;
                  break;
                case 'dark':
                  ModeIcon = MoonIcon;
                  break;
                default:
                  ModeIcon = DesktopIcon;
                  break;
              }

              return (
                <Button
                  className="w-full"
                  key={mode}
                  onClick={() => {
                    setTheme(mode);
                    setTimeout(() => {
                      setOpen(false);
                    }, 200);
                  }}
                  variant="secondary"
                >
                  <ModeIcon className="h-4 w-4" />

                  {t(mode)}
                </Button>
              );
            })}
          </div>

          <DrawerFooter>
            <DrawerClose>
              <Button className="w-full" variant="outline">
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
        <Button size="icon" variant="ghost">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t('toggle-theme')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t('toggle-theme')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            setTheme('light');
          }}
        >
          <SunIcon className="h-4 w-4" />
          {t('light')}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme('dark');
          }}
        >
          <MoonIcon className="h-4 w-4" />
          {t('dark')}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme('system');
          }}
        >
          <DesktopIcon className="h-4 w-4" />
          {t('system')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
