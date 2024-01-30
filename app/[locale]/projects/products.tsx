"use client";
import { ProjectList } from "@/components/projects-section";
import Typography from "@/components/typography";
import { Option, RSelect } from "@/components/ui/r-select";
import { Locale } from "@/config/i18n";
import { mappedCategories, projects } from "@/config/projects";
import { skills } from "@/config/skills";
import { useDebounce } from "@uidotdev/usehooks";
import Fuse from "fuse.js";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
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
    const [query, setQuery] = useState<string>();
    const [fillters, setFillters] = useState<string[]>([]);

    const results = useFilterProjects({
        fuse,
        query: { value: query },
        store: projects,
        filtersIDs: fillters,
    });

    const debouncedResults = useDebounce(results, 250);

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
        <>
            <div className="flex items-center gap-4">
                <div className="flex h-10 w-full min-w-16 items-center rounded-md border px-3 ring-offset-background transition focus-within:bg-secondary focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 hover:bg-secondary active:bg-secondary">
                    <Search className="me-2 h-4 w-4 shrink-0 opacity-50" />
                    <input
                        className="flex w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={t("search")}
                    />
                </div>

                <RSelect
                    options={options}
                    isMulti
                    placeholder={t("fillters.categories")}
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
                <ProjectList
                    projects={debouncedResults}
                    className="z-0"
                    cardProps={{
                        transition: { type: "spring" },
                    }}
                />
            </div>
        </>
    );
}

export default ProjectsPageList;
