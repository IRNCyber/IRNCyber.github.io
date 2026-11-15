"use client";

import React from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, ArrowUpRight } from "lucide-react";

export function TimelineSection() {
  return (
    <section id="experience" className="py-12 sm:py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--primary)] uppercase tracking-widest mb-1.5">
            <Briefcase className="w-4 h-4 text-[var(--primary)]" />
            <span>02 / TRAJECTORY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white tracking-tight">
            Experience &amp; Education
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-sm">
          A factual track record of client work, independent technical delivery, and formal studies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Experience Column */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-mono text-[var(--primary)] uppercase tracking-widest flex items-center gap-2 mb-1">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work Experience</span>
          </h3>

          <div className="p-5 rounded-2xl bg-[#0e1218] border border-white/[0.08] hover:border-[var(--primary)]/40 transition-all duration-300">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--primary)]/15 text-[var(--primary)] border border-[var(--primary)]/30 mb-1.5">
                  Freelance
                </span>
                <h4 className="text-base font-bold text-white tracking-tight">
                  Freelance Web Designer &amp; Developer
                </h4>
                <p className="text-xs text-zinc-400">Self Employed · Client Projects</p>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[var(--primary)]" /> Oct 2024 — Present
                </span>
                <span className="text-[10px] text-zinc-500 block mt-0.5">Gurugram / Remote</span>
              </div>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed mt-3">
              Design and develop responsive websites and web applications with HTML, CSS, JavaScript, React, and TypeScript. Work directly with clients to translate business requirements into clean, accessible digital experiences while maintaining mobile responsiveness, cross-browser compatibility, and fast load times.
            </p>

            <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/[0.06]">
              {["React", "TypeScript", "Tailwind CSS", "Security Best Practices", "Responsive UI"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-[#141922] text-[10px] font-mono text-zinc-400 border border-white/[0.04]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education Column */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-mono text-[var(--primary)] uppercase tracking-widest flex items-center gap-2 mb-1">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </h3>

          <div className="flex flex-col gap-3">
            {/* University */}
            <div className="p-5 rounded-2xl bg-[#0e1218] border border-white/[0.08] hover:border-[var(--primary)]/40 transition-all duration-300">
              <div className="flex items-start justify-between gap-2 mb-1">
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                    B.Tech, Cyber Security
                    <a
                      href="https://www.svsu.ac.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-[var(--primary)] transition-colors"
                      aria-label="SVSU website"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Shri Vishwakarma Skill University (SVSU)
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-xs font-mono text-zinc-400">Aug 2026 — Jun 2031</span>
                  <span className="text-[10px] text-zinc-500 block">Gurugram, India</span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 mt-2">
                Undergraduate program focused on systems defense, network security, risk assessment, and cryptographic principles.
              </p>
            </div>

            {/* Schooling */}
            <div className="p-4 rounded-2xl bg-[#0e1218] border border-white/[0.08] hover:border-[var(--primary)]/40 transition-all duration-300">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-xs font-bold text-white">Torch Bearer Convent School</h4>
                  <p className="text-[11px] text-zinc-400">Higher Secondary, PCM · Secondary (89.2%)</p>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">Faridabad, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
