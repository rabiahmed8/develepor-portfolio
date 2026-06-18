"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Send,
  Code2,
  Terminal
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, SkillGroup, aboutMe, skills, projects, contactInfo } from "../data/portfolioData";

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

interface FileContentRendererProps {
  fileId: string;
}

// Simple Custom Code Highlighter Utility
const highlightCode = (code: string, lang: string) => {
  if (!code) return [];
  
  const lines = code.split("\n");
  return lines.map((line, idx) => {
    // Escape HTML to prevent injection issues
    let escaped = line
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Syntax rules
    if (lang === "json" || lang === "typescript" || lang === "yaml" || lang === "javascript") {
      // 1. Comments (grey)
      escaped = escaped.replace(/(\/\/.*)$/g, '<span class="text-[#64748b] font-normal italic">$1</span>');
      
      // 2. Strings (green/mint)
      escaped = escaped.replace(/(["'`])(.*?)\1/g, '<span class="text-[#34d399]">$1$2$1</span>');

      // 3. Keywords (pink)
      const keywords = [
        "const", "let", "var", "function", "class", "export", "import", "from", 
        "return", "await", "async", "interface", "private", "public", "extends",
        "implements", "type", "string", "number", "boolean", "new"
      ];
      keywords.forEach((kw) => {
        const regex = new RegExp(`\\b(${kw})\\b`, "g");
        escaped = escaped.replace(regex, '<span class="text-[#f43f5e] font-semibold">$1</span>');
      });

      // 4. Function invocations (sky blue)
      escaped = escaped.replace(/(\b\w+)(?=\()/g, '<span class="text-[#38bdf8]">$1</span>');

      // 5. YAML Keys or JSON keys (yellow/cyan)
      if (lang === "yaml") {
        escaped = escaped.replace(/^(\s*)([\w-]+)(:)/g, '$1<span class="text-[#38bdf8]">$2</span>$3');
      } else if (lang === "json") {
        escaped = escaped.replace(/(["'])(.*?)\1(\s*:)/g, '<span class="text-[#38bdf8]">$1$2$1</span>$3');
      }
      
      // 6. Numbers (orange)
      escaped = escaped.replace(/\b(\d+)\b/g, '<span class="text-[#fb923c]">$1</span>');
    }

    return (
      <div key={idx} className="table-row hover:bg-slate-800/10 transition-colors">
        <span className="table-cell text-right pr-4 pl-2 text-slate-600 select-none text-[10px] w-8">
          {idx + 1}
        </span>
        <span className="table-cell whitespace-pre text-slate-300 font-mono" dangerouslySetInnerHTML={{ __html: escaped || " " }} />
      </div>
    );
  });
};

export const FileContentRenderer: React.FC<FileContentRendererProps> = ({ fileId }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activeView, setActiveView] = useState<"visual" | "code">("visual");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitting(true);
    // Call our actual API Route
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again or use the email link directly.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Helper to render Code Editor Panel
  const renderEditorPanel = (code: string, language: string, filename: string) => {
    return (
      <div className="flex-1 flex flex-col h-full bg-[#070a13] rounded-lg border border-card-border overflow-hidden">
        <div className="px-4 py-2 bg-[#05080f] border-b border-card-border flex items-center justify-between text-slate-400 select-none text-[11px] font-mono">
          <span>{filename}</span>
          <span className="text-[10px] bg-slate-800/60 text-slate-400 px-1.5 py-0.5 rounded font-mono uppercase">
            {language}
          </span>
        </div>
        <div className="flex-1 overflow-auto p-4 font-mono text-xs leading-5">
          <div className="table w-full">
            {highlightCode(code, language)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#0b0f19]">
      {/* Visual / Code Toggle */}
      <div className="px-6 py-2 border-b border-card-border/60 flex items-center justify-between bg-[#080d1a]">
        <h2 className="text-sm font-semibold tracking-wide text-slate-200 font-mono">
          {fileId}
        </h2>
        <div className="flex items-center space-x-1 bg-slate-900 border border-card-border/40 p-0.5 rounded-md text-[11px] font-mono">
          <button
            onClick={() => setActiveView("visual")}
            className={`px-3 py-1 rounded transition-colors ${
              activeView === "visual"
                ? "bg-accent/15 text-accent font-semibold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Visual Preview
          </button>
          <button
            onClick={() => setActiveView("code")}
            className={`px-3 py-1 rounded transition-colors ${
              activeView === "code"
                ? "bg-accent/15 text-accent font-semibold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Source Code
          </button>
        </div>
      </div>

      {/* Main Panel Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8">
        <AnimatePresence mode="wait">
          {activeView === "code" ? (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="h-full flex flex-col"
            >
              {fileId === "about_me.json" &&
                renderEditorPanel(JSON.stringify(aboutMe, null, 2), "json", "about_me.json")}
              {fileId === "skills.ts" &&
                renderEditorPanel(
                  `export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export const skills: { category: string; items: Skill[] }[] = ${JSON.stringify(skills, null, 2)};`,
                  "typescript",
                  "skills.ts"
                )}
              {fileId === "contact_info.yaml" &&
                renderEditorPanel(
                  `contact:
  email: "${contactInfo.email}"
  phone: "${contactInfo.phone}"
  location: "${contactInfo.location}"
  socials:
    github: "${contactInfo.github}"
    linkedin: "${contactInfo.linkedin}"`,
                  "yaml",
                  "contact_info.yaml"
                )}
              {fileId.endsWith(".md") && (() => {
                const proj = projects.find((p) => `${p.id}.md` === fileId);
                return proj
                  ? renderEditorPanel(proj.codeSnippet, proj.codeLanguage, `${proj.id}.${proj.codeLanguage === "typescript" ? "ts" : "js"}`)
                  : <div className="text-slate-400 font-mono text-xs">Project not found</div>;
              })()}
            </motion.div>
          ) : (
            <motion.div
              key="visual"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="space-y-6"
            >
              {/* RENDER: ABOUT ME */}
              {fileId === "about_me.json" && (
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                  <div className="lg:col-span-3 space-y-6">
                    <div className="glassmorphism p-6 rounded-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl" />
                      <span className="text-xs font-mono text-accent font-semibold tracking-wider uppercase block mb-1">
                        System Architect
                      </span>
                      <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">
                        {aboutMe.name}
                      </h1>
                      <p className="text-slate-300 leading-relaxed text-sm mb-4">
                        {aboutMe.bio}
                      </p>
                    </div>

                    {/* Quick Highlights */}
                    <div className="glassmorphism p-6 rounded-xl">
                      <h3 className="text-sm font-semibold text-slate-200 mb-4 uppercase tracking-wider font-mono">
                        Key Competencies
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono text-slate-300">
                        <div className="flex items-center space-x-2">
                          <CheckCircle2 size={14} className="text-accent" />
                          <span>Component-Driven Architecture</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle2 size={14} className="text-accent" />
                          <span>Relational DB Modeling & ORMs</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle2 size={14} className="text-accent" />
                          <span>RESTful API Contract Design</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle2 size={14} className="text-accent" />
                          <span>Automated Testing & Pipelines</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                    {Object.entries(aboutMe.stats).map(([key, val]) => (
                      <div
                        key={key}
                        className="glassmorphism p-4 rounded-xl flex flex-col justify-between hover:border-accent/40 transition-colors group"
                      >
                        <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">
                          {key}
                        </span>
                        <span className="text-2xl font-extrabold text-white mt-4 font-mono group-hover:text-accent transition-colors">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* RENDER: SKILLS */}
              {fileId === "skills.ts" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skills.map((group) => (
                      <div key={group.category} className="glassmorphism p-6 rounded-xl">
                        <h3 className="text-sm font-semibold text-slate-200 font-mono mb-4 border-b border-card-border pb-2 flex items-center">
                          <Code2 size={16} className="text-accent mr-2" />
                          {group.category}
                        </h3>
                        <div className="space-y-4">
                          {group.items.map((skill) => (
                            <div key={skill.name} className="space-y-1.5">
                              <div className="flex justify-between text-xs font-mono text-slate-300">
                                <span>{skill.name}</span>
                                <span className="text-accent/80">{skill.level}%</span>
                              </div>
                              <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 0.8, ease: "easeOut" }}
                                  className="h-full bg-gradient-to-r from-accent to-accent-secondary rounded-full shadow-[0_0_8px_rgba(16,185,129,0.4)]"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* RENDER: PROJECTS */}
              {fileId.endsWith(".md") && (() => {
                const proj = projects.find((p) => `${p.id}.md` === fileId);
                if (!proj) return <div className="text-slate-400 font-mono">Project not found</div>;
                return (
                  <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                    <div className="xl:col-span-3 space-y-6">
                      <div className="glassmorphism p-6 rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl" />
                        <span className="text-xs font-mono text-accent/80 font-semibold uppercase tracking-wider block mb-1">
                          {proj.category}
                        </span>
                        <h1 className="text-2xl font-bold text-white mb-3">
                          {proj.name}
                        </h1>
                        <p className="text-slate-300 leading-relaxed text-sm mb-6">
                          {proj.description}
                        </p>
                        
                        {/* Links */}
                        <div className="flex flex-wrap gap-3">
                          {proj.demoUrl && (
                            <a
                              href={proj.demoUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="px-4 py-2 bg-accent text-slate-950 font-mono text-xs rounded font-semibold hover:bg-accent/90 transition-all flex items-center shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                            >
                              <ExternalLink size={14} className="mr-1.5" />
                              Live Demo
                            </a>
                          )}
                          {proj.githubUrl && (
                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="px-4 py-2 bg-slate-900 border border-card-border/60 text-slate-200 font-mono text-xs rounded hover:bg-slate-800 transition-colors flex items-center"
                            >
                              <GithubIcon className="w-3.5 h-3.5 mr-1.5" />
                              GitHub Repo
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Tech stack tags */}
                      <div className="glassmorphism p-6 rounded-xl">
                        <h3 className="text-xs font-semibold text-slate-400 font-mono uppercase tracking-wider mb-3">
                          Built with
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {proj.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 text-[11px] font-mono bg-accent/10 border border-accent/25 text-accent rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="xl:col-span-2 glassmorphism p-6 rounded-xl flex flex-col justify-start">
                      <h3 className="text-xs font-semibold text-slate-400 font-mono uppercase tracking-wider mb-4 border-b border-card-border pb-2 flex items-center">
                        <Terminal size={14} className="text-accent mr-1.5" />
                        Architecture & Highlights
                      </h3>
                      <ul className="space-y-4">
                        {proj.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-xs leading-relaxed text-slate-300">
                            <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })()}

              {/* RENDER: CONTACT YAML */}
              {fileId === "contact_info.yaml" && (
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                  {/* Form */}
                  <div className="lg:col-span-3 glassmorphism p-6 rounded-xl">
                    <h3 className="text-sm font-semibold text-slate-200 font-mono mb-4 border-b border-card-border pb-2">
                      Send a Message
                    </h3>
                    
                    {formSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-6 text-center space-y-3 bg-accent/10 border border-accent/30 rounded-lg"
                      >
                        <CheckCircle2 size={36} className="text-accent mx-auto" />
                        <h4 className="text-base font-bold text-white">Transmission Successful</h4>
                        <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                          Your contact message has been dispatched to my inbox. I will review it and reply as soon as possible.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs text-slate-300">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-slate-400">Name</label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              placeholder="John Doe"
                              className="w-full px-3 py-2 bg-slate-900 border border-card-border/40 focus:border-accent text-white rounded outline-none transition-colors"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-slate-400">Email Address</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              placeholder="john@example.com"
                              className="w-full px-3 py-2 bg-slate-900 border border-card-border/40 focus:border-accent text-white rounded outline-none transition-colors"
                            />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-slate-400">Message Content</label>
                          <textarea
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            placeholder="Hello, I would love to connect about an opportunity..."
                            className="w-full px-3 py-2 bg-slate-900 border border-card-border/40 focus:border-accent text-white rounded outline-none transition-colors resize-none"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={submitting}
                          className="px-5 py-2.5 bg-accent text-slate-950 rounded font-semibold hover:bg-accent/90 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                        >
                          <Send size={12} />
                          <span>{submitting ? "Sending..." : "Transmit Message"}</span>
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Sidebar Info Cards */}
                  <div className="lg:col-span-2 space-y-4 font-mono text-xs">
                    <div className="glassmorphism p-5 rounded-xl flex items-center space-x-4">
                      <div className="w-10 h-10 rounded bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                        <Mail size={16} />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-slate-500">Email Address</span>
                        <a href={`mailto:${contactInfo.email}`} className="text-sm font-semibold text-slate-200 block hover:text-accent transition-colors mt-0.5">
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="glassmorphism p-5 rounded-xl flex items-center space-x-4">
                      <div className="w-10 h-10 rounded bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                        <Phone size={16} />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-slate-500">Direct Line</span>
                        <span className="text-sm font-semibold text-slate-200 block mt-0.5">
                          {contactInfo.phone}
                        </span>
                      </div>
                    </div>

                    <div className="glassmorphism p-5 rounded-xl flex items-center space-x-4">
                      <div className="w-10 h-10 rounded bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-slate-500">Location Base</span>
                        <span className="text-sm font-semibold text-slate-200 block mt-0.5">
                          {contactInfo.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
