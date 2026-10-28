import React from 'react';
import { Calendar, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Section Header */}
        <div className="lg:col-span-4 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FFB800] uppercase">
            <span>04</span>
            <span className="w-6 h-px bg-[#FFB800]" />
            <span>Practical Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            Experience & Learning
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            A transparent overview of academic project engineering, specialized full-stack software training, and ongoing technical development.
          </p>

          <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <span className="font-semibold text-neutral-900 dark:text-neutral-200 block mb-1">
              Recruiter Transparency Note
            </span>
            As a computer science graduate, I present my hands-on capstone engineering and rigorous practical labs with full honesty, highlighting true architectural responsibilities.
          </div>
        </div>

        {/* Timeline Column */}
        <div className="lg:col-span-8 relative pl-6 sm:pl-8 border-l-2 border-neutral-200 dark:border-neutral-800 space-y-12">
          {PROFILE_DATA.experienceLearning.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Bullet indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-neutral-950 border-2 border-[#FFB800] group-hover:scale-125 transition-transform" />

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#FFB800]" />
                    {item.period}
                  </span>
                  <span>·</span>
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                    {item.organization}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed pt-1">
                  {item.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
