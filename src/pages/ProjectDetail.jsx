import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import GridBackground from '@/components/portfolio/GridBackground';
import ParticleField from '@/components/portfolio/ParticleField';
import AxisNav from '@/components/portfolio/AxisNav';
import Footer from '@/components/portfolio/Footer';
import ProjectHero from '@/components/portfolio/ProjectHero';
import ProjectBody from '@/components/portfolio/ProjectBody';
import ProjectGallery from '@/components/portfolio/ProjectGallery';
import ProjectVideo from '@/components/portfolio/ProjectVideo';
import SitePreview from '@/components/portfolio/SitePreview';
import MoreProjects from '@/components/portfolio/MoreProjects';
import { useLang, translations } from '@/lib/i18n';
import { projects } from '@/lib/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const [lang] = useLang();
  const t = translations[lang];
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/" replace />;

  return (
    <div className="relative min-h-screen bg-background text-foreground font-body">
      <GridBackground />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleField density={16000} />
      </div>
      <AxisNav />

      <main className="relative z-10 pt-40 md:pt-44">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-20 md:space-y-28">
          <ProjectHero project={project} lang={lang} labels={t.project} />
          <ProjectBody project={project} lang={lang} labels={t.project} />
          {project.embed_url ? (
            <SitePreview project={project} label={t.project.sitePreview} />
          ) : project.gallery_video ? (
            <ProjectVideo project={project} label={t.project.video} />
          ) : (
            <ProjectGallery project={project} label={t.project.gallery} />
          )}
        </div>
        <MoreProjects current={project} t={t} />
        <Footer />
      </main>
    </div>
  );
}