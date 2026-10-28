import React, { useState } from 'react';
import { Search, CheckCircle, Code, Server, Layout, Database, Wrench, Cpu } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/profile.ts';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ElementType> = {
    languages: Code,
    backend: Server,
    frontend: Layout,
    databases: Database,
    tools: Wrench,
    ai: Cpu,
  };

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const matchesCategory = selectedCategory === 'all' || selectedCategory === cat.id;
    if (!matchesCategory) return null;

    const filteredSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredSkills.length === 0) return null;

    return {
      ...cat,
      skills: filteredSkills,
    };
  }).filter(Boolean);

  const levelColorMap = {
    'Project Experience': 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40',
    'Practicing': 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/40',
    'Familiar': 'text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700',
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t border-neutral-200/80 dark:border-neutral-800/80">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FFB800] uppercase">
            <span>02</span>
            <span className="w-6 h-px bg-[#FFB800]" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
            A comprehensive overview of programming languages, backend frameworks, databases, and engineering tools categorized by practical usage.
          </p>
        </div>

        {/* Search input for recruiters */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Search skills (e.g. Spring, SQL)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#FFB800] text-neutral-900 dark:text-neutral-100"
          />
        </div>
      </div>

      {/* Category Filter Tabs (Interactive segmented buttons) */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
            selectedCategory === 'all'
              ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-xs'
              : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
          }`}
        >
          All Skills
        </button>

        {SKILL_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === cat.id
                ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-xs'
                : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((cat) => {
          if (!cat) return null;
          const Icon = categoryIcons[cat.id] || Code;

          return (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/80 border border-neutral-200/90 dark:border-neutral-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-neutral-200/80 dark:border-neutral-800">
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-900 dark:text-[#FFB800]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                    {cat.name}
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="group">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-medium px-2 py-0.5 rounded-sm border ${
                            levelColorMap[skill.level]
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Skill Level Legend / Transparency Statement */}
      <div className="mt-10 p-4 rounded-xl bg-neutral-100/70 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-600 dark:text-neutral-400">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-neutral-900 dark:text-neutral-200">Proficiency Standards:</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Project Experience: Built, tested, and shipped in applications
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Practicing: Active problem-solving & coursework
          </span>
        </div>
        <span className="text-neutral-400 dark:text-neutral-500 italic">No arbitrary percentages; honest developer self-assessment.</span>
      </div>

    </section>
  );
};
