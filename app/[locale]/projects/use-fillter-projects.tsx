import type { FuseSearchOptions } from 'fuse.js';
import type Fuse from 'fuse.js';
import { useMemo } from 'react';
import { useFuse } from '@/hooks/use-fuse';
import type { Project } from '@/config/projects';

export interface ProjectsFilterProps<T, S extends T[]> {
  fuse: Fuse<T>;
  query: {
    value?: string;
    options?: FuseSearchOptions;
  };
  store: S;
  filtersIDs: string[];
}

export function useFilterProjects<T extends Project, S extends T[]>({
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
