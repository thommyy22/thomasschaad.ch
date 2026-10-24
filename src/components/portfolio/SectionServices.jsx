import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { useLang, translations } from '@/lib/i18n';



export default function SectionServices() {
  const [lang] = useLang();
  const t = translations[lang];
  return (
    <section id="services" className="relative py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeader number={t.sections.services.number} label={t.sections.services.label} title={t.sections.services.title} />
      </div>

      <div className="max-w-6xl mx-auto w-full border-b border-r border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {t.services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-background border-t border-l border-border p-8 md:p-12 transition-colors duration-300 ease-smooth cursor-default hover:bg-accent-tint"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono tracking-[0.2em] text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                  {s.id}
                </span>
                <span className="text-[10px] font-mono tracking-[0.15em] text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-foreground/70 transition-all duration-300">
                  {s.spec}
                </span>
              </div>

              <h3 className="text-2xl md:text-[1.7rem] font-medium tracking-[-0.02em] mb-4 transition-colors duration-300 group-hover:text-foreground">
                {s.title}
              </h3>

              <div className="flex flex-wrap gap-0 mb-6">
                {s.subs.map((sub, idx) => (
                  <span
                    key={sub}
                    className={`inline-flex items-center rounded-none border border-border group-hover:border-accent/40 px-3 py-1 text-[11px] font-medium text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 ${idx > 0 ? '-ml-px' : ''}`}
                  >
                    {sub}
                  </span>
                ))}
              </div>

              <p className="text-sm md:text-[15px] font-light leading-relaxed text-foreground/80 group-hover:text-foreground/90 max-w-sm mb-8 transition-colors duration-300">
                {s.desc}
              </p>

              <div className="pt-5 border-t border-border group-hover:border-accent/25 transition-colors duration-300">
                <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground group-hover:text-foreground/70 uppercase block mb-3 transition-colors duration-300">
                  {s.param}
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {s.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[12px] tracking-[0.02em] text-muted-foreground group-hover:text-foreground/75 transition-colors duration-300"
                    >
                      → {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}