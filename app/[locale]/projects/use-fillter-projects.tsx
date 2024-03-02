import { Project } from "@/config/projects";
import { useFuse } from "@/hooks/use-fuse";
import Fuse, { FuseSearchOptions } from "fuse.js";
import { useMemo } from "react";

export interface ProjectsFilterProps<T, S extends Array<T>> {
    fuse: Fuse<T>;
    query: {
        value?: string;
        options?: FuseSearchOptions;
    };
    store: S;
    filtersIDs: string[];
}

export function useFilterProjects<T extends Project, S extends Array<T>>({
    fuse,
    query,
    store,
    filtersIDs,
}: ProjectsFilterProps<T, S>) {
    const searchResults = useFuse({
        fuse,
        query,
        store,
    });

    const results = useMemo(() => {
        if (!(filtersIDs.length > 0)) return searchResults;
        return searchResults.filter((project) => {
            return filtersIDs.every(
                (id) =>
                    project.categories.some((category) => category.id === id) ||
                    project.stack.some((stack) => stack.id === id),
            );
        });
    }, [searchResults, filtersIDs]);

    return results;
}
