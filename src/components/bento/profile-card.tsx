"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Languages,
  Code2,
  GraduationCap,
  Clock,
  FileText,
  Mail,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { BentoCardFrame } from "./bento-card-frame";

const infoChips = [
  { label: "Gurugram, India", icon: MapPin },
  { label: "English & Hindi", icon: Languages },
  { label: "Web Developer", icon: Code2 },
  { label: "SVSU (Shri Vishwakarma Skill University)", icon: GraduationCap },
  { label: "IST (UTC+5:30)", icon: Clock },
];

export function ProfileCard() {
  return (
    <BentoCardFrame
      noHeader
      id="about"
      className="h-full justify-between p-5 lg:p-6"
    >
      <div className="flex flex-col gap-4">
        {/* Top Header: Avatar + Status + Resume Button */}
        <div className="flex items-start gap-4">
          {/* Avatar with rounded square & theme background/glow */}
          <div className="relative flex-shrink-0">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-1 border transition-all duration-300 overflow-hidden"
              style={{
                borderColor: "rgba(var(--primary-rgb, 25, 211, 181), 0.5)",
                boxShadow: "0 0 20px -3px rgba(var(--primary-rgb, 25, 211, 181), 0.3)",
                background: "linear-gradient(135deg, rgba(var(--primary-rgb, 25, 211, 181), 0.3) 0%, rgba(var(--primary-rgb, 25, 211, 181), 0.1) 50%, #0e1218 100%)",
              }}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#141922]">
                <Image
                  src="/dp.jpg"
                  alt="Rohan Naagar"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 64px, 80px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Status + Resume row */}
          <div className="flex-1 flex flex-col justify-between min-h-[64px] sm:min-h-[80px]">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              {/* Green pulsing dot status */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Open to work</span>
              </div>

              {/* Resume button */}
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#141922] border border-white/[0.08] hover:border-[var(--primary)] text-zinc-300 hover:text-white text-xs font-semibold transition-all duration-200 hover:scale-105"
              >
                <span>Resume</span>
                <FileText className="w-3.5 h-3.5 text-[var(--primary)]" />
              </a>
            </div>

            {/* Name & Subtitle */}
            <div className="mt-1">
              <h1 className="text-xl sm:text-2xl font-bold font-sans text-white tracking-tight">
                Rohan Naagar
              </h1>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans mt-0.5">
                I&apos;m a Cybersecurity Student &amp; Web Developer
              </p>
            </div>
          </div>
        </div>

        {/* Info chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {infoChips.map((chip) => {
            const Icon = chip.icon;
            return (
              <span
                key={chip.label}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#141922] border border-white/[0.06] text-zinc-300 text-[11px] font-sans hover:border-[var(--primary)]/40 transition-colors"
              >
                <Icon className="w-3 h-3 text-[var(--primary)]" />
                <span>{chip.label}</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Two primary action buttons below */}
      <div className="grid grid-cols-2 gap-3 pt-4 mt-3 border-t border-white/[0.06]">
        <a
          href="mailto:rohannaagar666@gmail.com"
          className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[var(--primary)] text-black font-semibold text-xs sm:text-sm hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md"
        >
          <Mail className="w-4 h-4 text-black" />
          <span>Email Me</span>
        </a>
        <a
          href="https://www.linkedin.com/in/rohannaagar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#141922] border border-white/[0.08] hover:border-[var(--primary)]/50 text-white font-semibold text-xs sm:text-sm hover:bg-[#18202d] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          <Linkedin className="w-4 h-4 text-[var(--primary)]" />
          <span>LinkedIn</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
        </a>
      </div>
    </BentoCardFrame>
  );
}
