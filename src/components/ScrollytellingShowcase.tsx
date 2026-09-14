"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CosmicWireframeGlobe from "./CosmicWireframeGlobe";
import { 
  Sparkles, 
  Activity, 
  Smartphone, 
  Check, 
  MousePointerClick,
  Layers,
  ArrowRight
} from "lucide-react";

export default function ScrollytellingShowcase() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const stepsData = [
    {
      step: 1,
      badge: "FASE 01",
      tag: "Desarrollo Web & Jamstack",
      title: "Velocidad Extrema & Arquitectura Moderna",
      description: "Sitios web construidos en Next.js 16 y React 19. Carga instantánea en menos de 0.4s, indexación SEO de primer nivel y 100/100 en Google Lighthouse.",
      rotateX: 18,
      rotateY: -14,
      rotateZ: 3,
      accentBorder: "border-sky-500/50",
      accentBg: "bg-sky-500/20 text-sky-300",
    },
    {
      step: 2,
      badge: "FASE 02",
      tag: "Software Clínico & Algoritmos",
      title: "Automatización Inteligente (Aurif & Estudios)",
      description: "Sistemas clínicos y corporativos que eliminan el 75% del trabajo manual. Generación instantánea de reportes en PDF y análisis ponderados para empresas.",
      rotateX: 8,
      rotateY: 0,
      rotateZ: 0,
      accentBorder: "border-fuchsia-500/50",
      accentBg: "bg-fuchsia-500/20 text-fuchsia-300",
    },
    {
      step: 3,
      badge: "FASE 03",
      tag: "Hardware Inteligente & IoT",
      title: "Telemetría NFC Médica de Emergencias",
      description: "Lectura instantánea de datos vitales en pulseras inteligentes mediante microchips NFC en < 0.3s, sin necesidad de descargar aplicaciones externas.",
      rotateX: 14,
      rotateY: 14,
      rotateZ: -3,
      accentBorder: "border-violet-500/50",
      accentBg: "bg-violet-500/20 text-violet-300",
    },
  ];

  const currentStep = stepsData.find((s) => s.step === activeStep) || stepsData[0];

  return (
    <section className="py-24 relative overflow-hidden bg-[#05050a]/90">
      {/* Cosmic Wireframe Globe & Stars Background */}
      <CosmicWireframeGlobe />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <MousePointerClick className="w-3.5 h-3.5 text-purple-400" />
            <span>INTERACTIVO • HAZ CLIC EN CADA FASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Descubre el Poder Tecnológico de DUJANEX
          </h2>
          <p className="mt-3 text-zinc-300 text-sm sm:text-base">
            Toca cualquiera de las etapas para transformar la perspectiva 3D y visualizar los componentes en tiempo real.
          </p>
        </div>

        {/* Central Stage: Clickable Cards (Left) + Interactive 3D Laptop (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Clickable Stepper Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            {stepsData.map((item) => {
              const isSelected = activeStep === item.step;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(item.step)}
                  className={`w-full text-left p-5 rounded-3xl border backdrop-blur-xl transition-all duration-300 ${
                    isSelected
                      ? `bg-[#100d24]/95 ${item.accentBorder} shadow-[0_0_30px_rgba(168,85,247,0.35)] scale-[1.02]`
                      : "bg-[#090815]/60 border-white/10 hover:border-white/20 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${item.accentBg}`}>
                        {item.badge}
                      </span>
                      <span className="text-xs font-semibold text-zinc-300">{item.tag}</span>
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: 3D Laptop with Smooth Rotation when Clicking */}
          <div className="lg:col-span-7 flex items-center justify-center perspective-1200 py-4">
            <motion.div
              key={activeStep}
              initial={{ 
                rotateX: currentStep.rotateX + 4, 
                rotateY: currentStep.rotateY - 6,
                scale: 0.95,
                opacity: 0.8
              }}
              animate={{ 
                rotateX: currentStep.rotateX, 
                rotateY: currentStep.rotateY,
                rotateZ: currentStep.rotateZ,
                scale: 1,
                opacity: 1
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full max-w-[540px] transform-style-3d transition-transform duration-300"
            >
              {/* Laptop Screen Bezel */}
              <div className="rounded-2xl p-2.5 bg-[#12121e] border-2 border-purple-500/40 shadow-[0_25px_60px_-15px_rgba(147,51,234,0.45)] relative overflow-hidden">
                {/* Lens flare on top right */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-300/30 via-transparent to-transparent pointer-events-none z-30" />

                {/* Camera notch */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-zinc-950 border border-white/20 z-30" />

                {/* Display Screen */}
                <div className="rounded-xl bg-[#080812] border border-white/10 p-4 h-[290px] sm:h-[330px] relative overflow-hidden flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    {activeStep === 1 && (
                      <motion.div
                        key="screen1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 p-5 flex flex-col justify-between bg-[#090914]"
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                            <span className="text-xs font-mono font-bold text-white">dujanex.com/next-engine</span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                            LIGHTHOUSE: 100
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 my-auto">
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                            <span className="text-[11px] text-zinc-400 block">Tiempo de Respuesta</span>
                            <span className="text-2xl font-bold text-white">18ms</span>
                            <span className="text-[10px] text-emerald-400 block mt-0.5">Edge Network Global</span>
                          </div>
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                            <span className="text-[11px] text-zinc-400 block">Optimización SEO</span>
                            <span className="text-2xl font-bold text-purple-400">100%</span>
                            <span className="text-[10px] text-zinc-400 block mt-0.5">Schema.org & Meta Tags</span>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-zinc-950 font-mono text-[11px] text-zinc-400 border border-white/5 flex items-center justify-between">
                          <span className="text-purple-300">✓ Compilado con Turbopack en 2.7s</span>
                          <span className="text-emerald-400">ONLINE</span>
                        </div>
                      </motion.div>
                    )}

                    {activeStep === 2 && (
                      <motion.div
                        key="screen2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 p-5 flex flex-col justify-between bg-[#080816]"
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-purple-400" />
                            <span className="text-xs font-bold text-white">Aurif Health Diagnostic Center</span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                            +1,420 PACIENTES
                          </span>
                        </div>

                        <div className="space-y-2.5 my-auto">
                          <div className="flex items-center justify-between text-xs text-zinc-300 p-2.5 rounded-xl bg-white/5">
                            <span>Audiometría Digital Automatizada</span>
                            <span className="text-emerald-400 font-bold">Generado en PDF</span>
                          </div>
                          <div className="flex items-center justify-between text-xs text-zinc-300 p-2.5 rounded-xl bg-white/5">
                            <span>Ponderación Socioeconómica Algorítmica</span>
                            <span className="text-purple-400 font-bold">14 Módulos</span>
                          </div>
                          <div className="flex items-center justify-between text-xs text-zinc-300 p-2.5 rounded-xl bg-white/5">
                            <span>Encriptación Cloud</span>
                            <span className="text-white font-bold">PostgreSQL 256-bit</span>
                          </div>
                        </div>

                        <div className="text-[10px] text-zinc-400 flex items-center justify-between border-t border-white/5 pt-2">
                          <span>Reducción operativa: 75%</span>
                          <span className="text-purple-400 font-bold">dujanex.com/aurif</span>
                        </div>
                      </motion.div>
                    )}

                    {activeStep === 3 && (
                      <motion.div
                        key="screen3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 p-5 flex flex-col justify-between bg-[#090818]"
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <Smartphone className="w-4 h-4 text-rose-400" />
                            <span className="text-xs font-bold text-white">NFC Pulsera Médica de Emergencias</span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                            LECTURA &lt; 0.3s
                          </span>
                        </div>

                        <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-center my-auto">
                          <span className="text-xs font-semibold text-purple-300 block">
                            Chip NTAG216 Detectado Exitosamente
                          </span>
                          <p className="text-lg font-extrabold text-white mt-1">
                            Tipo de Sangre: O Positivo (O+)
                          </p>
                          <p className="text-xs text-zinc-400 mt-1">
                            Alergias: Penicilina | Contacto Verificado
                          </p>
                        </div>

                        <div className="text-[10px] text-zinc-400 flex items-center justify-between border-t border-white/5 pt-2">
                          <span>Compatibilidad Universal Android & iOS</span>
                          <span className="text-emerald-400 font-bold">EN VIVO</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Laptop Keyboard Base */}
              <div className="relative h-4 sm:h-5 bg-gradient-to-b from-[#222238] to-[#121220] rounded-b-2xl border-t border-white/20 shadow-2xl flex items-center justify-center">
                <div className="w-16 h-1 rounded-full bg-white/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
