"use client";

import React from "react";
import { FolderGit2, Award, Briefcase } from "lucide-react";
import { BentoCardFrame } from "./bento-card-frame";

const stats = [
  {
    num: "06",
    plus: "+",
    label: "Live Projects",
    icon: FolderGit2,
    href: "#projects",
  },
  {
    num: "24",
    plus: "+",
    label: "Certifications",
    icon: Award,
    href: "#certifications",
  },
  {
    num: "Oct'24",
    plus: "+",
    label: "Freelancing",
    icon: Briefcase,
    href: "#experience",
  },
];

export function StatsCard() {
  return (
    <div className="grid grid-cols-3 gap-3 w-full">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <a
            key={stat.label}
            href={stat.href}
            className="group relative flex flex-col items-center justify-center text-center p-3.5 rounded-2xl bg-[#0e1218] border border-white/[0.08] hover:border-[var(--primary)]/50 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-10px_rgba(var(--primary-rgb,25,211,181),0.25)] transition-all duration-300"
          >
            {/* Big typography matching reference screenshot */}
            <div className="flex items-baseline justify-center mb-1">
              <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white group-hover:text-[var(--primary)] transition-colors">
                {stat.num}
              </span>
              <span className="text-xl sm:text-2xl font-bold text-[var(--primary)] ml-0.5">
                {stat.plus}
              </span>
            </div>

            {/* Label with icon */}
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">
              <Icon className="w-3.5 h-3.5 text-[var(--primary)] flex-shrink-0" />
              <span className="font-medium truncate">{stat.label}</span>
            </div>
          </a>
        );
      })}
    </div>
  );
}
