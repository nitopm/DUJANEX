"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  CheckCircle2 
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* 3D Tubular Organic Visual Accent - Animated Gently (Floating Movement) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] pointer-events-none opacity-35 mix-blend-screen -z-10">
        <motion.div
          animate={{ 
            y: [-12, 12, -12],
            rotate: [-3, 3, -3],
            scale: [1, 1.03, 1] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative w-full h-full"
        >
          <Image
            src="/assets/hero-tubes-hq.jpg"
            alt="3D Fluid Cyber Structure"
            fill
            className="object-contain filter blur-[1px]"
            priority
          />
        </motion.div>
      </div>

      {/* Side floating ambient 3D tube for asymmetrical depth */}
      <div className="hidden lg:block absolute top-20 right-0 w-[420px] h-[550px] pointer-events-none opacity-45 mix-blend-screen -z-10 translate-x-1/4">
        <motion.div
          animate={{ 
            y: [10, -14, 10],
            rotate: [2, -2, 2],
            scale: [0.98, 1.02, 0.98] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="relative w-full h-full"
        >
          <Image
            src="/assets/hero-tubes-hq.jpg"
            alt="3D Fluid Accent"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Availability pill with live glowing pulse */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/40 backdrop-blur-2xl mb-6 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500" />
            </span>
            <span className="text-xs font-semibold text-purple-200 tracking-wide">
              DUJANEX • Software & Web Studio de Vanguardia
            </span>
          </motion.div>

          {/* Monumental Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
          >
            Ingeniería de software y experiencias web para{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.5)]">
              empresas que lideran
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            En <span className="text-white font-bold">DUJANEX</span> convertimos procesos complejos en plataformas digitales de alto impacto: ultrarrápidas, escalables y con arquitectura moderna de clase mundial.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#cotizador"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white font-bold text-sm shadow-[0_0_30px_rgba(147,51,234,0.5)] hover:shadow-[0_0_45px_rgba(147,51,234,0.75)] hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4 text-purple-200" />
              <span>Cotizar Proyecto en Vivo</span>
              <ArrowRight className="w-4 h-4 text-purple-200" />
            </a>

            <a
              href="#portafolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-zinc-950/80 hover:bg-zinc-900 border border-white/15 hover:border-purple-500/40 text-zinc-200 font-semibold text-sm backdrop-blur-xl transition-all"
            >
              <span>Ver Casos de Éxito</span>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left"
          >
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <Zap className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Next.js 16 + React 19</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Arquitectura Segura</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <Cpu className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Software & Hardware NFC</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Soporte Garantizado</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
