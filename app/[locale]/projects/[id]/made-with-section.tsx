"use client";

import { SkillsTypeSection } from "@/components/skills-section";
import { projects } from "@/config/projects";

function MadeWithSection({ projectId }: { projectId: string }) {
    const project = projects.find((p) => p.id === projectId);

    return (
        <section className=" bg-black py-12 text-white">
            <div className="container">
                <SkillsTypeSection
                    skillSection={{
                        //@ts-expect-error -- TODO
                        items: project.stack,
                        //@ts-expect-error -- TODO
                        type: "made-with",
                    }}
                />
            </div>
        </section>
    );
}

export default MadeWithSection;
