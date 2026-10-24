import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function SitePreview({ project, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="h-px w-8 bg-border" />
        <span className="text-[11px] font-mono tracking-[0.2em] text-muted-foreground uppercase">{label}</span>
      </div>

      <div className="border border-border bg-background overflow-hidden">
        <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-border bg-accent-tint">
          <a
            href={project.embed_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 min-w-0"
          >
            <span className="flex gap-1.5 shrink-0">
              <span className="w-2 h-2 rounded-full bg-foreground/30" />
              <span className="w-2 h-2 rounded-full bg-foreground/30" />
              <span className="w-2 h-2 rounded-full bg-foreground/30" />
            </span>
            <span className="text-[10px] font-mono tracking-[0.1em] text-muted-foreground truncate group-hover:text-foreground transition-colors">
              {project.embed_url.replace('https://', '')}
            </span>
            <ArrowUpRight size={12} className="shrink-0 text-muted-foreground group-hover:text-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="relative aspect-[4/3] md:aspect-[3/2] bg-background overflow-hidden">
          {project.video ? (
            <video
              src={project.video}
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={project.hero}
              alt={project.title}
              className={`w-full h-full object-cover ${project.motion ? 'kenburns' : ''}`}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}