"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Command, Github, Moon, Search, Shuffle, Sun, Terminal } from "lucide-react";
import type { Project, ProjectCategory } from "@/data/projects";
import type { Certification } from "@/data/certifications";
import { useTheme } from "next-themes";
import { motion, useReducedMotion } from "motion/react";

const categories: ("All" | ProjectCategory)[] = ["All", "Security", "Web", "Client", "AI"];
const destinations = [
  ["About", "#about"], ["Projects", "#projects"], ["Security", "#security"],
  ["Flash cards", "#flash-cards"], ["Skills", "#skills"], ["Experience", "#experience"], ["Education", "#education"],
  ["Certifications", "#certifications"], ["GitHub activity", "#github"],
  ["Resume", "/Resume.pdf"], ["Contact", "#contact"],
  ["IRNCyber Blog", "https://irncyber.blogspot.com/"], ["IRNDev Blog", "https://irndev.blogspot.com/"],
];

const studyCards = [
  { front: "What does the CIA triad stand for?", back: "Confidentiality, integrity, and availability — three core goals used to think about information security." },
  { front: "What is multi-factor authentication?", back: "A sign-in method that requires evidence from at least two different factor types, such as knowledge, possession, or inherence." },
  { front: "What is the principle of least privilege?", back: "Give each person or process only the access needed for its task, for only as long as needed." },
  { front: "What is cross-site scripting (XSS)?", back: "A vulnerability where untrusted content is executed as script in another user’s browser." },
  { front: "What does HTTPS protect in transit?", back: "TLS helps protect confidentiality and integrity between a client and server, and authenticates the server when certificates validate." },
  { front: "What is phishing?", back: "A deceptive message or site designed to persuade someone to reveal information or take an unsafe action." },
  { front: "What is a cryptographic hash?", back: "A one-way function that maps data to a fixed-size digest; small input changes should produce a different digest." },
  { front: "What is SQL injection?", back: "An input-handling flaw that lets attacker-controlled data alter a database query. Parameterized queries are a key defense." },
];

export function AmbientBackground() {
  const [seed, setSeed] = useState(0);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    if (reduceMotion) return;
    const pickNext = (value: number) => {
      let next = value;
      while (next === value) next = Math.floor(Math.random() * 4);
      return next;
    };
    setSeed((value) => pickNext(value));
    const timer = window.setInterval(() => setSeed((value) => pickNext(value)), 12_000);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);
  const palettes = [
    ["#19d3b5", "#4267d5", "#a94ed1"],
    ["#20b8a7", "#8a5bd6", "#e2944c"],
    ["#4ca8d8", "#19d3b5", "#d65d8b"],
    ["#39b783", "#6374d8", "#d7a544"],
  ];
  const colors = palettes[seed % palettes.length];
  return <div className="ambient-background" aria-hidden="true" style={{ "--ambient-a": colors[0], "--ambient-b": colors[1], "--ambient-c": colors[2] } as React.CSSProperties} />;
}

export function FlashCards() {
  const [order, setOrder] = useState(() => studyCards.map((_, index) => index));
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = studyCards[order[current]];
  function move(delta: number) {
    setCurrent((value) => (value + delta + order.length) % order.length);
    setFlipped(false);
  }
  function shuffle() {
    setOrder((previous) => {
      const next = [...previous];
      for (let i = next.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [next[i], next[j]] = [next[j], next[i]];
      }
      return next;
    });
    setCurrent(0);
    setFlipped(false);
  }
  return <section className="content-section section-wrap" id="flash-cards">
    <div className="section-heading"><div><span className="eyebrow">QUICK STUDY / 08 CARDS</span><h2>Cybersecurity flash cards.</h2></div><p>Test yourself with short security fundamentals. Select a card to reveal the answer.</p></div>
    <div className="flash-card-area">
      <button type="button" className={`flash-card${flipped ? " is-flipped" : ""}`} onClick={() => setFlipped((value) => !value)} aria-label={`${flipped ? "Answer" : "Question"}: ${flipped ? card.back : card.front}. Click to ${flipped ? "show question" : "reveal answer"}`}>
        <span className="eyebrow">{flipped ? "ANSWER" : "QUESTION"}</span><span className="flash-card-text">{flipped ? card.back : card.front}</span><span className="flash-card-hint">Click to {flipped ? "see question" : "reveal answer"}</span>
      </button>
      <div className="flash-card-controls"><button type="button" className="filter-chip" onClick={() => move(-1)} aria-label="Previous flash card"><ArrowLeft size={15} /> Previous</button><span className="mono">{current + 1} / {order.length}</span><button type="button" className="filter-chip" onClick={() => move(1)}>Next <ArrowRight size={15} /></button><button type="button" className="filter-chip" onClick={shuffle}><Shuffle size={14} /> Shuffle</button></div>
    </div>
  </section>;
}

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const reduceMotion = useReducedMotion();
  const items = projects.filter((project) => active === "All" || project.category === active);
  return <>
    <div className="filter-row" role="group" aria-label="Filter projects">
      {categories.map((category) => <button key={category} type="button" onClick={() => setActive(category)} aria-pressed={active === category} className={`filter-chip ${active === category ? "is-active" : ""}`}>{category}</button>)}
    </div>
    <div className="project-grid">
      {items.map((project, index) => <motion.article className="project-card" key={project.title} initial={reduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.35, delay: index * 0.04 }}>
        <div className="project-visual" aria-label={`${project.title} project preview placeholder`}>
          <div className="window-bar"><i /><i /><i /><span>{project.category.toLowerCase()} / {project.title.toLowerCase().replaceAll(" ", "-")}</span></div>
          <div className="preview-content"><span className="preview-index">0{projects.indexOf(project) + 1}</span><span>{project.title}</span><small>PROJECT PREVIEW · SCREENSHOT TODO</small></div>
        </div>
        <div className="project-body">
          <div className="project-heading"><span className="eyebrow">{project.category}{project.featured ? " · FEATURED" : ""}</span><h3>{project.title}</h3></div>
          <p>{project.summary}</p>
          <dl className="project-facts"><div><dt>Problem</dt><dd>{project.problem}</dd></div><div><dt>My role</dt><dd>{project.role}</dd></div><div><dt>Outcome</dt><dd>{project.outcome}</dd></div></dl>
          <div className="tag-row">{project.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
          <div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live site <ArrowUpRight size={15} /></a>}{project.source && <a href={project.source} target="_blank" rel="noreferrer">Source <Github size={15} /></a>}</div>
        </div>
      </motion.article>)}
    </div>
  </>;
}

