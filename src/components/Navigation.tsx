import React, { useEffect, useState } from 'react';
import { FileText } from 'lucide-react';

interface NavigationProps {
  onOpenResume: () => void;
}

export const navItems = [
  { id: 'hero', label: 'Hero' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'queries', label: 'Queries' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation: React.FC<NavigationProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <nav
      className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col items-start bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md p-4 py-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs"
      aria-label="Section Navigation"
    >
      <div className="flex flex-col space-y-3.5 text-xs font-medium tracking-wide">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex items-center gap-2 group text-left transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#FFB800] rounded-xs px-1 py-0.5 ${
                isActive
                  ? 'text-[#FFB800] font-semibold translate-x-1'
                  : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              <span
                className={`transition-all duration-200 ${
                  isActive
                    ? 'w-3 h-0.5 bg-[#FFB800]'
                    : 'w-1.5 h-0.5 bg-neutral-300 dark:bg-neutral-700 group-hover:w-2 group-hover:bg-neutral-400'
                }`}
              />
              <span>{item.label}</span>
            </button>
          );
        })}

        <div className="pt-2 mt-2 border-t border-neutral-200 dark:border-neutral-800">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-150 group"
          >
            <FileText className="w-3.5 h-3.5 group-hover:text-[#FFB800] transition-colors" />
            <span>Resume</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
