import React, { useState } from 'react';
import { ArrowRight, Download, Github, Mail, Zap, Upload } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const [portraitLoaded, setPortraitLoaded] = useState(true);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomPhoto(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 pt-20 pb-16 overflow-hidden max-w-7xl mx-auto"
    >
      {/* Oversized background typography / watermark inspired by the reference image */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 flex items-center justify-center w-full max-w-7xl opacity-[0.06] dark:opacity-[0.04]"
      >
        <span className="font-extrabold text-[18vw] tracking-tighter leading-none text-neutral-900 dark:text-white uppercase font-sans">
          {PROFILE_DATA.backgroundWatermark}
        </span>
      </div>

      {/* Hero Content Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Introduction, Bio, Action Buttons */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10 space-y-6">

          {/* Greeting with yellow lightning bolt */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
                Namaste
              </h1>
              <Zap className="w-8 h-8 sm:w-11 sm:h-11 text-[#FFB800] fill-[#FFB800] animate-pulse" />
            </div>

            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                {PROFILE_DATA.name}
              </h2>
              <p className="text-base sm:text-lg font-medium text-neutral-600 dark:text-neutral-400">
                {PROFILE_DATA.roleHeadline}
              </p>
            </div>
          </div>

          {/* Short Introduction Prose */}
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-xl leading-relaxed">
            {PROFILE_DATA.shortIntro}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-neutral-950 hover:bg-[#FFB800] hover:text-neutral-950 dark:bg-white dark:text-neutral-950 dark:hover:bg-[#FFB800] dark:hover:text-neutral-950 rounded-xl transition-all duration-200 shadow-xs group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-700/80 rounded-xl transition-all duration-200 border border-neutral-200 dark:border-neutral-700/60"
            >
              <Download className="w-4 h-4 text-[#FFB800]" />
              <span>Resume</span>
            </button>

            <a
              href={PROFILE_DATA.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-[#FFB800]" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Availability & Stack Pills (Clean unboxed text metadata) */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-neutral-500 dark:text-neutral-400">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Available for Full-Time Roles
            </span>
            <span aria-hidden="true">·</span>
            <span>Spring Boot </span>
            <span aria-hidden="true">·</span>
            <span>REST APIs</span>
            <span aria-hidden="true">·</span>
            <span>MySQL / PostgreSQL</span>
            <span aria-hidden="true">·</span>
            <span>React</span>
          </div>

        </div>

        {/* Right Column: Professional Portrait inspired by reference screenshot */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          
          <div className="relative w-full max-w-md sm:max-w-lg aspect-4/5 sm:aspect-square lg:aspect-4/5 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 group shadow-lg flex items-end justify-center">
            
            {/* Background Monogram / Pattern */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-10 dark:opacity-5">
              <span className="text-[12rem] font-black tracking-tighter text-neutral-950 dark:text-white">
                {PROFILE_DATA.monogram}
              </span>
            </div>

            {/* Portrait Image */}
            <div className="relative w-full h-full flex items-end justify-center overflow-hidden">
              {customPhoto ? (
                <img
                  src={customPhoto}
                  alt={PROFILE_DATA.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />
              ) : (
                /* Reference portrait cutout / styled developer portrait */
                <div className="relative w-full h-full flex items-end justify-center">
                  <img
                    src="/assets/aistudio/image_2c3c3440.png"
                    alt={`${PROFILE_DATA.name} - Software Engineer`}
                    onError={() => setPortraitLoaded(false)}
                    className="w-full h-full object-cover object-[75%_top] transition-transform duration-500 group-hover:scale-102"
                  />
                  {/* Subtle gradient scrim at the bottom for polished integration */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/90 dark:from-neutral-900/90 via-transparent to-transparent pointer-events-none" />
                </div>
              )}

              {/* Developer Monogram Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-800/80 flex items-center justify-between shadow-xs">
                <div>
                  <p className="text-xs font-bold text-neutral-900 dark:text-neutral-100">
                    {PROFILE_DATA.name}
                  </p>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    B.E. Computer Engineering
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#FFB800] bg-neutral-900 dark:bg-white dark:text-neutral-900 px-2.5 py-1 rounded-lg">
                  <Zap className="w-3 h-3 fill-current" />
                  <span>Java / SpringBoot / DSA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-3 text-xs text-neutral-400 dark:text-neutral-500">
            <span> </span>
          </div>
        </div>

      </div>
    </section>
  );
};
