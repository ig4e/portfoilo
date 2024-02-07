import Typography from "@/components/typography";
import { Locale } from "@/config/i18n";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import ProjectsPageList from "./projects";
import { unstable_setRequestLocale } from "next-intl/server";
import GenericHero from "@/components/generic-hero";

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

            <ProjectsPageList params={{ locale }}></ProjectsPageList>
        </div>
    );
}

export default ProjectsPage;
