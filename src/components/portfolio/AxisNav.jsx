import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import useTheme from '@/hooks/useTheme';
import LanguageSwitcher from './LanguageSwitcher';
import { useLang, translations } from '@/lib/i18n';

const LOGO = '/media/d1fe9e055_Unbenannt-2.png';

const links = [
  { key: 'services', section: 'services' },
  { key: 'work', section: 'work' },
  { key: 'about', section: 'about' },
  { key: 'contact', section: 'contact' },
];

export default function AxisNav() {
  const [active, setActive] = useState('');
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const [lang] = useLang();
  const t = translations[lang];
  const navigate = useNavigate();

  useEffect(() => {
    const sections = ['intro', ...links.map((l) => l.section)];
    const onScroll = () => {
      const threshold = window.innerHeight * 0.4;
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActive(current);
      setCompact(
        window.location.pathname === '/' ? current !== 'intro' : window.scrollY > 80
      );
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const scrollTo = (id) => {
    if (window.location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <nav className="flex items-stretch w-full">
        <button
          onClick={() => scrollTo('intro')}
          className={`flex items-center gap-2.5 px-4 md:px-8 ${compact ? 'py-2' : 'py-3'} transition-all duration-300 ease-smooth focus:outline-none focus-visible:bg-accent-tint`}
        >
          <span
            role="img"
            aria-label="Thomas Schaad"
            className={`block bg-accent shrink-0 transition-all duration-300 ease-smooth ${
              compact ? 'w-9 h-9' : 'w-28 h-28'
            }`}
            style={{
              WebkitMask: `url(${LOGO}) center / contain no-repeat`,
              mask: `url(${LOGO}) center / contain no-repeat`,
            }}
          />
          <span className="text-sm font-medium tracking-[-0.01em]">Thomas Schaad</span>
        </button>

        <div className="hidden md:grid grid-cols-4 flex-1">
          {links.map((l) => (
            <button
              key={l.section}
              onClick={() => scrollTo(l.section)}
              className={`group relative flex items-center justify-center px-4 ${compact ? 'py-2' : 'py-3'} text-[13px] font-medium border-l border-border transition-all duration-300 ease-smooth focus:outline-none ${
                active === l.section
                  ? 'bg-accent text-accent-foreground'
                  : 'text-foreground hover:bg-accent-tint'
              }`}
            >
              <span>{t.nav[l.key]}</span>
            </button>
          ))}
        </div>

        <LanguageSwitcher compact={compact} />

        <button
          onClick={toggle}
          aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          className={`flex items-center justify-center px-3.5 ${compact ? 'py-2' : 'py-3'} border-l border-border text-foreground hover:bg-accent-tint transition-all duration-300 ease-smooth focus:outline-none focus-visible:bg-accent-tint`}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Menü"
          className={`md:hidden flex items-center justify-center px-5 ${compact ? 'py-2' : 'py-3'} border-l border-border text-foreground transition-all duration-300 ease-smooth focus:outline-none focus-visible:bg-accent-tint`}
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-md overflow-hidden"
          >
            {links.map((l) => (
              <button
                key={l.section}
                onClick={() => scrollTo(l.section)}
                className={`group w-full flex items-center px-6 py-3.5 border-b border-border text-sm font-medium transition-colors ${
                  active === l.section ? 'bg-accent text-accent-foreground' : 'text-foreground hover:bg-accent-tint'
                }`}
              >
                {t.nav[l.key]}
              </button>
            ))}
            <LanguageSwitcher variant="row" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}