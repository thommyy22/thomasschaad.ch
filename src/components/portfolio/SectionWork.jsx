import React from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import LiveWebsiteBox from './LiveWebsiteBox';
import { useLang, translations } from '@/lib/i18n';
import { projects } from '@/lib/projects';

const liveSites = [
  {
    title: 'Bible Explorer',
    url: 'https://thommyy22.github.io/bible-visualizer/',
    image: '/media/8c56e9479_Slide-127.jpg',
  },
  {
    title: 'St. Gallen in Daten',
    url: 'https://thommyy22.github.io/St.Gallen-in-Daten/',
    image: '/media/4a19cf65c_Slide-128.jpg',
  },
];

export default function SectionWork() {
  const [lang] = useLang();
  const t = translations[lang];
  return (
    <section id="work" className="relative py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeader number={t.sections.work.number} label={t.sections.work.label} title={t.sections.work.title} />
      </div>

      <div className="px-6 md:px-10 mt-14 md:mt-20 space-y-16">
        {liveSites.map((s) => (
          <LiveWebsiteBox key={s.url} site={s} label={t.project.live} />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 mt-20 md:mt-28">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px w-8 bg-border" />
          <span className="text-[11px] font-mono tracking-[0.2em] text-muted-foreground uppercase">{t.project.galleryLabel}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full border-b border-r border-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}