"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030306] border-t border-white/[0.08] text-zinc-400 py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-purple-950/50 border border-purple-500/30 p-1 flex items-center justify-center">
              <Image
                src="/dujanex-logo.png"
                alt="DUJANEX Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-wide">
                DUJANEX
              </span>
              <span className="text-xs text-zinc-400 block font-mono">
                dujanex.com
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-xs font-medium text-zinc-400">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#portafolio" className="hover:text-white transition-colors">Portafolio</a>
            <a href="#cotizador" className="hover:text-white transition-colors">Cotizador</a>
            <a href="#proceso" className="hover:text-white transition-colors">Proceso</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-purple-500/40 transition-all"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} DUJANEX. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Diseñado con <Sparkles className="w-3.5 h-3.5 text-purple-400" /> en México para el mundo.
          </p>
        </div>
      </div>
    </footer>
  );
}
