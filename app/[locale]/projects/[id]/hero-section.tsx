"use client";

import Typography from "@/components/typography";
import { Noise } from "@/components/ui/images";
import { Locale } from "@/config/i18n";
import { projects } from "@/config/projects";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useRef } from "react";

function HeroSection({ projectId }: { projectId: string }) {
    const project = projects.find((p) => p.id === projectId)!;
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef });
    const translate = useTransform(scrollYProgress, [0, 1], [25, 0]);
    const locale = useLocale() as Locale;

    return (
        <div
            ref={heroRef}
            className="container flex min-h-[50vh] flex-col items-center justify-center gap-12 overflow-hidden text-center md:mb-12 md:min-h-screen"
        >
            <div className="overflow-hidden">
                <div
                    id="project-gradient"
                    className="absolute inset-x-0 top-0 -z-[10] min-h-[40vh] animate-cardlight rounded-b-full bg-gradient-to-b from-rose-900 opacity-80 blur-3xl md:min-h-[60vh]"
                    style={{
                        //@ts-expect-error
                        "--tw-gradient-from": project.color,
                    }}
                />
                <div
                    className="top-18 absolute inset-0 -z-[5] mix-blend-overlay"
                    style={{
                        backgroundRepeat: "repeat",
                        backgroundImage: `url('${Noise.src}')`,
                        opacity: 0.1,
                    }}
                />
            </div>

            <motion.div
                className="flex flex-col items-center gap-12"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.2,
                }}
            >
                <div className="flex flex-col items-center gap-4 md:mt-8">
                    <div className="w-fit rounded-full border bg-gradient-to-t from-secondary/20 to-secondary/80 px-4 py-1 text-sm text-secondary-foreground">
                        {project.createdAt}
                    </div>

                    <Typography
                        element="h1"
                        className={cn(
                            "container text-balance text-center text-[3rem] font-semibold leading-tight sm:text-6xl md:leading-normal lg:text-7xl xl:text-8xl mb-6",
                            {
                                "text-5xl leading-relaxed sm:text-7xl lg:text-8xl xl:text-9xl":
                                    locale === "ar-EG",
                            },
                        )}
                    >
                        {project.name[locale]}
                    </Typography>

                    <Typography
                        element="p"
                        as="h3"
                        className="max-w-6xl text-balance font-normal text-muted-foreground"
                    >
                        {project.shortDescription[locale]}
                    </Typography>
                </div>

                <div className="mt-4 flex w-full items-center gap-4 [perspective:2000px;]">
                    <motion.div
                        style={{
                            transformStyle: "preserve-3d",
                            rotateX: translate,
                        }}
                        transition={{ type: "spring", bounce: 0.4 }}
                    >
                        <Image
                            priority
                            src={project.image}
                            className="w-full object-cover transition-all"
                            alt={project.name[locale]}
                        ></Image>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default HeroSection;
