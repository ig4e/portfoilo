"use client";
import { ProjectList } from "@/components/projects-section";
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

const fuse = new Fuse(projects, {
    keys: [
        "name.ar-EG",
        "name.en-US",
        "shortDescription.ar-EG",
        "shortDescription.en-US",
        "description.ar-EG",
        "description.en-US",
    ],
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
            label: t("fillters.tools"),
            options: skills[3].items.map((language) => ({
                label: language.name[locale],
                value: language.id,
            })),
        },
    ];

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
                    value={fillters.map((id) => ({
                        label: mappedCategories.find(
                            (category) => category.id === id,
                        )![locale],
                        value: id,
                    }))}
                    onChange={(newValue, actionMeta) =>
                        setFillters(
                            (newValue as Option[]).map(
                                (option) => option.value,
                            ),
                        )
                    }
                    className="w-1/2"
                ></RSelect>
            </div>

            <div>
                <ProjectList layoutRoot projects={debouncedResults} />
            </div>
        </div>
    );
}

export default ProjectsPageList;
