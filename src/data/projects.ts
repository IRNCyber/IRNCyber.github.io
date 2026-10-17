export type ProjectCategory = "Security" | "Web" | "Client" | "AI";

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

// Keep case studies factual. Add screenshots and measured outcomes when supplied.
export const projects: Project[] = [
  {
    title: "Maa Ganga RO Water Supply",
    category: "Client",
    problem: "[TODO: describe the business need this site was built to address.]",
    summary: "A public website for a local water-purifier and RO service business.",
    role: "Freelance web design and development",
    stack: ["Responsive web", "[TODO: confirm project-specific technologies]"],
    outcome: "Live client website. [TODO: add brief, exact contribution, and client-approved result.]",
    live: "https://maagangarowatersuppliers.github.io",
    featured: true,
  },
  {
    title: "Tactical Zero",
    category: "Security",
    problem: "[TODO: confirm the challenge or need this project addresses.]",
    summary: "A security-focused web project published under the Tactical Zero name.",
    role: "[TODO: confirm your role and project purpose.]",
    stack: ["Web development"],
    outcome: "[TODO: add a specific feature or result.]",
    live: "https://tacticalzero.github.io",
  },
  {
    title: "ZINCOR",
    category: "Web",
    problem: "[TODO: confirm the user need this project addresses.]",
    summary: "A live web property associated with IRNCyber’s independent work.",
    role: "[TODO: confirm your role and the problem it solves.]",
    stack: ["Web development"],
    outcome: "[TODO: add a specific feature or result.]",
    live: "https://zincor.github.io",
  },
  {
    title: "City Tech Collab",
    category: "Web",
    problem: "[TODO: confirm the collaboration need this site addresses.]",
    summary: "A live site for a technology collaboration initiative.",
    role: "[TODO: confirm your role and collaborators.]",
    stack: ["Web development"],
    outcome: "[TODO: add a specific feature or result.]",
    live: "https://citytechcollab.github.io",
  },
  {
    title: "SVSU Homelanders",
    category: "Web",
    problem: "Provide an online home for the SVSU Homelanders community and its activities.",
    summary: "A community website for SVSU Homelanders, bringing its information and activities together online.",
    role: "Web development",
    stack: ["Web development"],
    outcome: "Live community website.",
    live: "https://svsu-homelanders.github.io/SVSU/",
  },
  {
    title: "Nart Glass & Interiors",
    category: "Client",
    problem: "Give customers a place to explore Nart Glass & Interiors and its offerings online.",
    summary: "A business website for a glass and interiors company, presenting its services to prospective customers.",
    role: "Web development",
    stack: ["Web development"],
    outcome: "Live business website.",
    live: "https://nartglassandinteriors.github.io",
  },
];
