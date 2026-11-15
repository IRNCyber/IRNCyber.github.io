"use client";

import React from "react";
import { Handshake, ArrowUpRight, Globe, Shield, Code2, Users } from "lucide-react";
import { BentoCardFrame } from "./bento-card-frame";

const clients = [
  {
    name: "Tactical Zero",
    category: "Security Platform",
    href: "https://tacticalzero.github.io",
    icon: Shield,
  },
  {
    name: "Homelanders",
    category: "Student Community",
    href: "https://svsu-homelanders.github.io/SVSU/",
    icon: Users,
  },
  {
    name: "Techvengers",
    category: "Innovation Squad",
    href: "https://svsu-homelanders.github.io/SVSU/",
    icon: Code2,
  },
  {
    name: "ZINCOR",
    category: "Web Platform",
    href: "https://zincor.github.io",
    icon: Globe,
  },
  {
    name: "City Tech Collab",
    category: "Tech Initiative",
    href: "https://citytechcollab.github.io",
    icon: Globe,
  },
  {
    name: "CyberOps",
    category: "Security Hub",
    href: "https://irncyber.github.io",
    icon: Shield,
  },
];

export function ClientsCard() {
  return (
    <BentoCardFrame
      icon={Handshake}
      label="MY CLIENTS & INITIATIVES"
      title="Live Deployments"
      id="clients"
      className="h-full min-h-[175px] overflow-hidden"
    >
      <div className="relative my-auto overflow-hidden py-2 mask-gradient-x">
        {/* Continuous marquee row */}
        <div className="flex gap-2.5 w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
          {[...clients, ...clients].map((client, idx) => {
            const Icon = client.icon;
            return (
              <a
                key={`${client.name}-${idx}`}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/client flex items-center gap-2 px-3 py-2 rounded-xl bg-[#141922] border border-white/[0.06] hover:border-[var(--primary)]/50 hover:bg-[#18202d] transition-all duration-200 whitespace-nowrap"
              >
                <div className="w-5 h-5 rounded-md bg-[#0e1218] flex items-center justify-center text-[var(--primary)] border border-white/[0.05]">
                  <Icon className="w-3 h-3 text-[var(--primary)]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-semibold text-zinc-200 group-hover/client:text-[var(--primary)] transition-colors flex items-center gap-1">
                    {client.name}
                    <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover/client:text-[var(--primary)] transition-colors" />
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {client.category}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </BentoCardFrame>
  );
}
