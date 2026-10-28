import React, { useEffect } from 'react';
import { X, Printer, Download, ExternalLink, CheckCircle } from 'lucide-react';
import { PROFILE_DATA, SKILL_CATEGORIES, PROJECTS } from '../data/profile.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTextResume = () => {
    const resumeText = `
================================================================================
${PROFILE_DATA.name.toUpperCase()}
${PROFILE_DATA.roleHeadline}
Email: ${PROFILE_DATA.contacts.email} | Location: ${PROFILE_DATA.contacts.location}
GitHub: ${PROFILE_DATA.contacts.github} | LinkedIn: ${PROFILE_DATA.contacts.linkedin}
================================================================================

PROFESSIONAL SUMMARY
${PROFILE_DATA.shortIntro}

CORE TECHNICAL SKILLS
- Programming Languages: Java (11/17/21), SQL, JavaScript, HTML5/CSS3
- Backend Frameworks: Spring Boot 3, Spring MVC, Spring Data JPA, Hibernate, RESTful APIs, Spring Security
- Frontend Technologies: React, TypeScript, Tailwind CSS, Vite
- Databases & Storage: MySQL, PostgreSQL, Redis
- Tools & Practices: Git, Maven, Postman, Docker, IntelliJ IDEA, JUnit, Agile / Scrum
- Emerging / AI: Spring AI, RAG Architectures, pgvector, Ollama

KEY PROJECTS
${PROJECTS.map((p) => `
* ${p.title} (${p.techStack.join(', ')})
  - ${p.description}
  - Architecture: ${p.architectureHighlights[0] || ''}
  - Key Features: ${p.keyFeatures.slice(0, 2).join('; ')}
`).join('\n')}

EDUCATION
${PROFILE_DATA.education.map((e) => `
* ${e.degree}
  ${e.institution} | ${e.year} (${e.status})
`).join('\n')}

CERTIFICATIONS
${PROFILE_DATA.certifications.map((c) => `* ${c.title} - ${c.issuer} (${c.date})`).join('\n')}
================================================================================
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Bhushan_Gavale_Software_Engineer_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-neutral-950/80 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white text-neutral-900 rounded-3xl border border-neutral-200 shadow-2xl flex flex-col overflow-hidden print:max-h-none print:shadow-none print:border-none print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar (hidden in print) */}
        <div className="p-4 sm:p-5 bg-neutral-900 text-white flex items-center justify-between gap-4 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFB800]">
              Resume Preview
            </span>
            <span className="text-neutral-500">·</span>
            <span className="text-xs text-neutral-300">
              {PROFILE_DATA.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadTextResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
              title="Download text resume (.txt)"
            >
              <Download className="w-3.5 h-3.5 text-[#FFB800]" />
              <span className="hidden sm:inline">Download</span> TXT
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white text-neutral-900 hover:bg-[#FFB800] transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-neutral-800 bg-white">
          
          {/* Resume Header */}
          <div className="border-b-2 border-neutral-900 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-neutral-950 uppercase">
                  {PROFILE_DATA.name}
                </h1>
                <p className="text-sm font-bold text-neutral-700 mt-0.5">
                  {PROFILE_DATA.roleHeadline}
                </p>
              </div>

              <div className="text-xs text-neutral-600 sm:text-right space-y-0.5">
                <div>{PROFILE_DATA.contacts.email}</div>
                <div>{PROFILE_DATA.contacts.location}</div>
                <div className="font-mono text-[11px]">github.com · linkedin.com</div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs leading-relaxed text-neutral-700">
              {PROFILE_DATA.shortIntro} Solid grasp of Object-Oriented Programming (OOP), Spring framework ecosystem, relational database modeling, and building high-performance REST APIs. Focused on write-clean, scalable software solutions.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-neutral-700">
              <div><strong className="text-neutral-900">Languages:</strong> Java (11/17/21), SQL, JavaScript, HTML5/CSS3</div>
              <div><strong className="text-neutral-900">Backend:</strong> Spring Boot 3, Spring MVC, REST APIs, Hibernate/JPA</div>
              <div><strong className="text-neutral-900">Databases:</strong> MySQL, PostgreSQL, Relational Schema Design</div>
              <div><strong className="text-neutral-900">Frontend:</strong> React, TypeScript, Tailwind CSS, Vite</div>
              <div><strong className="text-neutral-900">Tools:</strong> Git, GitHub, Maven, Postman, Docker, IntelliJ IDEA</div>
              <div><strong className="text-neutral-900">AI / Cloud:</strong> Spring AI, RAG Pipeline, pgvector, Ollama</div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Key Engineering Projects
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex items-center justify-between font-bold text-neutral-950">
                    <span>{proj.title}</span>
                    <span className="font-mono text-[11px] font-normal text-neutral-600">
                      {proj.techStack.slice(0, 4).join(', ')}
                    </span>
                  </div>
                  <p className="text-neutral-700 text-[11px] mt-0.5 leading-normal">
                    {proj.description}
                  </p>
                  <ul className="list-disc list-inside text-neutral-600 text-[11px] mt-1 space-y-0.5">
                    {proj.keyFeatures.slice(0, 2).map((kf, i) => (
                      <li key={i}>{kf}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Education & Certifications
            </h2>
            <div className="space-y-2 text-xs">
              {PROFILE_DATA.education.map((edu, idx) => (
                <div key={idx} className="flex items-start justify-between">
                  <div>
                    <span className="font-bold text-neutral-950">{edu.degree}</span>
                    <div className="text-neutral-600 text-[11px]">{edu.institution}</div>
                  </div>
                  <div className="font-mono text-[11px] text-neutral-600 text-right">
                    {edu.year} · {edu.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
