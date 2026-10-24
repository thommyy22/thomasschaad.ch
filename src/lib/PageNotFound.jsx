import { Link, useLocation } from 'react-router-dom';
import { useLang } from '@/lib/i18n';

const TEXT = {
  DE: {
    title: 'Seite nicht gefunden',
    body: (path) => <>Die Seite <span className="font-medium">«{path}»</span> gibt es nicht.</>,
    back: 'Zur Startseite',
  },
  EN: {
    title: 'Page not found',
    body: (path) => <>The page <span className="font-medium">“{path}”</span> does not exist.</>,
    back: 'Back to home',
  },
};

export default function PageNotFound() {
  const location = useLocation();
  const [lang] = useLang();
  const t = TEXT[lang] || TEXT.DE;
  const path = location.pathname.substring(1);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background text-foreground font-body">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-7xl font-light">404</h1>
        <div className="h-px w-16 bg-border mx-auto" />
        <h2 className="text-2xl font-medium">{t.title}</h2>
        <p className="leading-relaxed">{t.body(path)}</p>
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 text-sm font-medium border border-border rounded-[var(--radius)] hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          {t.back}
        </Link>
      </div>
    </div>
  );
}
