"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Mail, 
  MessageCircle, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  ArrowUpRight,
  Wifi,
  Battery
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-28 relative overflow-hidden bg-[#030308]">
      {/* Huge Dramatic Background Text REACH / CONTACTO (From Reference 4) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
        <span className="text-[120px] sm:text-[200px] md:text-[280px] font-extrabold text-white/[0.03] tracking-widest block leading-none">
          DUJANEX
        </span>
      </div>

      {/* Vertical light curtains & purple glow */}
      <div className="absolute top-0 left-1/3 w-32 h-full vertical-light-beam pointer-events-none opacity-40" />
      <div className="absolute top-0 right-1/4 w-40 h-full vertical-light-beam pointer-events-none opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Direct Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>CANALES DIRECTOS DE ATENCIÓN</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Construyamos hoy tu próximo{" "}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                gran software
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              En <strong className="text-white">DUJANEX</strong> te brindamos asesoría técnica personalizada desde el primer contacto. Toca las aplicaciones dentro del smartphone o haz clic en los botones directos.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row gap-3.5">
              <a
                href="https://wa.me/5219933339842?text=Hola%20DUJANEX,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20web%20o%20software%20a%20medida."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold text-sm shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:scale-[1.03] active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +52 1 993 333 9842</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:DUJANEX@outlook.com?subject=Consulta%20de%20Proyecto%20DUJANEX"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-zinc-950/80 hover:bg-zinc-900 border border-white/15 text-zinc-200 font-semibold text-sm backdrop-blur-xl transition-all"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>DUJANEX@outlook.com</span>
              </a>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Villahermosa, Tabasco, México — Cobertura Nacional e Internacional</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Contratos con confidencialidad (NDA), código propio y garantía de por vida</span>
              </div>
            </div>
          </div>

          {/* Right: 3D Titanium Smartphone with Radiant Halo (From Reference 4) */}
          <div className="lg:col-span-6 flex items-center justify-center perspective-1200">
            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: 14, rotateY: -14 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 8, rotateY: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-[300px] sm:w-[340px] transform-style-3d group"
            >
              {/* Intense Purple Neon Halo radiating from behind the phone (Like Reference 4) */}
              <div className="absolute inset-0 bg-purple-600/50 rounded-[48px] filter blur-[50px] pointer-events-none -z-10 scale-95 animate-pulse" />

              {/* Specular Lens Flare on Phone Top Corner */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-white lens-flare-glow z-40 pointer-events-none animate-pulse" />

              {/* Titanium Purple Phone Chassis */}
              <div className="rounded-[44px] p-3.5 bg-gradient-to-br from-purple-500/70 via-[#190a32] to-[#0a0418] border-2 border-purple-400/50 shadow-[0_30px_70px_-10px_rgba(168,85,247,0.6)] relative overflow-hidden backdrop-blur-2xl">
                
                {/* Dynamic Island Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-black border border-white/15 z-30 flex items-center justify-between px-3">
                  <div className="w-2 h-2 rounded-full bg-purple-950 border border-purple-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                </div>

                {/* Smartphone Display Screen */}
                <div className="rounded-[36px] bg-[#070512] border border-white/10 p-5 pt-10 h-[520px] flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <Wifi className="w-3 h-3 text-zinc-300" />
                      <Battery className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  </div>

                  {/* Brand Profile Card inside Phone */}
                  <div className="p-3.5 rounded-2xl bg-purple-950/50 border border-purple-500/40 backdrop-blur-md flex items-center gap-3 shadow-lg shadow-purple-950/40">
                    <div className="w-11 h-11 rounded-xl bg-purple-900/60 border border-purple-400/50 p-1 flex items-center justify-center">
                      <Image
                        src="/dujanex-logo.png"
                        alt="DUJANEX"
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-bold text-white">DUJANEX Contact</span>
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-[10px] text-purple-300 font-mono">dujanex.com</span>
                    </div>
                  </div>

                  {/* Interactive App Grid */}
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-400 block px-1">
                      Acciones Rápidas
                    </span>

                    {/* WhatsApp App Tile */}
                    <a
                      href="https://wa.me/5219933339842?text=Hola%20DUJANEX,%20me%20gustar%C3%ADa%20iniciar%20un%20proyecto."
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-2xl bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-500/50 flex items-center justify-between transition-all group/item shadow-lg shadow-emerald-950/30"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                          <MessageCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-white block">WhatsApp Business</span>
                          <span className="text-[10px] text-emerald-300">+52 1 993 333 9842</span>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-transform" />
                    </a>

                    {/* Email App Tile */}
                    <a
                      href="mailto:DUJANEX@outlook.com"
                      className="p-3 rounded-2xl bg-purple-950/50 hover:bg-purple-900/60 border border-purple-500/40 flex items-center justify-between transition-all group/item shadow-lg shadow-purple-950/30"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center text-white">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-white block">Correo Corporativo</span>
                          <span className="text-[10px] text-purple-300">DUJANEX@outlook.com</span>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  {/* Home Bar */}
                  <div className="w-28 h-1 rounded-full bg-white/30 mx-auto" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
