export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  highlights: string[];
  tags: string[];
  category: "Full Stack" | "AI & Systems" | "Database & APIs";
  stats: { label: string; value: string }[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillDomain {
  title: string;
  badge: string;
  color: string;
  skills: { name: string; tag: string }[];
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  highlights: string[];
  tech: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Thanaphat Chichu",
    displayName: "I'm Cell",
    title: "Full Stack & Backend Systems Architect",
    tagline: "High-Performance Backends · Async Systems · Modern Web",
    bio: "Computer Science @ Naresuan University. Focused on low-latency microservices, async backends, and high-velocity Next.js applications.",
    location: "Bangkok / Phitsanulok",
    status: "Available for Projects",
    email: "celleb1991@gmail.com",
    github: "https://github.com/Cell1991",
    facebook: "https://www.facebook.com/cellz2505",
    instagram: "https://www.instagram.com/cell.tnp",
    line: "https://line.me/ti/p/~cellz05",
  },

  projects: [
    {
      id: "project-crossword",
      title: "Multiplayer Crossword Game",
      subtitle: "Real-time Game Orchestration Engine",
      tagline: "Sub-50ms synchronized multiplayer word engine with heuristic 2D board generation.",
      highlights: [
        "Non-blocking WebSocket room orchestration on FastAPI & AsyncIO",
        "Algorithmic backtracking board generator with 10k+ word corpus",
        "Containerized microservice mesh via Docker Compose",
      ],
      tags: ["FastAPI", "AsyncIO", "WebSockets", "JavaScript ES6+", "Docker"],
      category: "Full Stack",
      stats: [
        { label: "Sync Tick", value: "< 50ms" },
        { label: "Corpus", value: "10K+ Words" },
        { label: "Mesh", value: "Docker" },
      ],
      demoUrl: "https://github.com/Cell1991/crossword-game",
      githubUrl: "https://github.com/Cell1991/crossword-game",
      featured: true,
    },
    {
      id: "project-stroke-scan",
      title: "NU Stroke Scan",
      subtitle: "Medical AI Segmentation Pipeline",
      tagline: "High-throughput CT/MRI batch inference pipeline with interactive DICOM canvas mask overlay.",
      highlights: [
        "Embedded ONNX Runtime delivering CT segmentation in <120ms",
        "Interactive Next.js diagnostic dashboard with canvas masks",
        "Decoupled heavy matrix compute from core HTTP workers",
      ],
      tags: ["Next.js 14", "ONNX Runtime", "FastAPI", "Python", "Docker"],
      category: "AI & Systems",
      stats: [
        { label: "Inference", value: "< 120ms" },
        { label: "Mask Canvas", value: "DICOM UI" },
        { label: "Throughput", value: "Real-time" },
      ],
      demoUrl: "https://github.com/Cell1991/nu-stroke-scan",
      githubUrl: "https://github.com/Cell1991/nu-stroke-scan",
      featured: true,
    },
    {
      id: "project-wellness",
      title: "Wellness Platform",
      subtitle: "Enterprise 3NF Database Hub",
      tagline: "Strictly normalized 3NF PostgreSQL architecture with zero data redundancy and type-safe ORM.",
      highlights: [
        "Zero-redundancy 3NF relational schema with referential integrity",
        "Prisma ORM automated type generation & schema lifecycle",
        "Database telemetry, connection pooling & load balancing",
      ],
      tags: ["PostgreSQL 3NF", "Prisma ORM", "Next.js", "TypeScript", "Tailwind CSS"],
      category: "Database & APIs",
      stats: [
        { label: "Schema", value: "Strict 3NF" },
        { label: "Redundancy", value: "0% Loss" },
        { label: "ORM", value: "Prisma" },
      ],
      demoUrl: "https://github.com/Cell1991",
      githubUrl: "https://github.com/Cell1991",
      featured: true,
    },
  ] as Project[],

  skillDomains: [
    {
      title: "Frontend & UI",
      badge: "CLIENT SYSTEMS",
      color: "cyan",
      skills: [
        { name: "Next.js 15 (App Router)", tag: "Framework" },
        { name: "React 19", tag: "UI Library" },
        { name: "TypeScript", tag: "Type-Safe" },
        { name: "Tailwind CSS v4", tag: "Styling" },
        { name: "JavaScript (ES6+)", tag: "Language" },
      ],
    },
    {
      title: "Backend & Systems",
      badge: "ASYNC & REAL-TIME",
      color: "purple",
      skills: [
        { name: "FastAPI", tag: "Framework" },
        { name: "Python 3.x", tag: "Language" },
        { name: "AsyncIO & WebSockets", tag: "Networking" },
        { name: "ONNX Runtime", tag: "AI Inference" },
        { name: "RESTful APIs", tag: "Architecture" },
      ],
    },
    {
      title: "Data & DevOps",
      badge: "INFRASTRUCTURE",
      color: "emerald",
      skills: [
        { name: "PostgreSQL (3NF)", tag: "Relational DB" },
        { name: "Prisma ORM", tag: "Type-Safe ORM" },
        { name: "Docker & Compose", tag: "Containers" },
        { name: "Linux & Bash", tag: "OS / Scripting" },
        { name: "Git & GitHub", tag: "Version Control" },
      ],
    },
  ] as SkillDomain[],

  experiences: [
    {
      year: "2024 - Present",
      role: "Full Stack & Backend Systems Architect",
      company: "Projects & Engineering",
      highlights: [
        "Engineered real-time multiplayer WebSocket rooms (<50ms sync tick)",
        "Built clinical AI ONNX inference pipeline (<120ms CT segmentation)",
        "Designed strict 3NF PostgreSQL databases with Prisma ORM",
      ],
      tech: ["FastAPI", "Next.js", "Python", "TypeScript", "Docker", "PostgreSQL"],
    },
    {
      year: "Academic",
      role: "B.Sc. in Computer Science",
      company: "Naresuan University",
      highlights: [
        "Specialized in Full-Stack Web Development, Cloud Systems & Databases",
        "Graduated with honors in algorithmic problem solving and architecture",
      ],
      tech: ["Computer Science", "Database Systems", "TCP/IP Networking", "Algorithms"],
    },
  ] as Experience[],
};
