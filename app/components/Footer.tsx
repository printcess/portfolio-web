"use client";

import { GraduationCap, FolderGit2, Activity, Figma, FileText, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const dockItems = [
    { icon: GraduationCap, label: "Education", href: "/education" },
    { icon: FolderGit2, label: "Project", href: "/projects" },
    { icon: Activity, label: "Activity", href: "/activity" },
    { icon: Figma, label: "Figma", href: "/figma" }, // Note: Figma icon might need a fallback if not in the version, but usually is.
    { icon: FileText, label: "Resume", href: "/resume" },
    { icon: Mail, label: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-[1200px] ">
      <div className="flex items-center justify-around w-full h-20 px-4 rounded-2xl bg-slate-700/80 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:scale-[1.01]">
        {dockItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-white/30"
          >
            <item.icon className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" />
            <span className="absolute -top-10 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
