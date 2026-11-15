"use client";

import React from "react";
import { Layers } from "lucide-react";
import { BentoCardFrame } from "./bento-card-frame";

interface TechItem {
  name: string;
  category: string;
  icon: (props: { className?: string }) => React.JSX.Element;
}

// Custom crisp SVG icons for tech arsenal
const ReactIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
    <circle cx="0" cy="0" r="2.05" fill="var(--primary)" />
    <g stroke="var(--primary)" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const TypeScriptIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect width="24" height="24" rx="4" fill="var(--muted)" stroke="color-mix(in srgb, var(--primary) 40%, transparent)" strokeWidth="1.2" />
    <path
      d="M11.7 13.8c-.3-.2-.8-.4-1.4-.4-.7 0-1.2.2-1.5.5-.3.3-.4.8-.4 1.4 0 .6.2 1 .5 1.3.3.3.8.6 1.5.9.8.3 1.5.7 2 1.2.5.5.8 1.2.8 2.1 0 1.1-.4 2-1.2 2.6-.8.6-1.9.9-3.2.9-1 0-1.9-.2-2.7-.6l.5-1.9c.7.4 1.5.7 2.3.7.7 0 1.3-.2 1.6-.5.3-.3.5-.8.5-1.3 0-.6-.2-1-.6-1.3-.4-.3-1-.6-1.8-.9-.8-.3-1.5-.7-2-1.2-.5-.5-.7-1.2-.7-2 0-1 .4-1.9 1.1-2.5.7-.6 1.7-.9 3-.9.9 0 1.7.2 2.4.5l-.5 1.9zM19.9 11.2h-3v11h-2.3v-11h-3V9.3h8.3v1.9z"
      fill="var(--primary)"
    />
  </svg>
);

const PythonIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M11.87 2c-3.1 0-4.9.43-5.83 1.27-.92.83-1.04 1.94-1.04 3.73v1.85h6.97v1h-9.8c-1.8 0-2.9.12-3.73 1.04C-1.4 11.72-1.4 12.83-1.4 14.62c0 1.8.12 2.9 1.04 3.73.92.83 2.03.95 3.82.95h1.9v-2.73c0-2.02 1.73-3.69 3.8-3.69h6.88c1.7 0 3.09-1.4 3.09-3.1V3.1c0-1.7-1.4-3.1-3.1-3.1h-4.26zm-2.08 1.8a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"
      fill="var(--primary)"
      transform="scale(0.85) translate(3, 2)"
    />
    <path
      d="M12.13 22c3.1 0 4.9-.43 5.83-1.27.92-.83 1.04-1.94 1.04-3.73v-1.85h-6.97v-1h9.8c1.8 0 2.9-.12 3.73-1.04.83-.83.83-1.94.83-3.73 0-1.8-.12-2.9-1.04-3.73-.92-.83-2.03-.95-3.82-.95h-1.9v2.73c0 2.02-1.73 3.69-3.8 3.69H8.95c-1.7 0-3.09 1.4-3.09 3.1v6.78c0 1.7 1.4 3.1 3.1 3.1h3.17zm2.08-1.8a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z"
      fill="#0ea5e9"
      transform="scale(0.85) translate(3, 2)"
    />
  </svg>
);

const FirebaseIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.245l3.228 6.079-6.608 9.348zM12.013 7.824l1.83-3.486a.542.542 0 0 1 .978.031l4.98 9.296-7.788-5.841zM2.87 17.039l7.986 4.492a2.35 2.35 0 0 0 2.288 0l7.986-4.492-4.04-7.55-14.22 7.55z"
      fill="#f59e0b"
    />
  </svg>
);

const LinuxIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.2.5 2.3 1.2 3.1C7.6 10.4 7 11.6 7 13c0 1.8 1 3.4 2.5 4.2L8.5 20c-.2.5.1 1 .6 1h5.8c.5 0 .8-.5.6-1l-1-2.8c1.5-.8 2.5-2.4 2.5-4.2 0-1.4-.6-2.6-1.7-3.4.7-.8 1.2-1.9 1.2-3.1C16.5 4 14.5 2 12 2zm-1.5 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
      fill="var(--primary)"
    />
  </svg>
);

const GitIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M21.6 10.9L13.1 2.4a1.8 1.8 0 0 0-2.5 0l-1.9 1.9 3.2 3.2a2.1 2.1 0 0 1 2.7 2.7l3.1 3.1a2.1 2.1 0 1 1-1.3 1.3l-2.9-2.9v4.4a2.1 2.1 0 1 1-1.8 0V11.8a2.1 2.1 0 0 1-1.1-2.7L7.3 5.8 2.4 10.7a1.8 1.8 0 0 0 0 2.5l8.5 8.5a1.8 1.8 0 0 0 2.5 0l8.2-8.3a1.8 1.8 0 0 0 0-2.5z"
      fill="#f97316"
    />
  </svg>
);

const techStack: TechItem[] = [
  { name: "React", category: "Frontend", icon: ReactIcon },
  { name: "TypeScript", category: "Language", icon: TypeScriptIcon },
  { name: "Python", category: "Security/Scripting", icon: PythonIcon },
  { name: "Firebase", category: "Backend/Cloud", icon: FirebaseIcon },
  { name: "Linux", category: "OS / Defense", icon: LinuxIcon },
  { name: "Git", category: "Version Control", icon: GitIcon },
];

export function TechStackCard() {
  return (
    <BentoCardFrame
      icon={Layers}
      label="MY STACK"
      title="Tech Arsenal"
      id="stack"
      className="h-full min-h-[220px]"
    >
      <div className="grid grid-cols-2 gap-2.5 my-auto">
        {techStack.map((tech) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className="flex items-center gap-3 rounded-xl bg-[#141922] px-3.5 py-2.5 border border-white/[0.05] transition-all duration-200 hover:border-[var(--primary)]/40 hover:bg-[#18202d] hover:scale-[1.02] group/item"
            >
              <div className="p-1.5 rounded-lg bg-[#0e1218] border border-white/[0.06] group-hover/item:border-[var(--primary)]/30 flex-shrink-0 transition-colors">
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="block text-xs font-semibold text-zinc-100 group-hover/item:text-[var(--primary)] transition-colors truncate">
                  {tech.name}
                </span>
                <span className="block text-[10px] font-mono text-zinc-500 truncate">
                  {tech.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </BentoCardFrame>
  );
}
