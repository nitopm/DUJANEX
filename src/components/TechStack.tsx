"use client";

import React from "react";

export default function TechStack() {
  const techs = [
    { name: "Next.js 16", tag: "App Router" },
    { name: "React 19", tag: "Concurrent" },
    { name: "TypeScript", tag: "Type-Safe" },
    { name: "Tailwind CSS v4", tag: "Modern Styling" },
    { name: "PostgreSQL", tag: "Database" },
    { name: "Node.js", tag: "Backend Engine" },
    { name: "Python", tag: "Automation" },
    { name: "NFC Web API", tag: "Hardware" },
    { name: "Vercel", tag: "Edge Network" },
    { name: "Docker", tag: "Containers" },
  ];

  return (
    <section className="py-12 border-y border-white/[0.06] bg-[#07070e]/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 mb-6 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">
          Stack Tecnológico Industrial de Vanguardia
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee gap-8 whitespace-nowrap py-2">
          {techs.concat(techs).map((tech, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-zinc-900/60 border border-white/10 backdrop-blur-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span className="text-sm font-semibold text-zinc-200">{tech.name}</span>
              <span className="text-[10px] font-mono text-zinc-400 px-1.5 py-0.5 rounded bg-white/5">
                {tech.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
