"use client";
import React, { useEffect, useRef } from "react";
import { Icons } from "./ui/icons";
import Typography from "./typography";
import { skills } from "@/config/skills";
import { useLocale, useTranslations } from "next-intl";
import { hexToRgb } from "@/lib/utils";
import { Locale } from "@/config/i18n";
import { Noise } from "./ui/images";

function SkillsSection() {
    const t = useTranslations("index");

    return (
        <section className="dark bg-black px-4 py-12 text-white" id="skills">
            <div
                className="container flex min-h-[40vh]  flex-col gap-4 overflow-x-hidden overflow-y-clip"
                id="skill-cards"
            >
                <div className="w-full ">
                    <div className="mb-6 flex items-center gap-4 ">
                        <Icons.logo className="h-9 w-9" />
                        <Typography element="h2" as="h2">
                            {t("skills.section-name")}
                        </Typography>
                    </div>
                </div>

                {skills.map((skillSection) => (
                    <SkillsTypeSection
                        key={skillSection.type}
                        skillSection={skillSection}
                    />
                ))}
            </div>
        </section>
    );
}

function SkillsTypeSection({
    skillSection,
}: {
    skillSection: (typeof skills)[number];
}) {
    const t = useTranslations("index");
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const { current } = sectionRef;

        if (current) current.addEventListener("mousemove", onMouseMove);

        function onMouseMove(e: MouseEvent) {
            if (!current) return;

            for (const card of document.getElementsByClassName("card")) {
                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                (card as HTMLDivElement).style.setProperty("--x", `${x}px`);
                (card as HTMLDivElement).style.setProperty("--y", `${y}px`);
            }
        }

        return () => {
            if (current) current.removeEventListener("mousemove", onMouseMove);
        };
    }, [sectionRef]);

    return (
        <div key={skillSection.type} className="space-y-4" ref={sectionRef}>
            <Typography element="h3" as="h3">
                {t(`skills.${skillSection.type}`)}
            </Typography>

            <div className="group/section grid gap-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {skillSection.items.map((skill) => (
                    <SkillCard key={skill.name["en-US"]} item={skill} />
                ))}
            </div>
        </div>
    );
}

function SkillCard({
    item,
}: {
    item: (typeof skills)[number]["items"][number];
}) {
    const locale = useLocale() as Locale;
    const itemRgbColor = hexToRgb(item.color);

    return (
        <div className="card group relative cursor-pointer overflow-hidden rounded-md bg-secondary p-[2px]">
            <div
                about="card-blur"
                className="absolute inset-0 z-[3] h-full w-full opacity-0 blur-xl transition-all duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(var(--circle-size, 700px) circle at var(--x, 100px) var(--y, 100px), rgba(${itemRgbColor.r}, ${itemRgbColor.g}, ${itemRgbColor.b}, 0.25), transparent 40%)`,
                }}
            ></div>

            <div
                about="card-border"
                className="absolute inset-0 z-[1] h-full w-full opacity-0 transition-all duration-300 group-hover/section:opacity-100"
                style={{
                    background: `radial-gradient(var(--circle-size,250px) circle at var(--x, 100px) var(--y, 100px), rgba(${itemRgbColor.r}, ${itemRgbColor.g}, ${itemRgbColor.b}, 0.4), transparent 40%)`,
                }}
            ></div>

            <div
                className="top-18 absolute inset-0 z-[4] mix-blend-overlay"
                style={{
                    backgroundRepeat: "repeat",
                    backgroundImage: `url('${Noise.src}')`,
                    opacity: 0.1,
                }}
            />

            <div
                className="absolute inset-10 z-[3] h-full w-full opacity-25 blur-3xl md:bottom-0 md:left-0 md:h-1/2 md:opacity-15"
                style={{
                    backgroundColor: item.color,
                }}
            ></div>

            <div className="relative z-[2] flex h-full w-full flex-row-reverse items-center gap-4 rounded-[inherit] bg-black p-4 md:aspect-square md:flex-col">
                <item.icon className="z-10 flex h-16 w-auto min-w-[4rem] items-center justify-center place-self-center justify-self-center md:mt-auto"></item.icon>

                <div className="me-auto mt-auto space-y-1">
                    <Typography element="h4" as="h4">
                        {item.name[locale]}
                    </Typography>
                    <Typography element="p" as="mutedText" className="">
                        {item.description[locale]}
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default SkillsSection;
