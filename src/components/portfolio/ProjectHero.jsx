import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function ProjectHero({ project, lang, labels }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-end">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] text-muted-foreground uppercase hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft size={13} />
          {labels.back}
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] font-mono tracking-[0.2em] text-accent">{project.id}</span>
          <span className="h-px w-8 bg-border" />
          <span className="text-[11px] font-mono tracking-[0.2em] text-muted-foreground uppercase">
            {project.category}
          </span>
        </div>

        <h1 className="text-[clamp(2.6rem,7vw,5.5rem)] font-medium tracking-[-0.03em] leading-[1.02]">
          {project.title}
        </h1>

        <p className="mt-8 max-w-md text-base md:text-lg font-light leading-relaxed text-foreground/80">
          {project.summary[lang]}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-none border border-border bg-background overflow-hidden"
      >
        {project.video ? (
          <video
            src={project.video}
            muted
            loop
            autoPlay
            playsInline
            className="w-full aspect-square object-cover"
          />
        ) : (
          <img
            src={project.hero}
            alt={project.title}
            className={`w-full aspect-square object-cover ${project.motion ? 'kenburns' : ''}`}
          />
        )}
      </motion.div>
    </div>
  );
}