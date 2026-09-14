"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GlobalDynamicBackground() {
  const { scrollYProgress } = useScroll();

  // Subtle parallax movement and lighting shifts as you scroll through the entire page
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const glow1Y = useTransform(scrollYProgress, [0, 0.5, 1], ["10%", "50%", "85%"]);
  const glow2X = useTransform(scrollYProgress, [0, 0.5, 1], ["75%", "25%", "60%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.25, 0.4, 0.3, 0.45]);

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden bg-[#040409]">
      {/* 3D Organic Fluid Tubular Ambient Layer (From Reference 1) */}
      <motion.div
        style={{ y: bgY }}
        className="absolute -top-20 -left-20 w-[120%] h-[120%] opacity-20 mix-blend-screen filter blur-[2px]"
      >
        <Image
          src="/assets/hero-3d-tubes.jpg"
          alt="3D Fluid Background Texture"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Dynamic shifting purple & electric blue aura orbs */}
      <motion.div
        style={{ top: glow1Y, opacity: glowOpacity }}
        className="absolute left-1/4 w-[600px] h-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600/30 via-violet-600/20 to-indigo-600/25 blur-[160px]"
      />

      <motion.div
        style={{ left: glow2X, opacity: glowOpacity }}
        className="absolute top-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-fuchsia-600/20 via-purple-600/25 to-blue-600/20 blur-[150px]"
      />

      {/* Cybernetic Tech Grid & Ambient Dust */}
      <div className="absolute inset-0 bg-tech-grid opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:36px_36px] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#040409]/60 to-[#040409]" />
    </div>
  );
}
