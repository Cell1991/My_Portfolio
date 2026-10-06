"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Terminal, Sliders, Zap, Sparkles } from "lucide-react";
import InteractiveCanvas from "./InteractiveCanvas";
import { GithubIcon } from "./Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function HeroSection() {
  const [colorMode, setColorMode] = useState<"cyan" | "purple" | "magenta" | "emerald">("cyan");
  const [speed, setSpeed] = useState<number>(1.2);
  const [density, setDensity] = useState<number>(75);

  const colors = {
    cyan: { primary: "#00f2fe", line: "rgba(0, 242, 254, 0.15)" },
    purple: { primary: "#a855f7", line: "rgba(168, 85, 247, 0.15)" },
    magenta: { primary: "#ff007f", line: "rgba(255, 0, 127, 0.15)" },
    emerald: { primary: "#00f59b", line: "rgba(0, 245, 155, 0.15)" },
  };

  const titleWords = ["High-Performance", "Systems", "&", "Creative", "Motion"];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern bg-[#07080d]"
    >
      {/* Background Interactive Vector Canvas (Anime.js Style) */}
      <InteractiveCanvas
        particleColor={colors[colorMode].primary}
        lineColor={colors[colorMode].line}
        speedMultiplier={speed}
        density={density}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 text-xs font-mono text-neutral-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-white font-semibold">Thanaphat Chichu (Cell)</span>
          <span className="text-neutral-500">·</span>
          <span className="text-cyan-400">Full Stack & Systems Architect</span>
        </motion.div>

        {/* Hero Title (Kinetic Typography with High Contrast) */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mb-4 max-w-4xl">
          {titleWords.map((word, index) => {
            const isHighlighted = word === "Creative" || word === "Systems" || word === "Motion";
            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 140,
                }}
                className={`text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight ${
                  isHighlighted
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 text-glow-cyan"
                    : "text-white"
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </div>

        {/* Minimal 1-Line Subtitle (Low Cognitive Load) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-sm sm:text-base text-neutral-400 font-mono max-w-xl mb-8"
        >
          FastAPI &amp; AsyncIO · Next.js &amp; TypeScript · ONNX AI · Strict 3NF
        </motion.p>

        {/* Interactive Visual Control Deck (The beloved feature!) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="w-full max-w-lg p-4 rounded-2xl glass-card border border-white/10 shadow-2xl mb-8"
        >
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold">
              <Sliders className="w-3.5 h-3.5" />
              <span>LIVE VECTOR PHYSICS</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
              <Zap className="w-3 h-3 text-amber-400" />
              <span>Real-time Interactive</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-left">
            {/* Color Palette Switcher */}
            <div>
              <label className="block text-[10px] font-mono text-neutral-400 mb-1">PALETTE</label>
              <div className="flex items-center gap-1.5">
                {(["cyan", "purple", "magenta", "emerald"] as const).map((color) => (
                  <button
                    key={color}
                    onClick={() => setColorMode(color)}
                    className={`w-5 h-5 rounded-full border transition-all ${
                      colorMode === color ? "scale-125 border-white shadow-md" : "opacity-50 hover:opacity-100 border-transparent"
                    }`}
                    style={{
                      backgroundColor: colors[color].primary,
                      boxShadow: colorMode === color ? `0 0 10px ${colors[color].primary}` : "none",
                    }}
                    title={`Theme ${color}`}
                  />
                ))}
              </div>
            </div>

            {/* Speed Slider */}
            <div>
              <div className="flex justify-between text-[10px] font-mono text-neutral-400 mb-1">
                <span>SPEED</span>
                <span className="text-cyan-400">{speed.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="0.4"
                max="3.0"
                step="0.2"
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* Particle Density */}
            <div>
              <div className="flex justify-between text-[10px] font-mono text-neutral-400 mb-1">
                <span>DENSITY</span>
                <span className="text-purple-400">{density}</span>
              </div>
              <input
                type="range"
                min="30"
                max="120"
                step="5"
                value={density}
                onChange={(e) => setDensity(parseInt(e.target.value))}
                className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
              />
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-xs font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <span>Explore Works</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="#terminal"
            className="px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-xs font-semibold text-neutral-200 hover:text-white transition-all flex items-center gap-2"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Terminal CLI</span>
          </a>

          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-neutral-300 hover:text-white transition-all"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Clean Engineering Metric Counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 w-full max-w-3xl"
        >
          {[
            { label: "EDUCATION", value: "B.Sc. CS @ NU" },
            { label: "SYNC TICK", value: "< 50ms" },
            { label: "AI INFERENCE", value: "< 120ms" },
            { label: "DATABASE", value: "Strict 3NF" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-base sm:text-lg font-black text-white font-mono">{stat.value}</p>
              <p className="text-[10px] text-neutral-500 font-mono tracking-wider mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
