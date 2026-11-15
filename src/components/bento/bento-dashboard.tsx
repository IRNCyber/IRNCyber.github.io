"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { TechStackCard } from "./tech-stack-card";
import { ProjectsCard } from "./projects-card";
import { ServicesCard } from "./services-card";
import { StatsCard } from "./stats-card";
import { ProfileCard } from "./profile-card";
import { ClientsCard } from "./clients-card";
import { SecurityTerminalCard } from "./security-terminal-card";
import { OnlinePresenceCard } from "./online-presence-card";
import { WorkflowCard } from "./workflow-card";
import { CtaCard } from "./cta-card";

export function BentoDashboard() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants with 50ms stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="bento-dashboard" aria-label="Bento Portfolio Dashboard" className="relative w-full py-4 sm:py-8">
      {/* Outer Glow container with teal accent below */}
      <div className="relative mx-auto max-w-[1400px]">
        {/* Soft accent dynamic theme glow below the container */}
        <div
          aria-hidden="true"
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-28 blur-[90px] rounded-full pointer-events-none -z-10 transition-colors duration-500"
          style={{ backgroundColor: "rgba(var(--primary-rgb, 25, 211, 181), 0.18)" }}
        />

        {/* Large Rounded Container (rounded-3xl, 1px border rgba(255,255,255,0.08)) holding the whole grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative rounded-3xl bg-[#0b0e14]/95 p-3 sm:p-5 lg:p-6 border border-white/[0.08] shadow-[0_24px_80px_-24px_rgba(0,0,0,0.85)]"
        >
          {/* ========================================================
              DESKTOP LAYOUT (5 Columns, 16px gap, matches reference)
              ======================================================== */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-4 items-stretch">
            {/* COLUMN 1: Three stacked cards (Tech Arsenal, Works Gallery, Services) */}
            <motion.div variants={itemVariants} className="col-span-1 flex flex-col gap-4">
              <TechStackCard />
              <ProjectsCard />
              <ServicesCard />
            </motion.div>

            {/* COLUMNS 2-3: Center Hub (Stats row, Profile card, Live Client Work) */}
            <motion.div variants={itemVariants} className="col-span-2 flex flex-col gap-4">
              <StatsCard />
              <div className="flex-1 flex flex-col">
                <ProfileCard />
              </div>
              <ClientsCard />
            </motion.div>

            {/* COLUMN 4: Security Lab Terminal & Cyber Flash Cards + Online Presence */}
            <motion.div variants={itemVariants} className="col-span-1 flex flex-col gap-4">
              <SecurityTerminalCard />
              <OnlinePresenceCard />
            </motion.div>

            {/* COLUMN 5: Workflow Highlights + Let's Work Together CTA */}
            <motion.div variants={itemVariants} className="col-span-1 flex flex-col gap-4">
              <WorkflowCard />
              <CtaCard />
            </motion.div>
          </div>

          {/* ========================================================
              TABLET LAYOUT (2-column masonry-style grid)
              ======================================================== */}
          <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-4">
            <div className="flex flex-col gap-4">
              <ProfileCard />
              <StatsCard />
              <TechStackCard />
              <ProjectsCard />
              <ServicesCard />
            </div>
            <div className="flex flex-col gap-4">
              <SecurityTerminalCard />
              <ClientsCard />
              <WorkflowCard />
              <OnlinePresenceCard />
              <CtaCard />
            </div>
          </div>

          {/* ========================================================
              MOBILE LAYOUT (Single column in exact requested order:
              Profile, Stats, Projects, Terminal, Stack, Services,
              Clients, Process, Online Presence, Contact CTA)
              ======================================================== */}
          <div className="flex flex-col gap-4 md:hidden">
            {/* 1. Profile */}
            <ProfileCard />
            {/* 2. Stats (3 across) */}
            <StatsCard />
            {/* 3. Projects */}
            <ProjectsCard />
            {/* 4. Terminal & Flash Cards */}
            <SecurityTerminalCard />
            {/* 5. Stack */}
            <TechStackCard />
            {/* 6. Services */}
            <ServicesCard />
            {/* 7. Clients */}
            <ClientsCard />
            {/* 8. Process */}
            <WorkflowCard />
            {/* 9. Online Presence */}
            <OnlinePresenceCard />
            {/* 10. Contact CTA */}
            <CtaCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
