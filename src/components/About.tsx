import React from 'react';
import { Terminal, Database, Code2, Layers, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

export const About: React.FC = () => {
  const engineeringFocus = [
    {
      icon: Terminal,
      title: "Core Java & Concurrency",
      description: "Thorough understanding of OOP fundamentals, multithreading, synchronization, memory model, and modern Streams API."
    },
    {
      icon: Layers,
      title: "Spring Boot Ecosystem",
      description: "Designing RESTful services with Spring Data JPA, Hibernate ORM, dependency injection, and clean layered architecture."
    },
    {
      icon: Database,
      title: "Relational Database Design",
      description: "Strong foundation in schema normalization, indexing, ACID transactions, complex queries, and foreign key constraints."
    },
    {
      icon: Code2,
      title: "Full Stack Integration",
      description: "Connecting resilient Java backends to responsive React/TypeScript interfaces with smooth client-side UX."
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Section Heading & Subtitle */}
        <div className="lg:col-span-4 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FFB800] uppercase">
            <span>01</span>
            <span className="w-6 h-px bg-[#FFB800]" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            A software engineer dedicated to building clean, maintainable backend systems and high-usability applications.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-4 pt-6">
            {PROFILE_DATA.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative & Principles */}
        <div className="lg:col-span-8 space-y-8">
          
          <div className="space-y-4 text-neutral-700 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
            {PROFILE_DATA.aboutParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Core Technical Pillars */}
          <div className="pt-4 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Core Technical Strengths
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {engineeringFocus.map((focus, i) => {
                const Icon = focus.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-neutral-200/60 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-[#FFB800]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                        {focus.title}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-normal">
                      {focus.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
