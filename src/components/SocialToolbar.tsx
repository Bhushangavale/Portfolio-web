import React, { useState } from 'react';
import { Github, Linkedin, Mail, Code2, Check, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

export const SocialToolbar: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.contacts.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: PROFILE_DATA.contacts.github,
      isCopy: false,
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: PROFILE_DATA.contacts.linkedin,
      isCopy: false,
    },
    {
      name: copied ? 'Email Copied!' : 'Copy Email',
      icon: copied ? Check : Mail,
      onClick: copyEmail,
      isCopy: true,
      activeColor: copied ? 'text-emerald-500' : 'text-neutral-900 dark:text-white',
    },
    {
      name: 'LeetCode / Coding',
      icon: Code2,
      href: 'https://leetcode.com/u/Bhushan0073/',
      isCopy: false,
    },
  ];

  return (
    <aside
      className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md p-2.5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs"
      aria-label="Social Profiles Toolbar"
    >
      {socialLinks.map((item, idx) => {
        const Icon = item.icon;
        if (item.isCopy) {
          return (
            <div key={idx} className="relative group">
              <button
                onClick={item.onClick}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FFB800]"
                aria-label={item.name}
              >
                <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${item.activeColor || ''}`} />
              </button>
              {/* Tooltip */}
              <span className="pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 px-2.5 py-1 text-xs font-medium text-white bg-neutral-900 dark:bg-neutral-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
                {item.name}
              </span>
            </div>
          );
        }

        return (
          <div key={idx} className="relative group">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FFB800]"
              aria-label={item.name}
            >
              <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
            </a>
            {/* Tooltip */}
            <span className="pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 px-2.5 py-1 text-xs font-medium text-white bg-neutral-900 dark:bg-neutral-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
              {item.name}
            </span>
          </div>
        );
      })}
    </aside>
  );
};
