"use client";

import React, { useState, useRef, useEffect } from "react";
import { terminalResponses } from "../data/portfolioData";

interface CommandTerminalProps {
  onOpenFile: (fileId: string) => void;
}

interface LogItem {
  type: "input" | "output" | "error";
  text: string;
}

export const CommandTerminal: React.FC<CommandTerminalProps> = ({ onOpenFile }) => {
  const [history, setHistory] = useState<LogItem[]>([
    { type: "output", text: "Welcome to CyberOS Terminal v1.0.0." },
    { type: "output", text: 'Type "help" to see available commands or click files in explorer.' }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Interactive contact state
  const [contactStep, setContactStep] = useState<"idle" | "name" | "email" | "message">("idle");
  const [contactData, setContactData] = useState({ name: "", email: "", message: "" });

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Scroll to bottom on updates
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal("");
      }
    }
  };

  const executeCommand = async () => {
    const rawInput = inputVal.trim();
    setInputVal("");
    setHistoryIndex(-1);

    if (!rawInput && contactStep === "idle") return;

    // Push the entered command to logs
    setHistory((prev) => [...prev, { type: "input", text: rawInput }]);

    // Add to commands history
    if (rawInput && contactStep === "idle") {
      setCommandHistory((prev) => [...prev, rawInput]);
    }

    // ----------------------------------------------------
    // INTERACTIVE WIZARD FLOW FOR "run contact"
    // ----------------------------------------------------
    if (contactStep !== "idle") {
      if (contactStep === "name") {
        setContactData((prev) => ({ ...prev, name: rawInput }));
        setHistory((prev) => [...prev, { type: "output", text: `Name recorded. Please enter your email:` }]);
        setContactStep("email");
      } else if (contactStep === "email") {
        if (!rawInput.includes("@")) {
          setHistory((prev) => [...prev, { type: "error", text: "Invalid email address. Please type a valid email:" }]);
          return;
        }
        setContactData((prev) => ({ ...prev, email: rawInput }));
        setHistory((prev) => [...prev, { type: "output", text: "Email recorded. Please enter your message:" }]);
        setContactStep("message");
      } else if (contactStep === "message") {
        const finalData = { ...contactData, message: rawInput };
        setHistory((prev) => [...prev, { type: "output", text: "Sending contact payload..." }]);
        setContactStep("idle");

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(finalData),
          });
          if (res.ok) {
            setHistory((prev) => [
              ...prev,
              { type: "output", text: "SUCCESS: Message sent successfully! I'll contact you soon." }
            ]);
          } else {
            setHistory((prev) => [
              ...prev,
              { type: "error", text: "ERROR: API route responded with error. Please try email direct." }
            ]);
          }
        } catch (e) {
          setHistory((prev) => [
            ...prev,
            { type: "error", text: "ERROR: Network failure. Please try email directly." }
          ]);
        }
        setContactData({ name: "", email: "", message: "" });
      }
      return;
    }

    // ----------------------------------------------------
    // STANDARD COMMAND PARSING
    // ----------------------------------------------------
    const parts = rawInput.split(" ");
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ");

    switch (cmd) {
      case "help":
        setHistory((prev) => [
          ...prev,
          {
            type: "output",
            text: `Available commands:
  neofetch      - Render system neofetch layout.
  about         - Display high-level bio information.
  skills        - Print list of engineering capabilities.
  projects      - List active github/demo projects.
  contact       - Print communication detail channels.
  cat [file]    - Open and display a file inside the editor tabs (e.g. cat about_me.json).
  run contact   - Trigger interactive CLI message submission prompt.
  clear         - Clear terminal output stream.`
          }
        ]);
        break;

      case "clear":
        setHistory([]);
        break;

      case "neofetch":
        setHistory((prev) => [...prev, { type: "output", text: terminalResponses.neofetch }]);
        break;

      case "about":
      case "skills":
      case "projects":
      case "contact":
        setHistory((prev) => [...prev, { type: "output", text: terminalResponses[cmd] }]);
        break;

      case "run":
        if (arg === "contact") {
          setHistory((prev) => [
            ...prev,
            { type: "output", text: "Starting interactive contact wizard..." },
            { type: "output", text: "Please enter your name:" }
          ]);
          setContactStep("name");
        } else {
          setHistory((prev) => [...prev, { type: "error", text: `Unknown executable: "${arg}". Try "run contact".` }]);
        }
        break;

      case "cat":
        if (!arg) {
          setHistory((prev) => [...prev, { type: "error", text: 'Usage: "cat [filename]". Try "cat about_me.json".' }]);
          break;
        }
        
        // Match files
        const validFiles = ["about_me.json", "skills.ts", "doctors-nextjs.md", "design-canvas.md", "contact_info.yaml"];
        if (validFiles.includes(arg)) {
          onOpenFile(arg);
          setHistory((prev) => [...prev, { type: "output", text: `Opening file "${arg}" in workspace view.` }]);
        } else {
          setHistory((prev) => [...prev, { type: "error", text: `cat: File not found: "${arg}".` }]);
        }
        break;

      default:
        setHistory((prev) => [
          ...prev,
          { type: "error", text: `Command not found: "${cmd}". Type "help" for a list of commands.` }
        ]);
        break;
    }
  };

  return (
    <div
      onClick={focusInput}
      className="flex-1 flex flex-col h-full bg-[#070a13] font-mono text-[11px] p-4 overflow-hidden border-t border-card-border cursor-text select-text"
    >
      {/* Logs Scroll Pane */}
      <div className="flex-1 overflow-y-auto space-y-1.5 scrollbar-thin">
        {history.map((log, idx) => {
          if (log.type === "input") {
            return (
              <div key={idx} className="text-slate-300">
                <span className="text-accent/70">visitor@ahmed-portfolio:~$</span>{" "}
                <span>{log.text}</span>
              </div>
            );
          }
          if (log.type === "error") {
            return (
              <div key={idx} className="text-rose-400 whitespace-pre-wrap">
                {log.text}
              </div>
            );
          }
          return (
            <div key={idx} className="text-slate-300 whitespace-pre-wrap leading-relaxed">
              {log.text}
            </div>
          );
        })}
        <div ref={terminalEndRef} />
      </div>

      {/* Input Prompt */}
      <div className="flex items-center text-slate-300 mt-2 border-t border-slate-900 pt-2 shrink-0">
        <span className="text-accent/80 select-none mr-2 shrink-0">
          {contactStep === "idle" ? "visitor@ahmed-portfolio:~$" : `(contact-wizard:${contactStep}) >`}
        </span>
        <div className="flex-1 relative flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent outline-none border-none text-slate-200"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
};
