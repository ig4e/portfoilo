"use client";

import Typography from "@/components/typography";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Noise } from "@/components/ui/images";
import type { Locale } from "@/config/i18n";
import { projects } from "@/config/projects";
import { cn, hexToRgb } from "@/lib/utils";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useRef } from "react";

function HeroSection({ projectId }: { projectId: string }) {
    const project = projects.find((p) => p.id === projectId);
    const heroRef = useRef(null);
    const locale = useLocale() as Locale;

    const { scrollYProgress } = useScroll({ target: heroRef });

    const translateSpring = useSpring(scrollYProgress, {
        bounce: 0.1,
        damping: 20,
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const translate = useTransform(translateSpring, [0, 1], [35, 0]);

    if (!project) return null;

    return (
        <div
            ref={heroRef}
            className=" flex min-h-[50vh] flex-col items-center justify-center gap-12 overflow-hidden pb-6 text-center md:min-h-screen md:pb-12"
        >
            <div className="overflow-hidden">
                <div
                    id="project-gradient"
                    className="absolute inset-x-0 top-0 -z-[10] min-h-[40vh] animate-cardlight rounded-b-full bg-gradient-to-b from-rose-900 opacity-80 blur-3xl md:min-h-[60vh]"
                    style={{
                        //@ts-expect-error -- TODO
                        "--tw-gradient-to": project.color,
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
                className="relative flex flex-col items-center gap-12"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.2,
                }}
            >
                <div className="container flex flex-col items-center gap-4 md:mt-8">
                    <div className="w-fit rounded-full border bg-gradient-to-t from-secondary/20 to-secondary/80 px-4 py-1 text-sm text-secondary-foreground">
                        {project.createdAt}
                    </div>

                    <Typography
                        element="h1"
                        className={cn(
                            "container text-balance text-center text-[3rem] font-semibold leading-tight sm:text-6xl md:mb-6 md:leading-normal lg:text-7xl xl:text-8xl",
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

                <div className="mt-4 hidden w-screen items-center gap-4 [perspective:2000px;] md:flex">
                    <AspectRatio ratio={16 / 7.5} className="container w-full">
                        <motion.div
                            style={{
                                transformStyle: "preserve-3d",
                                rotateX: translate,
                            }}
                            transition={{
                                type: "spring",
                                bounce: 0.4,
                                stiffness: 400,
                            }}
                            className="h-full w-full overflow-hidden rounded-[5vh] p-0.5"
                        >
                            <Image
                                priority
                                src={project.image}
                                className="h-full w-full rounded-[5vh] bg-accent object-fill"
                                width={1440}
                                alt={project.name[locale]}
                                placeholder="blur"
                            />
                        </motion.div>
                    </AspectRatio>
                </div>

                <div className="relative flex min-h-96 w-full min-w-[90vw] md:hidden">
                    <div className="absolute inset-0 z-0 !w-full !min-w-[100vw] ps-[1rem]">
                        <Image
                            priority
                            src={project.image}
                            className="!h-full !w-full rounded-md !object-cover object-left transition-all"
                            alt={project.name[locale]}
                            placeholder="blur"
                        />
                    </div>
                </div>

                <div
                    style={{
                        WebkitFilter: "blur(10px)",
                        background:
                            "radial-gradient(50% 63.6% at 50% 72.5%,var(--gradient-color, #ffbb00) 0%,rgba(0,0,0,0) 100%)",
                        bottom: "-70px",
                        filter: "blur(10px)",
                        flex: "none",
                        height: "267px",
                        maxWidth: "1400px",
                        opacity: ".4",
                        overflow: "hidden",
                        position: "absolute",
                        width: "100%",
                        zIndex: "1",
                        //@ts-expect-error -- TODO
                        "--gradient-color": project.color,
                    }}
                    about="Gradient Top"
                />

                <div
                    style={{
                        background: `radial-gradient(50% 75% at 50% 100%,rgba(${hexToRgb(project.color, true)},.1) 0%,rgba(${hexToRgb(project.color, true)},0) 100%)`,
                        flex: "none",
                        left: "calc(50.00000000000002% - 160% / 2)",
                        overflow: "hidden",
                        position: "absolute",
                        top: "calc(34.00000000000002% - 132.125% / 2)",
                        width: "160%",
                        zIndex: "1",
                        bottom: "-70px",
                    }}
                />
            </motion.div>
        </div>
    );
}

export default HeroSection;
