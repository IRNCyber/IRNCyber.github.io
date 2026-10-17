import Link from "next/link";
import type { Metadata } from "next";
import { ArrowDownRight, ArrowUpRight, Check, Github, Linkedin, Mail, ShieldCheck } from "lucide-react";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { certifications } from "@/data/certifications";
import { clientFeedback } from "@/data/testimonials";
import { AmbientBackground, CertificationArchive, CommandPalette, CopyEmailButton, FlashCards, GitHubLiveDetails, ProjectExplorer, ScrollProgress, TerminalWidget, ThemeToggle } from "@/components/portfolio-interactions";

export const metadata: Metadata = {
  title: "Cybersecurity Student & Web Developer",
  description: "Rohan Naagar is a cybersecurity student and freelance web designer/developer in Gurugram, India.",
  alternates: { canonical: "/" },
};

const socials = [
  { label: "GitHub", href: "https://github.com/IRNCyber", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rohannaagar666", icon: Linkedin },
];

export default function Page() {
  return <>
    <ScrollProgress />
    <AmbientBackground />
    <div className="site-shell">
      <header className="site-header"><Link className="wordmark" href="/" aria-label="IRNCyber home"><img className="wordmark-icon" src="/irncyber-mark.svg" alt="" aria-hidden="true" /><span>IRNCyber<span className="wordmark-dot">.</span></span></Link><nav className="top-nav" aria-label="Main navigation"><a href="#projects">Projects</a><a href="#security">Security</a><a href="https://irncyber.blogspot.com/" target="_blank" rel="noreferrer">IRNCyber Blog</a><a href="https://irndev.blogspot.com/" target="_blank" rel="noreferrer">IRNDev Blog</a><a href="#contact">Contact</a></nav><div className="header-tools"><CommandPalette /><ThemeToggle /><a className="header-resume" href="/Resume.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={14} /></a></div></header>

      <main>
        <section className="hero section-wrap" id="top">
          <div className="hero-copy"><p className="eyebrow hero-kicker"><span className="status-dot" /> GURUGRAM, INDIA <span className="eyebrow-divider">/</span> CYBERSECURITY · WEB</p>
            <h1>I build for the web.<br /><span>I learn how to defend it.</span></h1>
            <p className="hero-role"><span className="mono">role:// </span><span className="role-typing">Cybersecurity student · Web developer</span></p>
            <p className="hero-lede">I’m Rohan Naagar — a cybersecurity student and freelance web designer/developer focused on useful, responsive digital experiences.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contact">Hire me <ArrowUpRight size={16} /></a><a className="button button-secondary" href="#projects">View projects <ArrowDownRight size={16} /></a></div>
            <div className="hero-socials" aria-label="Social profiles">{socials.map(({ label, href, icon: Icon }) => <a href={href} key={label} target="_blank" rel="noreferrer" aria-label={label}><Icon size={17} />{label}<ArrowUpRight size={12} /></a>)}<a href="mailto:rohannaagar666@gmail.com"><Mail size={16} />Email<ArrowUpRight size={12} /></a></div>
          </div>
          <div className="hero-aside"><div className="hero-art"><img src="/irncyber-hero.svg" alt="Animated cybersecurity illustration with a terminal, shield, and lock" fetchPriority="high" /></div><div className="availability"><span className="status-dot" /><span><strong>Open to opportunities</strong><small>Freelance · internships · collaboration</small></span></div></div>
        </section>

        <section className="intro-band section-wrap" id="about"><div><span className="eyebrow">01 / ABOUT</span><h2>Practical by nature.<br />Curious by default.</h2></div><div className="intro-copy"><p>I’m a B.Tech Cyber Security student at Shri Vishwakarma Skill University and a freelance web designer/developer. I work across the front end, with a growing focus on security fundamentals and responsible practice.</p><p>I care about clear interfaces, mobile usability, and building a solid understanding of the systems behind the screen.</p><TerminalWidget /></div></section>

        <section className="content-section section-wrap" id="projects"><div className="section-heading"><div><span className="eyebrow">02 / SELECTED WORK</span><h2>Projects with a purpose.</h2></div><p>Selected live work. Case study details and screenshots will be added as they are verified.</p></div><ProjectExplorer projects={projects} /></section>

        <section className="content-section section-wrap" id="client-feedback"><div className="section-heading"><div><span className="eyebrow">CLIENT FEEDBACK</span><h2>Results, with permission.</h2></div><p>Client comments belong to the people who gave them. Nothing is quoted without approval.</p></div><div className="feedback-grid">{clientFeedback.map((slot) => <article className="feedback-slot" key={slot.client}><span className="eyebrow">CLIENT WORK</span><h3>{slot.client}</h3>{slot.quote ? <blockquote>“{slot.quote}”</blockquote> : <p>[TODO: add an approved testimonial, attribution, and permission.]</p>}<small>{slot.attribution ?? slot.status}</small></article>)}</div></section>

        <section className="security-section section-wrap" id="security"><div className="section-heading"><div><span className="eyebrow">03 / SECURITY</span><h2>Learning in public.<br />Working responsibly.</h2></div><p>Security is a practice built on patience, evidence, and respect for scope. I only test systems where I have permission.</p></div><div className="security-grid"><div className="security-principle"><ShieldCheck size={23} /><h3>Responsible disclosure</h3><p>Any security testing I do is limited to explicitly authorized environments. Findings are shared privately with the relevant owner and handled with care.</p><span className="security-note">No sensitive data or unverified rankings published.</span></div><div className="security-links"><span className="eyebrow">TRAINING & RESEARCH PROFILES</span>{[["TryHackMe", "https://tryhackme.com/p/IRNCyber"], ["Hack The Box", "https://app.hackthebox.com/profile/2313221"], ["HackerOne", "https://hackerone.com/IRNCyber"], ["Bugcrowd", "https://bugcrowd.com/IRNCyber"]].map(([name, href]) => <a key={name} href={href} target="_blank" rel="noreferrer"><span>{name}<small>Profile · activity not independently verified</small></span><ArrowUpRight size={16} /></a>)}<p className="todo-note">[TODO: add verified lab progress, CTF writeups, and disclosure links.]</p></div></div></section>

        <FlashCards />

        <section className="content-section section-wrap" id="skills"><div className="section-heading"><div><span className="eyebrow">04 / TOOLKIT</span><h2>A focused toolkit.</h2></div><p>Grouped by where I use them. Levels describe current comfort, not certification or years of experience.</p></div><div className="skill-grid">{skillGroups.map((group) => <article className="skill-card" key={group.category}><h3>{group.category}</h3><ul>{group.items.map((skill) => <li key={skill.name}><span>{skill.name}</span><span className={`skill-level level-${skill.level.toLowerCase()}`}>{skill.level}</span></li>)}</ul></article>)}</div><div className="skill-legend"><span><i className="legend-dot core" /> Core</span><span><i className="legend-dot comfortable" /> Comfortable</span><span><i className="legend-dot learning" /> Learning</span></div></section>

        <section className="timeline-section section-wrap" id="experience"><div className="section-heading"><div><span className="eyebrow">05 / EXPERIENCE</span><h2>Experience & education.</h2></div><p>A straightforward record of client work and study.</p></div><div className="timeline"><article className="timeline-entry"><span className="timeline-marker" /><div className="timeline-meta"><span>Oct 2024 — Present</span><span>Freelance</span></div><h3>Web Designer & Developer</h3><p>Design and develop responsive websites with HTML, CSS, JavaScript, React, and TypeScript. Work with clients to shape requirements into clear, usable web experiences.</p><span className="todo-note">[TODO: add project-specific contributions and outcomes.]</span></article><article className="timeline-entry" id="education"><span className="timeline-marker" /><div className="timeline-meta"><span>Aug 2026 — Jun 2031</span><span>Gurugram, India</span></div><h3>B.Tech, Cyber Security</h3><p><a className="inline-link" href="https://www.svsu.ac.in" target="_blank" rel="noreferrer">Shri Vishwakarma Skill University <ArrowUpRight size={13} /></a></p><span className="todo-note">[TODO: confirm these dates; the supplied profile lists a future start date and the end date may be a typo.]</span></article><article className="timeline-entry"><span className="timeline-marker" /><div className="timeline-meta"><span>May 2025 — May 2026</span><span>Faridabad, India</span></div><h3>Higher Secondary, PCM</h3><p>Torch Bearer Convent School</p></article></div></section>

        <section className="content-section section-wrap" id="certifications"><div className="section-heading"><div><span className="eyebrow">06 / CERTIFICATIONS</span><h2>Relevant credentials.</h2></div><p>Selected from the supplied resume. Titles and levels are reproduced as provided.</p></div><div className="cert-featured">{certifications.slice(0, 8).map((cert) => <article key={cert.title}><span className="cert-check"><Check size={14} /></span><div><h3>{cert.title}</h3><p>{cert.category}{cert.level ? ` · ${cert.level}` : ""}</p></div></article>)}</div><CertificationArchive items={certifications} /></section>

        <section className="github-section section-wrap" id="github"><div className="section-heading"><div><span className="eyebrow">07 / OPEN SOURCE</span><h2>Activity, directly from GitHub.</h2></div><a className="text-link" href="https://github.com/IRNCyber" target="_blank" rel="noreferrer">View profile <ArrowUpRight size={15} /></a></div><div className="github-panel"><div className="github-panel-head"><span><Github size={17} /> github.com/IRNCyber</span><span className="mono">CONTRIBUTIONS</span></div><img src="https://ghchart.rshah.org/19d3b5/IRNCyber" alt="GitHub contribution activity for IRNCyber" loading="lazy" /><p className="muted">Contribution graph provided by GitHub activity visualization. <a href="https://github.com/IRNCyber" target="_blank" rel="noreferrer">Open GitHub profile <ArrowUpRight size={12} /></a></p><div className="github-fallback"><Github size={20} /><span>If the graph is unavailable, visit the profile for current repositories and activity.</span><a href="https://github.com/IRNCyber" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a></div></div><GitHubLiveDetails /><p className="todo-note">[TODO: choose repositories to highlight as pinned work.]</p></section>

        <section className="resume-section section-wrap" id="resume"><div className="section-heading"><div><span className="eyebrow">08 / RESUME</span><h2>More detail, in one page.</h2></div><a className="button button-secondary" href="/Resume.pdf" download>Download resume <ArrowUpRight size={15} /></a></div><div className="resume-preview"><iframe src="/Resume.pdf#toolbar=0&navpanes=0" title="Preview of Rohan Naagar’s resume" loading="lazy" /><p>If the inline preview does not load, <a href="/Resume.pdf">open the PDF</a>.</p></div></section>

        <section className="contact-section section-wrap" id="contact"><div><span className="eyebrow">09 / CONTACT</span><h2>Have a project<br />or opportunity?</h2><p>For freelance web work, internships, and thoughtful collaborations, send me a note.</p><div className="contact-actions"><a className="button button-primary" href="mailto:rohannaagar666@gmail.com">Email me <ArrowUpRight size={15} /></a><CopyEmailButton /></div><p className="muted">A scheduling link can be added here when available.</p></div><div className="contact-card"><span className="eyebrow">GET IN TOUCH</span><a className="contact-email" href="mailto:rohannaagar666@gmail.com">rohannaagar666@gmail.com <ArrowUpRight size={15} /></a><span className="contact-location">Gurugram, Haryana, India</span><div className="contact-socials">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer"><Icon size={16} />{label}</a>)}</div><div className="contact-placeholder">[TODO: add a Formspree/Web3Forms form ID and booking URL to enable form submission and call scheduling.]</div></div></section>
      </main>
      <footer className="site-footer"><Link href="/" className="wordmark"><img className="wordmark-icon" src="/irncyber-mark.svg" alt="" aria-hidden="true" /><span>IRNCyber<span className="wordmark-dot">.</span></span></Link><span>Built with care in Gurugram, India.</span><a href="#top">Back to top ↑</a></footer>
    </div>
  </>;
}
