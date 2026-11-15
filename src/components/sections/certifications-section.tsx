"use client";

import React, { useState } from "react";
import Script from "next/script";
import { Award, ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp, Search, ShieldCheck } from "lucide-react";
import { certifications } from "@/data/certifications";

// The 6 prominent relevant certifications specified by user
const featuredTitles = [
  "Cyber Security Associate",
  "Security Analyst Certificate",
  "Cybersecurity",
  "Web Design & Development (English)",
  "Introduction to Programming I",
  "IoT Network Specialist Certificate",
];

export function CertificationsSection() {
  const [expanded, setExpanded] = useState(false);
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState("All");

  const featuredCerts = certifications.filter((c) =>
    featuredTitles.includes(c.title)
  );

  const filteredArchive = certifications.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filterCat === "All" || c.category === filterCat;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="certifications" className="py-12 sm:py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--primary)] uppercase tracking-widest mb-1.5">
            <Award className="w-4 h-4 text-[var(--primary)]" />
            <span>01 / CREDENTIALS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white tracking-tight">
            Relevant Certifications
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-sm">
          Verified skills across cybersecurity, systems, web engineering, and foundational technology.
        </p>
      </div>

      {/* 6 Featured Cards in 2x3 or 3x2 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6">
        {featuredCerts.map((cert) => (
          <div
            key={cert.title}
            className="flex items-start gap-3 p-4 rounded-2xl bg-[#0e1218] border border-white/[0.08] hover:border-[var(--primary)]/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-xl bg-[#141922] border border-white/[0.06] flex items-center justify-center text-[var(--primary)] flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4 text-[var(--primary)]" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-mono text-[var(--primary)] uppercase tracking-wider block mb-0.5">
                {cert.category} {cert.level ? `· ${cert.level}` : ""}
              </span>
              <h3 className="text-sm font-semibold text-white tracking-tight leading-snug">
                {cert.title}
              </h3>
              <p className="text-[11px] text-zinc-400 mt-1">
                {cert.issuer ? `${cert.issuer}${cert.issuedAt ? ` · ${cert.issuedAt}` : ""}` : `${cert.category}${cert.level ? ` · ${cert.level}` : ""}`}
              </p>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-[10px] text-[var(--primary)] hover:underline"
                >
                  View credential <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Expand/Collapse Button for All 24 */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0e1218] border border-white/[0.1] hover:border-[var(--primary)]/50 text-zinc-200 hover:text-white text-xs font-semibold shadow-md transition-all duration-200"
        >
          <span>{expanded ? "Collapse Certifications" : `View all ${certifications.length} Certifications`}</span>
          {expanded ? <ChevronUp className="w-4 h-4 text-[var(--primary)]" /> : <ChevronDown className="w-4 h-4 text-[var(--primary)]" />}
        </button>
      </div>

      {/* Expanded Archive Drawer */}
      {expanded && (
        <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#0e1218] border border-white/[0.08] animate-fade-in">
          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={`Search all ${certifications.length} certifications...`}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#141922] border border-white/[0.08] text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {["All", "Security", "Web", "Technology", "Other"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilterCat(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                    filterCat === cat
                      ? "bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold"
                      : "bg-[#141922] text-zinc-400 hover:text-white border border-white/[0.06]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* List of Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-[360px] overflow-y-auto pr-1">
            {filteredArchive.map((cert) => (
              <div
                key={cert.title}
                className="flex items-center justify-between p-3 rounded-xl bg-[#141922] border border-white/[0.04] text-xs hover:border-[var(--primary)]/30 transition-colors"
              >
                <div className="flex items-start gap-2.5 min-w-0 pr-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="text-zinc-200 font-medium">{cert.title}</span>
                    {(cert.issuer || cert.issuedAt) && (
                      <span className="block text-[10px] text-zinc-500 mt-1">
                        {[cert.issuer, cert.issuedAt].filter(Boolean).join(" · ")}
                      </span>
                    )}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-1 text-[10px] text-[var(--primary)] hover:underline"
                      >
                        Verify credential <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-zinc-500 whitespace-nowrap">
                  {cert.category} {cert.level ? `(${cert.level})` : ""}
                </span>
              </div>
            ))}
            {filteredArchive.length === 0 && (
              <p className="text-xs text-zinc-500 py-4 col-span-2 text-center">
                No certifications found matching &ldquo;{search}&rdquo;.
              </p>
            )}
          </div>
        </div>
      )}

      <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#0e1218] border border-white/[0.08] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 items-center">
        <div>
          <span className="text-[10px] font-mono text-[var(--primary)] uppercase tracking-wider">
            LinkedIn Profile
          </span>
          <h3 className="text-lg font-semibold text-white mt-1">Rohan Naagar</h3>
          <p className="text-xs text-zinc-400 mt-1">
            View the profile and credentials listed on LinkedIn.
          </p>
          <Script src="https://platform.linkedin.com/badges/js/profile.js" strategy="afterInteractive" />
          <div
            className="badge-base LI-profile-badge mt-4"
            data-locale="en_US"
            data-size="medium"
            data-theme="light"
            data-type="VERTICAL"
            data-vanity="rohannaagar"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link"
              href="https://www.linkedin.com/in/rohannaagar?trk=profile-badge"
            >
              Rohan Naagar on LinkedIn
            </a>
          </div>
        </div>
        <a
          href="https://www.linkedin.com/in/rohannaagar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[var(--primary)] hover:underline"
        >
          Open LinkedIn profile <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
