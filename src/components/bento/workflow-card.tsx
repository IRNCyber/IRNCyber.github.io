"use client";

import React from "react";
import { Workflow, FileCheck, Palette, Code2, ShieldCheck, Rocket } from "lucide-react";
import { BentoCardFrame } from "./bento-card-frame";

const workflowSteps = [
  {
    step: "01",
    title: "Requirements",
    desc: "Scope & objectives",
    icon: FileCheck,
  },
  {
    step: "02",
    title: "Design",
    desc: "UI wireframes & flow",
    icon: Palette,
  },
  {
    step: "03",
    title: "Build",
    desc: "React & TypeScript dev",
    icon: Code2,
  },
  {
    step: "04",
    title: "Secure & Test",
    desc: "Audit & cross-browser QA",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Launch",
    desc: "Deploy & client handoff",
    icon: Rocket,
  },
];

export function WorkflowCard() {
  return (
    <BentoCardFrame
      icon={Workflow}
      label="WORK PROCESS"
      title="Workflow Highlights"
      id="workflow"
      className="h-full min-h-[310px]"
    >
      <div className="flex flex-col gap-2 my-auto">
        {workflowSteps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="group/step flex items-center gap-3 px-3 py-2 rounded-xl bg-[#141922] border border-white/[0.05] hover:border-[var(--primary)]/40 hover:bg-[#18202d] transition-all duration-200"
            >
              <div className="w-6 h-6 rounded-lg bg-[#0e1218] border border-white/[0.06] flex items-center justify-center text-zinc-400 group-hover/step:text-[var(--primary)] group-hover/step:border-[var(--primary)]/30 transition-colors flex-shrink-0">
                <Icon className="w-3.5 h-3.5" />
              </div>

              <div className="flex items-center justify-between flex-1 min-w-0">
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-zinc-200 group-hover/step:text-white transition-colors truncate">
                    {step.title}
                  </span>
                  <span className="text-[10px] text-zinc-500 truncate">
                    {step.desc}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[var(--primary)]/80 ml-2">
                  {step.step}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </BentoCardFrame>
  );
}
