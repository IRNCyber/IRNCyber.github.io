import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Java } from "@/components/ui/svgs/java";
import { Docker } from "@/components/ui/svgs/docker";
import { Golang } from "@/components/ui/svgs/golang";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Postgresql } from "@/components/ui/svgs/postgresql";

type Skill = {
  name: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type ProjectLink = {
  icon: React.ReactNode;
  type: string;
  href: string;
};

type Project = {
  title: string;
  href: string;
  description: string;
  dates: string;
  technologies: string[];
  image?: string;
  video?: string;
  links?: ProjectLink[];
};

type Hackathon = {
  title: string;
  dates: string;
  location?: string;
  description?: string;
  image?: string;
  links?: {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
};

type Certification = {
  title: string;
  source?: string;
  level?: string;
};

type AppLink = {
  title: string;
  href: string;
  category: string;
  note?: string;
};

type StatCard = {
  title: string;
  href: string;
  image: string;
};

const profileImageUrl = new URL(
  "../../assets/dp.png",
  import.meta.url
).toString();
const freelancerLogoUrl = new URL(
  "../../assets/freelancer-logo-open-graph.jpg",
  import.meta.url
).toString();
const schoolLogoUrl = new URL(
  "../../assets/tbcs.jpg",
  import.meta.url
).toString();

export const DATA = {
  name: "Rohan Naagar",
  initials: "RN",
  url: "https://github.com/IRNCyber",
  location: "Gurugram, Haryana, India",
  locationLink: "https://www.google.com/maps/place/Gurugram",
  description:
    "CS student, freelance web designer, software developer, and AI enthusiast focused on practical cybersecurity and modern web experiences.",
  summary: `I am Rohan Naagar, a CS student and freelance web designer/software developer based in the Greater Delhi region.

I enjoy building responsive websites, learning fast, and turning ideas into practical products with **HTML, CSS, JavaScript, React, TypeScript, Python, and Java**.

Current focus areas from the provided profile:

- Cybersecurity and ethical hacking
- Artificial Intelligence, AGI, Machine Learning, Deep Learning, NLP, and LLMs
- Web development with strong mobile responsiveness and cross-browser compatibility

I am looking to contribute with commitment, consistency, and continuous learning while growing alongside the teams and clients I work with.`,
  avatarUrl: profileImageUrl,
  skills: [
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "React", icon: ReactLight },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "JavaScript", icon: Typescript },
    { name: "HTML/CSS", icon: Icons.globe },
    { name: "Docker", icon: Docker },
    { name: "Firebase", icon: Icons.googleDrive },
    { name: "Cybersecurity", icon: Icons.globe },
    { name: "XML" },
    { name: "C++" },
    { name: "Kotlin" },
    { name: "Rust" },
    { name: "C" },
    { name: "Swift" },
    { name: "Shell" },
    { name: "R" },
    { name: "Astro" },
    { name: "SCSS" },
    { name: "Go", icon: Golang },
    { name: "PHP" },
    { name: "C#", icon: Csharp },
    { name: "Vue.js" },
    { name: "Angular" },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Express", icon: Nodejs },
    { name: "GraphQL" },
    { name: "MongoDB" },
    { name: "MySQL" },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Redis" },
    { name: "TensorFlow" },
    { name: "PyTorch" },
    { name: "OpenCV" },
    { name: "Scikit-Learn" },
    { name: "AWS" },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Linux", icon: Icons.globe },
    { name: "Git", icon: Icons.github },
    { name: "Operating Systems", icon: Icons.globe },
  ] satisfies Skill[],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rohannaagar666@gmail.com",
    tel: "+919466386495",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/IRNCyber",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rohannaagar666",
        icon: Icons.linkedin,
        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/919466386495",
        icon: Icons.whatsapp,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rohannaagar666",
        icon: Icons.x,
        navbar: false,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/IRNCyber",
        icon: Icons.globe,
        navbar: false,
      },
      Upwork: {
        name: "Upwork",
        url: "https://www.upwork.com/freelancers/~01cd808d41decb121d?mp_source=share",
        icon: Icons.globe,
        navbar: false,
      },
      Portfolio: {
        name: "Portfolio",
        url: "https://github.com/IRNDevc",
        icon: Icons.globe,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:rohannaagar666@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      Resume: {
        name: "Resume PDF",
        url: "/Resume.pdf",
        icon: Icons.globe,
        navbar: false,
      },
      Profile: {
        name: "Profile PDF",
        url: "/Profile.pdf",
        icon: Icons.globe,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Self Employed",
      href: "https://github.com/IRNCyber",
      badges: ["Freelance"],
      location: "Faridabad, India",
      title: "Freelance Web Designer and Software Developer",
      logoUrl: freelancerLogoUrl,
      start: "Oct 2024",
      end: "Present",
      description:
        "Designed and developed responsive websites and web applications using HTML, CSS, JavaScript, React, and TypeScript. Worked directly with clients to translate business requirements into practical technical solutions while maintaining mobile responsiveness, cross-browser compatibility, and timely delivery.",
    },
  ],
  education: [
    {
      school: "Torch Bearer Convent School",
      href: "#",
      degree: "Higher Secondary, PCM",
      logoUrl: schoolLogoUrl,
      start: "May 2025",
      end: "May 2026",
    },
    {
      school: "Torch Bearer Convent School",
      href: "#",
      degree: "Secondary (10th Pass) - 89.2%",
      logoUrl: schoolLogoUrl,
      start: "Apr 2023",
      end: "May 2024",
    },
  ],
  projects: [
    {
      title: "CyberOps",
      href: "https://irncyber.github.io",
      description:
        "Primary public web presence for **IRNCyber**, representing Rohan's cybersecurity-focused identity, links, and technical footprint.",
      dates: "Active",
      technologies: ["Cybersecurity", "Web", "Branding"],
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          type: "Website",
          href: "https://irncyber.github.io",
        },
        {
          icon: <Icons.github className="size-3" />,
          type: "GitHub",
          href: "https://github.com/IRNCyber",
        },
      ],
    },
    {
      title: "ZINCOR",
      href: "https://zincor.github.io",
      description:
        "A personal build space tied to the provided assets, used to showcase experiments and ongoing web initiatives.",
      dates: "Active",
      technologies: ["Web Development", "Experiments", "Frontend"],
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          type: "Website",
          href: "https://zincor.github.io",
        },
      ],
    },
    {
      title: "Tactical Zero",
      href: "https://tacticalzero.github.io",
      description:
        "A public-facing initiative listed in the assets, aligned with security, systems thinking, and technical publishing.",
      dates: "Active",
      technologies: ["Security", "Systems", "Publishing"],
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          type: "Website",
          href: "https://tacticalzero.github.io",
        },
      ],
    },
    {
      title: "City Tech Collab",
      href: "https://citytechcollab.github.io",
      description:
        "Collaboration-oriented site referenced in the assets, representing community-facing technical work and digital initiatives.",
      dates: "Active",
      technologies: ["Community", "Collaboration", "Web"],
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          type: "Website",
          href: "https://citytechcollab.github.io",
        },
      ],
    },
    {
      title: "Maa Ganga RO Water Supply",
      href: "https://maagangarowatersuppliers.github.io",
      description:
        "Client-facing website listed in the assets, reflecting freelance delivery for real-world business requirements.",
      dates: "Client Work",
      technologies: ["Freelance", "Responsive Web", "Business Site"],
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          type: "Website",
          href: "https://maagangarowatersuppliers.github.io",
        },
      ],
    },
  ] as Project[],
  hackathons: [] as Hackathon[],
  certifications: [
    { title: "AI for All", source: "Profile / Resume" },
    {
      title: "Understanding the Constitutional Values Certificate",
      source: "Profile / Resume",
    },
    { title: "Social Media Marketing Course", source: "Profile" },
    { title: "IoT Network Specialist Certificate", source: "Profile / Resume" },
    { title: "Solar Panel Installation Technician", source: "Profile / Resume" },
    {
      title: "Customer Care Executive - Domestic - Non-Voice",
      source: "Resume",
    },
    {
      title: "Build and Grow Your Business using WhatsApp (English)",
      source: "Resume",
      level: "NSQF Level 0",
    },
    {
      title: "Legal Assistant Certification Programme",
      source: "Resume",
      level: "NSQF Level 0",
    },
    {
      title: "Introduction to Programming I",
      source: "Resume",
      level: "NSQF Level 0",
    },
    {
      title: "Branch Banking Executive",
      source: "Resume",
      level: "NSQF Level 4",
    },
    {
      title: "AI for Entrepreneurship",
      source: "Resume",
      level: "NSQF Level 0",
    },
    {
      title: "Drone Developer Certification Programme",
      source: "Resume",
      level: "NSQF Level 0",
    },
    {
      title: "Introduction to IoT",
      source: "Resume",
      level: "NSQF Level 3",
    },
    {
      title: "Web Design & Development",
      source: "Resume",
      level: "NSQF Level 5",
    },
    {
      title: "Web Design & Development - Hindi",
      source: "Resume",
      level: "NSQF Level 5",
    },
    {
      title: "Digital Skills - Advanced",
      source: "Resume",
      level: "NSQF Level 0",
    },
    {
      title: "Cyber Security Associate Certification Programme",
      source: "Resume",
      level: "NSQF Level 0",
    },
    {
      title: "Mobile Phone Hardware Repair Technician",
      source: "Resume",
      level: "NSQF Level 4",
    },
    {
      title: "Security Analyst Certificate Programme",
      source: "Resume",
      level: "NSQF Level 0",
    },
    {
      title: "Understanding the Constitutional Values - Citizenship",
      source: "Resume",
      level: "NSQF Level 0",
    },
    {
      title: "Communication Skills - Intermediate",
      source: "Resume",
      level: "NSQF Level 0",
    },
    {
      title: "Kisan Drone Operator",
      source: "Resume",
      level: "NSQF Level 4",
    },
    {
      title: "Stock Market Foundation Course",
      source: "Resume",
      level: "NSQF Level 0",
    },
    {
      title: "Cybersecurity",
      source: "Resume",
      level: "NSQF Level 0",
    },
    {
      title: "Foundation Course in Social Media Marketing",
      source: "Resume",
      level: "NSQF Level 0",
    },
    {
      title: "10 Tips to Create an Impressive Resume",
      source: "Resume",
    },
  ] satisfies Certification[],
  appLinks: [
    {
      title: "CyberOps",
      href: "https://irncyber.github.io",
      category: "Websites",
      note: "Primary cybersecurity web presence",
    },
    {
      title: "ZINCOR",
      href: "https://zincor.github.io",
      category: "Websites",
    },
    {
      title: "Tactical Zero",
      href: "https://tacticalzero.github.io",
      category: "Websites",
    },
    {
      title: "City Tech Collab",
      href: "https://citytechcollab.github.io",
      category: "Websites",
    },
    {
      title: "Maa Ganga RO Water Supply",
      href: "https://maagangarowatersuppliers.github.io",
      category: "Websites",
    },
    {
      title: "GitHub",
      href: "https://github.com/IRNCyber",
      category: "Developer Platforms",
    },
    {
      title: "GitLab",
      href: "https://gitlab.com/IRNCyber",
      category: "Developer Platforms",
    },
    {
      title: "Bitbucket",
      href: "https://bitbucket.com/IRNCyber",
      category: "Developer Platforms",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/rohannaagar666",
      category: "Professional Platforms",
    },
    {
      title: "Stack Overflow",
      href: "https://stackoverflow.com/users/28312314/rohan",
      category: "Professional Platforms",
    },
    {
      title: "Google Developers",
      href: "https://developers.google.com/profile/u/IRNCyber",
      category: "Professional Platforms",
    },
    {
      title: "Commudle",
      href: "https://www.commudle.com/users/IRNCyber",
      category: "Professional Platforms",
    },
    {
      title: "Dev.to",
      href: "https://dev.to/IRNCyber",
      category: "Professional Platforms",
    },
    {
      title: "TryHackMe",
      href: "https://tryhackme.com/p/IRNCyber",
      category: "Security Platforms",
    },
    {
      title: "Hack The Box",
      href: "https://app.hackthebox.com/profile/2313221",
      category: "Security Platforms",
    },
    {
      title: "HackerOne",
      href: "https://hackerone.com/IRNCyber",
      category: "Security Platforms",
    },
    {
      title: "Bugcrowd",
      href: "https://bugcrowd.com/IRNCyber",
      category: "Security Platforms",
    },
    {
      title: "HackenProof",
      href: "https://hackenproof.com/hackers/IRNCyber",
      category: "Security Platforms",
    },
    {
      title: "Telegram",
      href: "https://t.me/IRNCyber",
      category: "Social & Contact",
    },
    {
      title: "WhatsApp",
      href: "https://wa.me/919466386495",
      category: "Social & Contact",
    },
    {
      title: "Upwork",
      href: "https://www.upwork.com/freelancers/~01cd808d41decb121d?mp_source=share",
      category: "Freelance",
    },
  ] satisfies AppLink[],
  stats: [
    {
      title: "GitHub Profile Summary",
      href: "https://github.com/IRNCyber",
      image:
        "https://github-readme-stats.vercel.app/api?username=IRNCyber&theme=flag-india&hide_border=false&include_all_commits=true&count_private=true",
    },
    {
      title: "GitHub Streak",
      href: "https://github.com/IRNCyber",
      image:
        "https://github-readme-streak-stats.herokuapp.com/?user=IRNCyber&theme=flag-india&hide_border=false",
    },
    {
      title: "Top Languages",
      href: "https://github.com/IRNCyber",
      image:
        "https://github-readme-stats.vercel.app/api/top-langs/?username=IRNCyber&theme=flag-india&hide_border=false&layout=compact&langs_count=20&count_private=true",
    },
    {
      title: "GitHub Commit Count & Activity",
      href: "https://github.com/IRNCyber",
      image:
        "https://github-readme-activity-graph.vercel.app/graph?username=IRNCyber&theme=github-compact&hide_border=true&area=true",
    },
    {
      title: "TryHackMe Badge",
      href: "https://tryhackme.com/p/IRNCyber",
      image: "https://tryhackme-badges.s3.amazonaws.com/IRNCyber.png",
    },
    {
      title: "Hack The Box Badge",
      href: "https://app.hackthebox.com/profile/2313221",
      image: "https://www.hackthebox.com/badge/image/2313221.png",
    },
  ] satisfies StatCard[],
  languages: [
    { name: "English", proficiency: "Full Professional" },
    { name: "Hindi", proficiency: "Native or Bilingual" },
    { name: "Russian", proficiency: "Elementary" },
  ],
  awards: [
    { title: "Kaushal Mitra" },
  ],
} as const;
