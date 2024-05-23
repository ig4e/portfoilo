'use client';

import { Link2Icon } from '@radix-ui/react-icons';
import { useLocale, useTranslations } from 'next-intl';
import Image, { type StaticImageData } from 'next/image';
import * as React from 'react';
import { Icons } from '@/components/ui/icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { type Locale } from '@/config/i18n';
import { projects } from '@/config/projects';
import { Link } from '@/lib/navigation';
import { cn, getProjectPath } from '@/lib/utils';

export function NavMenu() {
  const t = useTranslations('site-header');
  const locale = useLocale() as Locale;
  const tHome = useTranslations('index');
  const tProject = useTranslations('project');

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t(`links.about-me`)}</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid gap-3 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/45 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="h-8 w-8" />
                    <div className="mb-2 mt-auto text-lg font-medium">
                      {t('name')}
                    </div>
                    <p className="text-sm leading-tight">
                      {tHome('about-me.title')}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

              <ListItem href="#about" title={t('links.about-me')}>
                <span className="line-clamp-2">
                  {tHome('about-me.my-start')}
                </span>
              </ListItem>
              <ListItem href="#skills" title={t('links.skills')}>
                {tProject('description')}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* 
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t(`links.services`)}</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid gap-3 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/45 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="h-8 w-8" />
                    <div className="mb-2 mt-auto text-lg font-medium">
                      {t('my-services')}
                    </div>
                    <p className="text-sm leading-tight">
                      {tHome('services-desc')}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

              <ListItem href="#about" title={t('links.about-me')}>
                <span className="line-clamp-2">
                  {tHome('about-me.my-start')}
                </span>
              </ListItem>
              <ListItem href="#skills" title={t('links.skills')}>
                {tProject('description')}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {t('links.my-projects')}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="max-h-96 overflow-auto">
              <ul className="grid w-[400px] gap-3 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                <li className="row-span-1">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/45 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/projects"
                    >
                      <Icons.logo className="h-8 w-8" />
                      <div className="mb-2 mt-auto inline-flex items-center justify-between gap-4 text-lg font-medium">
                        {t('links.my-projects')} <Link2Icon />
                      </div>
                      <p className="text-sm leading-tight">
                        {tProject('description')}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                {projects.map((project) => (
                  <ProjectListItem
                    key={project.id}
                    title={project.name[locale]}
                    href={`/${locale}/${getProjectPath(project)}`}
                    image={project.image}
                  >
                    {project.shortDescription[locale]}
                  </ProjectListItem>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t('links.blog')}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ProjectListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { image: string | StaticImageData }
>(({ className, title, children, image, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block h-full select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/75 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="mb-2 w-full">
            <Image
              alt={title ?? ''}
              src={image}
              width={512}
              height={512}
              className="w-full rounded-md object-cover"
            />
          </div>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ProjectListItem.displayName = 'ProjectListItem';

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/75 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
