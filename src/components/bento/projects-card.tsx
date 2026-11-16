"use client";

import React, { useRef } from "react";
import { FolderGit2, ArrowUpRight, Sparkles } from "lucide-react";
import { BentoCardFrame } from "./bento-card-frame";
import { projects } from "@/data/projects";

// Visual gradients & styling for project preview thumbnails
const previewColors = [
  "from-emerald-950/60 via-teal-900/30 to-[#0e1218]",
  "from-blue-950/60 via-cyan-900/30 to-[#0e1218]",
  "from-purple-950/60 via-indigo-900/30 to-[#0e1218]",
  "from-cyan-950/60 via-sky-900/30 to-[#0e1218]",
  "from-amber-950/60 via-yellow-900/30 to-[#0e1218]",
  "from-rose-950/60 via-pink-900/30 to-[#0e1218]",
];

export function ProjectsCard() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <BentoCardFrame
      icon={FolderGit2}
      label="PROJECTS"
      title="Works Gallery"
      id="works-gallery"
      className="h-full min-h-[260px] relative overflow-hidden"
    >
      {/* Horizontally scrolling thumbnails container */}
      <div
        ref={scrollRef}
        tabIndex={0}
        role="region"
        aria-label="Recent live projects gallery"
        className="flex gap-3 overflow-x-auto pb-8 pt-1 no-scrollbar scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)]"
      >
        {projects.map((project, idx) => (
          <a
            key={project.title}
            href={project.live || "#projects"}
            target={project.live ? "_blank" : undefined}
            rel={project.live ? "noopener noreferrer" : undefined}
            className="group/thumb snap-center flex-shrink-0 w-[140px] h-[140px] rounded-xl bg-[#141922] border border-white/[0.08] hover:border-[var(--primary)]/60 flex flex-col justify-between p-3 transition-all duration-300 hover:scale-[1.03] overflow-hidden relative"
          >
            {/* Top window dots */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500/70" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/70" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover/thumb:text-[var(--primary)] transition-colors" />
            </div>

            {/* Thumbnail graphic with subtle glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${
                previewColors[idx % previewColors.length]
              } opacity-40 group-hover/thumb:opacity-75 transition-opacity`}
            />

            <div className="relative z-10 mt-auto">
              <span className="text-[10px] font-mono text-[var(--primary)] uppercase tracking-wider block">
                0{idx + 1} · {project.category}
              </span>
              <h4 className="text-xs font-bold text-white tracking-tight line-clamp-1 group-hover/thumb:text-[var(--primary)] transition-colors">
                {project.title}
              </h4>
              <p className="text-[9px] text-zinc-400 line-clamp-1 mt-0.5">
                {project.live ? "Live deployment" : "Case study"}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Overlaid pill button at bottom matching reference screenshot */}
      <div className="absolute inset-x-0 bottom-3 flex justify-center z-20 pointer-events-none">
        <a
          href="#projects"
          className="pointer-events-auto inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[var(--primary)] text-black font-semibold text-xs shadow-lg hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <span>View Works</span>
          <Sparkles className="w-3 h-3 text-black" />
        </a>
      </div>
    </BentoCardFrame>
  );
}
