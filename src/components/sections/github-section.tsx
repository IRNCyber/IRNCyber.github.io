"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Github, ArrowUpRight, Star } from "lucide-react";
import { useColorTheme } from "@/context/color-theme-context";
import { useTheme } from "next-themes";

interface PublicRepo {
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
}

const profileBadges = [
  {
    label: "CyberOps",
    href: "https://github.com/IRNCyber",
    image: "https://img.shields.io/badge/CyberOps-%23005BAC.svg?logo=github&logoColor=white",
  },
  {
    label: "DevOps",
    href: "https://github.com/IRNDevc",
    image: "https://img.shields.io/badge/DevOps-%23FFFFFF.svg?logo=github&logoColor=black",
  },
  {
    label: "RohanNaagar",
    href: "https://github.com/Rohannaagar666",
    image: "https://img.shields.io/badge/RohanNaagar-%23ED2939.svg?logo=github&logoColor=white",
  },
];

export function GitHubSection() {
  const { currentColor } = useColorTheme();
  const { resolvedTheme } = useTheme();
  const activeColor = resolvedTheme === "light"
    ? currentColor.lightHex ?? currentColor.hex
    : currentColor.hex;
  const colorHex = activeColor.replace("#", "");
  const [repos, setRepos] = useState<PublicRepo[]>([]);
  const [status, setStatus] = useState<"loading" | "live" | "cached" | "error">("loading");

  useEffect(() => {
    let active = true;
    const cacheKey = "irncyber-repos-bento-v1";
    const maxAge = 4 * 60 * 60 * 1000;

    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.savedAt < maxAge && Array.isArray(parsed.repos)) {
          setRepos(parsed.repos);
          setStatus("cached");
        }
      }
    } catch {
      // Fallback
    }

    const controller = new AbortController();
    fetch("https://api.github.com/users/IRNCyber/repos?sort=pushed&per_page=100&type=owner", {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github+json" },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("API error");
        return res.json() as Promise<PublicRepo[]>;
      })
      .then((data) => {
        if (!active) return;
        const valid = data.filter((r) => !r.fork && !r.archived);
        setRepos(valid);
        setStatus("live");
        try {
          localStorage.setItem(cacheKey, JSON.stringify({ savedAt: Date.now(), repos: valid }));
        } catch {
          // Ignore
        }
      })
      .catch(() => {
        if (active && status !== "cached") setStatus("error");
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, [status]);

  const languages = useMemo(() => {
    const counts = new Map<string, number>();
    for (const repo of repos) {
      if (repo.language) counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
  }, [repos]);

  const maxLanguageCount = Math.max(1, ...languages.map(([, count]) => count));
  const recentRepos = repos
    .slice()
    .sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
    .slice(0, 4);

  return (
    <section id="github" className="py-12 sm:py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--primary)] uppercase tracking-widest mb-1.5">
            <Github className="w-4 h-4 text-[var(--primary)]" />
            <span>03 / OPEN SOURCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white tracking-tight">
            GitHub Activity &amp; Repositories
          </h2>
        </div>
        <a
          href="https://github.com/IRNCyber"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)] hover:underline"
        >
          <span>github.com/IRNCyber</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-2.5 mb-5" aria-label="GitHub profile badges">
        {profileBadges.map((badge) => (
          <a key={badge.label} href={badge.href} target="_blank" rel="noopener noreferrer">
            <img src={badge.image} alt={`${badge.label} GitHub profile`} loading="lazy" />
          </a>
        ))}
      </div>

      <article className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-4 p-5 rounded-2xl bg-[#0e1218] border border-white/[0.08] mb-6">
        <div>
          <span className="text-[10px] font-mono text-[var(--primary)] uppercase tracking-wider">
            Featured Repository
          </span>
          <h3 className="text-base font-bold text-white mt-1">Rust Weather App</h3>
          <a
            href="https://github.com/IRNCyber/Rust-Weather--App"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-2 text-xs text-[var(--primary)] hover:underline"
          >
            View repository <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <a
          href="https://github.com/IRNCyber/Rust-Weather--App/graphs/contributors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Rust Weather App contributors on GitHub"
          className="block"
        >
          <img
            src="https://contrib.rocks/image?repo=IRNCyber/Rust-Weather--App&columns=24"
            alt="Contributors to IRNCyber/Rust-Weather--App"
            loading="lazy"
            className="max-w-full h-auto"
          />
        </a>
      </article>

      {/* Contribution Activity Graph */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#0e1218] border border-white/[0.08] hover:border-[var(--primary)]/40 transition-all duration-300 mb-6 overflow-hidden">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-4 pb-3 border-b border-white/[0.06]">
          <span className="flex items-center gap-2 text-[var(--primary)]">
            <Github className="w-4 h-4" />
            <span>CONTRIBUTION HEATMAP</span>
          </span>
          <span className="text-[10px] text-zinc-500 uppercase">Live synced · {currentColor.name}</span>
        </div>

        <div className="overflow-x-auto pb-2">
          {/* Dynamic GitHub chart styled with active theme color */}
          <img
            src={`https://ghchart.rshah.org/${colorHex}/IRNCyber`}
            alt={`GitHub contribution chart for IRNCyber in ${currentColor.name}`}
            className="w-full min-w-[650px] h-auto object-contain filter invert-0 contrast-125 transition-all duration-300"
            loading="lazy"
          />
        </div>
      </div>

      {/* Languages & Recent Repos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Languages Panel */}
        <div className="p-5 rounded-2xl bg-[#0e1218] border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-4 pb-2 border-b border-white/[0.06]">
            <span>Top Languages Across Repos</span>
            <span className="text-[var(--primary)] text-[10px] uppercase font-bold">{status}</span>
          </div>

          {languages.length > 0 ? (
            <div className="flex flex-col gap-2.5">
              {languages.map(([language, count]) => (
                <div key={language} className="flex items-center gap-3 text-xs">
                  <span className="w-24 text-zinc-300 font-medium truncate">{language}</span>
                  <div className="flex-1 h-2 rounded-full bg-[#141922] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${Math.max(12, (count / maxLanguageCount) * 100)}%`,
                        background: "linear-gradient(to right, color-mix(in srgb, var(--primary) 60%, transparent), var(--primary))",
                      }}
                    />
                  </div>
                  <span className="w-6 text-right font-mono text-[10px] text-zinc-400">{count}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-zinc-500 py-4 text-center">
              {status === "error" ? "Unable to load language stats right now." : "Loading repository metrics..."}
            </p>
          )}
        </div>

        {/* Recent Repos Panel */}
        <div className="p-5 rounded-2xl bg-[#0e1218] border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-4 pb-2 border-b border-white/[0.06]">
            <span>Recently Updated Repos</span>
            <a
              href="https://github.com/IRNCyber?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary)] text-[10px] hover:underline flex items-center gap-1"
            >
              <span>View all</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="flex flex-col gap-2">
            {recentRepos.length > 0 ? (
              recentRepos.map((repo) => (
                <a
                  key={repo.full_name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/repo flex items-center justify-between p-2.5 rounded-xl bg-[#141922] border border-white/[0.04] hover:border-[var(--primary)]/40 hover:bg-[#18202d] transition-all"
                >
                  <div className="min-w-0 pr-2">
                    <span className="text-xs font-bold text-zinc-200 group-hover/repo:text-[var(--primary)] transition-colors truncate block">
                      {repo.full_name.split("/").at(-1)}
                    </span>
                    <span className="text-[10px] text-zinc-400 line-clamp-1">
                      {repo.description || "Public repository"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 flex-shrink-0">
                    <span>{repo.language || "code"}</span>
                    <span className="flex items-center gap-0.5 text-amber-400">
                      <Star className="w-2.5 h-2.5 fill-current" />
                      {repo.stargazers_count}
                    </span>
                  </div>
                </a>
              ))
            ) : (
              <p className="text-xs text-zinc-500 py-4 text-center">
                {status === "error" ? "Visit github.com/IRNCyber to explore repositories." : "Loading recent repos..."}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
