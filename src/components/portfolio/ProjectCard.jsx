import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-background border-t border-l border-border transition-colors duration-300 ease-smooth hover:bg-accent-tint"
    >
      <Link to={`/projekte/${project.slug}`} className="block cursor-pointer">
        <div className="relative aspect-square overflow-hidden bg-background">
          {project.card_image ? (
            <img
              src={project.card_image}
              alt={project.title}
              className="w-full h-full object-cover kenburns"
            />
          ) : project.video ? (
            <video
              src={project.video}
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover transition-transform duration-[700ms] ease-smooth group-hover:scale-105"
            />
          ) : (
            <img
              src={project.hero}
              alt={project.title}
              className={`w-full h-full object-cover ${
                project.motion
                  ? 'kenburns'
                  : 'transition-transform duration-[700ms] ease-smooth group-hover:scale-105'
              }`}
            />
          )}
        </div>

        <div className="p-5 group-hover:text-foreground transition-colors duration-300">
          <div className="flex items-baseline justify-between">
            <span className="text-[10px] font-mono tracking-[0.18em] text-muted-foreground group-hover:text-foreground/70">
              {project.id}
            </span>
            <span className="text-[10px] font-mono tracking-[0.18em] text-muted-foreground group-hover:text-foreground/70">
              {project.year}
            </span>
          </div>
          <h3 className="mt-2 text-lg font-medium tracking-[-0.01em]">{project.title}</h3>
          <p className="mt-1 text-[12px] font-light text-muted-foreground group-hover:text-foreground/80">
            {project.client} · {project.category}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}