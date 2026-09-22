"use client";

import React, { useState } from "react";
import {
  Folder,
  FolderOpen,
  FileCode,
  ChevronDown,
  ChevronRight,
  User,
  Code2,
  Mail,
  Briefcase,
  FileText,
  LucideIcon
} from "lucide-react";

import { projects } from "@/data/portfolioData";

interface SidebarProps {
  activeFileId: string;
  onSelectFile: (fileId: string) => void;
  openFiles: string[];
}

interface FileNode {
  id: string;
  name: string;
  type: "file";
  icon: LucideIcon;
}

interface FolderNode {
  name: string;
  type: "folder";
  icon: LucideIcon;
  children: FileNode[];
}

type Node = FolderNode | FileNode;

export const Sidebar: React.FC<SidebarProps> = ({ activeFileId, onSelectFile, openFiles }) => {
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    Profile: true,
    Projects: true,
    Contact: true,
  });

  const toggleFolder = (folderName: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  const fileTree: Node[] = [
    {
      name: "Profile",
      type: "folder",
      icon: User,
      children: [
        { id: "about_me.json", name: "about_me.json", type: "file", icon: User },
        { id: "skills.ts", name: "skills.ts", type: "file", icon: FileCode },
        { id: "experience.json", name: "experience.json", type: "file", icon: Briefcase },
        { id: "resume.md", name: "resume.md", type: "file", icon: FileText },
      ],
    },
    {
      name: "Projects",
      type: "folder",
      icon: Code2,
      children: projects.map((p) => ({
        id: `${p.id}.md`,
        name: `${p.id}.md`,
        type: "file",
        icon: FileCode,
      })),
    },
    {
      name: "Contact",
      type: "folder",
      icon: Mail,
      children: [
        { id: "contact_info.yaml", name: "contact_info.yaml", type: "file", icon: Mail },
      ],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col bg-[#080d1a] border-r border-card-border select-none">
      {/* Sidebar Header */}
      <div className="px-4 py-3 border-b border-card-border flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
          Explorer
        </span>
        <span className="text-[10px] bg-accent/10 border border-accent/20 text-accent px-1.5 py-0.5 rounded-full font-mono font-medium">
          WORKSPACE
        </span>
      </div>

      {/* File Tree */}
      <div className="flex-1 overflow-y-auto py-2 font-mono text-xs">
        {fileTree.map((node) => {
          if (node.type === "folder") {
            const isExpanded = expandedFolders[node.name];
            return (
              <div key={node.name} className="mb-2">
                <button
                  onClick={() => toggleFolder(node.name)}
                  className="w-full px-3 py-1.5 flex items-center text-muted-text hover:bg-accent/5 hover:text-foreground transition-colors text-left"
                >
                  <span className="mr-1">
                    {isExpanded ? (
                      <ChevronDown size={14} className="text-muted-text" />
                    ) : (
                      <ChevronRight size={14} className="text-muted-text" />
                    )}
                  </span>
                  <span className="mr-2 text-accent/80">
                    {isExpanded ? (
                      <FolderOpen size={14} />
                    ) : (
                      <Folder size={14} />
                    )}
                  </span>
                  <span className="font-semibold text-slate-300">{node.name}</span>
                </button>

                {isExpanded && (
                  <div className="pl-6 mt-0.5 space-y-0.5">
                    {node.children.map((file) => {
                      const isActive = activeFileId === file.id;
                      const isOpen = openFiles.includes(file.id);
                      const FileIcon = file.icon;
                      return (
                        <button
                          key={file.id}
                          onClick={() => onSelectFile(file.id)}
                          className={`w-full px-3 py-1 flex items-center transition-colors text-left group ${
                            isActive
                              ? "bg-accent/15 text-accent border-l-2 border-accent font-medium"
                              : "text-slate-400 hover:bg-slate-800/40 hover:text-slate-200 border-l-2 border-transparent"
                          }`}
                        >
                          <FileIcon
                            size={12}
                            className={`mr-2 transition-transform duration-200 ${
                              isActive
                                ? "text-accent scale-110"
                                : "text-slate-500 group-hover:text-slate-400"
                            }`}
                          />
                          <span className="flex-1 truncate">{file.name}</span>
                          {isOpen && (
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/70 shadow-[0_0_8px_rgba(16,185,129,0.7)] ml-2" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
