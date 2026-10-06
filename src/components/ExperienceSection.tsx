"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, Calendar, Building2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#07080d]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] text-neutral-400 border border-white/10 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>BACKGROUND & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Academic &amp; Engineering Path
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2">
            Foundations in Computer Science, Distributed Systems, and Modern Full-Stack Development.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-32 space-y-12">
          {PORTFOLIO_DATA.experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Year Label for Desktop */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-28 text-xs font-mono font-bold text-cyan-400">
                {exp.year}
              </div>

              {/* Glowing Node Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#07080d] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_10px_#00f2fe]">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
              </div>

              {/* Card Body */}
              <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-cyan-400/30 transition-all">
                {/* Year Label for Mobile */}
                <div className="sm:hidden inline-block text-xs font-mono font-bold text-cyan-400 mb-2">
                  {exp.year}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-purple-400">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-1.5 mb-4">
                  {exp.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <span className="text-cyan-400 mt-0.5">›</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-neutral-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
