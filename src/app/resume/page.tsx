import type { Metadata } from "next";
import Link from "next/link";
import { ResumeDocument } from "@/components/ResumeDocument";
import { ArrowLeft, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Rabi Ahmed | Full-Stack Developer Resume (CV)",
  description: "High-density printable curriculum vitae and resume for Rabi Ahmed, Full-Stack Software Developer. Next.js, React, TypeScript, Node.js, and PostgreSQL.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#070a13] text-slate-100 flex flex-col items-center py-6 px-4">
      {/* Top Banner Navigation (Hidden in print) */}
      <div className="no-print w-full max-w-[850px] mb-4 flex items-center justify-between text-xs font-mono text-slate-400 border-b border-card-border pb-3">
        <Link
          href="/"
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-slate-900 border border-card-border/60 hover:border-accent/40 text-slate-300 hover:text-accent transition-colors"
        >
          <ArrowLeft size={13} />
          <span>Back to Workspace</span>
        </Link>

        <div className="flex items-center space-x-2 text-slate-400">
          <Terminal size={14} className="text-accent" />
          <span>CyberOS Document Viewer</span>
        </div>
      </div>

      {/* Standalone Resume Document */}
      <main className="w-full flex justify-center">
        <ResumeDocument showControls={true} />
      </main>
    </div>
  );
}
