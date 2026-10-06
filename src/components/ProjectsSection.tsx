"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Full Stack", "AI & Systems", "Database & APIs"];

  const filteredProjects =
    activeCategory === "All"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-[#07080d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>SELECTED CASES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Engineering
            </h2>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeCategory === cat
                    ? "bg-white text-black font-bold shadow-md shadow-white/10"
                    : "bg-white/[0.04] text-neutral-400 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Projects */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project: Project, index: number) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative rounded-2xl p-6 glass-card border border-white/10 hover:border-cyan-400/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Category & Links */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-neutral-300">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-neutral-300 hover:text-white border border-white/10 transition-colors"
                          title="View Source"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & 1-Liner Hook */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    {project.tagline}
                  </p>

                  {/* 3 Key Bullets (Low Cognition Load) */}
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                        <span className="text-cyan-400 mt-0.5">›</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics Box */}
                  <div className="grid grid-cols-3 gap-1.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 mb-5">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <p className="text-xs font-mono font-bold text-white">{stat.value}</p>
                        <p className="text-[9px] font-mono text-neutral-500 uppercase">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-neutral-300 border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
