"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Layers, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function SkillsSection() {
  const iconMap: Record<string, typeof Code2> = {
    cyan: Code2,
    purple: Server,
    emerald: Database,
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-[#07080d] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/30 text-xs font-mono mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>ARSENAL MATRIX</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Technical Arsenal
          </h2>
        </div>

        {/* Skill Matrix Grid (Low Cognitive Load, Clean Badges) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skillDomains.map((domain, index) => {
            const Icon = iconMap[domain.color] || Code2;
            const isCyan = domain.color === "cyan";
            const isPurple = domain.color === "purple";

            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl p-6 glass-card border border-white/10 hover:border-cyan-400/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                          isCyan
                            ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                            : isPurple
                            ? "bg-purple-500/10 border-purple-500/30 text-purple-400"
                            : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-white">{domain.title}</h3>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.04] text-neutral-400 border border-white/5">
                      {domain.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {domain.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors"
                      >
                        <span className="text-xs font-mono font-medium text-neutral-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-white/[0.03]">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>Stack Status</span>
                  <span className="text-emerald-400 font-semibold">● Production Ready</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
