import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { usePagination } from "@mantine/hooks";
import { useTranslations } from "next-intl";

export interface PaginationParams {
    initialPage?: number;
    page?: number;
    total: number;
    siblings?: number;
    boundaries?: number;
    onChange?: (page: number) => void;
}

function FullPagination({ ...props }: PaginationParams) {
    const pagination = usePagination({ ...props });
    const t = useTranslations("pagination");

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => pagination.previous()}
                        name={t("previous")}
                    />
                </PaginationItem>
                {pagination.range.map((page, index) => {
                    if (page === "dots")
                        return (
                            <PaginationItem key={page + index}>
                                <PaginationEllipsis />
                            </PaginationItem>
                        );

                    return (
                        <PaginationItem key={page + index}>
                            <PaginationLink
                                onClick={() => pagination.setPage(page)}
                                isActive={pagination.active === page}
                            >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}
                <PaginationItem>
                    <PaginationNext
                        onClick={() => pagination.next()}
                        name={t("next")}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}

export default FullPagination;
