import React from 'react';
import { projects } from '@/lib/projects';
import ProjectCard from './ProjectCard';

export default function MoreProjects({ current, t }) {
  const others = projects.filter((p) => p.slug !== current.slug);

  return (
    <section className="relative py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10 mb-14 md:mb-20">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono tracking-[0.2em] text-accent">{t.sections.work.number}</span>
          <span className="h-px w-8 bg-border" />
          <span className="text-[11px] font-mono tracking-[0.2em] text-muted-foreground uppercase">
            {t.project.more}
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full border-b border-r border-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {others.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}