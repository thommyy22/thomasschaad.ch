import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Button from './Button';
import { useLang, translations } from '@/lib/i18n';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function SectionIntro() {
  const [lang] = useLang();
  const t = translations[lang];
  return (
    <section id="intro" className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-28 md:pt-32 pb-16 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 gap-10 md:gap-12 items-center">
          {/* Left — type */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="text-[11px] font-mono tracking-[0.2em] text-accent">01</span>
              <span className="h-px w-8 bg-border" />
              <span className="text-[11px] font-mono tracking-[0.2em] text-muted-foreground uppercase">{t.intro.tag}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.6rem,8vw,5rem)] font-medium tracking-[-0.035em] leading-[0.98]"
            >
              Thomas<br />Schaad
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 text-lg md:text-xl font-light text-muted-foreground max-w-md"
            >
              {t.intro.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-8 text-base font-light leading-relaxed text-foreground/80 max-w-md"
            >
              {t.intro.lede}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button onClick={() => scrollTo('work')}>
                {t.intro.ctaWork}
                <ArrowDown size={15} />
              </Button>
              <Button variant="ghost" onClick={() => scrollTo('contact')}>
                {t.intro.ctaContact}
                <ArrowUpRight size={15} />
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}