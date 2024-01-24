import HeroScrollText from "@/components/hero-scroll-text";
import Typography from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Noise } from "@/components/ui/images";
import { locales } from "@/config/i18n";
import { skills } from "@/config/skills";
import { cn } from "@/lib/utils";
import {
    NextIntlClientProvider,
    useMessages,
    useTranslations,
} from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({
    params: { locale },
}: Readonly<{
    params: { locale: (typeof locales)[number] };
}>) {
    unstable_setRequestLocale(locale);
    const t = useTranslations("index");

    return (
        <main className="">
            <div className="mb-12">
                <section className="flex min-h-[50vh] flex-col items-center justify-center gap-12 overflow-hidden text-center md:min-h-screen">
                    <div className="overflow-hidden">
                        <div className="absolute inset-x-0 top-0 -z-[10] min-h-[40vh] rounded-b-full bg-gradient-to-b from-rose-500 to-red-100 opacity-80 blur-3xl dark:from-rose-900 md:min-h-[60vh]"></div>
                        <div
                            className="top-18 absolute inset-0 -z-[5] mix-blend-overlay"
                            style={{
                                backgroundRepeat: "repeat",
                                backgroundImage: `url('${Noise.src}')`,
                                opacity: 0.1,
                            }}
                        />
                    </div>

                    <div className="container flex flex-col items-center gap-12">
                        <Typography
                            element="h1"
                            className={cn(
                                "container text-balance text-center text-[3rem] font-semibold leading-tight sm:text-6xl  md:leading-normal lg:text-7xl xl:text-8xl",
                                {
                                    "text-5xl leading-relaxed sm:text-7xl lg:text-8xl xl:text-9xl":
                                        locale === "ar-EG",
                                },
                            )}
                        >
                            {t.rich("hero.title.text", {
                                highlight: (chunks) => (
                                    <span className="bg-gradient-to-tr from-primary to-[#db2777] bg-clip-text text-transparent">
                                        {chunks}
                                    </span>
                                ),
                            })}
                        </Typography>

                        <div className="mt-4 flex items-center gap-4">
                            <Button size={"xl"}>{t("hero.my-projects")}</Button>
                            <Button size={"xl"} variant={"secondary"}>
                                {t("hero.resume")}
                            </Button>
                        </div>

                        <Typography
                            element="span"
                            as="mutedText"
                            className="place-self-end"
                        >
                            {t.rich("hero.title.highlight-meaning", {
                                highlight: (chunks) => (
                                    <span className="font-bold">{chunks}</span>
                                ),
                            })}
                        </Typography>
                    </div>

                    <HeroScrollText></HeroScrollText>
                </section>
            </div>

            <section className="dark bg-black px-4 py-12 text-white" id="about">
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

            <section
                className="dark bg-black px-4 py-12 text-white"
                id="skills"
            >
                <div className="mx-auto flex min-h-[40vh] max-w-6xl flex-col gap-4 overflow-x-hidden overflow-y-clip">
                    <div className="mx-auto max-w-3xl w-full">
                        <div className="mb-6 flex items-center gap-4 ">
                            <Icons.logo className="h-9 w-9" />
                            <Typography element="h2" as="h2">
                                {t("skills.section-name")}
                            </Typography>
                        </div>
                    </div>

                    {skills.map((skillSection) => {
                        return (
                            <div key={skillSection.type} className="space-y-4">
                                <Typography element="h3" as="h3">
                                    {t(`skills.${skillSection.type}`)}
                                </Typography>

                                <div className="grid gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                                    {skillSection.items.map((skill) => {
                                        return (
                                            <div
                                                key={skill.name}
                                                className="relative flex h-full w-full flex-row-reverse items-center gap-4 overflow-hidden rounded-md border p-4 md:aspect-square md:flex-col"
                                            >
                                                <div
                                                    className="-z-5 absolute inset-10 h-full w-full opacity-25 blur-3xl md:end-[50%]"
                                                    style={{
                                                        backgroundColor:
                                                            skill.color,
                                                    }}
                                                ></div>

                                                <skill.icon className="z-10 flex h-16 w-auto min-w-[4rem] items-center justify-center place-self-center justify-self-center md:mt-auto"></skill.icon>

                                                <div className="z-10 me-auto mt-auto space-y-1">
                                                    <Typography
                                                        element="h4"
                                                        as="h4"
                                                    >
                                                        {skill.name}
                                                    </Typography>
                                                    <Typography
                                                        element="p"
                                                        as="mutedText"
                                                        className=""
                                                    >
                                                        {skill.description}
                                                    </Typography>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
