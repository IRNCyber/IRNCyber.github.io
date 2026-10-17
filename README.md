# IRNCyber Portfolio

A dark-first, responsive portfolio for Rohan Naagar, built with Next.js App Router, TypeScript, Tailwind CSS, and MDX. The site is configured for a static export to GitHub Pages.

## Design and sitemap

The visual system uses a near-black and slate foundation, restrained teal accents, the existing Cabinet Grotesk display/text fonts, and a system monospace for terminal details. The layout moves from a concise value proposition to case studies, security practice, skills, experience, certifications, GitHub activity, resume, and contact.

Routes: `/` portfolio · `/blog/` article index · `/blog/[slug]/` article · `/rss.xml` feed · `/sitemap.xml` sitemap · `/robots.txt` crawler rules.

## Project structure

```text
src/
  app/                  App Router pages, metadata, sitemap, robots, RSS
  components/            Reusable portfolio interactions
  data/                  Typed project, skill, certification, profile data
  mdx-components.tsx     MDX rendering and heading anchors
content/                 Blog posts in MDX
public/                  Resume PDF, fonts, and static assets
.github/workflows/       GitHub Pages build and deploy workflow
```

## Run locally

Requires Node.js 20 or newer.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. Update typed content in `src/data/projects.ts`, `src/data/skills.ts`, `src/data/certifications.ts`, and `src/data/resume.tsx`. Add blog posts as `.mdx` files under `content/`; frontmatter supports `title`, `publishedAt`, `summary`, and optional `tags`, `author`, and `image`.

## Build and publish

```bash
npm run build
```

Next.js writes the static site to `out/`. Push to the `main` branch to trigger `.github/workflows/deploy.yml`. In GitHub, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The custom domain repository name (`IRNCyber.github.io`) does not need a `basePath`.

## Content to provide

- Project screenshots and verified descriptions of your role, stack, and outcomes.
- Confirmed B.Tech start/end dates (currently shown as August 2026–June 2031).
- Verified CTF participation, writeups, lab progress, and security platform stats, if you want them shown.
- The repositories you want featured as pinned work.
- Client-approved testimonials or measurable results.
- A Formspree/Web3Forms form ID and a Calendly/Cal.com booking URL.
- Certification issuer links or credential IDs, where available.
- Confirm whether internship availability wording is current.

## Good next steps after launch

1. Add approved screenshots and complete the project case studies.
2. Publish a real, permission-safe CTF write-up and link its challenge context.
3. Add a working form and call-booking link.
4. Add client-approved testimonials and concrete outcomes.
5. Review analytics needs and choose a privacy-friendly provider only if useful.
