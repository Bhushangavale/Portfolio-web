import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-12 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Monogram */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center font-bold text-xs tracking-tighter">
            {PROFILE_DATA.monogram}
          </div>
          <div>
            <div className="text-xs font-bold text-neutral-900 dark:text-white">
              {PROFILE_DATA.name}
            </div>
            <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                @ Software Engineer
            </div>
          </div>
        </div>

        {/* Quick Social & Action */}
        <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 text-xs">
          <a
            href={PROFILE_DATA.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href={PROFILE_DATA.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href={`mailto:${PROFILE_DATA.contacts.email}`}
            className="hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
