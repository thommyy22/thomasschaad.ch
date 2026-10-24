import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectGallery({ project, label }) {
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 w-full border-b border-r border-border">
        {project.gallery.map((src, i) => (
          <div key={i} className="group border-t border-l border-border bg-background overflow-hidden">
            <img
              src={src}
              alt={`${project.title} — ${i + 1}`}
              className="w-full aspect-square object-cover transition-transform duration-[700ms] ease-smooth group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}