import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/lib/utils';

const typographyVariants = cva('', {
  variants: {
    as: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
      h6: 'scroll-m-20 text-base font-semibold tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      blockquote: 'mt-6 border-l-2 ps-6 italic',
      ul: 'my-6 ms-6 list-disc [&>li]:mt-2',
      inlineCode:
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      lead: 'text-xl text-muted-foreground',
      largeText: 'text-lg font-semibold',
      smallText: 'text-sm font-medium leading-none',
      mutedText: 'text-sm text-muted-foreground',
      link: 'text-sm text-muted-foreground hover:text-foreground hover:underline transition-all',
    },
  },
});

type Element = keyof JSX.IntrinsicElements;

type TypographyProps<T extends Element> = {
  element: T;
} & VariantProps<typeof typographyVariants> &
  React.HTMLAttributes<HTMLElement>;

function TypographyElement<T extends Element>(
  { className, element, as, ...props }: TypographyProps<T>,
  ref: React.LegacyRef<T>,
) {
  const Component = element;

  const componentProps = {
    className: cn(typographyVariants({ as }), className),
    ref,
    ...props,
  };

  return React.createElement(Component, componentProps);
}

export const Typography = React.forwardRef(TypographyElement);
