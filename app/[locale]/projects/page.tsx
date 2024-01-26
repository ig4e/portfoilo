"use client";
import GenericHero from "@/components/generic-hero";
import Typography from "@/components/typography";
import { Input } from "@/components/ui/input";
import { projects } from "@/config/projects";
import { useFuse } from "@/hooks/use-fuse";
import Fuse, { FuseSearchOptions } from "fuse.js";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useMemo, useState } from "react";

const fuse = new Fuse(projects, {
    keys: [
        "name.ar-EG",
        "name.en-US",
        "shortDescription.ar-EG",
        "shortDescription.en-US",
        "description.ar-EG",
        "description.en-US",
        "workArea.ar-EG",
        "workArea.en-US",
    ],
});

function ProjectsPage() {
    const t = useTranslations("project");

    const [query, setQuery] = useState<string>();

    const results = useFuse({
        fuse,
        query: { value: query },
        store: projects,
    });

    console.log(results);

    return (
        <div className="container my-4 space-y-8">
            <div className="flex flex-col gap-4 md:mt-8">
                <Typography element="h1" as="h1">
                    {t("my-projects")}
                </Typography>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center rounded-md border px-3 transition focus-within:bg-secondary hover:bg-secondary active:bg-secondary">
                    <Search className="me-2 h-4 w-4 shrink-0 opacity-50" />
                    <input
                        className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search..."
                    />
                </div>

                
            </div>
        </div>
    );
}

export default ProjectsPage;
