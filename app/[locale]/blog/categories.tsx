'use client';

import { useSuspenseQuery } from '@apollo/client';
import { useLocale, useTranslations } from 'next-intl';
import { useMemo } from 'react';
import type ReactSelect from 'react-select';
import { cn } from '@/lib/utils';
import { RSelect } from '@/components/ui/r-select';
import { gql } from '@/_generated';

const CATEGORIES_QUERY =
  gql(`query Categories($locale: I18NLocaleCode, $pagination: PaginationArg) {
    categories(locale: $locale, pagination: $pagination) {
      meta {
        pagination {
          page
          pageCount
          pageSize
          total
        }
      }
      data {
        id
        attributes {
          name
          description
        }
      }
    }
}`);

export function Categories({
  className,
  valueIDs,
  ...props
}: React.ComponentPropsWithoutRef<typeof ReactSelect> & {
  valueIDs?: string[];
}) {
  const locale = useLocale();
  const t = useTranslations('blog');

  const { data } = useSuspenseQuery(CATEGORIES_QUERY, {
    variables: {
      locale,
      pagination: {
        pageSize: 100,
      },
    },
  });

  const options = [
    {
      label: t('fillters.categories'),
      options: data.categories?.data.map((category) => ({
        label: category.attributes?.name,
        value: category.id,
      })),
    },
  ];

  const categories = options[0].options;
  const computedValues = useMemo(() => {
    return valueIDs?.map((id) => categories?.find((c) => c.value === id));
  }, [categories, valueIDs]);

  return (
    <div className={cn('w-fit space-y-2', className)}>
      <RSelect
        options={options}
        isMulti
        value={valueIDs ? computedValues : undefined}
        {...props}
      />
    </div>
  );
}
