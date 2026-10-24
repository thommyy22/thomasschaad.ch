import React from 'react';
import { Globe } from 'lucide-react';
import { useLang, translations } from '@/lib/i18n';

const OPTIONS = ['DE', 'EN'];

export default function LanguageSwitcher({ variant = 'nav', compact = false }) {
  const [lang, setLang] = useLang();
  const t = translations[lang];

  if (variant === 'row') {
    return (
      <div className="flex items-center gap-2 px-6 py-3.5 border-b border-border">
        <span className="text-[11px] font-mono tracking-[0.2em] text-muted-foreground uppercase mr-1">{t.lang.label}</span>
        {OPTIONS.map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`rounded-[4px] px-2.5 py-1 text-[12px] font-medium transition-colors ${
              lang === l ? 'bg-accent text-accent-foreground' : 'text-foreground hover:bg-accent-tint'
            }`}
          >
            {l}
          </button>
        ))}
      </div>
    );
  }

  return (
    <button
      onClick={() => setLang(lang === 'DE' ? 'EN' : 'DE')}
      aria-label={t.lang.label}
      className={`hidden md:flex items-center justify-center gap-1.5 px-3.5 ${compact ? 'py-2' : 'py-3'} border-l border-border text-foreground hover:bg-accent-tint transition-all duration-300 ease-smooth focus:outline-none focus-visible:bg-accent-tint`}
    >
      <Globe size={16} />
      <span className="text-[11px] font-mono tracking-[0.1em]">{lang}</span>
    </button>
  );
}