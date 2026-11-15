"use client";

import React from "react";
import { Radio, ArrowUpRight, Github, Linkedin, Shield } from "lucide-react";
import { BentoCardFrame } from "./bento-card-frame";

// Custom simple SVGs for security research platforms
const TryHackMeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1.5l9 5.2v10.6L12 22.5 3 17.3V6.7l9-5.2zm0 3.2L5.5 8.9v6.2L12 18.8l6.5-3.7V8.9L12 4.7z" />
  </svg>
);

const HackTheBoxIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.996 0a1.119 1.119 0 0 0-.56.155L2.25 5.485a1.127 1.127 0 0 0-.564.975v11.08c0 .403.214.774.564.975l9.186 5.33a1.128 1.128 0 0 0 1.124 0l9.186-5.33a1.127 1.127 0 0 0 .564-.975V6.46a1.127 1.127 0 0 0-.564-.975L12.56.155A1.128 1.128 0 0 0 11.996 0z" />
  </svg>
);

const platforms = [
  {
    name: "GitHub",
    handle: "@IRNCyber",
    href: "https://github.com/IRNCyber",
    icon: Github,
  },
  {
    name: "LinkedIn",
    handle: "in/rohannaagar666",
    href: "https://www.linkedin.com/in/rohannaagar666",
    icon: Linkedin,
  },
  {
    name: "TryHackMe",
    handle: "@IRNCyber",
    href: "https://tryhackme.com/p/IRNCyber",
    icon: TryHackMeIcon,
  },
  {
    name: "Hack The Box",
    handle: "@IRNCyber",
    href: "https://app.hackthebox.com/profile/2313221",
    icon: HackTheBoxIcon,
  },
  {
    name: "HackerOne",
    handle: "@IRNCyber",
    href: "https://hackerone.com/IRNCyber",
    icon: Shield,
  },
  {
    name: "Bugcrowd",
    handle: "@IRNCyber",
    href: "https://bugcrowd.com/IRNCyber",
    icon: Shield,
  },
];

export function OnlinePresenceCard() {
  return (
    <BentoCardFrame
      icon={Radio}
      label="FOLLOW ME"
      title="Online Presence"
      id="presence"
      className="h-full min-h-[300px]"
    >
      <div className="flex flex-col gap-1.5 my-auto">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/item flex items-center justify-between px-3 py-2 rounded-xl bg-[#141922] border border-white/[0.05] hover:border-[var(--primary)]/40 hover:bg-[#18202d] transition-all duration-200"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-6 h-6 rounded-lg bg-[#0e1218] border border-white/[0.06] flex items-center justify-center text-zinc-400 group-hover/item:text-[var(--primary)] group-hover/item:border-[var(--primary)]/30 transition-colors flex-shrink-0">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col min-w-0 text-left">
                  <span className="text-xs font-semibold text-zinc-200 group-hover/item:text-white transition-colors truncate">
                    {platform.name}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 truncate">
                    {platform.handle}
                  </span>
                </div>
              </div>

              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover/item:text-[var(--primary)] transition-colors flex-shrink-0" />
            </a>
          );
        })}
      </div>
    </BentoCardFrame>
  );
}
