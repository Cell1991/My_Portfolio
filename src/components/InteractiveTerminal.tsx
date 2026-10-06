"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { motion } from "framer-motion";
import { Terminal, Send, CheckCircle2, CornerDownLeft, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface TerminalLine {
  type: "input" | "output" | "system" | "success";
  text: string;
}

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: "system", text: "Portfolio OS [Version 4.2.0-neon]" },
    { type: "system", text: "Type 'help' to view available commands or use the quick form below." },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const terminalBodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory: TerminalLine[] = [...history, { type: "input", text: `$ ${cmd}` }];

    switch (trimmed) {
      case "help":
        newHistory.push({
          type: "output",
          text: "Commands: help, about, skills, projects, contact, hire, clear, repo",
        });
        break;
      case "about":
        newHistory.push({
          type: "output",
          text: `${PORTFOLIO_DATA.personal.name} - ${PORTFOLIO_DATA.personal.title}. ${PORTFOLIO_DATA.personal.bio}`,
        });
        break;
      case "skills":
        newHistory.push({
          type: "output",
          text: "Core Tech: Next.js 15, React 19, TypeScript, Anime.js, Node.js, Python, Tailwind CSS, Docker",
        });
        break;
      case "projects":
        newHistory.push({
          type: "output",
          text: PORTFOLIO_DATA.projects.map((p) => `• ${p.title} (${p.category})`).join("\n"),
        });
        break;
      case "contact":
      case "hire":
        newHistory.push({
          type: "success",
          text: `Email: ${PORTFOLIO_DATA.personal.email} | GitHub: ${PORTFOLIO_DATA.personal.github}`,
        });
        break;
      case "repo":
        newHistory.push({
          type: "output",
          text: `Repository: ${PORTFOLIO_DATA.personal.github}/My_Portfolio`,
        });
        break;
      case "clear":
        setHistory([]);
        return;
      case "":
        break;
      default:
        newHistory.push({
          type: "output",
          text: `Command not found: '${trimmed}'. Type 'help' for available commands.`,
        });
    }

    setHistory(newHistory);
  };

  const handleTerminalSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputVal) return;
    handleCommand(inputVal);
    setInputVal("");
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSent(true);

      // Trigger Celebration Confetti
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#00f2fe", "#a855f7", "#ff007f", "#00f59b"],
      });

      setHistory((prev) => [
        ...prev,
        {
          type: "success",
          text: `⚡ Transmission received from ${formData.name} (${formData.email})! Will reply promptly.`,
        },
      ]);
    }, 800);
  };

  return (
    <section id="terminal" className="py-24 relative overflow-hidden bg-radial-glow bg-[#07080d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE CLI & CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Initiate Connection
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3">
            Interact with the portfolio CLI directly or transmit a direct message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Cyber Terminal Emulator */}
          <div className="lg:col-span-7 glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col h-[420px]">
            {/* Terminal Top Window Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-900/90 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-neutral-400 ml-2">bash ~ cell@portfolio</span>
              </div>
              <span className="text-[11px] font-mono text-cyan-400">ONLINE</span>
            </div>

            {/* Terminal Body */}
            <div ref={terminalBodyRef} className="p-4 sm:p-5 font-mono text-xs overflow-y-auto flex-1 space-y-2 select-text">
              {history.map((item, idx) => (
                <div key={idx} className="leading-relaxed whitespace-pre-wrap">
                  {item.type === "system" && (
                    <span className="text-neutral-500">{item.text}</span>
                  )}
                  {item.type === "input" && (
                    <span className="text-cyan-400 font-semibold">{item.text}</span>
                  )}
                  {item.type === "output" && (
                    <span className="text-neutral-300">{item.text}</span>
                  )}
                  {item.type === "success" && (
                    <span className="text-emerald-400 font-semibold">{item.text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Terminal Input Bar */}
            <form onSubmit={handleTerminalSubmit} className="flex items-center px-4 py-3 bg-neutral-950 border-t border-white/10">
              <span className="text-cyan-400 font-mono text-xs mr-2">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help', 'skills', 'projects', 'contact'..."
                className="flex-1 bg-transparent text-xs font-mono text-white outline-none placeholder:text-neutral-600"
              />
              <button type="submit" className="text-neutral-400 hover:text-cyan-400 p-1">
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Quick Direct Message Form */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Send Quick Message</span>
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Direct transmission to inbox. Let&apos;s build something exceptional together.
              </p>

              {formSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center text-emerald-400 space-y-2"
                >
                  <CheckCircle2 className="w-10 h-10 mx-auto" />
                  <p className="font-bold text-sm">Message Transmitted!</p>
                  <p className="text-xs text-neutral-300">
                    Thank you for reaching out. I will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-300 mb-1">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder:text-neutral-600 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-300 mb-1">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder:text-neutral-600 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-300 mb-1">PROJECT DETAILS</label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Let's build a cutting-edge web application..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder:text-neutral-600 focus:border-cyan-400 focus:outline-none resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-xs font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-500">
              <span>Location: {PORTFOLIO_DATA.personal.location}</span>
              <span className="text-cyan-400">{PORTFOLIO_DATA.personal.email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
