import React, { useState } from 'react';
import { Check, Copy, Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    void navigator.clipboard.writeText(PROFILE_DATA.contacts.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }).catch((error: unknown) => {
      console.error('Could not copy email address:', error);
    });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FFB800] uppercase">
          <span>07</span>
          <span className="w-6 h-px bg-[#FFB800]" />
          <span>Get In Touch</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
          Let's Build Something Great
        </h2>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
          I'm open to opportunities where I can contribute my Java development skills, learn from experienced engineers, and build useful software solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-[#FFB800]">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-neutral-500 dark:text-neutral-400">Email</div>
                <a
                  href={`mailto:${PROFILE_DATA.contacts.email}`}
                  className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white hover:text-[#FFB800] transition-colors break-all"
                >
                  {PROFILE_DATA.contacts.email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors"
              title="Copy email to clipboard"
              aria-label="Copy email"
            >
              {copiedEmail ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          <a
            href={`tel:+91${PROFILE_DATA.contacts.phone}`}
            className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center gap-3 hover:border-[#FFB800] transition-colors"
          >
            <div className="w-10 h-10 shrink-0 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-[#FFB800]">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">Mobile</div>
              <div className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                +91 {PROFILE_DATA.contacts.phone.replace(/(\d{5})(\d{5})/, '$1 $2')}
              </div>
            </div>
          </a>

          <a
            href={`https://wa.me/91${PROFILE_DATA.contacts.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center gap-3 hover:border-[#FFB800] transition-colors"
          >
            <div className="w-10 h-10 shrink-0 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-emerald-500">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">WhatsApp</div>
              <div className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                +91 {PROFILE_DATA.contacts.whatsapp.replace(/(\d{5})(\d{5})/, '$1 $2')}
              </div>
            </div>
          </a>

          <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center gap-3">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">Location & Mobility</div>
              <div className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white">
                {PROFILE_DATA.contacts.location}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2 flex items-center gap-3">
          <a
            href={PROFILE_DATA.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white text-xs font-semibold transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>

          <a
            href={PROFILE_DATA.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white text-xs font-semibold transition-colors"
          >
            <Linkedin className="w-4 h-4 text-[#0077b5]" />
            <span>LinkedIn Connect</span>
          </a>
        </div>
      </div>
    </section>
  );
};
