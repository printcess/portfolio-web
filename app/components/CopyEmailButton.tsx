"use client";
import { useState } from "react";
import { Mail } from "lucide-react";


export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("pngerdchai@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyEmail}
      className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
    >
      <Mail size={20} />
      {copied ? "Copied!" : ""}
    </button>
  );
}
