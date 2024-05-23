'use client';

import { SkillsTypeSection } from '@/components/skills-section';
import { projects } from '@/config/projects';

export function MadeWithSection({ projectId }: { projectId: string }) {
  const project = projects.find((p) => p.id === projectId);

  return (
    <section className=" bg-black py-12 text-white">
      <div className="container">
        <SkillsTypeSection
          skillSection={{
            //@ts-expect-error -- TODO fix the type
            items: project.stack,
            //@ts-expect-error -- TODO fix the type
            type: 'made-with',
          }}
        />
      </div>
    </section>
  );
}
