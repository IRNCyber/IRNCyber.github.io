"use client";

import React, { useState } from "react";
import { Shield, Mail, Calendar, Sparkles } from "lucide-react";
import { BentoCardFrame } from "./bento-card-frame";

export function CtaCard() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <BentoCardFrame
      noHeader
      id="cta"
      className="h-full min-h-[260px] justify-between text-center items-center p-5"
    >
      <div className="flex flex-col items-center justify-center my-auto w-full">
        {/* Crown/Shield Glowing Emblem with active theme color */}
        <div className="relative mb-3">
          <div
            className="w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300"
            style={{
              borderColor: "rgba(var(--primary-rgb, 25, 211, 181), 0.5)",
              backgroundColor: "rgba(var(--primary-rgb, 25, 211, 181), 0.15)",
              color: "var(--primary)",
              boxShadow: "0 0 25px -5px rgba(var(--primary-rgb, 25, 211, 181), 0.4)",
            }}
          >
            <Shield className="w-6 h-6 text-[var(--primary)]" />
          </div>
          <Sparkles className="w-3.5 h-3.5 text-[var(--primary)] absolute -top-1 -right-1 animate-pulse" />
        </div>

        {/* Heading & Subtext */}
        <h3 className="text-lg font-bold font-sans text-white tracking-tight">
          Let&apos;s Work Together
        </h3>
        <p className="text-xs text-zinc-400 mt-1 max-w-[200px]">
          Let&apos;s build something solid.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2 w-full mt-3">
        <a
          href="mailto:rohannaagar666@gmail.com"
          className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[var(--primary)] text-black font-semibold text-xs hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md"
        >
          <Mail className="w-4 h-4 text-black" />
          <span>Email Me</span>
        </a>

        {/* Schedule a call button with "Coming soon" tooltip */}
        <div className="relative w-full">
          <button
            type="button"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowTooltip((prev) => !prev)}
            aria-describedby="booking-tooltip"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#141922] border border-white/[0.08] text-zinc-400 font-semibold text-xs cursor-not-allowed opacity-80 hover:border-white/[0.15] transition-all duration-200"
          >
            <Calendar className="w-4 h-4 text-zinc-400" />
            <span>Schedule a Call</span>
          </button>

          {/* TODO: add calendar booking link (e.g. Cal.com or Calendly) when available */}
          {showTooltip && (
            <div
              id="booking-tooltip"
              role="tooltip"
              className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#10151e] border border-[var(--primary)]/40 text-[var(--primary)] text-[10px] font-mono whitespace-nowrap shadow-xl z-30 animate-fade-in"
            >
              Coming soon (Booking link TODO)
            </div>
          )}
        </div>
      </div>
    </BentoCardFrame>
  );
}
