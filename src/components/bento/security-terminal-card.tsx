"use client";

import React, { useState, useEffect } from "react";
import { Terminal as TerminalIcon, Sparkles, RefreshCw, HelpCircle } from "lucide-react";
import { BentoCardFrame } from "./bento-card-frame";

const terminalCommands: Record<string, string> = {
  whoami: "Rohan Naagar — B.Tech Cyber Security student & Freelance Web Developer.",
  skills: "Stack: React, TypeScript, Python, Firebase, Linux, Responsive Design.",
  status: "Open to opportunities · Freelance builds & security research.",
  help: "Available: whoami · skills · status · clear",
};

const flashcards = [
  {
    q: "What does the CIA triad stand for?",
    a: "Confidentiality, integrity, and availability — three core tenets of information security.",
  },
  {
    q: "What is the principle of least privilege?",
    a: "Giving each entity only the minimum access rights and resources necessary to fulfill its role.",
  },
  {
    q: "What is Cross-Site Scripting (XSS)?",
    a: "A vulnerability enabling attackers to inject malicious client-side scripts into web pages viewed by others.",
  },
  {
    q: "What is Multi-Factor Authentication (MFA)?",
    a: "Verifying identity using two or more distinct factors: knowledge, possession, or inherence.",
  },
  {
    q: "What does HTTPS protect in transit?",
    a: "TLS encrypts communication between client and server, guaranteeing confidentiality and integrity.",
  },
];

export function SecurityTerminalCard() {
  const [activeCmd, setActiveCmd] = useState<string>("whoami");
  const [cmdText, setCmdText] = useState<string>("");
  const [output, setOutput] = useState<string>(terminalCommands.whoami);
  const [customInput, setCustomInput] = useState<string>("");

  // Flash card state
  const [cardIdx, setCardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Typewriter effect when switching quick commands
  useEffect(() => {
    let current = 0;
    const target = activeCmd;
    setCmdText("");
    const interval = setInterval(() => {
      if (current <= target.length) {
        setCmdText(target.slice(0, current));
        current++;
      } else {
        clearInterval(interval);
        setOutput(terminalCommands[target] || "Command executed.");
      }
    }, 45);
    return () => clearInterval(interval);
  }, [activeCmd]);

  const handleRunCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = customInput.trim().toLowerCase();
    if (clean === "clear") {
      setOutput("");
      setCustomInput("");
      return;
    }
    if (terminalCommands[clean]) {
      setActiveCmd(clean);
    } else {
      setOutput(`Command not found: "${clean}". Try: whoami, skills, status`);
    }
    setCustomInput("");
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCardIdx((prev) => (prev + 1) % flashcards.length);
    }, 150);
  };

  return (
    <BentoCardFrame
      icon={TerminalIcon}
      label="SECURITY LAB"
      title="Interactive Terminal"
      id="security-terminal"
      className="h-full min-h-[350px] justify-between"
    >
      {/* Upper: Interactive Terminal */}
      <div className="rounded-xl bg-[#090d12] border border-white/[0.07] overflow-hidden flex flex-col font-mono text-xs">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-[#10151e] border-b border-white/[0.06]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[10px] text-zinc-400">rohan@irncyber:~</span>
          </div>
          <div className="flex gap-1">
            {["whoami", "skills", "status"].map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={() => setActiveCmd(cmd)}
                className={`text-[9px] px-1.5 py-0.5 rounded transition-colors ${
                  activeCmd === cmd
                    ? "bg-[var(--primary)]/20 text-[var(--primary)] border border-[var(--primary)]/40"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-3 text-[11px] leading-relaxed min-h-[75px] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1 text-[var(--primary)]">
              <span className="text-zinc-500">guest@irncyber:~$</span>
              <span>{cmdText}</span>
              <span className="inline-block w-1.5 h-3 bg-[var(--primary)] animate-pulse" />
            </div>
            {output && <p className="text-zinc-300 mt-1.5 text-[11px]">{output}</p>}
          </div>

          <form onSubmit={handleRunCommand} className="flex items-center gap-1 mt-2 pt-2 border-t border-white/[0.05]">
            <span className="text-[var(--primary)] text-xs">❯</span>
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="type help or whoami..."
              className="w-full bg-transparent text-white placeholder-zinc-600 focus:outline-none text-[10px] font-mono"
            />
          </form>
        </div>
      </div>

      {/* Lower: Cyber Flash Cards (smaller card with flip animation) */}
      <div className="mt-3 pt-3 border-t border-white/[0.06]">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1 text-[10px] font-mono text-[var(--primary)]">
            <HelpCircle className="w-3 h-3" />
            <span className="uppercase tracking-wider">Cyber Flash Cards</span>
          </div>
          <button
            type="button"
            onClick={handleNextCard}
            aria-label="Next flashcard"
            className="flex items-center gap-1 text-[9px] text-zinc-400 hover:text-[var(--primary)] transition-colors"
          >
            <span>Next</span>
            <RefreshCw className="w-2.5 h-2.5" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsFlipped(!isFlipped)}
          className="w-full text-left p-2.5 rounded-xl bg-[#141922] border border-white/[0.06] hover:border-[var(--primary)]/40 transition-all cursor-pointer group/card focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)]"
        >
          <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 mb-1">
            <span className="text-[var(--primary)] font-semibold">
              {isFlipped ? "KEY CONCEPT / ANSWER" : "SECURITY FUNDAMENTAL"}
            </span>
            <span>Card {cardIdx + 1}/{flashcards.length} · Click to flip</span>
          </div>
          <p className="text-xs text-zinc-200 group-hover/card:text-white transition-colors leading-snug">
            {isFlipped ? flashcards[cardIdx].a : flashcards[cardIdx].q}
          </p>
        </button>
      </div>
    </BentoCardFrame>
  );
}
