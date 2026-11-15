"use client";

import React from "react";
import { Sparkles, ArrowRight, ShieldCheck, Laptop, LayoutTemplate, Layers, CheckCircle } from "lucide-react";
import { BentoCardFrame } from "./bento-card-frame";

const services = [
  { label: "Responsive Web Design", icon: Laptop },
  { label: "Frontend Development", icon: Layers },
  { label: "React Apps", icon: LayoutTemplate },
  { label: "Security-Minded Builds", icon: ShieldCheck },
  { label: "Landing Pages", icon: CheckCircle },
];

export function ServicesCard() {
  return (
    <BentoCardFrame
      icon={Sparkles}
      label="SERVICES"
      title="Solutions Suite"
      id="services"
      className="h-full min-h-[220px] relative overflow-hidden"
    >
      {/* Auto-scrolling marquee container with 2 sets for seamless loop */}
      <div className="relative my-auto overflow-hidden pb-8 pt-2 mask-gradient-x">
        <div className="flex gap-2 w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
          {[...services, ...services].map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={`${service.label}-${index}`}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#141922] border border-white/[0.06] text-zinc-300 text-xs font-medium whitespace-nowrap hover:border-[var(--primary)]/50 hover:text-white transition-colors"
              >
                <Icon className="w-3.5 h-3.5 text-[var(--primary)]" />
                <span>{service.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Overlaid pill button at bottom matching reference screenshot */}
      <div className="absolute inset-x-0 bottom-3 flex justify-center z-20 pointer-events-none">
        <a
          href="#contact"
          className="pointer-events-auto inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-[var(--primary)]/15 border border-[var(--primary)]/40 text-[var(--primary)] hover:bg-[var(--primary)] hover:text-black font-semibold text-xs shadow-md transition-all duration-200 hover:scale-105"
        >
          <span>View All Services</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </BentoCardFrame>
  );
}
