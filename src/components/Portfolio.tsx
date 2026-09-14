"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FolderKanban, 
  ChevronRight, 
  Activity, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  Smartphone,
  TrendingUp,
  Cpu
} from "lucide-react";

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "health" | "enterprise" | "iot">("all");

  const projects = [
    {
      id: "aurif",
      title: "Aurif — Centro Audiológico",
      category: "health",
      badge: "Software Clínico Especializado",
      borderGlow: "border-sky-500/40 hover:border-sky-400 hover:shadow-[0_0_35px_rgba(56,189,248,0.35)]",
      badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/30",
      accentColor: "text-sky-400",
      description:
        "Plataforma médica para digitalizar expedientes clínicos de audiometría y generar diagnósticos automáticos en formato PDF en menos de un segundo.",
      previewType: "graph",
      metrics: [
        { label: "Reportes generados", value: "+1,200 PDF" },
        { label: "Reducción operativa", value: "-75% tiempo" },
        { label: "Disponibilidad", value: "99.9%" },
      ],
      stack: ["Next.js", "TypeScript", "PDF Engine", "PostgreSQL"],
      impact: "Eliminó el uso de papel en diagnósticos auditivos y aceleró la atención por paciente en más de 20 minutos.",
    },
    {
      id: "estudio",
      title: "Plataforma de Estudio Económico",
      category: "enterprise",
      badge: "SaaS Corporativo & Evaluación",
      borderGlow: "border-fuchsia-500/40 hover:border-fuchsia-400 hover:shadow-[0_0_35px_rgba(217,70,239,0.35)]",
      badgeColor: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30",
      accentColor: "text-fuchsia-400",
      description:
        "Sistema corporativo de encuestas con ponderación algorítmica automatizada para la evaluación de candidatos laborales y validación de solvencia empresarial.",
      previewType: "data",
      metrics: [
        { label: "Módulos de análisis", value: "14 etapas" },
        { label: "Ponderación", value: "Algorítmica" },
        { label: "Seguridad", value: "Cifrado 256-bit" },
      ],
      stack: ["React", "TypeScript", "Node.js", "Analytics Engine"],
      impact: "Automatizó matrices socioeconómicas complejas, entregando dictámenes ejecutivos listos para RRHH al instante.",
    },
    {
      id: "nfc",
      title: "Sistema NFC Médica de Emergencias",
      category: "iot",
      badge: "Hardware IoT + Web App",
      borderGlow: "border-violet-500/40 hover:border-violet-400 hover:shadow-[0_0_35px_rgba(168,85,247,0.4)]",
      badgeColor: "bg-violet-500/10 text-violet-300 border-violet-500/30",
      accentColor: "text-violet-400",
      description:
        "Tecnología médica para pulseras con microchip NFC. Permite a paramédicos escanear la pulsera en segundos para obtener tipo de sangre y contactos sin desbloquear el móvil.",
      previewType: "sensor",
      metrics: [
        { label: "Tiempo de lectura", value: "< 0.3s" },
        { label: "Compatibilidad", value: "Android & iOS" },
        { label: "Acceso", value: "Sin app externa" },
      ],
      stack: ["Web NFC API", "Next.js", "Cloud Firestore", "PWA"],
      impact: "Provee acceso inmediato a datos vitales que pueden salvar vidas en accidentes viales o urgencias médicas.",
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (selectedFilter === "all") return true;
    return p.category === selectedFilter;
  });

  return (
    <section id="portafolio" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-3">
              <FolderKanban className="w-3.5 h-3.5" />
              <span>CASOS DE ÉXITO REALES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Portafolio de Soluciones Neón &quot;Crystal Card&quot;
            </h2>
            <p className="mt-2 text-zinc-400 text-sm max-w-xl">
              Proyectos construidos con ingeniería moderna en entornos de alta exigencia: salud médica, analítica empresarial y respuesta a emergencias.
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900/80 border border-white/10 self-start">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedFilter === "all" ? "bg-purple-600 text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setSelectedFilter("health")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedFilter === "health" ? "bg-purple-600 text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              Salud
            </button>
            <button
              onClick={() => setSelectedFilter("enterprise")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedFilter === "enterprise" ? "bg-purple-600 text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              Empresarial
            </button>
            <button
              onClick={() => setSelectedFilter("iot")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedFilter === "iot" ? "bg-purple-600 text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              IoT & NFC
            </button>
          </div>
        </div>

        {/* Crystal Cards Grid (From Reference 2 & 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                className={`rounded-3xl bg-[#090815]/85 border backdrop-blur-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${project.borderGlow} group relative overflow-hidden`}
              >
                {/* Subtle top reflection */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-white/10 via-transparent to-transparent pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded border ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Interactive Visual Graphic Inside Card (Inspired by Reference 3) */}
                  {project.previewType === "graph" && (
                    <div className="mt-5 p-3.5 rounded-2xl bg-[#0e0c1f] border border-sky-500/20 relative overflow-hidden">
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-2">
                        <span className="flex items-center gap-1.5 text-sky-300 font-bold">
                          <Activity className="w-3.5 h-3.5" /> Audiometría Digital
                        </span>
                        <span className="text-emerald-400 font-bold">99.8% Precisión</span>
                      </div>
                      {/* Stylized Glowing Curve (Like Reference 3) */}
                      <div className="h-16 relative w-full flex items-end">
                        <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible">
                          <path
                            d="M 0,45 Q 40,55 70,30 T 140,15 T 200,5"
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="3"
                            filter="drop-shadow(0 0 6px #38bdf8)"
                          />
                          <circle cx="200" cy="5" r="4" fill="#ffffff" filter="drop-shadow(0 0 8px #38bdf8)" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {project.previewType === "data" && (
                    <div className="mt-5 p-3.5 rounded-2xl bg-[#0e0c1f] border border-fuchsia-500/20">
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-2">
                        <span className="flex items-center gap-1.5 text-fuchsia-300 font-bold">
                          <TrendingUp className="w-3.5 h-3.5" /> Matriz Algorítmica
                        </span>
                        <span className="text-fuchsia-400 font-bold">Score Auto</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2 rounded bg-white/5 text-zinc-300">
                          <span className="text-[10px] text-zinc-400 block">Capacidad Pago</span>
                          <span className="font-bold text-white">Nivel A (Alto)</span>
                        </div>
                        <div className="p-2 rounded bg-white/5 text-zinc-300">
                          <span className="text-[10px] text-zinc-400 block">Dictamen</span>
                          <span className="font-bold text-emerald-400">Verificado</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.previewType === "sensor" && (
                    <div className="mt-5 p-3.5 rounded-2xl bg-[#0e0c1f] border border-violet-500/20 text-center">
                      <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-violet-300 mb-1 font-bold">
                        <Cpu className="w-3.5 h-3.5" /> Chip NTAG216 Activo
                      </div>
                      <div className="p-2 rounded-xl bg-violet-950/40 border border-violet-500/30 inline-flex items-center gap-2 text-xs text-white">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>O+ (O Positivo) • Alergia Penicilina</span>
                      </div>
                    </div>
                  )}

                  {/* Metrics grid */}
                  <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-white/10 text-center">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
                        <p className="text-xs font-bold text-white">{m.value}</p>
                        <span className="text-[10px] text-zinc-400">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((st) => (
                      <span
                        key={st}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-900/80 text-zinc-300 border border-white/10"
                      >
                        {st}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#cotizador"
                    className={`inline-flex items-center justify-between w-full text-xs font-bold ${project.accentColor} py-2 transition-all`}
                  >
                    <span>Quiero una solución similar</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
