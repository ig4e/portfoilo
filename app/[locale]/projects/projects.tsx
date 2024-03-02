"use client";
import SearchInput from "@/components/search-input";
import { Option, RSelect } from "@/components/ui/r-select";
import { Locale } from "@/config/i18n";
import { mappedCategories, projects } from "@/config/projects";
import { skills } from "@/config/skills";
import { useDebounce } from "@uidotdev/usehooks";
import Fuse from "fuse.js";
import { useTranslations } from "next-intl";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { useFilterProjects } from "./use-fillter-projects";
import { useMemo } from "react";
import { ProjectCard } from "@/components/project-parallax";

const fuse = new Fuse(projects, {
    keys: [
        "name.ar-EG",
        "name.en-US",
        "shortDescription.ar-EG",
        "shortDescription.en-US",
        "description.ar-EG",
        "description.en-US",
    ],
    threshold: 0.2,
});

function ProjectsPageList({
    params: { locale },
}: {
    params: { locale: Locale };
}) {
    const t = useTranslations("project");

    const [query, setQuery] = useQueryState(
        "query",
        parseAsString.withDefault(""),
    );

    const [fillters, setFillters] = useQueryState<string[]>(
        "fillters",
        parseAsArrayOf(parseAsString).withDefault([]),
    );

    const results = useFilterProjects({
        fuse,
        query: { value: query },
        store: projects,
        filtersIDs: fillters,
    });

    const debouncedResults = useDebounce(results, 100);

    const options = [
        {
            label: t("fillters.categories"),
            options: mappedCategories.map((category) => ({
                label: category[locale],
                value: category.id,
            })),
        },
        {
            label: t("fillters.languages"),
            options: skills[0].items.map((language) => ({
                label: language.name[locale],
                value: language.id,
            })),
        },
        {
            label: t("fillters.libraries-frameworks"),
            options: skills[1].items.map((language) => ({
                label: language.name[locale],
                value: language.id,
            })),
        },
        {
            label: t("fillters.databases"),
            options: skills[2].items.map((language) => ({
                label: language.name[locale],
                value: language.id,
            })),
        },
        {
            label: t("fillters.cms"),
            options: skills[3].items.map((language) => ({
                label: language.name[locale],
                value: language.id,
            })),
        },
        {
            label: t("fillters.tools"),
            options: skills[4].items.map((language) => ({
                label: language.name[locale],
                value: language.id,
            })),
        },
    ];

    const filtersSelect = useMemo(() => {
        return fillters.map((id) => {
            const allSkillsItems = (
                skills.reduce(
                    //@ts-expect-error
                    (acc, skill) => [...acc, ...skill.items],
                    [],
                ) as any as (typeof skills)[0]["items"]
            ).map((item) => ({
                id: item.id,
                ...item.name,
            }));

            const filter = [...mappedCategories, ...allSkillsItems].find(
                (category) => category.id === id,
            );

            return {
                label: filter![locale],
                value: id,
            };
        });
    }, [fillters, locale]);

    return (
        <div className="space-y-4 rounded-md border bg-background/60 p-4 md:space-y-8">
            <div className="flex items-center gap-2 md:gap-4">
                <SearchInput
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t("search")}
                    className="bg-background"
                />

                <RSelect
                    options={options}
                    isMulti
                    placeholder={t("fillters.categories")}
                    value={filtersSelect}
                    onChange={(newValue, actionMeta) =>
                        setFillters(
                            (newValue as Option[]).map(
                                (option) => option.value,
                            ),
                        )
                    }
                    className="w-1/2"
                />
            </div>

            <div className="relative z-40 grid grid-cols-1 gap-4 will-change-auto md:grid-cols-2 lg:grid-cols-3">
                {debouncedResults.map((project) => (
                    <ProjectCard
                        className="group relative overflow-hidden rounded-md border transition duration-500 hover:-translate-y-1 hover:border-primary"
                        locale={locale}
                        project={project}
                        key={project.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectsPageList;
