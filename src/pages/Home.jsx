import React from 'react';
import GridBackground from '@/components/portfolio/GridBackground';
import ParticleField from '@/components/portfolio/ParticleField';
import AxisNav from '@/components/portfolio/AxisNav';
import SectionIntro from '@/components/portfolio/SectionIntro';
import SectionServices from '@/components/portfolio/SectionServices';
import SectionWork from '@/components/portfolio/SectionWork';
import SectionAbout from '@/components/portfolio/SectionAbout';
import SectionContact from '@/components/portfolio/SectionContact';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-body">
      <GridBackground />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleField density={16000} />
      </div>
      <AxisNav />

      <main className="relative z-10">
        <SectionIntro />
        <SectionServices />
        <SectionWork />
        <SectionAbout />
        <SectionContact />
        <Footer />
      </main>
    </div>
  );
}