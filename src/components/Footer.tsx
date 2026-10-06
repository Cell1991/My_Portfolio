"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Bangkok",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#06070a] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-sm font-bold text-white tracking-wider">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-1 font-mono">
              Designed & Engineered with Next.js 15 & Anime.js Vibes
            </p>
          </div>

          {/* Bangkok Live Time & System Status */}
          <div className="flex items-center gap-6 text-xs font-mono">
            <div className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-neutral-300 flex items-center gap-2">
              <span className="text-neutral-500">BANGKOK (UTC+7):</span>
              <span className="text-cyan-400 font-bold">{time || "09:30:00"}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-neutral-400 hover:text-white hover:border-cyan-400/40 transition-colors flex items-center gap-1.5"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Social & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-mono">
          <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PORTFOLIO_DATA.personal.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              Twitter / X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
