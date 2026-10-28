import React, { useState } from 'react';
import { Menu, X, FileText, Github, Linkedin, Mail, Zap } from 'lucide-react';
import { navItems } from './Navigation.tsx';
import { PROFILE_DATA } from '../data/profile.ts';

interface MobileNavProps {
  onOpenResume: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="lg:hidden">
      {/* Mobile Top Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 px-4 py-3 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2 font-bold text-sm text-neutral-900 dark:text-white"
        >
          <div className="w-7 h-7 rounded-lg bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center font-bold text-xs">
            {PROFILE_DATA.monogram}
          </div>
          <span>{PROFILE_DATA.name}</span>
          <Zap className="w-3.5 h-3.5 text-[#FFB800] fill-[#FFB800]" />
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenResume();
            }}
            className="p-1.5 text-xs font-semibold px-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
          >
            Resume
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white focus-visible:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Slide-Down Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[53px] z-30 bg-white/98 dark:bg-neutral-950/98 backdrop-blur-xl p-6 flex flex-col justify-between animate-fade-in overflow-y-auto">
          <nav className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
              Menu Navigation
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left py-2 text-lg font-bold text-neutral-900 dark:text-white hover:text-[#FFB800] transition-colors"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-2 w-full text-left py-2 text-lg font-bold text-[#FFB800]"
            >
              <FileText className="w-5 h-5" />
              <span>Full Resume</span>
            </button>
          </nav>

          <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-4">
            <div className="text-xs text-neutral-500">
              {PROFILE_DATA.contacts.location}
            </div>
            <div className="flex items-center gap-4">
              <a
                href={PROFILE_DATA.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PROFILE_DATA.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PROFILE_DATA.contacts.email}`}
                className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
