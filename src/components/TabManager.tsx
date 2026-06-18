"use client";

import React from "react";
import { X, FileCode } from "lucide-react";

interface TabManagerProps {
  openFiles: string[];
  activeFileId: string;
  onSelectFile: (fileId: string) => void;
  onCloseFile: (fileId: string, event: React.MouseEvent) => void;
}

export const TabManager: React.FC<TabManagerProps> = ({
  openFiles,
  activeFileId,
  onSelectFile,
  onCloseFile,
}) => {
  if (openFiles.length === 0) {
    return (
      <div className="h-10 bg-[#070a13] border-b border-card-border flex items-center px-4">
        <span className="text-[10px] text-muted-text font-mono">No files open</span>
      </div>
    );
  }

  return (
    <div className="h-10 bg-[#070a13] border-b border-card-border flex items-center overflow-x-auto select-none scrollbar-none">
      <div className="flex h-full">
        {openFiles.map((fileId) => {
          const isActive = fileId === activeFileId;
          return (
            <div
              key={fileId}
              onClick={() => onSelectFile(fileId)}
              className={`group flex items-center h-full px-4 border-r border-card-border cursor-pointer transition-all ${
                isActive
                  ? "bg-[#0b0f19] text-accent font-medium shadow-[inset_0_-2px_0_0_#10b981]"
                  : "text-slate-400 hover:bg-slate-800/20 hover:text-slate-200"
              }`}
            >
              <FileCode
                size={12}
                className={`mr-2 transition-transform duration-200 ${
                  isActive ? "text-accent scale-110" : "text-slate-500 group-hover:text-slate-400"
                }`}
              />
              <span className="font-mono text-xs truncate max-w-[120px]">
                {fileId}
              </span>
              <button
                onClick={(e) => onCloseFile(fileId, e)}
                className={`ml-2.5 p-0.5 rounded-sm opacity-60 group-hover:opacity-100 hover:bg-accent/10 hover:text-accent transition-colors`}
              >
                <X size={10} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