export function CertificationArchive({ items }: { items: Certification[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const archive = items.slice(8).filter((item) => (category === "All" || item.category === category) && item.title.toLowerCase().includes(query.toLowerCase()));
  return <details className="cert-archive"><summary>More certifications <span>{items.length - 8} listed</span></summary>
    <div className="cert-tools"><label className="cert-search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search certifications" /></label><select aria-label="Filter certifications by category" value={category} onChange={(event) => setCategory(event.target.value)}><option>All</option><option>Security</option><option>Web</option><option>Technology</option><option>Other</option></select></div>
    <div className="cert-list">{archive.map((item) => <div className="cert-row" key={item.title}><span>{item.title}</span><span>{item.category}{item.level ? ` · ${item.level}` : ""}</span></div>)}{archive.length === 0 && <p className="muted">No matching certifications.</p>}</div>
  </details>;
}

export function TerminalWidget() {
  const [command, setCommand] = useState("");
  const [answer, setAnswer] = useState("Type help to see available commands.");
  function run(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cmd = command.trim().toLowerCase();
    const responses: Record<string, string> = {
      help: "Available: about · skills · projects · contact",
      about: "Rohan Naagar — cybersecurity student and freelance web designer/developer in Gurugram, India.",
      skills: "Web: HTML, CSS, JavaScript, React, TypeScript. Security: cybersecurity fundamentals and Linux.",
      projects: "Browse selected web and security projects in the Projects section.",
      contact: "Email: rohannaagar666@gmail.com",
    };
    setAnswer(responses[cmd] ?? `Command not found: ${cmd || "(empty)"}. Type help for options.`);
    setCommand("");
  }
  return <div className="terminal" aria-label="Interactive portfolio terminal">
    <div className="terminal-top"><span><Terminal size={15} /> rohan@irncyber:~</span><span>interactive terminal</span></div>
    <div className="terminal-content"><p className="terminal-output" aria-live="polite">{answer}</p><form onSubmit={run} className="terminal-form"><label htmlFor="terminal-command"><span aria-hidden="true">❯</span><span className="sr-only">Enter a terminal command</span></label><input id="terminal-command" value={command} onChange={(event) => setCommand(event.target.value)} autoComplete="off" placeholder="help" /><button type="submit" aria-label="Run command"><ArrowDown size={16} /></button></form><noscript><p>Use the navigation links above to explore projects, security notes, and contact details.</p></noscript></div>
  </div>;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => destinations.filter(([label, href]) => `${label} ${href}`.toLowerCase().includes(query.toLowerCase())), [query]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setOpen((value) => !value); }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <>
    <button className="palette-trigger" type="button" onClick={() => setOpen(true)} aria-label="Open navigation command palette"><Command size={15} /><span>Quick navigation</span><kbd>⌘ / Ctrl K</kbd></button>
    {open && <div className="palette-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
      <section className="palette" role="dialog" aria-modal="true" aria-label="Quick navigation">
        <label className="palette-search"><Search size={17} /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Where would you like to go?" /></label>
        <div className="palette-results">{filtered.map(([label, href]) => <a key={href} href={href} target={href.startsWith("https://") ? "_blank" : undefined} rel={href.startsWith("https://") ? "noreferrer" : undefined} onClick={() => setOpen(false)}><span>{label}</span><span className="palette-href">{href}</span></a>)}{!filtered.length && <p>No matching sections.</p>}</div>
        <div className="palette-foot"><span>Navigate</span><span>esc to close</span></div>
      </section>
    </div>}
  </>;
}

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try { await navigator.clipboard.writeText("rohannaagar666@gmail.com"); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = "mailto:rohannaagar666@gmail.com"; }
  }
  return <button className="button button-secondary" type="button" onClick={copyEmail}>{copied ? "Email copied" : "Copy email"}</button>;
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => { const max = document.documentElement.scrollHeight - window.innerHeight; setProgress(max > 0 ? (window.scrollY / max) * 100 : 0); };
    update(); window.addEventListener("scroll", update, { passive: true }); window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const sections = document.querySelectorAll<HTMLElement>(".site-shell main > section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -7% 0px" });
    sections.forEach((section) => { section.classList.add("scroll-reveal"); observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  return <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />;
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  return <button className="theme-toggle" type="button" onClick={() => setTheme(isDark ? "light" : "dark")} aria-label={`Switch to ${isDark ? "light" : "dark"} theme`} title={`Switch to ${isDark ? "light" : "dark"} theme`}>{isDark ? <Sun size={15} /> : <Moon size={15} />}</button>;
}

type PublicRepo = {
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
};

export function GitHubLiveDetails() {
  const [repos, setRepos] = useState<PublicRepo[]>([]);
  const [status, setStatus] = useState<"loading" | "live" | "cached" | "error">("loading");
  useEffect(() => {
    let active = true;
    const cacheKey = "irncyber-public-repos-v1";
    const maxAge = 6 * 60 * 60 * 1000;
    let hasCache = false;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const entry = JSON.parse(cached) as { savedAt: number; repos: PublicRepo[] };
        if (Date.now() - entry.savedAt < maxAge && Array.isArray(entry.repos)) {
          hasCache = true;
          setRepos(entry.repos);
          setStatus("cached");
        }
      }
    } catch { /* Ignore invalid or unavailable browser storage. */ }
    const controller = new AbortController();
    fetch("https://api.github.com/users/IRNCyber/repos?sort=pushed&per_page=100&type=owner", { signal: controller.signal, headers: { Accept: "application/vnd.github+json" } })
      .then(async (response) => {
        if (!response.ok) throw new Error("GitHub API unavailable");
        return response.json() as Promise<PublicRepo[]>;
      })
      .then((data) => {
        if (!active) return;
        const clean = data.filter((repo) => !repo.fork && !repo.archived);
        setRepos(clean);
        setStatus("live");
        try { localStorage.setItem(cacheKey, JSON.stringify({ savedAt: Date.now(), repos: clean })); } catch { /* Caching is optional. */ }
      })
      .catch(() => { if (active && !hasCache) setStatus("error"); });
    return () => { active = false; controller.abort(); };
  }, []);
  const languages = useMemo(() => {
    const counts = new Map<string, number>();
    for (const repo of repos) if (repo.language) counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
  }, [repos]);
  const maxLanguageCount = Math.max(1, ...languages.map(([, count]) => count));
  const recent = repos.slice().sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at)).slice(0, 4);
  return <div className="github-details"><div className="language-panel"><div className="github-panel-head"><span>Languages across public repositories</span><span className="mono">{status === "live" ? "LIVE" : status === "cached" ? "CACHED" : status === "loading" ? "LOADING" : "PROFILE"}</span></div>{languages.length ? <div className="language-bars">{languages.map(([language, count]) => <div className="language-bar" key={language}><span>{language}</span><div><i style={{ width: `${Math.max(9, (count / maxLanguageCount) * 100)}%` }} /></div><small>{count}</small></div>)}</div> : <p className="github-empty">{status === "error" ? "Could not fetch public repository details right now." : "Loading public repository details…"}</p>}</div><div className="repo-panel"><div className="github-panel-head"><span>Recently updated public repositories</span><a href="https://github.com/IRNCyber?tab=repositories" target="_blank" rel="noreferrer">All repos <ArrowUpRight size={13} /></a></div>{recent.length ? recent.map((repo) => <a className="repo-row" href={repo.html_url} target="_blank" rel="noreferrer" key={repo.full_name}><span><strong>{repo.full_name.split("/").at(-1)}</strong><small>{repo.description || "Public repository"}</small></span><span className="repo-meta">{repo.language || "—"} · ★ {repo.stargazers_count}</span></a>) : <p className="github-empty">{status === "error" ? "Repository data is temporarily unavailable. Open the GitHub profile to see current projects." : "Loading repositories…"}</p>}</div></div>;
}
