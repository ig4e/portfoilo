'use client';
import { toLocaleDateString } from '@/lib/utils';

export function PostDate({ date }: { date: Date }) {
  return <span suppressHydrationWarning>{toLocaleDateString(date)}</span>;
}
