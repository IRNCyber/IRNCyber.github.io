import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";
import { BentoDashboard } from "@/components/bento/bento-dashboard";
import { SvsuTeamsSection } from "@/components/sections/svsu-teams-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { GitHubSection } from "@/components/sections/github-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ThemeCustomizer } from "@/components/theme-customizer";
import { WebIcon } from "@/components/web-icon";
import {
  AmbientBackground,
  CommandPalette,
  ProjectExplorer,
  ScrollProgress,
} from "@/components/portfolio-interactions";

export const metadata: Metadata = {
  title: "Rohan Naagar | Cybersecurity Student & Web Developer",
  description:
    "Rohan Naagar is a cybersecurity student and freelance web designer/developer in Gurugram, India, building responsive web experiences and learning security through responsible practice.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <AmbientBackground />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Navigation Header */}
        <header className="flex h-20 items-center justify-between border-b border-white/[0.08] gap-4">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-sm tracking-tight text-white group" aria-label="IRNCyber home">
            <WebIcon className="w-7 h-7 group-hover:scale-105 transition-transform" />
            <span className="font-sans font-bold text-base">
              IRNCyber<span className="text-[var(--primary)]">.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-zinc-400" aria-label="Main navigation">
            <a href="#bento-dashboard" className="hover:text-[var(--primary)] transition-colors">
              Dashboard
            </a>
            <a href="#projects" className="hover:text-[var(--primary)] transition-colors">
              Projects
            </a>
            <a href="#svsu-teams" className="hover:text-[var(--primary)] transition-colors font-semibold text-zinc-300">
              SVSU Teams
            </a>
            <a href="#certifications" className="hover:text-[var(--primary)] transition-colors">
              Certifications
            </a>
            <a href="#experience" className="hover:text-[var(--primary)] transition-colors">
              Experience
            </a>
            <a
              href="https://irncyber.blogspot.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--primary)] transition-colors"
            >
              IRNCyber Blog
            </a>
            <a
              href="https://irndev.blogspot.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--primary)] transition-colors"
            >
              IRNDev Blog
            </a>
            <a href="#contact" className="hover:text-[var(--primary)] transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <CommandPalette />
            <ThemeCustomizer />
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#141922] border border-white/[0.08] hover:border-[var(--primary)] text-xs font-semibold text-zinc-200 hover:text-white transition-all"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--primary)]" />
            </a>
          </div>
        </header>

        <main className="py-6">
          {/* Bento Dashboard Container (matching reference screenshot) */}
          <BentoDashboard />

          {/* Full Case Studies / Project Explorer (anchored by "View Works") */}
          <section id="projects" className="py-12 sm:py-16 border-t border-white/[0.08]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--primary)] uppercase tracking-widest mb-1.5">
                  <FolderGit2 className="w-4 h-4 text-[var(--primary)]" />
                  <span>01 / SELECTED CASE STUDIES</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white tracking-tight">
                  Projects &amp; Live Deployments
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-sm">
                Factual case studies of live security platforms, experiments, and technical web initiatives.
              </p>
            </div>
            <ProjectExplorer projects={projects} />
          </section>

          {/* New Section: SVSU Teams (Homelanders & Techvengers) */}
          <div className="border-t border-white/[0.08]">
            <SvsuTeamsSection />
          </div>

          {/* Below Bento: Certifications Section */}
          <div className="border-t border-white/[0.08]">
            <CertificationsSection />
          </div>

          {/* Below Bento: Experience & Education Timeline */}
          <div className="border-t border-white/[0.08]">
            <TimelineSection />
          </div>

          {/* Below Bento: GitHub Activity & Repositories */}
          <div className="border-t border-white/[0.08]">
            <GitHubSection />
          </div>

          {/* Below Bento: Contact Section */}
          <div className="border-t border-white/[0.08]">
            <ContactSection />
          </div>
        </main>

        {/* Footer */}
        <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-t border-white/[0.08] text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <img src="/irncyber-mark.svg" alt="" aria-hidden="true" className="w-5 h-5 object-contain" />
            <span className="font-semibold text-zinc-300">
              IRNCyber<span className="text-[var(--primary)]">.</span>
            </span>
            <span>— Built with care in Gurugram, India.</span>
          </div>
          <a
            href="#bento-dashboard"
            className="text-zinc-400 hover:text-[var(--primary)] transition-colors"
          >
            Back to top ↑
          </a>
        </footer>
      </div>
    </>
  );
}
