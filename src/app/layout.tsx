import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cell (Sorawit) — Creative Full-Stack & Motion Portfolio",
  description:
    "Award-winning style developer portfolio with fluid animations, interactive vector physics, and high-performance engineering.",
  keywords: [
    "Full Stack Developer",
    "Creative Developer",
    "Next.js Portfolio",
    "TypeScript",
    "Anime.js",
    "Web Motion",
    "Tailwind CSS",
  ],
  authors: [{ name: "Sorawit (Cell)" }],
  openGraph: {
    title: "Cell — Creative Full-Stack & Motion Portfolio",
    description:
      "Fluid animations, interactive vector physics, and high-performance engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="antialiased bg-[#07080d] text-[#f0f4fc] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
