/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight } from "lucide-react";
import memoji from "../../assets/memoji.svg";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-16 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-5xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.92),_rgba(248,250,252,0.86))] p-8 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.35)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_24%),linear-gradient(180deg,_rgba(15,23,42,0.92),_rgba(2,6,23,0.88))] md:p-10">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent" />
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="order-2 flex flex-col gap-4 lg:order-1">
                <BlurFade
                  delay={BLUR_FADE_DELAY * 0.5}
                  className="w-fit rounded-full border border-emerald-500/20 bg-emerald-500/8 px-4 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-300"
                >
                  Cybersecurity • Web • AI
                </BlurFade>
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-4xl font-semibold tracking-tighter sm:text-5xl lg:text-6xl"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                />
                <BlurFadeText
                  className="text-muted-foreground max-w-[640px] text-base md:text-lg lg:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
                <BlurFade
                  delay={BLUR_FADE_DELAY * 1.5}
                  className="flex flex-wrap gap-3 pt-2"
                >
                  <Link
                    href={DATA.contact.social.GitHub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    View GitHub
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-background"
                  >
                    Resume
                  </Link>
                </BlurFade>
                <BlurFade
                  delay={BLUR_FADE_DELAY * 1.75}
                  className="grid gap-3 pt-4 sm:grid-cols-3"
                >
                  <div className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3 backdrop-blur-sm">
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Focus
                    </div>
                    <div className="mt-1 text-sm font-medium text-foreground">
                      Security and modern web products
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3 backdrop-blur-sm">
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Base
                    </div>
                    <div className="mt-1 text-sm font-medium text-foreground">
                      {DATA.location}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3 backdrop-blur-sm">
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Availability
                    </div>
                    <div className="mt-1 text-sm font-medium text-foreground">
                      Freelance and collaborations
                    </div>
                  </div>
                </BlurFade>
              </div>
              <div className="order-1 lg:order-2">
                <BlurFade
                  delay={BLUR_FADE_DELAY}
                  className="relative mx-auto flex max-w-md items-center justify-center"
                >
                  <div className="absolute inset-8 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-400/10" />
                  <div className="relative w-full rounded-[2rem] border border-border/70 bg-background/80 p-6 shadow-[0_20px_70px_-28px_rgba(15,23,42,0.5)] backdrop-blur-sm">
                    <div className="absolute -right-6 -top-6 h-16 w-16 rounded-2xl border border-border/70 bg-background/90 p-3 shadow-lg">
                      <img
                        src={memoji.src}
                        alt="Memoji illustration"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-5">
                      <Avatar className="size-28 rounded-full border shadow-lg ring-4 ring-muted md:size-36">
                        <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                        <AvatarFallback>{DATA.initials}</AvatarFallback>
                      </Avatar>
                      <div className="flex w-full items-center justify-between rounded-2xl border border-border/70 bg-muted/40 px-4 py-3 text-sm">
                        <div>
                          <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                            Identity
                          </div>
                          <div className="font-medium text-foreground">
                            IRNCyber
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                            Current
                          </div>
                          <div className="font-medium text-foreground">
                            Learning fast
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4 rounded-[1.75rem] border border-border/70 bg-card/70 p-6 shadow-[0_18px_60px_-34px_rgba(15,23,42,0.4)] backdrop-blur-sm md:p-8">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-x-3 rounded-2xl border border-border/70 bg-card/70 px-4 py-4 shadow-[0_16px_45px_-32px_rgba(15,23,42,0.5)] transition-colors hover:border-foreground/20"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-x-3">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-10 rounded-full border p-1 shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-10 rounded-full border p-1 shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                      <div className="flex items-center gap-2 font-semibold leading-none">
                        {education.school}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                          aria-hidden
                        />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-none items-center gap-1 text-right text-xs tabular-nums text-muted-foreground">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-3">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 10 + id * 0.03}
              >
                <div className="group flex h-10 w-fit items-center gap-2 rounded-2xl border border-border bg-background/85 px-4 ring-2 ring-border/20 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/25 hover:shadow-[0_14px_30px_-20px_rgba(34,197,94,0.45)]">
                  {skill.icon && (
                    <skill.icon className="size-4 rounded overflow-hidden object-contain text-foreground/85" />
                  )}
                  <span className="text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="languages">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold">Languages</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.languages.map((language, id) => (
              <BlurFade
                key={language.name}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <div className="flex h-8 w-fit items-center gap-2 rounded-xl border border-border bg-background px-4 ring-2 ring-border/20">
                  <span className="text-sm font-medium text-foreground">
                    {language.name} - {language.proficiency}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="certifications">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <h2 className="text-xl font-bold">Certifications</h2>
          </BlurFade>
          <div className="grid gap-3 sm:grid-cols-2">
            {DATA.certifications.map((cert, id) => (
              <BlurFade
                key={cert.title}
                delay={BLUR_FADE_DELAY * 14 + id * 0.03}
              >
                <div className="flex flex-col gap-1 rounded-xl border border-border bg-background px-4 py-3 ring-2 ring-border/20">
                  <span className="text-sm font-medium text-foreground">
                    ✓ {cert.title}
                  </span>
                  {(cert.source || cert.level) && (
                    <span className="text-xs text-muted-foreground">
                      {[cert.source, cert.level].filter(Boolean).join(" | ")}
                    </span>
                  )}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="awards">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <h2 className="text-xl font-bold">Awards & Honors</h2>
          </BlurFade>
          <div className="flex flex-col gap-2">
            {DATA.awards.map((award, id) => (
              <BlurFade
                key={award.title}
                delay={BLUR_FADE_DELAY * 16 + id * 0.05}
              >
                <div className="flex items-center rounded-xl border border-border bg-background px-4 py-2 ring-2 ring-border/20">
                  <span className="text-sm font-medium text-foreground">
                    🏆 {award.title}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="app-links">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <h2 className="text-xl font-bold">App Links</h2>
          </BlurFade>
          <div className="grid gap-3 sm:grid-cols-2">
            {DATA.appLinks.map((link, id) => (
              <BlurFade
                key={link.title}
                delay={BLUR_FADE_DELAY * 19 + id * 0.03}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3 ring-2 ring-border/20 transition-colors hover:ring-primary/30"
                >
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-foreground">
                      {link.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {link.category}
                      {link.note ? ` | ${link.note}` : ""}
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 flex-none text-muted-foreground transition-colors group-hover:text-foreground" />
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="stats">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 20}>
            <h2 className="text-xl font-bold">Git Score & Charts</h2>
          </BlurFade>
          <div className="grid gap-4 md:grid-cols-2">
            {DATA.stats.map((stat, id) => (
              <BlurFade
                key={stat.title}
                delay={BLUR_FADE_DELAY * 21 + id * 0.04}
              >
                <Link
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 rounded-xl border border-border bg-background p-4 ring-2 ring-border/20 transition-colors hover:ring-primary/30"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold">{stat.title}</h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </div>
                  <img
                    src={stat.image}
                    alt={stat.title}
                    className="w-full rounded-lg border border-border bg-card object-contain"
                  />
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <BlurFade delay={BLUR_FADE_DELAY * 22}>
          <HackathonsSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 23}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
