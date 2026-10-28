import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Section Header */}
        <div className="lg:col-span-4 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FFB800] uppercase">
            <span>05</span>
            <span className="w-6 h-px bg-[#FFB800]" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Solid foundations in computer engineering theory, algorithms, object-oriented software design, and modern enterprise software practices.
          </p>
        </div>

        {/* Education & Certifications Content */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Degrees */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#FFB800]" />
              Degrees & Formal Training
            </h3>

            {PROFILE_DATA.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <span className="font-mono text-neutral-500 dark:text-neutral-400">
                    {edu.year}
                  </span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    {edu.status}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-neutral-950 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    {edu.institution}
                  </p>
                </div>

                <ul className="space-y-2 pt-2">
                  {edu.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="text-[#FFB800] font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="pt-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#FFB800]" />
              Certifications & Technical Credentials
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PROFILE_DATA.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mb-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>
                    <h5 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-neutral-100 leading-snug">
                      {cert.title}
                    </h5>
                  </div>
                  <div className="pt-3 mt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400">
                    <span>{cert.issuer}</span>
                    <span className="font-mono">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
