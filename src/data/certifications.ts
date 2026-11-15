export type Certification = {
  title: string;
  category: "Security" | "Web" | "Technology" | "Other";
  level?: string;
  issuer?: string;
  issuedAt?: string;
  credentialUrl?: string;
  credentialId?: string;
};

export const certifications: Certification[] = [
  {
    title: "Deploying and Evaluating GenAI Apps with MongoDB",
    category: "Technology",
    issuer: "MongoDB",
    issuedAt: "Nov 1, 2026",
    credentialUrl: "https://www.credly.com/badges/07f6f597-13fd-47d9-8125-1aca2bbd3750",
  },
  {
    title: "From Relational Model (SQL) to MongoDBs Document Model",
    category: "Technology",
    issuer: "MongoDB",
    issuedAt: "Nov 1, 2026",
    credentialUrl: "https://www.credly.com/badges/ad19a16b-425b-4fe9-80fe-eb263c589d7d",
  },
  {
    title: "MongoDB Aggregation Fundamentals",
    category: "Technology",
    issuer: "MongoDB",
    issuedAt: "Nov 1, 2026",
    credentialUrl: "https://www.credly.com/badges/37361f02-d947-4896-b170-dad0e6ea1881",
  },
  {
    title: "MongoDB Schema Design Patterns and Anti-patterns Skill Badge",
    category: "Technology",
    issuer: "MongoDB",
    issuedAt: "Nov 1, 2026",
    credentialUrl: "https://www.credly.com/badges/8ad07051-7539-44b7-88e8-f9db530f9bfd",
  },
  {
    title: "Securing MongoDB Atlas Networking",
    category: "Technology",
    issuer: "MongoDB",
    issuedAt: "Nov 1, 2026",
    credentialUrl: "https://www.credly.com/badges/9252a2f3-e099-4889-b7ae-e9a9f5265276",
  },
  {
    title: "C++ Essentials 1",
    category: "Technology",
    issuer: "Cisco",
    issuedAt: "Oct 24, 2026",
    credentialUrl: "https://www.credly.com/badges/81a1b9a8-8678-40b9-9f47-0a2e9f3c1584",
  },
  {
    title: "Introduction to Cybersecurity",
    category: "Security",
    issuer: "Cisco",
    issuedAt: "Oct 18, 2026",
    credentialUrl: "https://www.credly.com/badges/5cdb85a0-3823-4463-aee2-7c1e4b5ef5a4",
  },
  {
    title: "Python Essentials 1",
    category: "Technology",
    issuer: "Cisco",
    issuedAt: "Oct 18, 2026",
    credentialUrl: "https://www.credly.com/badges/efa012a6-c4aa-484c-ba85-12eb86aacdbe",
  },
  {
    title: "Python Essentials 2",
    category: "Technology",
    issuer: "Cisco",
    issuedAt: "Oct 18, 2026",
    credentialUrl: "https://www.credly.com/badges/a4973712-8107-456e-9ded-8bb234fc8675",
  },
  {
    title: "Cybersecurity Fundamentals",
    category: "Security",
    issuer: "IBM SkillsBuild",
    issuedAt: "Oct 15, 2026",
    credentialUrl: "https://www.credly.com/badges/e4001949-5c5d-42f9-8a4b-892ab4a0bf85",
  },
  {
    title: "Getting Started with Cybersecurity",
    category: "Security",
    issuer: "IBM SkillsBuild",
    issuedAt: "Oct 15, 2026",
    credentialUrl: "https://www.credly.com/badges/b5564a2f-9df1-4ad0-bac2-f6441a360578",
  },
  {
    title: "Governance, Risk, Compliance, and Data Privacy",
    category: "Security",
    issuer: "IBM SkillsBuild",
    issuedAt: "Oct 15, 2026",
    credentialUrl: "https://www.credly.com/badges/f8235ab6-a30c-4142-9f43-89cbf0729bf8",
  },
  { title: "Cyber Security Associate", category: "Security", level: "NSQF Level 0", issuer: "Reliance Foundation", issuedAt: "Apr 2025", credentialId: "RFSA000188831" },
  { title: "Security Analyst Certificate", category: "Security", level: "NSQF Level 0", issuer: "Reliance Foundation", issuedAt: "Aug 2025", credentialId: "RFSA000180472" },
  { title: "Cybersecurity", category: "Security", level: "NSQF Level 0" },
  { title: "Web Design & Development (English)", category: "Web", level: "NSQF Level 5", issuer: "NSDC Academy", issuedAt: "Apr 2025", credentialId: "55C/Q0503" },
  { title: "Web Design & Development - Hindi", category: "Web", level: "NSQF Level 5" },
  { title: "Introduction to Programming I", category: "Technology", level: "NSQF Level 0" },
  { title: "IoT Network Specialist Certificate", category: "Technology", level: "NSQF Level 0", issuer: "Reliance Foundation", issuedAt: "Apr 2025", credentialId: "RFSA000182238" },
  { title: "Introduction to IoT", category: "Technology", level: "NSQF Level 3" },
  { title: "AI for All", category: "Technology", level: "NSQF Level 0" },
  { title: "AI for Entrepreneurship", category: "Technology", level: "NSQF Level 0" },
  { title: "Drone Developer Certification", category: "Technology", level: "NSQF Level 0", issuer: "Reliance Foundation", issuedAt: "Apr 2025", credentialId: "RFSA000181079" },
  { title: "Digital Skills - Advanced", category: "Technology", level: "NSQF Level 0" },
  { title: "Customer Care Executive - Domestic - Non-Voice", category: "Other" },
  { title: "Build and Grow Your Business using WhatsApp (English)", category: "Other", level: "NSQF Level 0" },
  { title: "Legal Assistant Certification Programme", category: "Other", level: "NSQF Level 0" },
  { title: "Branch Banking Executive", category: "Other", level: "NSQF Level 4" },
  { title: "Mobile Phone Hardware Repair Technician", category: "Other", level: "NSQF Level 4" },
  { title: "Solar Panel Installations Technician", category: "Other", level: "NSQF Level 4" },
  { title: "Kisan Drone Operator", category: "Other", level: "NSQF Level 4" },
  { title: "Stock Market Foundation Course", category: "Other", level: "NSQF Level 0" },
  { title: "Understanding the Constitutional Values - Citizenship", category: "Other", level: "NSQF Level 0" },
  { title: "Communication Skills - Intermediate", category: "Other", level: "NSQF Level 0" },
  { title: "Social Media Marketing Course", category: "Other", level: "NSQF Level 0", issuer: "Reliance Foundation", issuedAt: "Apr 2025", credentialId: "RFSA000187579" },
  { title: "Cybersecurity Fundamentals Certification", category: "Security", issuer: "Tech Mahindra Foundation", issuedAt: "Nov 2024" },
  { title: "Digital Productivity Course", category: "Technology", issuer: "UNICEF India", issuedAt: "Aug 2024" },
  { title: "Kaushal Mitra Certificate", category: "Other", issuer: "NSDC Academy", issuedAt: "Feb 2024" },
  { title: "Python with Advanced AI Certification", category: "Technology", issuer: "GUVI & IIT Madras", issuedAt: "Feb 2024", credentialId: "7550o53K61BH9Yp87V" },
  { title: "10 Tips to Create an Impressive Resume", category: "Other" },
];
