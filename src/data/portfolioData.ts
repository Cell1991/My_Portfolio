export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: "Full Stack" | "Creative Dev" | "AI & Systems" | "Mobile";
  gradient: string;
  stats: { label: string; value: string }[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; iconName?: string; color: string }[];
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
    name: "Sorawit (Cell)",
    title: "Full-Stack Engineer & Creative Developer",
    tagline: "Crafting High-Performance Web Systems & Fluid Digital Experiences",
    bio: "Passionate developer focused on building scalable cloud architectures, interactive UI motion, and modern web applications with cutting-edge technologies.",
    location: "Bangkok, Thailand",
    status: "Available for ambitious projects",
    email: "sorawit.cell@example.com",
    github: "https://github.com/Cell1991",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },

  projects: [
    {
      id: "project-nexus",
      title: "Nexus Quantum AI",
      subtitle: "Enterprise Agentic Automation Platform",
      description: "Real-time AI workflow orchestration engine featuring multi-agent intelligence, low-latency streaming pipelines, and dynamic telemetry graphs.",
      tags: ["Next.js 15", "TypeScript", "Python / FastAPI", "Kafka", "Tailwind CSS"],
      category: "AI & Systems",
      gradient: "from-cyan-500 to-blue-600",
      stats: [
        { label: "Throughput", value: "10K req/s" },
        { label: "Latency", value: "< 45ms" },
        { label: "Active Nodes", value: "250+" },
      ],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/Cell1991",
      featured: true,
    },
    {
      id: "project-synthwave",
      title: "CyberWave Studio",
      subtitle: "Interactive Web Audio & Visual Synthesizer",
      description: "In-browser digital audio workstation with real-time waveform modulation, SVG particle reactive spectrums, and MIDI controller support.",
      tags: ["Web Audio API", "React 19", "Anime.js", "Canvas 2D", "GLSL"],
      category: "Creative Dev",
      gradient: "from-purple-500 to-pink-500",
      stats: [
        { label: "Audio Engine", value: "32-bit DSP" },
        { label: "Frame Rate", value: "60 FPS" },
        { label: "Presets", value: "48+" },
      ],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/Cell1991",
      featured: true,
    },
    {
      id: "project-hyperflow",
      title: "HyperFlow Cloud",
      subtitle: "Distributed Microservices Control Plane",
      description: "Modern cloud infrastructure dashboard providing real-time Kubernetes cluster monitoring, distributed tracing, and automated canary deployments.",
      tags: ["Go", "Next.js", "Docker", "Kubernetes", "GraphQL"],
      category: "Full Stack",
      gradient: "from-emerald-400 to-teal-600",
      stats: [
        { label: "Uptime", value: "99.99%" },
        { label: "Clusters", value: "120+" },
        { label: "Cost Saved", value: "35%" },
      ],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/Cell1991",
      featured: true,
    },
    {
      id: "project-pulse",
      title: "PulsePay Terminal",
      subtitle: "Zero-Knowledge Biometric Payment SDK",
      description: "Ultra-secure fintech gateway supporting instantaneous cross-border settlement, hardware key authentication, and live fraud detection.",
      tags: ["TypeScript", "Rust", "WebAuthn", "PostgreSQL", "Tailwind CSS"],
      category: "Full Stack",
      gradient: "from-amber-400 to-orange-600",
      stats: [
        { label: "Volume", value: "$12M+" },
        { label: "Security", value: "ZK-Proof" },
        { label: "Settlement", value: "Instant" },
      ],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/Cell1991",
      featured: false,
    },
  ] as Project[],

  skillCategories: [
    {
      title: "Frontend & Creative UI",
      skills: [
        { name: "React 19 / Next.js", level: 96, color: "#00f2fe" },
        { name: "TypeScript", level: 94, color: "#3178c6" },
        { name: "Tailwind CSS v4", level: 95, color: "#38bdf8" },
        { name: "Anime.js / Motion", level: 92, color: "#ff007f" },
        { name: "Canvas 2D / SVG Shaders", level: 88, color: "#a855f7" },
      ],
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "Node.js / Express", level: 90, color: "#22c55e" },
        { name: "Python / FastAPI", level: 88, color: "#eab308" },
        { name: "PostgreSQL / Redis", level: 86, color: "#3b82f6" },
        { name: "REST & GraphQL APIs", level: 92, color: "#ec4899" },
        { name: "Docker & Cloud Deploy", level: 84, color: "#06b6d4" },
      ],
    },
    {
      title: "Architecture & Tools",
      skills: [
        { name: "System Design", level: 89, color: "#8b5cf6" },
        { name: "Git / CI/CD Pipelines", level: 93, color: "#f97316" },
        { name: "Performance Optimization", level: 94, color: "#10b981" },
        { name: "Security & Auth (OAuth/JWT)", level: 87, color: "#6366f1" },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      year: "2024 - Present",
      role: "Lead Full-Stack Developer",
      company: "Apex Digital Solutions",
      description: "Architecting enterprise SaaS platforms and leading UI/UX motion design systems.",
      achievements: [
        "Boosted core web vitals and overall page speed score to 99/100",
        "Engineered real-time collaboration canvas serving 50k+ active monthly users",
      ],
      tech: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Redis"],
    },
    {
      year: "2022 - 2024",
      role: "Senior Frontend Engineer",
      company: "NovaTech Innovations",
      description: "Spearheaded frontend architecture, micro-frontends, and interactive animation libraries.",
      achievements: [
        "Reduced bundle size by 42% through lazy modular architecture",
        "Built custom SVG visualization suite adopted across 6 internal tools",
      ],
      tech: ["React", "TypeScript", "Anime.js", "GraphQL", "Tailwind CSS"],
    },
    {
      year: "2020 - 2022",
      role: "Full-Stack Web Developer",
      company: "Creative Matrix Lab",
      description: "Developed bespoke client web applications with high-fidelity animations and responsive interfaces.",
      achievements: [
        "Delivered 18+ high-impact web applications for international clients",
        "Awarded best UI Showcase of the Year 2021",
      ],
      tech: ["JavaScript", "HTML5/CSS3", "PHP", "MySQL", "GSAP"],
    },
  ] as Experience[],
};
