import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLang, translations } from '@/lib/i18n';

const LOGO = '/media/d1fe9e055_Unbenannt-2.png';

const socials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Künstlerisches Portfolio', href: 'https://thommyy22.github.io/Portfolio-Thomas-Schaad/' },
];

export default function Footer() {
  const [lang] = useLang();
  const t = translations[lang];
  return (
    <footer className="relative px-6 md:px-10 pb-10">
      <div className="max-w-6xl mx-auto rounded-none border border-border bg-background p-7 md:p-9">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-3">
            <span
              role="img"
              aria-label="Thomas Schaad"
              className="block w-12 h-12 bg-accent shrink-0"
              style={{
                WebkitMask: `url(${LOGO}) center / contain no-repeat`,
                mask: `url(${LOGO}) center / contain no-repeat`,
              }}
            />
            <div>
              <p className="text-sm font-medium tracking-[-0.01em]">Thomas Schaad</p>
              <p className="text-[11px] font-mono tracking-[0.15em] text-muted-foreground uppercase">{t.footer.tagline}</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
            {Object.keys(t.nav).map((key) => (
              <Link
                key={key}
                to={`/#${key}`}
                className="text-[12px] font-medium rounded-[4px] px-3 py-1 transition-all duration-200 hover:bg-accent-tint"
              >
                {t.nav[key]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-center md:justify-end gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-none border border-border px-3.5 py-1.5 text-[11px] font-medium transition-all duration-200 hover:bg-accent-tint hover:border-accent/30"
              >
                {s.label}
                <ArrowUpRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="h-px bg-border my-7" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono tracking-[0.15em] text-muted-foreground uppercase">
          <span>© {new Date().getFullYear()} — {t.footer.copyright}</span>
          <span>{t.footer.made}</span>
        </div>
      </div>
    </footer>
  );
}