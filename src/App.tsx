import React, { useState } from 'react';
import { ThemeToggle } from './components/ThemeToggle.tsx';
import { Navigation } from './components/Navigation.tsx';
import { SocialToolbar } from './components/SocialToolbar.tsx';
import { MobileNav } from './components/MobileNav.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Experience } from './components/Experience.tsx';
import { Education } from './components/Education.tsx';
import { Queries } from './components/Queries.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      {/* Dark/Light mode toggle in top-right, matching reference image */}
      <ThemeToggle />

      {/* Floating desktop left navigation */}
      <Navigation onOpenResume={() => setIsResumeOpen(true)} />

      {/* Floating desktop right social media toolbar */}
      <SocialToolbar />

      {/* Mobile navigation header and drawer */}
      <MobileNav onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Portfolio Content Flow */}
      <main className="w-full">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={scrollToContact}
        />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Queries />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal with Print/PDF and Download capability */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
