"use client";

import HeroScrollText from "@/components/hero-scroll-text";
import Typography from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Noise } from "@/components/ui/images";
import { Locale } from "@/config/i18n";
import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

function HeroSection() {
    const t = useTranslations("index");
    const locale = useLocale() as Locale;

    return (
        <div className="mb-12" id="hero">
            <section className="flex min-h-[50vh] flex-col items-center justify-center gap-12 overflow-hidden text-center md:min-h-screen">
                <div className="overflow-hidden">
                    <div className="absolute inset-x-0 top-0 -z-[10] min-h-[40vh] animate-cardlight rounded-b-full bg-gradient-to-b from-rose-500 to-red-100 opacity-80 blur-3xl dark:from-rose-900 md:min-h-[60vh]" />
                    <div
                        className="top-18 absolute inset-0 -z-[1] mix-blend-overlay"
                        style={{
                            backgroundRepeat: "repeat",
                            backgroundImage: `url('${Noise.src}')`,
                            opacity: 0.1,
                        }}
                    />
                </div>

                <motion.div
                    className="container flex flex-col items-center gap-12"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.2,
                    }}
                >
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
                        <Link href="/projects">
                            <Button size={"xl"}>{t("hero.my-projects")}</Button>
                        </Link>
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
                </motion.div>

                <HeroScrollText />
            </section>
        </div>
    );
}

export default HeroSection;
