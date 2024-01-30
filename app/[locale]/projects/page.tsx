import Typography from "@/components/typography";
import { Locale } from "@/config/i18n";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import ProjectsPageList from "./products";

export const metadata: Metadata = {
    title: "Projects - Ahmed Mohamed",
};

function ProjectsPage({ params: { locale } }: { params: { locale: Locale } }) {
    const t = useTranslations("project");

    return (
        <div className="container my-4 space-y-8">
            <div className="flex flex-col gap-4 md:mt-8">
                <Typography element="h1" as="h1">
                    {t("my-projects")}
                </Typography>
            </div>

            <ProjectsPageList params={{ locale }}></ProjectsPageList>
        </div>
    );
}

export default ProjectsPage;
