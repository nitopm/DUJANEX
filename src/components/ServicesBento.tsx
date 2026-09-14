"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Cpu, 
  Workflow, 
  Smartphone, 
  CheckCircle2, 
  TerminalSquare,
  Sparkles
} from "lucide-react";

export default function ServicesBento() {
  const services = [
    {
      icon: Globe,
      badge: "ALTO IMPACTO",
      borderGlow: "border-sky-500/40 hover:border-sky-400 hover:shadow-[0_0_35px_rgba(56,189,248,0.35)]",
      badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/30",
      accentIcon: "text-sky-400",
      title: "Páginas Web y Plataformas de Alta Velocidad",
      description: "Sitios web corporativos, landing pages de alta conversión y portafolios de nivel internacional. Optimizados para SEO técnico, velocidad de carga instantánea y diseño responsivo.",
      features: ["Next.js 16 con App Router", "Lighthouse Score 95-100", "SEO semántico y analíticas", "Animaciones fluidas con Framer Motion"],
      colSpan: "md:col-span-2",
    },
    {
      icon: Cpu,
      badge: "ESCALABILIDAD",
      borderGlow: "border-fuchsia-500/40 hover:border-fuchsia-400 hover:shadow-[0_0_35px_rgba(217,70,239,0.35)]",
      badgeColor: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30",
      accentIcon: "text-fuchsia-400",
      title: "Software y Sistemas SaaS a Medida",
      description: "Sistemas empresariales que resuelven cuellos de botella: paneles administrativos, control de usuarios y reportería.",
      features: ["Arquitectura modular en la nube", "Bases de datos PostgreSQL", "Roles y permisos jerárquicos"],
      colSpan: "md:col-span-1",
    },
    {
      icon: Workflow,
      badge: "EFICIENCIA",
      borderGlow: "border-violet-500/40 hover:border-violet-400 hover:shadow-[0_0_35px_rgba(168,85,247,0.4)]",
      badgeColor: "bg-violet-500/10 text-violet-300 border-violet-500/30",
      accentIcon: "text-violet-400",
      title: "Automatización de Procesos y APIs",
      description: "Elimina tareas manuales repetitivas conectando tus herramientas existentes mediante APIs robustas y webhooks seguros.",
      features: ["Generación de PDF/Excel al instante", "Webhooks y pasarelas de pago", "Notificaciones WhatsApp / Email"],
      colSpan: "md:col-span-1",
    },
    {
      icon: Smartphone,
      badge: "HARDWARE & IOT",
      borderGlow: "border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(16,185,129,0.35)]",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      accentIcon: "text-emerald-400",
      title: "Soluciones Especializadas & Tecnología NFC",
      description: "Integración de hardware inteligente con aplicaciones web para lectura de chips NFC, pulseras médicas y credenciales de acceso.",
      features: ["Lectura NFC instantánea sin instalar apps", "Compatibilidad universal Android/iOS", "Sistemas de emergencia médica"],
      colSpan: "md:col-span-2",
    },
  ];

  return (
    <section id="servicios" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-4">
            <TerminalSquare className="w-3.5 h-3.5" />
            <span>NUESTRAS CAPACIDADES TÉCNICAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Soluciones digitales diseñadas para crecer sin límites
          </h2>
          <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            No usamos plantillas genéricas. Cada proyecto es construido a medida con arquitectura moderna de cristal y neón para maximizar valor y rentabilidad.
          </p>
        </div>

        {/* Crystal Cards Grid for Services (Consistent with Portfolio) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className={`${item.colSpan} rounded-3xl bg-[#090815]/85 border backdrop-blur-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${item.borderGlow} group relative overflow-hidden`}
              >
                {/* Specular top glass reflection */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-white/10 via-transparent to-transparent pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${item.accentIcon} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-zinc-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <ul className="space-y-2.5">
                    {item.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${item.accentIcon} shrink-0`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
