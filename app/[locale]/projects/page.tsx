"use client";
import GenericHero from "@/components/generic-hero";
import { Project, ProjectList } from "@/components/projects-section";
import Typography from "@/components/typography";
import { Input } from "@/components/ui/input";
import { Option, RSelect } from "@/components/ui/r-select";
import { Locale } from "@/config/i18n";
import { mappedCategories, projects } from "@/config/projects";
import { useFuse } from "@/hooks/use-fuse";
import Fuse, { FuseSearchOptions } from "fuse.js";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useMemo, useState } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { languages, skills } from "@/config/skills";
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

function ProjectsPage({ params: { locale } }: { params: { locale: Locale } }) {
    const t = useTranslations("project");
    const [query, setQuery] = useState<string>();
    const [fillters, setFillters] = useState<string[]>([]);

    const results = useFilterProjects({
        fuse,
        query: { value: query },
        store: projects,
        filtersIDs: fillters,
    });

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
        <div className="container my-4 space-y-8">
            <div className="flex flex-col gap-4 md:mt-8">
                <Typography element="h1" as="h1">
                    {t("my-projects")}
                </Typography>
            </div>

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
                <ProjectList projects={results} className="z-0" />
            </div>
        </div>
    );
}

export default ProjectsPage;
