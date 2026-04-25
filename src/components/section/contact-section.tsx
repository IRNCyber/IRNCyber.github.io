import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const quickLinks = [
    {
      label: "WhatsApp",
      href: DATA.contact.social.WhatsApp.url,
      detail: "Fastest way to reach me",
    },
    {
      label: "X",
      href: DATA.contact.social.X.url,
      detail: "Follow updates and thoughts",
    },
    {
      label: "LinkedIn",
      href: DATA.contact.social.LinkedIn.url,
      detail: "Professional profile",
    },
    {
      label: "GitHub",
      href: DATA.contact.social.GitHub.url,
      detail: "Code, projects, and activity",
    },
  ];

  return (
    <div className="border rounded-2xl p-10 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground text-balance">
          For freelance work, collaborations, or cybersecurity conversations,
          reach out at{" "}
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            {DATA.contact.email}
          </Link>{" "}
          or on{" "}
          <Link
            href={DATA.contact.social.WhatsApp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            WhatsApp
          </Link>
          {" "}and{" "}
          <Link
            href={DATA.contact.social.X.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            X
          </Link>
          . You can also review the provided{" "}
          <Link
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            resume
          </Link>{" "}
          and{" "}
          <Link
            href="/Profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            profile
          </Link>
          .
        </p>
        <div className="grid w-full max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border/70 bg-background/80 px-4 py-4 text-left shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1 min-w-0">
                  <div className="text-sm font-semibold text-foreground">
                    {item.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.detail}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
