"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, CheckCircle2, Layers } from "lucide-react";

export default function SkillsSection() {
  const skillDomains = [
    {
      title: "Frontend & Client Engineering",
      icon: Code2,
      tag: "UI & INTERACTION",
      description: "Building responsive, accessible, and high-performance user interfaces with modern React paradigms.",
      techs: [
        { name: "Next.js 15 (App Router)", highlight: true },
        { name: "React 19", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "Tailwind CSS v4", highlight: false },
        { name: "Framer Motion", highlight: false },
        { name: "JavaScript (ES6+)", highlight: false },
      ],
    },
    {
      title: "Backend & Systems Architecture",
      icon: Server,
      tag: "ASYNC & REAL-TIME",
      description: "Engineering non-blocking APIs, low-latency WebSocket rooms, and machine learning inference services.",
      techs: [
        { name: "Python 3.x", highlight: true },
        { name: "FastAPI", highlight: true },
        { name: "AsyncIO & WebSockets", highlight: true },
        { name: "RESTful API Design", highlight: false },
        { name: "ONNX Runtime (AI)", highlight: false },
        { name: "Node.js", highlight: false },
      ],
    },
    {
      title: "Database, DevOps & Infrastructure",
      icon: Database,
      tag: "PERSISTENCE & DEPLOY",
      description: "Ensuring zero-redundancy 3NF schemas, automated containerized microservices, and reliable workflows.",
      techs: [
        { name: "PostgreSQL (3NF)", highlight: true },
        { name: "Prisma ORM", highlight: true },
        { name: "Docker & Docker Compose", highlight: true },
        { name: "Linux & Bash Scripting", highlight: false },
        { name: "Git & CI/CD", highlight: false },
        { name: "AWS Fundamentals", highlight: false },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07080d] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] text-neutral-400 border border-white/10 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNICAL DOMAINS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Architecture &amp; Tooling
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2">
            Selected stack focused on reliability, performance, and type-safety across the entire pipeline.
          </p>
        </div>

        {/* Skill Matrix Grid (Clean, No Fake % Bars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillDomains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl p-6 bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.03] text-neutral-400 border border-white/5">
                      {domain.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{domain.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {domain.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {domain.techs.map((tech) => (
                      <span
                        key={tech.name}
                        className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-colors ${
                          tech.highlight
                            ? "bg-cyan-500/10 text-cyan-300 border-cyan-500/25 font-semibold"
                            : "bg-white/[0.03] text-neutral-300 border-white/[0.08]"
                        }`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-neutral-500 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Production &amp; Research Proven</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
