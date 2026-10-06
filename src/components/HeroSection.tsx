"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Send, GraduationCap, MapPin } from "lucide-react";
import InteractiveCanvas from "./InteractiveCanvas";
import { GithubIcon, FacebookIcon, InstagramIcon, LineIcon } from "./Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern bg-[#07080d]"
    >
      {/* Background Interactive Vector Canvas */}
      <InteractiveCanvas particleColor="#00f2fe" lineColor="rgba(0, 242, 254, 0.12)" speedMultiplier={1.0} density={60} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status & Location Pill */}
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
          <span>{PORTFOLIO_DATA.personal.status}</span>
        </motion.div>

        {/* Name / Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-3"
        >
          <span className="text-sm sm:text-base font-mono font-medium text-cyan-400 tracking-wider uppercase">
            Hello, World! I&apos;m
          </span>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white mt-1">
            Thanaphat Chichu
          </h1>
        </motion.div>

        {/* Role & Core Identity */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-purple-400 mb-6"
        >
          Full Stack &amp; Backend Systems Architect
        </motion.h2>

        {/* Short Personal Intro */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-xl text-base text-neutral-300 leading-relaxed mb-4"
        >
          Computer Science graduate passionate about building high-throughput microservices, low-latency async backends, and modern web applications.
        </motion.p>

        {/* Education & Location Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-neutral-400 mb-8"
        >
          <div className="flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-purple-400" />
            <span>B.Sc. Computer Science · Naresuan University</span>
          </div>
          <span className="hidden sm:inline text-neutral-600">·</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>Thailand</span>
          </div>
        </motion.div>

        {/* Action Buttons & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="flex items-center gap-3">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-lg shadow-white/10"
            >
              <span>View Projects</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#terminal"
              className="px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-xs font-semibold text-white transition-all flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5 text-cyan-400" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Direct Social Links */}
          <div className="flex items-center gap-2 sm:pl-4 sm:border-l sm:border-white/10">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-neutral-300 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-neutral-300 hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-neutral-300 hover:text-white transition-colors"
              title="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.line}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-neutral-300 hover:text-white transition-colors"
              title="LINE"
            >
              <LineIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
