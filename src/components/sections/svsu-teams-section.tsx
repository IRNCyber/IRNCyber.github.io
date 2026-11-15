"use client";

import React from "react";
import { GraduationCap, ShieldCheck, Code2, ArrowUpRight, CheckCircle2, Users, ExternalLink } from "lucide-react";
import { svsuTeams } from "@/data/svsu-teams";

export function SvsuTeamsSection() {
  return (
    <section id="svsu-teams" className="py-12 sm:py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--primary)] uppercase tracking-widest mb-1.5">
            <GraduationCap className="w-4 h-4 text-[var(--primary)]" />
            <span>COLLEGIATE INITIATIVES · SVSU</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white tracking-tight">
            SVSU Teams
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
          Technical communities, cybersecurity initiatives, and engineering teams at Shri Vishwakarma Skill University.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {svsuTeams.map((team, idx) => {
          const isSecurity = team.category === "Cybersecurity";
          const Icon = isSecurity ? ShieldCheck : Code2;

          return (
            <div
              key={team.name}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0e1218] border border-white/[0.08] hover:border-[var(--primary)]/50 hover:-translate-y-1 hover:shadow-[0_12px_36px_-12px_rgba(var(--primary-rgb,25,211,181),0.2)] transition-all duration-300 overflow-hidden"
            >
              {/* Subtle accent glow in top right */}
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[50px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: "var(--primary)" }}
              />

              <div>
                {/* Header: Badge & Icon */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono bg-[var(--primary)]/15 border border-[var(--primary)]/30 text-[var(--primary)] font-semibold">
                    <Users className="w-3 h-3" />
                    <span>{team.badge}</span>
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-[#141922] border border-white/[0.08] flex items-center justify-center text-[var(--primary)]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Team Name & Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans group-hover:text-[var(--primary)] transition-colors">
                  {team.name}
                </h3>
                <p className="text-xs font-mono text-[var(--primary)]/90 mt-0.5 mb-3">
                  {team.tagline}
                </p>

                {/* Description */}
                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  {team.description}
                </p>

                {/* Role Callout */}
                <div className="p-3 rounded-xl bg-[#141922] border border-white/[0.05] mb-4">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                    My Contribution
                  </span>
                  <span className="text-xs font-semibold text-zinc-100">
                    {team.role}
                  </span>
                </div>

                {/* Highlights List */}
                <div className="flex flex-col gap-1.5 mb-5">
                  {team.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Tags & Action Buttons */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {team.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-[#141922] text-[10px] font-mono text-zinc-400 border border-white/[0.04]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {team.live && (
                  <a
                    href={team.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[var(--primary)] text-black font-semibold text-xs hover:opacity-90 transition-opacity flex-shrink-0 shadow-md"
                  >
                    <span>Visit {team.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
