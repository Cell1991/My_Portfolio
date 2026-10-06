"use client";

import { motion } from "framer-motion";
import { ArrowDown, Terminal, Sparkles, Send } from "lucide-react";
import InteractiveCanvas from "./InteractiveCanvas";
import { GithubIcon } from "./Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function HeroSection() {
  const stackBadges = [
    "FastAPI & AsyncIO",
    "Next.js 15 & React 19",
    "TypeScript",
    "ONNX AI Inference",
    "PostgreSQL (3NF)",
    "Docker Mesh",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#07080d]"
    >
      {/* Subtle Ambient Background */}
      <InteractiveCanvas />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-cyan-500/[0.07] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Availability / Identity Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8 text-xs font-mono text-neutral-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-neutral-400">Thanaphat Chichu</span>
          <span className="text-neutral-600">/</span>
          <span className="text-cyan-400 font-semibold">Full Stack & Systems Architect</span>
        </motion.div>

        {/* Hero Main Headline (Clear, Impactful, Human) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] max-w-4xl mb-6"
        >
          Building High-Throughput Backends &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
            Scalable Web Systems
          </span>
        </motion.h1>

        {/* Bio / Value Prop */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-base sm:text-lg text-neutral-400 font-normal leading-relaxed mb-8"
        >
          B.Sc. in Computer Science from <span className="text-neutral-200 font-medium">Naresuan University</span>. 
          Specialized in low-latency async services, WebSocket room orchestration, AI inference pipelines, and clean Next.js architectures.
        </motion.p>

        {/* Core Architecture Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-2xl"
        >
          {stackBadges.map((badge) => (
            <span
              key={badge}
              className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.03] text-neutral-300 border border-white/[0.08]"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-lg shadow-white/10"
          >
            <span>View Case Studies</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-sm font-medium text-white transition-all flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>

          <a
            href="#terminal"
            className="px-6 py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-sm font-medium text-cyan-400 transition-all flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Contact</span>
          </a>
        </motion.div>

        {/* Clean Engineering Metric Counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-white/10 w-full max-w-4xl"
        >
          {[
            { label: "ACADEMIC FIELD", value: "B.Sc. CompSci (NU)" },
            { label: "WEBSOCKET SYNC", value: "< 50ms Tick" },
            { label: "ONNX INFERENCE", value: "< 120ms Latency" },
            { label: "DATABASE ARCH", value: "Strict 3NF Schema" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-lg sm:text-xl font-bold text-white font-mono">{stat.value}</p>
              <p className="text-[11px] text-neutral-500 font-mono tracking-wider mt-1 uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
