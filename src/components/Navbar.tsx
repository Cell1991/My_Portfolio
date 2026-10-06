"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal, Code2, Layers, Briefcase, Mail } from "lucide-react";
import { GithubIcon } from "./Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "projects", "skills", "experience", "terminal"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Showcase", href: "#projects", icon: Layers, id: "projects" },
    { name: "Skills", href: "#skills", icon: Code2, id: "skills" },
    { name: "Journey", href: "#experience", icon: Briefcase, id: "experience" },
    { name: "Terminal", href: "#terminal", icon: Terminal, id: "terminal" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3 bg-[#07080d]/80 backdrop-blur-xl border-b border-white/10" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Name Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
            <div className="w-full h-full bg-[#090b14] rounded-xl flex items-center justify-center">
              <span className="font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-lg">
                C
              </span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#07080d] animate-pulse" />
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              <span>{PORTFOLIO_DATA.personal.name}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                PRO
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-mono">Creative Full-Stack</p>
          </div>
        </a>

        {/* Floating Navigation Pill */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 rounded-full flex items-center gap-1.5 ${
                  isActive
                    ? "text-white bg-white/10 shadow-sm border border-white/20"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-cyan-400" : "text-neutral-400"}`} />
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full border border-cyan-400/40 shadow-[0_0_12px_rgba(0,242,254,0.3)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions CTA */}
        <div className="flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-neutral-300 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-200"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="#terminal"
            className="relative group overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-xs font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin text-cyan-200" style={{ animationDuration: "6s" }} />
            <span>Let&apos;s Build</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
