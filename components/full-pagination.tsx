import { usePagination } from '@mantine/hooks';
import { useTranslations } from 'next-intl';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export interface PaginationParams {
  initialPage?: number;
  page?: number;
  total: number;
  siblings?: number;
  boundaries?: number;
  onChange?: (page: number) => void;
}

export function FullPagination({ ...props }: PaginationParams) {
  const pagination = usePagination({ ...props });
  const t = useTranslations('pagination');

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            name={t('previous')}
            onClick={() => {
              pagination.previous();
            }}
          />
        </PaginationItem>
        {pagination.range.map((page) => {
          if (page === 'dots')
            return (
              <PaginationItem key={page}>
                <PaginationEllipsis />
              </PaginationItem>
            );

          return (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={pagination.active === page}
                onClick={() => {
                  pagination.setPage(page);
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext
            name={t('next')}
            onClick={() => {
              pagination.next();
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
