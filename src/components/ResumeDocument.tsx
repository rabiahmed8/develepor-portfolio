"use client";

import React, { useState } from "react";
import {
  Printer,
  ExternalLink,
  Sun,
  Moon,
  Mail,
  MapPin,
  Building2,
  GraduationCap,
  Code2,
  Sparkles,
  Layers,
  Server,
  Database,
  Lock
} from "lucide-react";
import {
  aboutMe,
  contactInfo,
  workExperience,
  projects,
  skills,
  resumeData
} from "../data/portfolioData";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface ResumeDocumentProps {
  showControls?: boolean;
}

export const ResumeDocument: React.FC<ResumeDocumentProps> = ({ showControls = true }) => {
  const [themeMode, setThemeMode] = useState<"cyber" | "paper">("cyber");

  const handlePrint = () => {
    window.print();
  };

  const isCyber = themeMode === "cyber";

  return (
    <div className="resume-document-wrapper w-full flex flex-col items-center">
      {/* Control Bar (Hidden when printing) */}
      {showControls && (
        <div className="no-print w-full max-w-[850px] mb-4 p-3 bg-[#080d1a] border border-card-border rounded-lg flex flex-wrap items-center justify-between gap-3 text-xs font-mono select-none">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-slate-300 font-semibold">
              RESUME SPECIFICATION SHEET (A4 DENSITY)
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {/* Theme mode toggle */}
            <button
              onClick={() => setThemeMode(isCyber ? "paper" : "cyber")}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-slate-900 border border-card-border/60 hover:border-accent/40 text-slate-300 hover:text-white transition-colors"
              title="Toggle between Cyber Dark and Paper White/ATS mode"
            >
              {isCyber ? (
                <>
                  <Sun size={13} className="text-amber-400" />
                  <span>Paper / ATS Mode</span>
                </>
              ) : (
                <>
                  <Moon size={13} className="text-accent" />
                  <span>Cyber Mode</span>
                </>
              )}
            </button>

            {/* Print / Save PDF button */}
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded bg-accent text-slate-950 font-semibold hover:bg-accent/90 transition-all shadow-[0_0_12px_rgba(16,185,129,0.3)]"
            >
              <Printer size={13} />
              <span>Print / Save PDF</span>
            </button>

            {/* Open Fullpage link */}
            <a
              href="/resume"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded bg-slate-900 border border-card-border/60 text-slate-400 hover:text-slate-200 transition-colors"
              title="Open direct fullscreen view"
            >
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      )}

      {/* Printable Sheet Container */}
      <div
        id="resume-sheet"
        className={`resume-print-area w-full max-w-[850px] shadow-2xl transition-colors duration-200 rounded-lg overflow-hidden border ${isCyber
            ? "bg-[#070b14] text-slate-200 border-slate-800"
            : "bg-white text-slate-900 border-slate-300"
          }`}
      >
        {/* ==================== PAGE 1: PROFILE & EXPERIENCE ==================== */}
        <div className="resume-page resume-page-1 flex flex-col">
          {/* Top Header Banner */}
          <header
            className={`p-5 md:p-6 border-b ${isCyber
                ? "bg-[#090f1d] border-slate-800"
                : "bg-slate-50 border-slate-200"
              }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`text-[11px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${isCyber
                        ? "bg-accent/15 text-accent border border-accent/20"
                        : "bg-emerald-100 text-emerald-800 border border-emerald-300"
                      }`}
                  >
                    Curriculum Vitae
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    4+ Years Experience
                  </span>
                </div>

                <h1
                  className={`text-2xl md:text-3xl font-extrabold tracking-tight mt-1 font-mono ${isCyber ? "text-white" : "text-slate-950"
                    }`}
                >
                  {aboutMe.name}
                </h1>

                <p
                  className={`text-sm font-semibold font-mono mt-0.5 ${isCyber ? "text-accent" : "text-emerald-700"
                    }`}
                >
                  {aboutMe.role} • Cloud & Full-Stack Systems
                </p>
              </div>

              {/* Header Contact Matrix */}
              <div
                className={`grid grid-cols-2 gap-x-4 gap-y-1.5 text-[11px] font-mono ${isCyber ? "text-slate-300" : "text-slate-600"
                  }`}
              >
                <div className="flex items-center space-x-1.5">
                  <Mail size={12} className={isCyber ? "text-accent" : "text-emerald-700"} />
                  <a href={`mailto:${contactInfo.email}`} className="hover:underline truncate max-w-[170px]">
                    {contactInfo.email}
                  </a>
                </div>

                <div className="flex items-center space-x-1.5">
                  <MapPin size={12} className={isCyber ? "text-accent" : "text-emerald-700"} />
                  <span>{contactInfo.location}</span>
                </div>

                <div className="flex items-center space-x-1.5">
                  <GithubIcon className={`w-3 h-3 ${isCyber ? "text-accent" : "text-emerald-700"}`} />
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    github.com/rabiahmed8
                  </a>
                </div>

                <div className="flex items-center space-x-1.5">
                  <LinkedinIcon className={`w-3 h-3 ${isCyber ? "text-accent" : "text-emerald-700"}`} />
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    linkedin.com/in/rabi-ahmed
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div
              className={`mt-3.5 pt-2.5 border-t text-[11px] leading-relaxed ${isCyber ? "border-slate-800 text-slate-300" : "border-slate-200 text-slate-700"
                }`}
            >
              <p>
                <strong>Professional Summary:</strong> Results-driven Full-Stack Software Developer specializing in Next.js, React, TypeScript, Node.js, and PostgreSQL. Experienced in architecting low-latency microservices, responsive web portals, and reliable relational schemas. Proven track record of accelerating delivery velocity and boosting database query efficiency.
              </p>
            </div>
          </header>

          {/* 2-Column High-Density Body */}
          <div className="resume-grid-container grid grid-cols-1 md:grid-cols-12 flex-1">
            {/* LEFT SIDEBAR COLUMN (35% width) */}
            <aside
              className={`resume-left-col md:col-span-4 p-4 md:p-5 border-b md:border-b-0 md:border-r space-y-4 text-xs font-mono ${isCyber
                  ? "bg-[#060911] border-slate-800 text-slate-300"
                  : "bg-slate-50/70 border-slate-200 text-slate-800"
                }`}
            >
              {/* SKILLS */}
              <div>
                <div className="flex items-center space-x-2 pb-1.5 mb-2.5">
                  <h2
                    className={`text-xs font-bold uppercase tracking-wider font-mono shrink-0 ${isCyber ? "text-accent" : "text-[#1d4ed8]"
                      }`}
                  >
                    Skills
                  </h2>
                  <div
                    className={`h-[1.5px] flex-1 ${isCyber ? "bg-accent/40" : "bg-[#1d4ed8]"
                      }`}
                  />
                </div>

                <div className="space-y-2.5 text-[10.5px]">
                  {skills.map((group) => (
                    <div key={group.category}>
                      <h3 className={`font-bold mb-0.5 ${isCyber ? "text-slate-200" : "text-slate-900"}`}>
                        {group.category}
                      </h3>
                      <div className="flex items-start space-x-1.5">
                        <span className={`text-xs shrink-0 ${isCyber ? "text-accent" : "text-slate-700"}`}>•</span>
                        <p className={isCyber ? "text-slate-400" : "text-slate-600"}>
                          {group.items.map((i) => i.name).join(", ")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* EDUCATION */}
              <div className="pt-1">
                <div className="flex items-center space-x-2 pb-1.5 mb-2">
                  <h2
                    className={`text-xs font-bold uppercase tracking-wider font-mono shrink-0 ${isCyber ? "text-accent" : "text-[#1d4ed8]"
                      }`}
                  >
                    Education
                  </h2>
                  <div
                    className={`h-[1.5px] flex-1 ${isCyber ? "bg-accent/40" : "bg-[#1d4ed8]"
                      }`}
                  />
                </div>

                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="space-y-1.5 text-[10px]">
                    <div className="flex flex-wrap justify-between items-baseline gap-x-2">
                      <h3 className={`font-bold font-mono text-[10.5px] leading-tight ${isCyber ? "text-white" : "text-slate-950"}`}>
                        {edu.institution} - {edu.degree}
                      </h3>
                      <span className={`font-semibold italic text-[10px] shrink-0 ${isCyber ? "text-accent" : "text-[#1d4ed8]"}`}>
                        {edu.period}
                      </span>
                    </div>

                    <ul className="space-y-1 pt-0.5">
                      {edu.highlights?.map((hl, i) => (
                        <li key={i} className="flex items-start space-x-1.5 leading-relaxed">
                          <span className={`text-xs shrink-0 ${isCyber ? "text-accent" : "text-slate-700"}`}>
                            •
                          </span>
                          <span className={isCyber ? "text-slate-300" : "text-slate-700"}>
                            {hl}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </aside>

            {/* MAIN COLUMN (65% width) - COMPLETE WORK EXPERIENCE */}
            <main className="resume-right-col md:col-span-8 p-4 md:p-5 space-y-3.5">
              {/* WORK EXPERIENCE */}
              <section>
                <div className="flex items-center space-x-2 pb-1.5 mb-2.5">
                  <h2
                    className={`text-xs font-bold uppercase tracking-wider font-mono shrink-0 ${isCyber ? "text-accent" : "text-[#1d4ed8]"
                      }`}
                  >
                    Work Experience
                  </h2>
                  <div
                    className={`h-[1.5px] flex-1 ${isCyber ? "bg-accent/40" : "bg-[#1d4ed8]"
                      }`}
                  />
                  <span className="text-[10px] font-normal text-slate-500 shrink-0 font-mono">
                    Chronological Order
                  </span>
                </div>

                <div className="space-y-3">
                  {workExperience.map((item) => (
                    <div key={item.id} className="resume-experience-item space-y-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                        <div className="flex items-center space-x-1.5">
                          {item.company === "Freelance" ? (
                            <h3 className={`text-xs font-bold font-mono ${isCyber ? "text-white" : "text-slate-950"}`}>
                              Freelance
                            </h3>
                          ) : (
                            <>
                              <h3 className={`text-xs font-bold font-mono ${isCyber ? "text-white" : "text-slate-950"}`}>
                                {item.role}
                              </h3>
                              <span className="text-slate-500 text-xs">|</span>
                              <span className={`text-xs font-semibold font-mono ${isCyber ? "text-slate-300" : "text-slate-800"}`}>
                                {item.company}
                              </span>
                            </>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-[10px] font-mono">
                          <span
                            className={`font-semibold italic ${isCyber ? "text-accent" : "text-[#1d4ed8]"
                              }`}
                          >
                            {item.period}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-0.5 text-[10.5px] pt-0.5">
                        {item.highlights.map((hl, i) => (
                          <li key={i} className="flex items-start space-x-1.5">
                            <span className={`text-xs shrink-0 ${isCyber ? "text-accent" : "text-slate-700"}`}>
                              •
                            </span>
                            <span className={isCyber ? "text-slate-300" : "text-slate-700"}>
                              {hl}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {item.technologies.map((t) => (
                          <span
                            key={t}
                            className={`resume-tag px-1.5 py-0.2 text-[9px] font-mono rounded ${isCyber
                                ? "bg-slate-900/90 border border-slate-800 text-slate-300"
                                : "bg-slate-100 border border-slate-200 text-slate-700"
                              }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </main>
          </div>

          {/* Page 1 Footer */}
          <footer
            className={`p-2.5 px-5 text-center text-[10px] font-mono border-t flex justify-between items-center ${isCyber
                ? "bg-[#05080f] border-slate-800 text-slate-500"
                : "bg-slate-100 border-slate-200 text-slate-600"
              }`}
          >
            <span>Rabi Ahmed • Full-Stack Developer • {contactInfo.email}</span>
            <span>Page 1 of 2</span>
          </footer>
        </div>

        {/* ==================== PAGE 2: FEATURED TECHNICAL PROJECTS ==================== */}
        <div className="resume-page resume-page-2 border-t-2 border-slate-800/60 flex flex-col">
          {/* Page 2 Header Banner */}
          <div
            className={`p-4 md:p-5 border-b flex flex-wrap items-center justify-between gap-2 ${isCyber
                ? "bg-[#090f1d] border-slate-800"
                : "bg-slate-50 border-slate-200"
              }`}
          >
            <div className="flex items-center space-x-2 flex-1">
              <h2 className={`text-xs font-bold uppercase tracking-wider font-mono shrink-0 ${isCyber ? "text-white" : "text-[#1d4ed8]"}`}>
                Featured Technical Projects
              </h2>
              <div className={`h-[1.5px] flex-1 ${isCyber ? "bg-accent/40" : "bg-[#1d4ed8]"}`} />
              <span className={`text-[9.5px] font-mono px-2 py-0.5 rounded border shrink-0 ${isCyber ? "bg-slate-900 border-slate-800 text-accent" : "bg-blue-50 border-blue-200 text-[#1d4ed8]"}`}>
                Open Source & Production
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 shrink-0">
              Rabi Ahmed Portfolio • {contactInfo.github}
            </span>
          </div>

          {/* Featured Projects in a balanced 2-column grid */}
          <div className="resume-projects-grid p-4 md:p-5 grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
            {projects.filter((p) => p.featured !== false).map((proj) => (
              <div
                key={proj.id}
                className={`resume-project-card p-3 rounded-lg border flex flex-col justify-between space-y-1.5 ${isCyber
                    ? "bg-[#05080f]/80 border-slate-800/80"
                    : "bg-slate-50/80 border-slate-200"
                  }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <h3 className={`text-xs font-bold font-mono ${isCyber ? "text-white" : "text-slate-950"}`}>
                      {proj.name}
                    </h3>
                    <div className="flex items-center space-x-2 shrink-0 text-[10px] font-mono">
                      {proj.demoUrl ? (
                        <a
                          href={proj.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`hover:underline flex items-center space-x-0.5 font-semibold ${isCyber ? "text-accent" : "text-emerald-700"
                            }`}
                        >
                          <span>Live</span>
                          <ExternalLink size={8} />
                        </a>
                      ) : proj.demoStatus === "internal" ? (
                        <span
                          className={`flex items-center space-x-0.5 cursor-help ${isCyber ? "text-slate-500" : "text-slate-500"}`}
                          title={proj.demoNote || "Enterprise internal system"}
                        >
                          <span>Internal</span>
                        </span>
                      ) : null}

                      {proj.githubUrl ? (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`hover:underline flex items-center space-x-0.5 ${isCyber ? "text-slate-400 hover:text-accent" : "text-slate-600 hover:text-emerald-700"
                            }`}
                        >
                          <span>Repo</span>
                          <ExternalLink size={8} />
                        </a>
                      ) : proj.isRepoPrivate ? (
                        <span
                          className={`flex items-center space-x-0.5 cursor-help ${isCyber ? "text-slate-500" : "text-slate-500"}`}
                          title={proj.repoNote || "Proprietary client repository (private)"}
                        >
                          <Lock size={8} className="text-slate-500" />
                          <span>Private</span>
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <span
                    className={`inline-block text-[9px] font-mono px-1.5 py-0.2 rounded border mb-1.5 ${isCyber
                        ? "bg-accent/10 border-accent/25 text-accent"
                        : "bg-emerald-100 border-emerald-300 text-emerald-800"
                      }`}
                  >
                    {proj.category}
                  </span>

                  <p className={`text-[10px] leading-relaxed ${isCyber ? "text-slate-300" : "text-slate-700"}`}>
                    {proj.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`resume-tag px-1.5 py-0.2 text-[8.5px] font-mono rounded ${isCyber
                          ? "bg-slate-900/90 border border-slate-800 text-slate-300"
                          : "bg-slate-100 border border-slate-200 text-slate-700"
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Page 2 Footer */}
          <footer
            className={`p-2.5 px-5 text-center text-[10px] font-mono border-t flex justify-between items-center ${isCyber
                ? "bg-[#05080f] border-slate-800 text-slate-500"
                : "bg-slate-100 border-slate-200 text-slate-600"
              }`}
          >
            <span>Rabi Ahmed • Full-Stack Developer • Karachi, Pakistan • {contactInfo.email} • github.com/rabiahmed8</span>
            <span>Page 2 of 2</span>
          </footer>
        </div>
      </div>
    </div>
  );
};
