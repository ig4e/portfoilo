"use client";
import React, { useMemo } from "react";
import type { MotionValue } from "framer-motion";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { Link } from "@/lib/navigation";
import type { Project } from "@/config/projects";
import { projects } from "@/config/projects";
import Typography from "./typography";
import type { Locale } from "@/config/i18n";
import { useLocale, useTranslations } from "next-intl";
import { Badge } from "./ui/badge";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import useViewport from "@/hooks/use-viewport";

export default function ProjectParallax() {
    const locale = useLocale() as Locale;
    const { isMobile } = useViewport();

    const projectRows = useMemo(() => {
        return [
            projects.slice(0, 5),
            Array(2).fill(projects.slice(5, 15)).flat(),
        ] as Project[][];
    }, []);

    const ref = React.useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(
            scrollYProgress,
            [0, 1],
            isMobile ? [-1000, 1000] : [0, 500],
        ),
        springConfig,
    );

    const translateXReverse = useSpring(
        useTransform(
            scrollYProgress,
            [0, 1],
            isMobile ? [1000, -1000] : [0, -500],
        ),
        springConfig,
    );

    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig,
    );

    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.4, 1]),
        springConfig,
    );

    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig,
    );

    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], isMobile ? [-500, 100] : [-550, 200]),
        springConfig,
    );

    return (
        <div
            ref={ref}
            className="dark relative flex flex-col overflow-hidden bg-black py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]"
            style={{ height: `${projectRows.length * (isMobile ? 70 : 95)}vh` }}
        >
            <Header />

            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
            >
                {projectRows.map((row, index) => {
                    const isOdd = index % 2 === 0;
                    return (
                        <motion.div
                            key={"project-row" + index}
                            className={cn(
                                "mb-20 flex gap-10 space-x-reverse md:gap-20",
                                {
                                    "flex-row-reverse": isOdd,
                                },
                            )}
                        >
                            {row.map((project, projectIndex) => (
                                <AnimationProjectCard
                                    project={project}
                                    translate={
                                        isOdd ? translateXReverse : translateX
                                    }
                                    key={project.id + projectIndex}
                                    locale={locale}
                                />
                            ))}
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}

export function Header() {
    const t = useTranslations("project");

    return (
        <div className="container relative inset-x-0 z-40 px-4 py-20 md:py-40">
            <Typography
                element="h2"
                className="whitespace-nowrap text-[3rem] font-semibold leading-tight sm:text-6xl md:leading-normal"
            >
                {t("my-projects")}
            </Typography>
            <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
                {t("description")}
            </p>
        </div>
    );
}

export function AnimationProjectCard({
    project,
    translate,
    locale,
}: {
    project: Project;
    translate: MotionValue<number>;
    locale: Locale;
}) {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -10,
            }}
            key={project.id}
            className="group/product relative w-[25rem] flex-shrink-0 md:w-[35rem]"
        >
            <ProjectCard locale={locale} project={project} />
        </motion.div>
    );
}

export function ProjectCard({
    project,
    locale,
    className,
}: {
    project: Project;
    locale: Locale;
    className?: string;
}) {
    return (
        <Link
            href={`/projects/${project.id}`}
            className={cn("relative", className)}
        >
            <Image
                width={500}
                src={project.image}
                className="h-full w-full rounded-lg object-cover"
                alt={project.name[locale]}
            />

            <div className="absolute inset-0 z-10 flex h-full w-full items-end justify-between gap-2 bg-gradient-to-b from-transparent to-background p-4">
                <div className="flex flex-col items-start gap-2">
                    <Typography element="h4" as="h4">
                        {project.name[locale]}
                    </Typography>

                    <Typography
                        element="p"
                        as="mutedText"
                        className="line-clamp-2"
                    >
                        {project.shortDescription[locale]}
                    </Typography>

                    <div className="flex flex-wrap items-center gap-2">
                        {project.stack.slice(0, 4).map(({ id, name }) => (
                            <Badge key={id} variant={"transparent"}>
                                {name[locale]}
                            </Badge>
                        ))}
                    </div>
                </div>

                <ExternalLinkIcon className="h-5 w-5 min-w-5 opacity-100 transition duration-300 group-hover:opacity-100 md:opacity-0" />
            </div>
        </Link>
    );
}
