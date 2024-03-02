import HeroSection from "@/components/hero-section";
import Typography from "@/components/typography";
import { Icons } from "@/components/ui/icons";
import { Locale } from "@/config/i18n";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";

const ProjectParallax = dynamic(() => import("@/components/project-parallax"), {
    ssr: true,
});

const SkillsSection = dynamic(() => import("@/components/skills-section"), {
    ssr: false,
});

export default function Home({
    params: { locale },
}: Readonly<{
    params: { locale: Locale };
}>) {
    unstable_setRequestLocale(locale);
    const t = useTranslations("index");

    return (
        <main>
            <HeroSection />

            <section
                className="scroll-m t-20 dark bg-black px-4 py-12 text-white"
                id="about"
            >
                <div className="mx-auto flex min-h-[40vh] max-w-3xl flex-col gap-4 overflow-x-hidden overflow-y-clip">
                    <div className="mb-6 flex items-center gap-4">
                        <Icons.logo className="h-9 w-9" />
                        <Typography element="h2" as="h2">
                            {t("about-me.section-name")}
                        </Typography>
                    </div>

                    <div>
                        <Typography element="h3" as="h3" className="">
                            {t("about-me.name")}
                        </Typography>

                        <Typography
                            element="h4"
                            as="h6"
                            className="text-muted-foreground"
                        >
                            {t("about-me.title")}
                        </Typography>
                    </div>

                    <div className="space-y-4">
                        <Typography element="p" className="leading-relaxed">
                            {t("about-me.my-start")}
                        </Typography>

                        <Typography element="p" className="leading-relaxed">
                            {t("about-me.my-foucs")}
                        </Typography>

                        <Typography element="p" className="leading-relaxed">
                            {t("about-me.my-life")}
                        </Typography>
                    </div>
                </div>
            </section>

            <ProjectParallax />

            <SkillsSection />
        </main>
    );
}
