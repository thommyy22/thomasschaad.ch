import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectVideo({ project, label }) {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <span className="text-[11px] font-mono tracking-[0.15em] uppercase text-muted-foreground">{label}</span>
        <span className="flex-1 h-px bg-border" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden border border-border bg-background"
      >
        <video
          src={project.gallery_video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full block"
        />
      </motion.div>
    </section>
  );
}