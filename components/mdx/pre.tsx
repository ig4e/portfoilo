import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { CopyButton } from './copy';

export function Pre({
  className,
  ...props
}: {
  className?: string;
  'data-language': string;
  raw: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-md border bg-background">
      <div className="flex w-full items-center justify-between rounded-md px-4 py-2">
        <p className="m-0 text-muted-foreground first-letter:uppercase">
          {props['data-language']}
        </p>
        <CopyButton text={props.raw} />
      </div>

      <div
        className="p-2"
        style={{
          background:
            'linear-gradient(140deg, rgb(255, 99, 99), rgb(115, 52, 52))',
        }}
      >
        <pre
          className={cn(
            className,
            'shiki shiki-themes relative m-0 border bg-background/90 dark:bg-background/80',
          )}
          {...props}
        >
          {props.children}
        </pre>
      </div>
    </div>
  );
}
