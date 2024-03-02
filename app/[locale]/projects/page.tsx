import GenericHero from "@/components/generic-hero";
import type { Locale } from "@/config/i18n";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import ProjectsPageList from "./projects";

export const metadata: Metadata = {
    title: "Projects - Ahmed Mohamed",
};

function ProjectsPage({ params: { locale } }: { params: { locale: Locale } }) {
    unstable_setRequestLocale(locale);
    const t = useTranslations("project");

    return (
        <div className="container my-4 mb-8 space-y-8">
            <GenericHero
                title={t("my-projects")}
                description={t("description")}
            />

            <ProjectsPageList params={{ locale }} />
        </div>
    );
}

export default ProjectsPage;
