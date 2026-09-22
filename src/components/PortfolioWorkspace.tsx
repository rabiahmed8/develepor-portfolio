"use client";

import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { TabManager } from "./TabManager";
import { FileContentRenderer } from "./FileContentRenderer";
import { CommandTerminal } from "./CommandTerminal";
import { Menu, Terminal, X, ChevronDown, ChevronUp, Mail, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { contactInfo, aboutMe } from "../data/portfolioData";

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

export default function PortfolioWorkspace() {
  const [openFiles, setOpenFiles] = useState<string[]>(["about_me.json", "skills.ts", "experience.json"]);
  const [activeFileId, setActiveFileId] = useState<string>("about_me.json");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isTerminalExpanded, setIsTerminalExpanded] = useState(true);

  const handleSelectFile = (fileId: string) => {
    if (!openFiles.includes(fileId)) {
      setOpenFiles((prev) => [...prev, fileId]);
    }
    setActiveFileId(fileId);
  };

  const handleOpenFileFromTerminal = (fileId: string) => {
    handleSelectFile(fileId);
  };

  const handleCloseFile = (fileId: string, event: React.MouseEvent) => {
    event.stopPropagation();

    const updatedOpen = openFiles.filter((id) => id !== fileId);
    setOpenFiles(updatedOpen);

    // If closing active file, shift focus
    if (activeFileId === fileId && updatedOpen.length > 0) {
      setActiveFileId(updatedOpen[updatedOpen.length - 1]);
    } else if (updatedOpen.length === 0) {
      setActiveFileId("");
    }
  };

  return (
    <div className="workspace-container flex-1 flex flex-col h-full bg-[#0b0f19] text-slate-100 overflow-hidden relative">
      {/* Top Navigation Bar */}
      <header className="no-print h-14 bg-[#080d1a] border-b border-card-border flex items-center justify-between px-4 md:px-6 z-20 shrink-0">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1 rounded-md text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 lg:hidden transition-colors"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="flex items-center space-x-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
            <h1 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200">
              {aboutMe.name} <span className="text-slate-500 font-normal">| CyberOS Workspace</span>
            </h1>
          </div>
        </div>

        {/* Quick Links & Status Badge */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={() => handleSelectFile("resume.md")}
            className="hidden md:flex items-center space-x-1.5 px-2.5 py-1 bg-slate-900 border border-card-border/60 hover:border-accent/40 rounded text-xs font-mono text-slate-300 hover:text-accent transition-colors"
          >
            <FileText size={13} className="text-accent" />
            <span>Resume</span>
          </button>

          <span className="hidden sm:inline-flex items-center text-[10px] font-mono bg-accent/15 border border-accent/25 text-accent px-2.5 py-0.5 rounded-full font-medium">
            ● Karachi, PK • Available
          </span>

          <div className="flex items-center space-x-3 text-slate-400 border-l border-slate-800 pl-3 sm:pl-4">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="hover:text-accent transition-colors"
              title="Send Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Workspace Frame */}
      <div className="workspace-main-frame flex-1 flex overflow-hidden relative">
        {/* Sidebar Panel - Desktop Layout */}
        <div className={`no-print hidden lg:block transition-all duration-300 ${isSidebarOpen ? "w-[250px]" : "w-0"} overflow-hidden shrink-0`}>
          <Sidebar
            activeFileId={activeFileId}
            onSelectFile={handleSelectFile}
            openFiles={openFiles}
          />
        </div>

        {/* Sidebar Panel - Mobile Drawer overlay */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="no-print absolute inset-y-0 left-0 w-[240px] z-30 lg:hidden shadow-2xl"
            >
              <Sidebar
                activeFileId={activeFileId}
                onSelectFile={(id) => {
                  handleSelectFile(id);
                  setIsSidebarOpen(false); // Auto-close drawer on mobile selection
                }}
                openFiles={openFiles}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Sidebar overlay backdrop */}
        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="no-print absolute inset-0 bg-black/60 backdrop-blur-xs z-10 lg:hidden"
          />
        )}

        {/* Editor and Terminal Split View */}
        <div className="workspace-pane-inner flex-1 flex flex-col h-full overflow-hidden">
          {/* Document Content Pane */}
          <div className="workspace-content-pane flex-1 flex flex-col overflow-hidden bg-[#0b0f19]">
            <div className="no-print">
              <TabManager
                openFiles={openFiles}
                activeFileId={activeFileId}
                onSelectFile={handleSelectFile}
                onCloseFile={handleCloseFile}
              />
            </div>
            <div className="workspace-file-wrapper flex-1 overflow-hidden">
              {activeFileId ? (
                <FileContentRenderer fileId={activeFileId} />
              ) : (
                <div className="h-full flex flex-col items-center justify-center font-mono text-xs text-slate-500 space-y-3 bg-[#0b0f19]">
                  <Terminal size={32} className="text-slate-700 animate-pulse" />
                  <p>Select a file in Explorer or type &quot;help&quot; in terminal to begin.</p>
                </div>
              )}
            </div>
          </div>

          {/* Terminal Expandable Drawer */}
          <div className="no-print flex flex-col shrink-0">
            {/* Terminal Drawer Header Bar */}
            <div
              onClick={() => setIsTerminalExpanded(!isTerminalExpanded)}
              className="h-8 bg-[#05080f] border-t border-card-border/60 px-4 flex items-center justify-between cursor-pointer select-none text-[11px] font-mono text-slate-400 hover:bg-slate-900/40 transition-colors"
            >
              <div className="flex items-center space-x-2 text-accent">
                <Terminal size={12} />
                <span className="font-semibold uppercase tracking-wider text-[10px]">Console Panel</span>
              </div>
              <div className="flex items-center space-x-1">
                {isTerminalExpanded ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
              </div>
            </div>

            {/* Terminal Console Content */}
            <div className={`transition-all duration-300 overflow-hidden ${isTerminalExpanded ? "h-[200px]" : "h-0"}`}>
              <CommandTerminal onOpenFile={handleOpenFileFromTerminal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
