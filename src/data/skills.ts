export type SkillLevel = "Core" | "Comfortable" | "Learning";
export type SkillGroup = { category: string; items: { name: string; level: SkillLevel }[] };

// Intentionally focused on skills already supported by the supplied profile/resume.
export const skillGroups: SkillGroup[] = [
  { category: "Security", items: [{ name: "Cybersecurity fundamentals", level: "Comfortable" }, { name: "Linux / operating systems", level: "Comfortable" }] },
  { category: "Web", items: [{ name: "HTML & CSS", level: "Core" }, { name: "JavaScript", level: "Core" }, { name: "React", level: "Comfortable" }, { name: "TypeScript", level: "Comfortable" }, { name: "Responsive design", level: "Core" }] },
  { category: "AI / ML", items: [{ name: "AI concepts", level: "Learning" }] },
  { category: "Backend / DevOps", items: [{ name: "Firebase", level: "Comfortable" }, { name: "Git & GitHub", level: "Comfortable" }] },
  { category: "Languages", items: [{ name: "Python", level: "Comfortable" }, { name: "Java", level: "Learning" }] },
];
