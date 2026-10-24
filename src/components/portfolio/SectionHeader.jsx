import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ number, label, title, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 md:mb-20 ${align === 'center' ? 'text-center' : ''}`}
    >
      <div className={`flex items-center gap-3 mb-6 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="text-[11px] font-mono tracking-[0.2em] text-accent">{number}</span>
        <span className="h-px w-8 bg-border" />
        <span className="text-[11px] font-mono tracking-[0.2em] text-muted-foreground uppercase">{label}</span>
      </div>
      <h2 className="text-[clamp(2rem,6vw,4rem)] font-medium tracking-[-0.03em] leading-[1.02] max-w-3xl">
        {title}
      </h2>
    </motion.div>
  );
}