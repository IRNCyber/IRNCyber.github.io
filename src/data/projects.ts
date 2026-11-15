export type ProjectCategory = "Security" | "Web" | "Community" | "AI";

export type Project = {
  title: string;
  category: ProjectCategory;
  problem: string;
  summary: string;
  role: string;
  stack: string[];
  outcome: string;
  image?: string;
  live?: string;
  source?: string;
  featured?: boolean;
};

// Keep case studies factual and verified.
export const projects: Project[] = [
  {
    title: "CyberOps",
    category: "Security",
    problem: "Establish a unified, high-security digital headquarters showcasing defensive security research, tooling, and technical presence.",
    summary: "Primary public web platform and identity for IRNCyber, consolidating security tooling, research writeups, and technical footprint.",
    role: "Lead security architect & web developer",
    stack: ["Cybersecurity", "React", "TypeScript", "Tailwind CSS"],
    outcome: "Live security platform with verified public research links and security lab tooling.",
    live: "https://irncyber.github.io",
    source: "https://github.com/IRNCyber",
    featured: true,
  },
  {
    title: "Tactical Zero",
    category: "Security",
    problem: "Provide dedicated defensive documentation and security system architectural patterns.",
    summary: "A security-focused web project published under the Tactical Zero initiative.",
    role: "Security engineering & frontend implementation",
    stack: ["Web Development", "Defensive Systems", "Documentation"],
    outcome: "Active public documentation and security portal.",
    live: "https://tacticalzero.github.io",
    featured: true,
  },
  {
    title: "ZINCOR",
    category: "Web",
    problem: "Develop experimental, high-performance web interfaces and frontend components.",
    summary: "A live web property associated with IRNCyber’s independent frontend work and experiments.",
    role: "Frontend developer & designer",
    stack: ["React", "JavaScript", "Responsive Design", "Modern UI"],
    outcome: "Live web property with fast load times and clean responsiveness.",
    live: "https://zincor.github.io",
  },
  {
    title: "City Tech Collab",
    category: "Community",
    problem: "Connect tech enthusiasts, local developers, and collaborators in an open digital space.",
    summary: "A live community platform for open technology collaboration and digital initiatives.",
    role: "Web development & community contributor",
    stack: ["Web Development", "Community Platform", "Collaboration"],
    outcome: "Active public platform fostering collaborative development.",
    live: "https://citytechcollab.github.io",
  },
];
