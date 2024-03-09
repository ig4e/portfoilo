'use client';
import { useMediaQuery } from '@mantine/hooks';

const screens = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1400,
};

export type Screen = keyof typeof screens;

export function useViewport() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return {
    isMobile: !isDesktop,
    isDesktop,
  };
}
