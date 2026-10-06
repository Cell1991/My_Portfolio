export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: "Full Stack" | "AI & Systems" | "Creative Dev" | "Database & APIs";
  gradient: string;
  stats: { label: string; value: string }[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; color: string }[];
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Thanaphat Chichu (Cell)",
    displayName: "I'm Cell",
    title: "Full Stack & Backend Systems Architect",
    tagline: "Building High-Throughput Microservices, AI Pipelines & Fluid Modern Web Systems",
    bio: "Computer Science graduate from Naresuan University specializing in low-latency async architectures, non-blocking WebSocket engines, ONNX AI inference pipelines, and scalable Next.js ecosystems.",
    location: "Bangkok & Phitsanulok, Thailand",
    status: "Active & Available for Ambitious Projects",
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
      subtitle: "Low-Latency WebSocket Room Orchestration & Heuristic Board Engine",
      description: "Non-blocking multiplayer word strategy engine built on FastAPI & AsyncIO, maintaining sub-50ms synchronized game ticks across concurrent rooms with algorithmic 2D placement against 10,000+ curated word corpora.",
      tags: ["FastAPI", "AsyncIO", "WebSockets", "JavaScript ES6+", "Docker Compose"],
      category: "Full Stack",
      gradient: "from-cyan-500 to-blue-600",
      stats: [
        { label: "Room Latency", value: "< 50ms" },
        { label: "Word Corpus", value: "10K+ Words" },
        { label: "Isolation", value: "Docker Mesh" },
      ],
      demoUrl: "https://github.com/Cell1991/crossword-game",
      githubUrl: "https://github.com/Cell1991/crossword-game",
      featured: true,
    },
    {
      id: "project-stroke-scan",
      title: "NU Stroke Scan",
      subtitle: "AI-Powered Ischemic Stroke Detection & CT Segmentation Pipeline",
      description: "Embedded ONNX Runtime inference service delivering high-throughput batch segmentation on CT/MRI scans in <120ms with interactive Next.js diagnostic dashboard, dynamic canvas masks, and zero-latency triage.",
      tags: ["Next.js 14", "ONNX Runtime", "FastAPI", "Python", "Docker"],
      category: "AI & Systems",
      gradient: "from-purple-500 to-pink-500",
      stats: [
        { label: "Inference Time", value: "< 120ms" },
        { label: "Diagnostic UI", value: "DICOM Canvas" },
        { label: "Architecture", value: "Decoupled Compute" },
      ],
      demoUrl: "https://github.com/Cell1991/nu-stroke-scan",
      githubUrl: "https://github.com/Cell1991/nu-stroke-scan",
      featured: true,
    },
    {
      id: "project-wellness",
      title: "Wellness Enterprise Hub",
      subtitle: "Strict 3NF PostgreSQL Healthcare Platform & Observability",
      description: "Fully normalized relational database architecture in PostgreSQL with zero data redundancy, strict foreign key referential integrity, automated Prisma ORM type generation, and real-time query load balancing.",
      tags: ["PostgreSQL 3NF", "Prisma ORM", "Next.js", "TypeScript", "Tailwind CSS"],
      category: "Database & APIs",
      gradient: "from-emerald-400 to-teal-600",
      stats: [
        { label: "Schema Form", value: "Strict 3NF" },
        { label: "Redundancy", value: "0% Data Loss" },
        { label: "Type Safety", value: "Prisma End-to-End" },
      ],
      demoUrl: "https://github.com/Cell1991",
      githubUrl: "https://github.com/Cell1991",
      featured: true,
    },
  ] as Project[],

  skillCategories: [
    {
      title: "Frontend & Web Architecture",
      skills: [
        { name: "Next.js (App Router)", level: 95, color: "#00f2fe" },
        { name: "React.js", level: 93, color: "#61dafb" },
        { name: "TypeScript", level: 92, color: "#3178c6" },
        { name: "Tailwind CSS v4", level: 95, color: "#38bdf8" },
        { name: "JavaScript ES6+", level: 94, color: "#f7df1e" },
      ],
    },
    {
      title: "Backend & Systems Engineering",
      skills: [
        { name: "Python / FastAPI", level: 94, color: "#009688" },
        { name: "AsyncIO & WebSockets", level: 92, color: "#ff6f00" },
        { name: "RESTful APIs Architecture", level: 95, color: "#02569b" },
        { name: "ONNX Runtime & AI Inference", level: 88, color: "#005ced" },
        { name: "Node.js Ecosystem", level: 86, color: "#22c55e" },
      ],
    },
    {
      title: "Database, DevOps & Cloud",
      skills: [
        { name: "PostgreSQL (3NF Design)", level: 93, color: "#316192" },
        { name: "Prisma ORM", level: 92, color: "#2d3748" },
        { name: "Docker & Docker Compose", level: 91, color: "#2496ed" },
        { name: "Linux, Bash & Git Workflow", level: 94, color: "#f97316" },
        { name: "AWS Cloud Fundamentals", level: 85, color: "#ec4899" },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      year: "2024 - Present",
      role: "Full Stack & Backend Systems Architect",
      company: "Independent & Open-Source Projects",
      description: "Designing end-to-end architectures, high-performance async backends with FastAPI, and fluid Next.js frontend applications.",
      achievements: [
        "Architected multi-room WebSocket game server with sub-50ms tick rate",
        "Engineered medical AI inference pipeline with ONNX Runtime & DICOM canvas visualization",
      ],
      tech: ["Next.js", "FastAPI", "Python", "TypeScript", "Docker", "PostgreSQL"],
    },
    {
      year: "Academic Journey",
      role: "B.Sc. in Computer Science",
      company: "Naresuan University",
      description: "Focused on Software Engineering, Distributed Systems, Database 3NF Normalization, Algorithm Optimization, and Network Protocols.",
      achievements: [
        "Specialized in Full Stack Development & Cloud Infrastructure",
        "Built and defended production-grade engineering prototypes & microservices",
      ],
      tech: ["Computer Science", "Database Systems", "Networking (TCP/IP)", "Algorithms"],
    },
  ] as Experience[],
};
