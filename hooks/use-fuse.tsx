import Fuse, { FuseSearchOptions } from "fuse.js";
import { useMemo } from "react";

export function useFuse<T, S extends Array<T>>({
    fuse,
    query,
    store,
}: {
    fuse: Fuse<T>;
    query: {
        value?: string;
        options?: FuseSearchOptions;
    };
    store: S;
}) {
    const results = useMemo(() => {
        if (!query.value?.trim()) return store;
        return fuse
            .search(query.value, query.options)
            .map((fuseRes) => fuseRes.item);
    }, [query, fuse, store]);

    return results;
}
