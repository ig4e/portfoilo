"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Typography from "./typography";
import { useTranslations } from "next-intl";
import ShareMe from "@/public/assets/projects/shareme.png";
import Image from "next/image";
import useViewport from "@/hooks/use-viewport";

function ProjectsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const projectsRef = useRef(null);

    const t = useTranslations("index");
    const { scrollYProgress } = useScroll({});
    const { scrollYProgress: projectsScrollYProgress } = useScroll({
        target: projectsRef,
    });

    const { isMobile } = useViewport();

    const opacityDimensions = () => {
        return isMobile ? [0.8, 1] : [0, 1];
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
                className=" container flex min-h-[40vh] flex-col gap-4"
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
                style={{}}
            >
                <div className="relative min-h-[800px] w-full ">
                    <motion.div
                        style={{
                            scale: titleScale,
                        }}
                        className="sticky top-[50%] z-30  flex justify-center"
                    >
                        <div className="flex w-max items-center gap-4 overflow-hidden rounded-[2.5rem] bg-black/60 px-12 py-10 backdrop-blur-lg md:rounded-[3.5rem] md:px-16 md:py-12">
                            <Typography
                                element="h2"
                                className="whitespace-nowrap text-[3rem] font-semibold leading-tight sm:text-6xl md:leading-normal lg:text-7xl"
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
                        {new Array(9).fill("").map(() => {
                            return (
                                <Image
                                    src={ShareMe}
                                    className="rounded-md object-cover transition duration-500 hover:-translate-y-2"
                                    key={crypto.randomUUID()}
                                    alt=""
                                ></Image>
                            );
                        })}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

export default ProjectsSection;
