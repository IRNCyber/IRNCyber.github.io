"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, Github, Linkedin, Shield } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("rohannaagar666@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = "mailto:rohannaagar666@gmail.com";
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0e1218] border border-white/[0.08] relative overflow-hidden">
        {/* Ambient teal glow behind contact card */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-72 h-72 bg-[var(--primary)]/10 blur-[100px] rounded-full pointer-events-none"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--primary)] uppercase tracking-widest mb-2">
              <Mail className="w-4 h-4 text-[var(--primary)]" />
              <span>04 / CONNECT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight leading-tight">
              Have a project or opportunity?
            </h2>
            <p className="text-sm text-zinc-400 mt-3 leading-relaxed max-w-md">
              Whether you need a responsive web application, frontend design implementation, or want to discuss security-minded collaborations, let&apos;s talk.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href="mailto:rohannaagar666@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-xs hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_4px_16px_-4px_rgba(var(--primary-rgb),0.3)]"
              >
                <Mail className="w-4 h-4 text-[var(--primary-foreground)]" />
                <span>Email me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141922] border border-white/[0.08] hover:border-[var(--primary)]/40 text-zinc-200 hover:text-white text-xs font-semibold transition-all duration-200"
              >
                {copied ? <Check className="w-4 h-4 text-[var(--primary)]" /> : <Copy className="w-4 h-4 text-[var(--primary)]" />}
                <span>{copied ? "Email copied!" : "Copy email"}</span>
              </button>
            </div>
          </div>

          {/* Quick info card on right */}
          <div className="p-6 rounded-2xl bg-[#141922] border border-white/[0.06] flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono text-[var(--primary)] uppercase tracking-wider block mb-2">
                DIRECT CONTACT
              </span>
              <a
                href="mailto:rohannaagar666@gmail.com"
                className="text-lg sm:text-xl font-bold text-white hover:text-[var(--primary)] transition-colors break-all flex items-center gap-2"
              >
                <span>rohannaagar666@gmail.com</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </a>
              <p className="text-xs text-zinc-400 mt-1">
                Gurugram, Haryana, India · Indian Standard Time (IST)
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06]">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-3">
                Social Profiles
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "GitHub", href: "https://github.com/IRNCyber", icon: Github },
                  { name: "LinkedIn", href: "https://www.linkedin.com/in/rohannaagar", icon: Linkedin },
                  { name: "TryHackMe", href: "https://tryhackme.com/p/IRNCyber", icon: Shield },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1218] border border-white/[0.06] hover:border-[var(--primary)]/40 text-zinc-300 hover:text-white text-xs transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-[var(--primary)]" />
                      <span>{s.name}</span>
                    </a>
                  );
                })}
              </div>

              <form action="https://formspree.io/f/xgvznqyr" method="POST" className="grid gap-3 mt-6">
                <input type="hidden" name="_subject" value="New message from the IRNCyber portfolio" />
                <label className="grid gap-1.5 text-[11px] text-zinc-400">
                  Name
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="w-full rounded-lg bg-[#0e1218] border border-white/[0.08] px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[var(--primary)]"
                  />
                </label>
                <label className="grid gap-1.5 text-[11px] text-zinc-400">
                  Email
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-lg bg-[#0e1218] border border-white/[0.08] px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[var(--primary)]"
                  />
                </label>
                <label className="grid gap-1.5 text-[11px] text-zinc-400">
                  Message
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-lg bg-[#0e1218] border border-white/[0.08] px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[var(--primary)] resize-y"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 justify-self-start rounded-xl bg-[var(--primary)] px-4 py-2.5 text-xs font-semibold text-[var(--primary-foreground)] transition hover:brightness-110"
                >
                  <Mail className="w-4 h-4" />
                  Send message
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
