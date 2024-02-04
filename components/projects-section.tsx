"use client";

import { Locale } from "@/config/i18n";
import { projects } from "@/config/projects";
import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import {
    HTMLMotionProps,
    motion,
    useScroll,
    useSpring,
    useTransform
} from "framer-motion";
import { ExternalLinkIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { forwardRef, useRef } from "react";
import Typography from "./typography";
import { Badge } from "./ui/badge";

function ProjectsSection() {
    const sectionRef = useRef(null);
    const projectsRef = useRef(null);
    const projectsCompRef = useRef<HTMLDivElement>(null);
    const t = useTranslations("index");
    const { scrollYProgress } = useScroll({
        target: projectsRef,
    });

    const yScroll = useSpring(scrollYProgress, { damping: 30 });
    const opacity = useTransform(yScroll, [1, 0.5], [0, 1]);
    const translate = useTransform(yScroll, [1, 0], [1000, -500]);

    return (
        <>
            <section
                className="dark scroll-mt-20 bg-black py-12 text-white"
                id="my-projects"
            >
                <motion.div
                    ref={sectionRef}
                    className="container flex flex-col gap-4"
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                >
                    <div className="relative w-full">
                        <motion.div className="flex justify-center md:top-[50%]">
                            <div className="flex w-max items-center gap-4">
                                <Typography
                                    element="h2"
                                    className="whitespace-nowrap text-[3rem] font-semibold leading-tight sm:text-6xl md:leading-normal"
                                >
                                    {t("my-projects.section-name")}
                                </Typography>
                            </div>
                        </motion.div>

                        <div ref={projectsRef}></div>

                        <ProjectList
                            ref={projectsCompRef}
                            className="bg-black"
                            style={{
                                opacity: opacity,
                                y: translate,
                            }}
                            projects={projects}
                        />
                    </div>
                </motion.div>
            </section>
        </>
    );
}

export type Project = (typeof projects)[number];

export const ProjectList = forwardRef<
    HTMLDivElement,
    HTMLMotionProps<"div"> & {
        projects: Project[];
        cardProps?: HTMLMotionProps<"div">;
    }
>(({ projects, className, cardProps, ...props }, ref) => {
    return (
        <motion.div
            ref={ref}
            className={cn(
                "relative z-40 grid grid-cols-1 gap-8 will-change-auto md:grid-cols-2 lg:grid-cols-3",
                className,
            )}
            {...props}
        >
            {projects.map((project) => (
                <ProjectCard
                    {...cardProps}
                    key={project.id}
                    project={project}
                />
            ))}
        </motion.div>
    );
});

ProjectList.displayName = "ProjectList";

export function ProjectCard({
    project,
    ...props
}: HTMLMotionProps<"div"> & { project: Project }) {
    const locale = useLocale() as Locale;
    return (
        <div
            key={project.id}
            id={project.id}
            className="group relative overflow-hidden rounded-md border transition duration-500 hover:-translate-y-1 hover:border-primary"
        >
            <Link href={`/projects/${project.id}`}>
                <Image
                    width={500}
                    src={project.image}
                    className="h-full w-full object-cover"
                    alt={project.name[locale]}
                ></Image>

                <div className="absolute inset-0 z-10 flex h-full w-full items-end justify-between gap-2 bg-gradient-to-b from-transparent to-background p-4 ">
                    <div className="flex flex-col items-start gap-2">
                        <Typography element="h4" as="h4">
                            {project.name[locale]}
                        </Typography>

                        <Typography element="p" as="mutedText" className="">
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

                    <ExternalLinkIcon className="h-5 w-5 min-w-5 opacity-100 transition duration-300 group-hover:opacity-100 md:opacity-0"></ExternalLinkIcon>
                </div>
            </Link>
        </div>
    );
}

export default ProjectsSection;
