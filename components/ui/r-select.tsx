'use client';

import { CaretSortIcon, Cross2Icon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';
import type {
  ClearIndicatorProps,
  DropdownIndicatorProps,
  GroupBase,
} from 'react-select';
import ReactSelect, { components } from 'react-select';
import { cn } from '@/lib/utils';

export const RSelect = forwardRef<
  typeof ReactSelect,
  React.ComponentPropsWithoutRef<typeof ReactSelect>
>(({ className, ...props }, ref) => {
  const t = useTranslations('r-select');
  return (
    <ReactSelect
      className={cn('', className)}
      //@ts-expect-error -- ref type mismatch
      ref={ref}
      {...props}
      classNames={{
        control: ({ isDisabled, isFocused, isMulti }) =>
          cn(
            'flex flex-wrap !min-h-10 h-full w-full items-center gap-2 min-w-32 md:min-w-44 justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background [&>span]:line-clamp-1',
            {
              'outline-none ring-2 ring-ring ring-offset-2': isFocused,
              'cursor-not-allowed opacity-50': isDisabled,
              'px-2': isMulti,
            },
          ),

        placeholder: () => cn('text-muted-foreground'),

        indicatorsContainer: () => cn(''),

        multiValue: () =>
          cn(
            'bg-secondary rounded-md items-center py-0.5 ps-2 pe-1 gap-1.5 me-1 text-xs',
          ),

        menu: () =>
          cn(
            'relative !z-[999999999] max-h-96 mt-2 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-end-2 data-[side=right]:slide-in-from-start-2 data-[side=top]:slide-in-from-bottom-2',
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          ),

        menuList: () => cn('space-y-1 p-1 !z-[999999999]'),

        option: ({ isDisabled, isFocused, isSelected }) =>
          cn(
            'relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors ',
            {
              'bg-accent text-accent-foreground': isFocused,
              'bg-primary text-primary-foreground': isSelected,
              'pointer-events-none opacity-50': isDisabled,
            },
          ),

        groupHeading: () =>
          cn('text-sm text-muted-foreground font-semibold px-2 py-1.5'),

        noOptionsMessage: () => cn('text-muted-foreground p-2 rounded-sm'),
      }}
      components={{ DropdownIndicator, ClearIndicator }}
      formatGroupLabel={FormatGroupLabel}
      noOptionsMessage={() => t('no-options')}
      unstyled
    />
  );
});

RSelect.displayName = 'RSelect';

function FormatGroupLabel(props: GroupBase<unknown>) {
  return (
    <div className="flex items-center gap-1.5">
      <span>{props.label}</span>
      <div className="flex aspect-square h-5 items-center justify-center rounded-full bg-secondary text-xs">
        {props.options.length}
      </div>
    </div>
  );
}

function DropdownIndicator(props: DropdownIndicatorProps) {
  return (
    <components.DropdownIndicator {...props}>
      <CaretSortIcon className="h-4 w-4 opacity-50" />
    </components.DropdownIndicator>
  );
}

function ClearIndicator(props: ClearIndicatorProps) {
  return (
    <components.ClearIndicator
      {...props}
      className="me-1 rounded-md bg-secondary/50 p-1 transition-colors hover:bg-secondary"
    >
      <Cross2Icon className="h-4 w-4 opacity-50" />
    </components.ClearIndicator>
  );
}

export interface Option {
  readonly value: string;
  readonly label: string;
}

export interface GroupedOption {
  readonly label: string;
  readonly options: readonly Option[];
}
