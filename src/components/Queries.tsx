import React, { useState } from 'react';
import { HelpCircle, ChevronDown, CheckCircle, MessageSquare } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

export const Queries: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="queries" className="py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Section Header */}
        <div className="lg:col-span-4 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FFB800] uppercase">
            <span>06</span>
            <span className="w-6 h-px bg-[#FFB800]" />
            <span>Recruiter Queries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            Queries & FAQ
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Common questions from hiring managers, technical interviewers, and engineering team leads.
          </p>

          <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400">
            <span className="font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5 mb-1">
              <MessageSquare className="w-3.5 h-3.5 text-[#FFB800]" />
              Need a personalized response?
            </span>
            Feel free to drop a direct query using the contact form below or reach out directly at <a href={`mailto:${PROFILE_DATA.contacts.email}`} className="text-neutral-900 dark:text-white underline font-medium">{PROFILE_DATA.contacts.email}</a>.
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="lg:col-span-8 space-y-3">
          {PROFILE_DATA.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-neutral-900 dark:text-white hover:text-[#FFB800] dark:hover:text-[#FFB800] transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#FFB800]' : 'text-neutral-400'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-200/60 dark:border-neutral-800/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
