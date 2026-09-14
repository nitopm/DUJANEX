"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Palette, Code, Rocket, ArrowRight } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      icon: Compass,
      title: "Diagnóstico & Arquitectura",
      description:
        "Analizamos a fondo los cuellos de botella de tu empresa y definimos el alcance técnico exacto con presupuesto transparente y tiempos garantizados.",
    },
    {
      number: "02",
      icon: Palette,
      title: "Diseño UI/UX & Prototipado",
      description:
        "Modelamos interfaces modernas de cristal y neón alineadas a tu marca, con revisiones interactivas antes de escribir una sola línea de código.",
    },
    {
      number: "03",
      icon: Code,
      title: "Desarrollo Ágil & Código Limpio",
      description:
        "Construimos tu plataforma en Next.js, React y TypeScript con código modular, pruebas continuas y entregables visibles semana a semana.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Lanzamiento & Soporte Continuo",
      description:
        "Publicamos tu sitio en producción bajo tu dominio dujanex.com, optimizamos SEO técnico y te brindamos garantía y soporte post-entrega.",
    },
  ];

  return (
    <section id="proceso" className="py-28 relative overflow-hidden">
      {/* Background Purple Smoke Wave Texture (From Reference 5) */}
      <div className="absolute inset-0 pointer-events-none opacity-25 mix-blend-screen filter blur-[1px] -z-10">
        <Image
          src="/assets/process-interlocking.jpg"
          alt="Purple Fluid Ribbon Texture"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-3 block">
            METODOLOGÍA MODULAR INTERCONECTADA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            De la idea a producción en 4 pasos sincronizados
          </h2>
          <p className="mt-3 text-zinc-300 text-sm sm:text-base">
            Cada fase encaja perfectamente con la siguiente, garantizando velocidad, calidad de software y cero sorpresas.
          </p>
        </div>

        {/* Interlocking Puzzle-Style Step Cards (From Reference 5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative rounded-3xl bg-[#0d0a1c]/90 border border-purple-500/25 hover:border-purple-400/60 p-6 flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] backdrop-blur-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-mono font-extrabold text-purple-400 group-hover:text-purple-300 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:bg-purple-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Interlock Indicator */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="text-purple-300">Paso {step.number} de 04</span>
                  {idx < 3 && (
                    <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
