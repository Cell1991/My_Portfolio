"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("interactive-hover")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Glow Halo */}
      <motion.div
        className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform ease-out"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovered ? 2.2 : 1,
          opacity: isHovered ? 0.8 : 0.45,
          backgroundColor: isHovered ? "rgba(0, 242, 254, 0.15)" : "rgba(157, 78, 221, 0.12)",
          borderColor: isHovered ? "rgba(0, 242, 254, 0.8)" : "rgba(157, 78, 221, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        style={{
          width: 36,
          height: 36,
          borderWidth: 1,
        }}
      />

      {/* Center Core Dot */}
      <motion.div
        className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovered ? 0.5 : 1,
          backgroundColor: isHovered ? "#00f2fe" : "#00f2fe",
        }}
        transition={{ type: "spring", stiffness: 900, damping: 40 }}
        style={{
          width: 6,
          height: 6,
          boxShadow: "0 0 10px #00f2fe",
        }}
      />
    </div>
  );
}
