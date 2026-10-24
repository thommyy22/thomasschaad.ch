import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectBody({ project, lang, labels }) {
  const meta = [
    { label: labels.client, value: project.client },
    { label: labels.year, value: project.year },
    { label: labels.category, value: project.category },
    { label: labels.role, value: project.role[lang] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start"
    >
      <div className="md:col-span-7 space-y-6">
        {project.body.map((para, i) => (
          <p key={i} className="text-base md:text-lg font-light leading-relaxed text-foreground/85">
            {para[lang]}
          </p>
        ))}
      </div>

      <div className="md:col-span-5">
        <div className="grid grid-cols-2 rounded-none border border-border bg-background">
          {meta.map((m, i) => (
            <div
              key={m.label}
              className={`p-5 ${i % 2 === 1 ? 'border-l' : ''} ${i > 1 ? 'border-t' : ''} border-border`}
            >
              <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground uppercase block mb-1.5">
                {m.label}
              </span>
              <span className="text-sm font-medium tracking-[-0.01em]">{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}