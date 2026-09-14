"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CosmicWireframeGlobe() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
      {/* Deep cosmic nebula glow */}
      <div className="absolute w-[700px] h-[500px] bg-gradient-to-b from-purple-600/20 via-violet-900/15 to-transparent rounded-full blur-[140px]" />
      
      {/* Floating starry dust */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#c084fc_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* SVG Cosmic Wireframe Globe */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="relative w-[650px] h-[650px] md:w-[850px] md:h-[850px] opacity-75 shrink-0"
      >
        <svg
          viewBox="0 0 800 800"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Planet Horizon Glow */}
          <circle
            cx="400"
            cy="400"
            r="320"
            stroke="url(#globeGlow)"
            strokeWidth="2"
            opacity="0.8"
          />
          <circle
            cx="400"
            cy="400"
            r="325"
            stroke="url(#purpleHorizon)"
            strokeWidth="6"
            filter="blur(8px)"
            opacity="0.6"
          />

          {/* Latitude Arcs */}
          <ellipse cx="400" cy="400" rx="320" ry="80" stroke="url(#wireGradient)" strokeWidth="1.2" opacity="0.6" strokeDasharray="6 4" />
          <ellipse cx="400" cy="400" rx="320" ry="160" stroke="url(#wireGradient)" strokeWidth="1.2" opacity="0.7" />
          <ellipse cx="400" cy="400" rx="320" ry="240" stroke="url(#wireGradient)" strokeWidth="1.2" opacity="0.6" strokeDasharray="8 4" />
          <ellipse cx="400" cy="400" rx="320" ry="320" stroke="url(#wireGradient)" strokeWidth="1.5" opacity="0.8" />

          {/* Longitude Arcs */}
          <ellipse cx="400" cy="400" rx="80" ry="320" stroke="url(#wireGradient)" strokeWidth="1.2" opacity="0.6" strokeDasharray="6 4" />
          <ellipse cx="400" cy="400" rx="160" ry="320" stroke="url(#wireGradient)" strokeWidth="1.2" opacity="0.7" />
          <ellipse cx="400" cy="400" rx="240" ry="320" stroke="url(#wireGradient)" strokeWidth="1.2" opacity="0.6" strokeDasharray="8 4" />

          {/* Network Data Nodes */}
          {[
            { cx: 320, cy: 260 },
            { cx: 480, cy: 300 },
            { cx: 280, cy: 450 },
            { cx: 520, cy: 480 },
            { cx: 400, cy: 200 },
            { cx: 400, cy: 600 },
            { cx: 210, cy: 380 },
            { cx: 590, cy: 410 },
          ].map((pt, i) => (
            <g key={i}>
              <circle cx={pt.cx} cy={pt.cy} r="4" fill="#e9d5ff" />
              <circle cx={pt.cx} cy={pt.cy} r="10" fill="#a855f7" opacity="0.4" filter="blur(2px)" />
            </g>
          ))}

          <defs>
            <linearGradient id="globeGlow" x1="100" y1="100" x2="700" y2="700" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c084fc" />
              <stop offset="0.5" stopColor="#9333ea" />
              <stop offset="1" stopColor="#4c1d95" />
            </linearGradient>
            <linearGradient id="purpleHorizon" x1="400" y1="80" x2="400" y2="720" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d8b4fe" />
              <stop offset="1" stopColor="#6b21a8" />
            </linearGradient>
            <linearGradient id="wireGradient" x1="0" y1="0" x2="800" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a855f7" stopOpacity="0.8" />
              <stop offset="1" stopColor="#6366f1" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
}
