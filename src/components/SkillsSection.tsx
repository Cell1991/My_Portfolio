"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Wrench, ShieldCheck, Flame } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid-pattern bg-[#07080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/30 text-xs font-mono mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>CAPABILITIES & ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Technical Stack Matrix
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3">
            Rigorous foundations across frontend graphics, modern frameworks, backend distributed systems, and DevOps.
          </p>
        </div>

        {/* Skill Matrix Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    {catIdx === 0 && <Flame className="w-5 h-5 text-cyan-400" />}
                    {catIdx === 1 && <Cpu className="w-5 h-5 text-purple-400" />}
                    {catIdx === 2 && <ShieldCheck className="w-5 h-5 text-emerald-400" />}
                    <span>{category.title}</span>
                  </h3>
                  <span className="text-xs font-mono text-neutral-500">
                    {category.skills.length} Techs
                  </span>
                </div>

                {/* Skill Bars */}
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                        <span className="text-neutral-200 font-medium">{skill.name}</span>
                        <span className="text-neutral-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{
                            backgroundColor: skill.color,
                            boxShadow: `0 0 10px ${skill.color}80`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>Verified in Production</span>
                <span className="text-cyan-400 font-semibold">Active Tier</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
