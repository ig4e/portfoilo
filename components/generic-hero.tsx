"use client";

import Typography from "@/components/typography";
import { Noise } from "@/components/ui/images";
import { Locale } from "@/config/i18n";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

export interface GenericHeroProps {
    title: string;
    description: string;
}

function GenericHero({ title, description }: GenericHeroProps) {
    const locale = useLocale() as Locale;

    return (
        <div className="mb-12">
            <section className="flex flex-col items-center justify-center gap-12 overflow-hidden text-center">
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
                    <div className="flex flex-col items-center gap-4 md:mt-8">
                        <Typography
                            element="h1"
                            className={cn(
                                "container mb-6 text-balance text-center text-[3rem] font-semibold leading-tight sm:text-6xl md:leading-normal lg:text-7xl xl:text-8xl",
                                {
                                    "text-5xl leading-relaxed sm:text-7xl lg:text-8xl xl:text-9xl":
                                        locale === "ar-EG",
                                },
                            )}
                        >
                            {title}
                        </Typography>

                        <Typography
                            element="p"
                            as="h3"
                            className="max-w-6xl text-balance font-normal text-muted-foreground"
                        >
                            {description}
                        </Typography>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}

export default GenericHero;