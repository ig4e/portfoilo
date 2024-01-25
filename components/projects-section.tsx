"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Typography from "./typography";
import { useLocale, useTranslations } from "next-intl";
import ShareMe from "@/public/assets/projects/shareme.png";
import Image from "next/image";
import useViewport from "@/hooks/use-viewport";
import { projects } from "@/config/projects";
import { Locale } from "@/config/i18n";
import { Link } from "@/lib/navigation";
import { ExternalLinkIcon } from "lucide-react";

function ProjectsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const projectsRef = useRef(null);
    const locale = useLocale() as Locale;

    const t = useTranslations("index");
    const { scrollYProgress } = useScroll({});
    const { scrollYProgress: projectsScrollYProgress } = useScroll({
        target: projectsRef,
    });

    const { isMobile } = useViewport();

    const opacityDimensions = () => {
        return isMobile ? [0.7, 1] : [0, 1];
    };

    const titleScale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

    const opacity = useTransform(
        projectsScrollYProgress,
        [1.5, 0],
        opacityDimensions(),
    );

    const scale = useTransform(projectsScrollYProgress, [0, 1], [1.05, 1]);

    const translate = useTransform(projectsScrollYProgress, [1, 0], [0, -100]);

    return (
        <section
            ref={sectionRef}
            className="dark bg-black py-12 text-white "
            id="my-projects"
        >
            <motion.div
                className="container flex min-h-[40vh] flex-col gap-4"
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
                style={{}}
            >
                <div className="relative min-h-[800px] w-full ">
                    <motion.div className="sticky top-[50%] z-30  flex justify-center">
                        <div className="flex w-max items-center gap-4 overflow-hidden rounded-[2.5rem] bg-black/60 px-12 py-8 backdrop-blur-lg md:rounded-[3.5rem]">
                            <Typography
                                element="h2"
                                className="whitespace-nowrap text-[3rem] font-semibold leading-tight sm:text-6xl md:leading-normal"
                            >
                                {t("my-projects.section-name")}
                            </Typography>
                        </div>
                    </motion.div>

                    <div ref={projectsRef}></div>

                    <motion.div
                        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                        style={{
                            opacity: opacity,
                            translateY: translate,
                            scale: scale,
                        }}
                    >
                        {projects.map((project) => {
                            return (
                                <Link
                                    href={`/projects/${project.id}`}
                                    key={project.id}
                                    className="group relative rounded-md transition duration-500 hover:-translate-y-2"
                                >
                                    <Image
                                        src={project.image}
                                        className="rounded-md object-cover"
                                        alt={project.name[locale]}
                                    ></Image>

                                    <div className="absolute inset-0 z-10 flex h-full w-full items-end justify-between gap-2 bg-gradient-to-b from-transparent to-black px-4">
                                        <div className="flex flex-col items-start gap-2">
                                            <Typography element="h4" as="h4">
                                                {project.name[locale]}
                                            </Typography>
                                            <Typography
                                                element="p"
                                                as="mutedText"
                                                className=""
                                            >
                                                {project.description[locale]}
                                            </Typography>
                                        </div>

                                        <ExternalLinkIcon className="h-5 w-5 opacity-100 transition group-hover:opacity-100 md:opacity-100"></ExternalLinkIcon>
                                    </div>
                                </Link>
                            );
                        })}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

export default ProjectsSection;
