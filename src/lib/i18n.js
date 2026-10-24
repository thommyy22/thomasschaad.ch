import { useState, useEffect } from 'react';

const KEY = 'ts-lang';
const read = () => {
  try {
    return localStorage.getItem(KEY) || 'DE';
  } catch {
    return 'DE';
  }
};
let current = read();
const listeners = new Set();
const change = (l) => {
  current = l;
  try {
    localStorage.setItem(KEY, l);
  } catch {}
  listeners.forEach((fn) => fn(l));
};

export function useLang() {
  const [lang, set] = useState(current);
  useEffect(() => {
    const fn = (l) => set(l);
    listeners.add(fn);
    return () => listeners.delete(fn);
  }, []);
  return [lang, change];
}

export const translations = {
  DE: {
    nav: { services: 'Leistungen', work: 'Projekte', about: 'Über mich', contact: 'Kontakt' },
    intro: {
      tag: 'Intro',
      role: 'Data Designer & Graphic Designer. Multidisziplinär — Design & Systeme.',
      lede: 'Design, das Funktion und Schönheit verbindet. Balance als Absicht.',
      ctaWork: 'Projekte ansehen',
      ctaContact: 'Kontakt aufnehmen',
    },
    sections: {
      services: { number: '02', label: 'Leistungen', title: 'Was ich anbiete.' },
      work: { number: '03', label: 'Ausgewählte Projekte', title: 'Projekte aus der Praxis.' },
      about: { number: '04', label: 'Über mich', title: 'Profil' },
      contact: { number: '05', label: 'Kontakt', title: 'Kontakt' },
    },
    services: [
      { id: '01', title: 'Web Design', subs: ['System', 'Struktur', 'Interface'], desc: 'Websites als Systeme gebaut. Jedes Layout ist Architektur, jede Interaktion bewusst gesetzt.', tools: ['Figma', 'HTML/CSS'], spec: 'Spec sheet', param: 'Parameter' },
      { id: '02', title: 'Logodesign', subs: ['Symbol', 'Reduktion', 'Geometrie'], desc: 'Marken auf das Wesentliche reduziert. Jede Kurve bewusst gesetzt, jede Proportion durchdacht.', tools: ['Vektorkonstruktion', 'Raster-Systeme', 'Symbole verknüpfen', 'Optische Korrektur'], spec: 'Spec sheet', param: 'Parameter' },
      { id: '03', title: 'Datadesign', subs: ['Daten', 'Visualisierung', 'System'], desc: 'Daten sichtbar gemacht. Komplexität, übersetzt in klare visuelle Systeme — vom Diagramm bis zur Rauminstallation.', tools: ['Datenvisualisierung', 'Informationsdesign', 'Datenanalyse', 'Rauminstallation'], spec: 'Spec sheet', param: 'Parameter' },
      { id: '04', title: 'Content Creation', subs: ['Bild', 'Story', 'Präsenz'], desc: 'Visuelle Inhalte mit Klarheit. Kein Rauschen, nur Signal.', tools: ['Instafeed', 'Werbung', 'Marketing', 'Slogans', 'Texte'], spec: 'Spec sheet', param: 'Parameter' },
    ],
    about: {
      bio1: 'Thomas Schaad ist ein multidisziplinärer Designer an der Schnittstelle von systemischem Denken, visueller Kommunikation und digitaler Architektur.',
      bio2: 'Jedes Projekt beginnt mit Struktur — und endet mit Schönheit. Es ist wichtig, die Balance zwischen Funktionalität und Schönheit zu wahren. Schönheit ist Selbstzweck. Funktionalität ist wichtig, doch ohne Schönheit ist sie hohl und leer.',
      bio3: 'Zusammenarbeit mit Kunden, die verstehen, dass gutes Design beides braucht: Funktion, die trägt, und Schönheit, die bleibt.',
      disciplinesLabel: 'Disziplinen',
      principlesLabel: 'Prinzipien',
      locationLabel: 'Standort',
      location: 'Schweiz',
      quote: '„Funktionalität ohne Schönheit ist hohl und leer."',
      disciplines: ['Web Design', 'Corporate Identity', 'Logo Design', 'Data Design', 'Content Creation'],
      principles: ['Balance zwischen Funktion & Schönheit', 'Schönheit als Selbstzweck', 'Raster als Fundament', 'Struktur mit Seele'],
    },
    contact: {
      lede: 'Interesse an einer Zusammenarbeit? Lassen Sie uns einen Verbindungspunkt schaffen.',
      emailHint: 'E-Mail — klicken zum Kopieren',
      copied: 'In Zwischenablage kopiert',
      networkLabel: 'Netzwerk',
    },
    footer: {
      tagline: 'Design & Systeme',
      copyright: 'Alle Rechte vorbehalten',
      made: 'Entworfen & gebaut in der Schweiz',
    },
    project: {
      back: 'Zurück zu den Projekten',
      client: 'Kunde',
      year: 'Jahr',
      category: 'Disziplin',
      role: 'Rolle',
      gallery: 'Bildergalerie',
      video: 'Video',
      sitePreview: 'Live-Vorschau — Website in neuem Tab öffnen',
      live: 'Live Websites — Dashboards & Data Reports',
      galleryLabel: 'Projektgalerie',
      more: 'Weitere ausgewählte Projekte',
    },
    lang: { label: 'Sprache' },
  },
  EN: {
    nav: { services: 'Services', work: 'Work', about: 'About', contact: 'Contact' },
    intro: {
      tag: 'Intro',
      role: 'Data Designer & Graphic Designer. Multidisciplinary — Design & Systems.',
      lede: 'Design that unites function and beauty. Balance as intent.',
      ctaWork: 'View work',
      ctaContact: 'Get in touch',
    },
    sections: {
      services: { number: '02', label: 'Services', title: 'What I offer.' },
      work: { number: '03', label: 'Selected work', title: 'Projects from practice.' },
      about: { number: '04', label: 'About', title: 'Profile' },
      contact: { number: '05', label: 'Contact', title: 'Contact' },
    },
    services: [
      { id: '01', title: 'Web Design', subs: ['System', 'Structure', 'Interface'], desc: 'Websites built as systems. Every layout is architecture, every interaction intentional.', tools: ['Figma', 'HTML/CSS'], spec: 'Spec sheet', param: 'Parameters' },
      { id: '02', title: 'Logo Design', subs: ['Symbol', 'Reduction', 'Geometry'], desc: 'Brands reduced to the essential. Every curve deliberately placed, every proportion thought through.', tools: ['Vector construction', 'Grid systems', 'Linking symbols', 'Optical correction'], spec: 'Spec sheet', param: 'Parameters' },
      { id: '03', title: 'Data Design', subs: ['Data', 'Visualization', 'System'], desc: 'Data made visible. Complexity translated into clear visual systems — from diagram to room installation.', tools: ['Data visualization', 'Information design', 'Data analysis', 'Room installation'], spec: 'Spec sheet', param: 'Parameters' },
      { id: '04', title: 'Content Creation', subs: ['Image', 'Story', 'Presence'], desc: 'Visual content with clarity. No noise, only signal.', tools: ['Instafeed', 'Werbung', 'Marketing', 'Slogans', 'Texte'], spec: 'Spec sheet', param: 'Parameters' },
    ],
    about: {
      bio1: 'Thomas Schaad is a multidisciplinary designer working at the intersection of systemic thinking, visual communication and digital architecture.',
      bio2: 'Every project begins with structure — and ends with beauty. It is important to keep the balance between functionality and beauty. Beauty is an end in itself. Functionality matters, but without beauty it is hollow and empty.',
      bio3: 'Collaboration with clients who understand that good design needs both: function that carries, and beauty that lasts.',
      disciplinesLabel: 'Disciplines',
      principlesLabel: 'Principles',
      locationLabel: 'Location',
      location: 'Switzerland',
      quote: '"Functionality without beauty is hollow and empty."',
      disciplines: ['Web Design', 'Corporate Identity', 'Logo Design', 'Data Design', 'Content Creation'],
      principles: ['Balance between function & beauty', 'Beauty as an end in itself', 'Grid as foundation', 'Structure with soul'],
    },
    contact: {
      lede: "Interested in working together? Let's create a point of connection.",
      emailHint: 'Email — click to copy',
      copied: 'Copied to clipboard',
      networkLabel: 'Network',
    },
    footer: {
      tagline: 'Design & Systems',
      copyright: 'All rights reserved',
      made: 'Designed & built in Switzerland',
    },
    project: {
      back: 'Back to projects',
      client: 'Client',
      year: 'Year',
      category: 'Discipline',
      role: 'Role',
      gallery: 'Gallery',
      video: 'Video',
      sitePreview: 'Live preview — open website in a new tab',
      live: 'Live Websites — Dashboards & Data Reports',
      galleryLabel: 'Project Gallery',
      more: 'More selected projects',
    },
    lang: { label: 'Language' },
  },
};