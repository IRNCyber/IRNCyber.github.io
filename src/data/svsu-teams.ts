export type SvsuTeam = {
  name: string;
  badge: string;
  tagline: string;
  description: string;
  role: string;
  category: "Cybersecurity" | "Innovation & Engineering";
  university: string;
  live?: string;
  github?: string;
  technologies: string[];
  highlights: string[];
};

export const svsuTeams: SvsuTeam[] = [
  {
    name: "Homelanders",
    badge: "Official Student Community",
    tagline: "Cybersecurity & Defensive Tech Student Community",
    description:
      "The premier cybersecurity student community at Shri Vishwakarma Skill University. Brings students together for defensive security challenges, hands-on CTFs, system administration, workshops, and responsible security research.",
    role: "Web Developer & Core Member",
    category: "Cybersecurity",
    university: "Shri Vishwakarma Skill University (SVSU)",
    live: "https://svsu-homelanders.github.io/SVSU/",
    technologies: ["Cybersecurity", "Web Development", "CTF Training", "Community Portal"],
    highlights: [
      "Official university student community portal",
      "Organized security workshops, lab walk-throughs & CTF practices",
      "Centralized technical resources for cybersecurity students",
    ],
  },
  {
    name: "Techvengers",
    badge: "Technical Projects & Hackathon Squad",
    tagline: "Engineering, Web Systems & Technical Innovation Team",
    description:
      "SVSU's technical projects and hackathon squad. Develops modern web applications, collaborative software prototypes, and tackles engineering problems for collegiate hackathons and tech exhibitions.",
    role: "Frontend Developer & Technical Contributor",
    category: "Innovation & Engineering",
    university: "Shri Vishwakarma Skill University (SVSU)",
    live: "https://svsu-homelanders.github.io/SVSU/", // SVSU Community portal
    github: "https://github.com/IRNCyber",
    technologies: ["React", "TypeScript", "Next.js", "Hackathon Prototyping"],
    highlights: [
      "Collaborative project team building real-world solutions",
      "Hackathon participation and rapid technical prototyping",
      "Interdisciplinary engineering and modern web development",
    ],
  },
];
