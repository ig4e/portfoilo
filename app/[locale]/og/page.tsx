"use client";

import HeroScrollText from "@/components/hero-scroll-text";

import Typography from "@/components/typography";
import { Noise } from "@/components/ui/images";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

function Og() {
    const t = useTranslations("index");

    return (
        <div className="mb-12">
            <section className="flex min-h-[78vh] flex-col items-center justify-center gap-12 overflow-hidden text-center">
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
                    <div className="space-y-8">
                        <Typography
                            element="h1"
                            className={cn(
                                "container text-balance text-center text-[3rem] font-semibold leading-tight sm:text-6xl  md:leading-normal lg:text-7xl xl:text-8xl",
                            )}
                        >
                            <span className="bg-gradient-to-tr from-primary to-[#db2777] bg-clip-text text-transparent">
                                Ahmed
                            </span>{" "}
                            Mohamed
                        </Typography>

                        <Typography
                            element="h4"
                            as="h2"
                            className="text-muted-foreground"
                        >
                            Fullstack web engineer | UI/UX Designer
                        </Typography>
                    </div>

                    <Typography
                        element="span"
                        as="mutedText"
                        className="place-self-end"
                    />
                </motion.div>

                <HeroScrollText />
            </section>
        </div>
    );
}

export default Og;
