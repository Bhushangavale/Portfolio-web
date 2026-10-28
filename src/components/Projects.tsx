import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Info, Check, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { PROJECTS, Project } from '../data/profile.ts';
import { ProjectDetailModal } from './ProjectDetailModal.tsx';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'java' | 'fullstack' | 'ai'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t border-neutral-200/80 dark:border-neutral-800/80">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FFB800] uppercase">
            <span>03</span>
            <span className="w-6 h-px bg-[#FFB800]" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            Projects & Architecture
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Real systems built with Java, Spring Boot, clean database architectures, and full-stack integrations. Each project emphasizes maintainability, transactional reliability, and security.
          </p>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200/80 dark:border-neutral-800 shrink-0 overflow-x-auto">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'java', label: 'Java & Blockchain' },
            { id: 'fullstack', label: 'Full Stack' },
            { id: 'ai', label: 'Spring AI & RAG' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap ${
                filter === tab.id
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-2xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 hover:-translate-y-1 shadow-2xs"
          >
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider text-[11px]">
                  {project.category} · Architecture
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-600 dark:text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
                  {project.status}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white group-hover:text-[#FFB800] transition-colors leading-snug">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400 mt-1 mb-4">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Key Features Preview */}
              <div className="space-y-2 mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Key Capabilities:
                </p>
                <ul className="space-y-1.5">
                  {project.keyFeatures.slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                      <span className="text-[#FFB800] font-bold mt-0.5">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Unboxed Text Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2 py-0.5 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between gap-4">
              <button
                onClick={() => setActiveModalProject(project)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-white hover:text-[#FFB800] transition-colors"
              >
                <Info className="w-3.5 h-3.5 text-[#FFB800]" />
                <span>Architecture Deep-Dive</span>
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white rounded-lg hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors"
                  title="View GitHub Repository"
                  aria-label="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white rounded-lg hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors"
                    title="Live Demo"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </section>
  );
};
