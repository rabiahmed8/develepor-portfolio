"use client";

import React, { useState } from "react";
import {
  Printer,
  ExternalLink,
  Sun,
  Moon,
  Mail,
  MapPin,
  Globe,
  Phone
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
  const [themeMode, setThemeMode] = useState<"cyber" | "paper">("paper");

  const handlePrint = () => {
    window.print();
  };

  const isCyber = themeMode === "cyber";

  return (
    <div className="resume-document-wrapper w-full flex flex-col items-center">
      {/* Control Bar (Hidden when printing) */}
      {showControls && (
        <div className="no-print w-full max-w-[850px] mb-4 p-3 bg-[#080d1a] border border-card-border rounded-lg flex flex-wrap items-center justify-between gap-3 text-xs font-sans select-none shadow-md">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="text-slate-200 font-semibold tracking-wide">
              CURRICULUM VITAE (PRINT & PDF VIEW)
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {/* Theme mode toggle */}
            <button
              onClick={() => setThemeMode(isCyber ? "paper" : "cyber")}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-slate-900 border border-card-border/60 hover:border-accent/40 text-slate-300 hover:text-white transition-colors"
              title="Toggle between Paper Mode and Dark Mode"
            >
              {isCyber ? (
                <>
                  <Sun size={13} className="text-amber-400" />
                  <span>Paper Mode</span>
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
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded bg-accent text-slate-950 font-semibold hover:bg-accent/90 transition-all shadow-[0_0_12px_rgba(16,185,129,0.3)] cursor-pointer"
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
              title="Open full page view"
            >
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      )}

      {/* Printable Sheet Container */}
      <div
        id="resume-sheet"
        className={`resume-print-area w-full max-w-[850px] shadow-2xl transition-colors duration-200 rounded-lg border ${
          isCyber
            ? "bg-[#070b14] text-slate-200 border-slate-800"
            : "bg-white text-slate-900 border-slate-300"
        }`}
      >
        {/* ==================== PAGE 1: PROFILE & EXPERIENCE ==================== */}
        <div className="resume-page resume-page-1 flex flex-col">
          {/* Top Header Banner */}
          <header
            className={`p-6 border-b ${
              isCyber
                ? "bg-[#090f1d] border-slate-800"
                : "bg-slate-50/80 border-slate-200"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h1
                  className={`text-2xl md:text-3xl font-extrabold tracking-tight font-sans ${
                    isCyber ? "text-white" : "text-slate-950"
                  }`}
                >
                  {aboutMe.name}
                </h1>

                <p
                  className={`text-sm font-semibold font-sans mt-0.5 ${
                    isCyber ? "text-accent" : "text-emerald-700"
                  }`}
                >
                  {aboutMe.role}
                </p>
              </div>

              {/* Header Contact Matrix - 6 Balanced Items with Full Clickable Links */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2 text-[11px] font-sans ${
                  isCyber ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {/* Clickable Portfolio Link */}
                <div className="flex items-center space-x-1.5">
                  <Globe size={12} className={`shrink-0 ${isCyber ? "text-accent" : "text-emerald-700"}`} />
                  <a
                    href={contactInfo.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className={`font-semibold hover:underline ${
                      isCyber ? "text-accent hover:text-accent/90" : "text-emerald-700 hover:text-emerald-800"
                    }`}
                  >
                    rabiahmed-portfolio.vercel.app
                  </a>
                </div>

                {/* Clickable Email */}
                <div className="flex items-center space-x-1.5">
                  <Mail size={12} className={`shrink-0 ${isCyber ? "text-accent" : "text-emerald-700"}`} />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                {/* Clickable Phone */}
                <div className="flex items-center space-x-1.5">
                  <Phone size={12} className={`shrink-0 ${isCyber ? "text-accent" : "text-emerald-700"}`} />
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                    className="hover:underline"
                  >
                    {contactInfo.phone}
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-1.5">
                  <MapPin size={12} className={`shrink-0 ${isCyber ? "text-accent" : "text-emerald-700"}`} />
                  <span>{contactInfo.location}</span>
                </div>

                {/* Clickable GitHub */}
                <div className="flex items-center space-x-1.5">
                  <GithubIcon className={`shrink-0 w-3 h-3 ${isCyber ? "text-accent" : "text-emerald-700"}`} />
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    github.com/rabiahmed8
                  </a>
                </div>

                {/* Clickable LinkedIn */}
                <div className="flex items-center space-x-1.5">
                  <LinkedinIcon className={`shrink-0 w-3 h-3 ${isCyber ? "text-accent" : "text-emerald-700"}`} />
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
              className={`mt-4 pt-3 border-t text-[11px] leading-relaxed font-sans ${
                isCyber ? "border-slate-800 text-slate-300" : "border-slate-200 text-slate-700"
              }`}
            >
              <p>
                <strong className={isCyber ? "text-white" : "text-slate-900"}>Professional Summary: </strong>
                {resumeData.summary}
              </p>
            </div>
          </header>

          {/* 2-Column Balanced Body */}
          <div className="resume-grid-container grid grid-cols-1 md:grid-cols-12 flex-1">
            {/* LEFT SIDEBAR COLUMN (35% width) */}
            <aside
              className={`resume-left-col md:col-span-4 p-5 border-b md:border-b-0 md:border-r space-y-5 text-xs font-sans ${
                isCyber
                  ? "bg-[#060911] border-slate-800 text-slate-300"
                  : "bg-slate-50/60 border-slate-200 text-slate-800"
              }`}
            >
              {/* TECHNICAL SKILLS */}
              <div>
                <div className="flex items-center space-x-2 pb-1.5 mb-3 border-b border-slate-200 dark:border-slate-800">
                  <h2
                    className={`text-xs font-bold uppercase tracking-wider font-sans shrink-0 ${
                      isCyber ? "text-accent" : "text-slate-900"
                    }`}
                  >
                    Technical Skills
                  </h2>
                  <div className={`h-[1px] flex-1 ${isCyber ? "bg-accent/30" : "bg-slate-200"}`} />
                </div>

                <div className="space-y-3 text-[10.5px]">
                  {skills.map((group) => (
                    <div key={group.category} className="space-y-0.5">
                      <h3 className={`font-bold font-sans ${isCyber ? "text-slate-200" : "text-slate-900"}`}>
                        {group.category}
                      </h3>
                      <p className={`font-sans leading-relaxed ${isCyber ? "text-slate-400" : "text-slate-600"}`}>
                        {group.items.map((i) => i.name).join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* EDUCATION */}
              <div className="pt-1">
                <div className="flex items-center space-x-2 pb-1.5 mb-3 border-b border-slate-200 dark:border-slate-800">
                  <h2
                    className={`text-xs font-bold uppercase tracking-wider font-sans shrink-0 ${
                      isCyber ? "text-accent" : "text-slate-900"
                    }`}
                  >
                    Education
                  </h2>
                  <div className={`h-[1px] flex-1 ${isCyber ? "bg-accent/30" : "bg-slate-200"}`} />
                </div>

                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="space-y-1.5 text-[10.5px] font-sans">
                    <div className="flex flex-wrap justify-between items-baseline gap-x-2">
                      <h3 className={`font-bold font-sans text-[11px] leading-tight ${isCyber ? "text-white" : "text-slate-950"}`}>
                        {edu.institution}
                      </h3>
                      <span className={`font-medium italic text-[10px] shrink-0 ${isCyber ? "text-accent" : "text-slate-600"}`}>
                        {edu.period}
                      </span>
                    </div>

                    <p className={`text-[10.5px] font-medium ${isCyber ? "text-slate-300" : "text-slate-800"}`}>
                      {edu.degree}
                    </p>

                    <ul className="space-y-1 pt-0.5">
                      {edu.highlights?.map((hl, i) => (
                        <li key={i} className="flex items-start space-x-1.5 leading-relaxed text-[10px]">
                          <span className={`text-xs shrink-0 ${isCyber ? "text-accent" : "text-slate-500"}`}>•</span>
                          <span className={isCyber ? "text-slate-300" : "text-slate-600"}>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </aside>

            {/* MAIN COLUMN (65% width) - WORK EXPERIENCE */}
            <main className="resume-right-col md:col-span-8 p-5 space-y-4">
              <section>
                <div className="flex items-center space-x-3 pb-1.5 mb-3.5 border-b border-slate-200 dark:border-slate-800">
                  <h2
                    className={`text-xs font-bold uppercase tracking-wider font-sans shrink-0 ${
                      isCyber ? "text-accent" : "text-slate-900"
                    }`}
                  >
                    Work Experience
                  </h2>
                  <div className={`h-[1px] flex-1 ${isCyber ? "bg-accent/30" : "bg-slate-200"}`} />
                </div>

                <div className="space-y-4">
                  {workExperience.map((item) => (
                    <div key={item.id} className="resume-experience-item space-y-1.5 font-sans">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                        <div className="flex flex-wrap items-center gap-x-1.5">
                          <h3 className={`text-xs font-bold font-sans ${isCyber ? "text-white" : "text-slate-950"}`}>
                            {item.role}
                          </h3>
                          <span className="text-slate-400 text-xs">•</span>
                          <span className={`text-xs font-semibold font-sans ${isCyber ? "text-slate-300" : "text-slate-700"}`}>
                            {item.company}
                          </span>
                          <span className="text-slate-400 text-[10px]">({item.location})</span>
                        </div>
                        <span className={`text-[10px] font-medium italic shrink-0 ${isCyber ? "text-accent" : "text-slate-600"}`}>
                          {item.period}
                        </span>
                      </div>

                      <ul className="space-y-1 text-[10.5px] pt-0.5">
                        {item.highlights.map((hl, i) => (
                          <li key={i} className="flex items-start space-x-1.5 leading-relaxed">
                            <span className={`text-xs shrink-0 ${isCyber ? "text-accent" : "text-slate-500"}`}>•</span>
                            <span className={isCyber ? "text-slate-300" : "text-slate-700"}>{hl}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {item.technologies.map((t) => (
                          <span
                            key={t}
                            className={`resume-tag px-1.5 py-0.5 text-[9px] font-sans rounded ${
                              isCyber
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
            className={`p-2.5 px-6 text-[10px] font-sans border-t flex justify-between items-center ${
              isCyber
                ? "bg-[#05080f] border-slate-800 text-slate-400"
                : "bg-slate-50 border-slate-200 text-slate-600"
            }`}
          >
            <div className="flex items-center space-x-2">
              <span>{aboutMe.name}</span>
              <span>•</span>
              <a
                href={contactInfo.portfolio}
                target="_blank"
                rel="noreferrer"
                className="hover:underline font-medium text-emerald-700 dark:text-accent"
              >
                rabiahmed-portfolio.vercel.app
              </a>
              <span>•</span>
              <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                {contactInfo.email}
              </a>
            </div>
            <span className="text-[9.5px]">Page 1 of 2</span>
          </footer>
        </div>

        {/* ==================== PAGE 2: FEATURED TECHNICAL PROJECTS ==================== */}
        <div className="resume-page resume-page-2 border-t-2 border-slate-800/60 flex flex-col">
          {/* Page 2 Header Banner */}
          <div
            className={`p-4 md:p-5 border-b flex flex-wrap items-center justify-between gap-2 ${
              isCyber
                ? "bg-[#090f1d] border-slate-800"
                : "bg-slate-50 border-slate-200"
            }`}
          >
            <div className="flex items-center space-x-3 flex-1">
              <h2 className={`text-xs font-bold uppercase tracking-wider font-sans shrink-0 ${isCyber ? "text-white" : "text-slate-900"}`}>
                Featured Technical Projects
              </h2>
              <div className={`h-[1px] flex-1 ${isCyber ? "bg-slate-800" : "bg-slate-200"}`} />
            </div>
            <div className="flex items-center space-x-2 text-[10.5px] font-sans">
              <a
                href={contactInfo.portfolio}
                target="_blank"
                rel="noreferrer"
                className="hover:underline font-medium text-emerald-700 dark:text-accent"
              >
                rabiahmed-portfolio.vercel.app
              </a>
            </div>
          </div>

          {/* Featured Projects Grid - NO PROJECT LINKS, clean presentation */}
          <div className="resume-projects-grid p-4 md:p-5 grid grid-cols-1 md:grid-cols-2 gap-3.5 flex-1">
            {projects.filter((p) => p.featured !== false).map((proj) => (
              <div
                key={proj.id}
                className={`resume-project-card p-3.5 rounded-lg border flex flex-col justify-between space-y-2 ${
                  isCyber
                    ? "bg-[#05080f]/80 border-slate-800/80"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className={`text-xs font-bold font-sans ${isCyber ? "text-white" : "text-slate-950"}`}>
                      {proj.name}
                    </h3>
                    <span
                      className={`inline-block text-[9px] font-sans px-1.5 py-0.5 rounded font-medium shrink-0 ${
                        isCyber
                          ? "bg-accent/10 border border-accent/25 text-accent"
                          : "bg-slate-100 border border-slate-200 text-slate-700"
                      }`}
                    >
                      {proj.category}
                    </span>
                  </div>

                  <p className={`text-[10px] font-sans leading-relaxed ${isCyber ? "text-slate-300" : "text-slate-700"}`}>
                    {proj.description}
                  </p>

                  {/* Highlights / Key contributions */}
                  {proj.highlights && proj.highlights.length > 0 && (
                    <ul className="mt-2 space-y-1 text-[9.5px] font-sans">
                      {proj.highlights.slice(0, 2).map((hl, i) => (
                        <li key={i} className="flex items-start space-x-1.5 leading-relaxed">
                          <span className={`text-xs shrink-0 ${isCyber ? "text-accent" : "text-slate-500"}`}>•</span>
                          <span className={isCyber ? "text-slate-400" : "text-slate-600"}>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex flex-wrap gap-1 pt-1.5 border-t border-slate-100 dark:border-slate-800/60">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`resume-tag px-1.5 py-0.5 text-[8.5px] font-sans rounded ${
                        isCyber
                          ? "bg-slate-900/90 border border-slate-800 text-slate-300"
                          : "bg-slate-50 border border-slate-200 text-slate-600"
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
            className={`p-2.5 px-6 text-[10px] font-sans border-t flex justify-between items-center ${
              isCyber
                ? "bg-[#05080f] border-slate-800 text-slate-400"
                : "bg-slate-50 border-slate-200 text-slate-600"
            }`}
          >
            <div className="flex items-center space-x-2">
              <span>{aboutMe.name}</span>
              <span>•</span>
              <a
                href={contactInfo.portfolio}
                target="_blank"
                rel="noreferrer"
                className="hover:underline font-medium text-emerald-700 dark:text-accent"
              >
                rabiahmed-portfolio.vercel.app
              </a>
              <span>•</span>
              <a href={contactInfo.github} target="_blank" rel="noreferrer" className="hover:underline">
                github.com/rabiahmed8
              </a>
            </div>
            <span className="text-[9.5px]">Page 2 of 2</span>
          </footer>
        </div>
      </div>
    </div>
  );
};
