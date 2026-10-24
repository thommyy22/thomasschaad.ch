import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { useLang, translations } from '@/lib/i18n';

const email = 'thom.schaad@proton.me';

const socials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Künstlerisches Portfolio', href: 'https://thommyy22.github.io/Portfolio-Thomas-Schaad/' },
];

export default function SectionContact() {
  const [copied, setCopied] = useState(false);
  const [lang] = useLang();
  const t = translations[lang];

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader number={t.sections.contact.number} label={t.sections.contact.label} title={t.sections.contact.title} />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7"
          >
            <p className="text-xl md:text-2xl font-light leading-relaxed tracking-[-0.01em] max-w-lg mb-10">
              {t.contact.lede}
            </p>

            <button
              onClick={copyEmail}
              className="group inline-flex flex-col items-start rounded-none border border-border bg-background px-7 py-6 transition-all duration-300 ease-smooth hover:bg-accent-tint hover:border-accent/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground group-hover:text-foreground/70 uppercase mb-2 transition-colors duration-300">
                {t.contact.emailHint}
              </span>
              <span className="text-xl md:text-2xl font-medium tracking-[-0.01em] flex items-center gap-3 transition-colors duration-300 group-hover:text-foreground">
                {email}
                <span className="flex items-center justify-center w-7 h-7 rounded-none border border-border text-muted-foreground transition-all duration-300 group-hover:border-accent group-hover:text-foreground">
                  {copied ? <Check size={13} /> : <ArrowUpRight size={14} />}
                </span>
              </span>
              <span
                className={`mt-3 text-[10px] font-mono tracking-[0.18em] uppercase transition-all duration-300 ${
                  copied ? 'text-foreground opacity-100' : 'text-muted-foreground opacity-0'
                }`}
              >
                {t.contact.copied}
              </span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5"
          >
            <div className="rounded-none border border-border bg-background p-7 md:p-8">
              <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground uppercase block mb-5">
                {t.contact.networkLabel}
              </span>
              <div className="flex flex-col gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-none border border-transparent px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-accent-tint hover:border-accent/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span className="transition-colors duration-200">{s.label}</span>
                    <ArrowUpRight size={15} className="text-muted-foreground transition-all duration-200 group-hover:text-foreground group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}