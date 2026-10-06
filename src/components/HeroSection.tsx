"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal, ArrowDown, Play, Sliders, Zap, CheckCircle2 } from "lucide-react";
import InteractiveCanvas from "./InteractiveCanvas";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function HeroSection() {
  const [colorMode, setColorMode] = useState<"cyan" | "purple" | "magenta" | "emerald">("cyan");
  const [speed, setSpeed] = useState<number>(1.2);
  const [density, setDensity] = useState<number>(75);

  const colors = {
    cyan: { primary: "#00f2fe", line: "rgba(0, 242, 254, 0.15)", glow: "shadow-cyan-500/30" },
    purple: { primary: "#a855f7", line: "rgba(168, 85, 247, 0.15)", glow: "shadow-purple-500/30" },
    magenta: { primary: "#ff007f", line: "rgba(255, 0, 127, 0.15)", glow: "shadow-pink-500/30" },
    emerald: { primary: "#00f59b", line: "rgba(0, 245, 155, 0.15)", glow: "shadow-emerald-500/30" },
  };

  const titleWords = ["High-Performance", "Systems", "&", "Creative", "Motion"];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern bg-radial-glow">
      {/* Background Interactive Canvas */}
      <InteractiveCanvas
        particleColor={colors[colorMode].primary}
        lineColor={colors[colorMode].line}
        speedMultiplier={speed}
        density={density}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 text-xs font-mono text-neutral-300"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>{PORTFOLIO_DATA.personal.status}</span>
        </motion.div>

        {/* Hero Title with Kinetic Stagger */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mb-6 max-w-4xl">
          {titleWords.map((word, index) => {
            const isHighlighted = word === "Creative" || word === "Systems" || word === "Motion";
            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + index * 0.1,
                  type: "spring",
                  stiffness: 120,
                }}
                className={`text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight ${
                  isHighlighted
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-glow-cyan"
                    : "text-white"
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </div>

        {/* Subtitle / Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl text-base sm:text-lg text-neutral-400 font-normal leading-relaxed mb-10"
        >
          {PORTFOLIO_DATA.personal.bio}
        </motion.p>

        {/* Interactive Anime.js Engine Control Deck */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-full max-w-xl p-4 rounded-2xl glass-card border border-white/10 shadow-2xl mb-10"
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold">
              <Sliders className="w-4 h-4" />
              <span>INTERACTIVE VISUAL CONTROL</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Real-time Vector Physics</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {/* Color Palette Switcher */}
            <div>
              <label className="block text-[11px] font-mono text-neutral-400 mb-1.5">SPECTRUM THEME</label>
              <div className="flex items-center gap-2">
                {(["cyan", "purple", "magenta", "emerald"] as const).map((color) => (
                  <button
                    key={color}
                    onClick={() => setColorMode(color)}
                    className={`w-6 h-6 rounded-full border transition-all ${
                      colorMode === color ? "scale-125 border-white shadow-lg" : "opacity-60 hover:opacity-100 border-transparent"
                    }`}
                    style={{
                      backgroundColor: colors[color].primary,
                      boxShadow: colorMode === color ? `0 0 12px ${colors[color].primary}` : "none",
                    }}
                    title={`Theme ${color}`}
                  />
                ))}
              </div>
            </div>

            {/* Speed Slider */}
            <div>
              <div className="flex justify-between text-[11px] font-mono text-neutral-400 mb-1">
                <span>VELOCITY</span>
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
              <div className="flex justify-between text-[11px] font-mono text-neutral-400 mb-1">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group"
          >
            <span>Explore Showcase</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>

          <a
            href="#terminal"
            className="px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-sm font-semibold text-neutral-200 hover:text-white hover:border-cyan-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Open Terminal CLI</span>
          </a>
        </motion.div>

        {/* Quick Highlights Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10 w-full max-w-4xl"
        >
          {[
            { label: "Education", value: "B.Sc. CS @ NU" },
            { label: "System Latency", value: "< 50ms Tick" },
            { label: "AI Inference", value: "< 120ms ONNX" },
            { label: "Database Form", value: "Strict 3NF" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-xl sm:text-2xl font-black text-white font-mono">{stat.value}</p>
              <p className="text-xs text-neutral-400 font-mono mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
