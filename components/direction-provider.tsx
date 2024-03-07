'use client';
import type { DirectionProviderProps } from '@radix-ui/react-direction';
import { DirectionProvider as RxDirectionProvider } from '@radix-ui/react-direction';

export function DirectionProvider({
  children,
  ...props
}: DirectionProviderProps) {
  return <RxDirectionProvider {...props}>{children}</RxDirectionProvider>;
}
