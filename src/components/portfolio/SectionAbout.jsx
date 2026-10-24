import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { useLang, translations } from '@/lib/i18n';

const PORTRAIT = '/media/509639e03_IMG_2188.jpg';



export default function SectionAbout() {
  const [lang] = useLang();
  const t = translations[lang];
  return (
    <section id="about" className="relative py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader number={t.sections.about.number} label={t.sections.about.label} title={t.sections.about.title} />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7"
          >
            <div className="w-full max-w-xs aspect-square overflow-hidden border border-border mb-10">
              <img src={PORTRAIT} alt="Thomas Schaad" className="w-full h-full object-cover" />
            </div>
            <p className="text-xl md:text-2xl font-light leading-relaxed tracking-[-0.01em] mb-8">
              {t.about.bio1}
            </p>
            <p className="text-base font-light leading-relaxed text-muted-foreground mb-6">
              {t.about.bio2}
            </p>
            <p className="text-base font-light leading-relaxed text-muted-foreground">
              {t.about.bio3}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5"
          >
            <div className="rounded-none border border-border bg-background p-7 md:p-8 space-y-7">
              <div>
                <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground uppercase block mb-4">
                  {t.about.disciplinesLabel}
                </span>
                <div className="space-y-2">
                  {t.about.disciplines.map((d) => (
                    <span key={d} className="flex items-center gap-2 text-sm font-light">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px bg-border" />

              <div>
                <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground uppercase block mb-4">
                  {t.about.principlesLabel}
                </span>
                <div className="space-y-2">
                  {t.about.principles.map((p) => (
                    <span key={p} className="flex items-center gap-2 text-sm font-light">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px bg-border" />

              <div>
                <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground uppercase block mb-4">
                  {t.about.locationLabel}
                </span>
                <span className="text-sm font-light">{t.about.location}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 md:mt-28 text-center"
        >
          <p className="text-[clamp(1.3rem,3.5vw,2.2rem)] font-light leading-relaxed tracking-[-0.02em] max-w-2xl mx-auto">
            {t.about.quote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}