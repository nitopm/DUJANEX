"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Cotizador", href: "#cotizador" },
    { name: "Proceso", href: "#proceso" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[#06060c]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-purple-950/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden p-1 flex items-center justify-center bg-purple-950/40 border border-purple-500/20 group-hover:border-purple-500/60 transition-all duration-300 shadow-sm shadow-purple-500/20">
            <Image
              src="/dujanex-logo.png"
              alt="DUJANEX"
              width={40}
              height={40}
              className="object-contain group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                DUJANEX
              </span>
              <span className="text-[10px] font-semibold uppercase px-1.5 py-0.2 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400">
                MX
              </span>
            </div>
            <span className="text-[11px] text-zinc-400 font-mono">
              Software & Web Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-zinc-900/60 border border-white/[0.08] backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white rounded-full hover:bg-white/[0.06] transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#cotizador"
            className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-200" />
            <span>Cotizar Proyecto</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-purple-200" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#090913]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-zinc-300 hover:text-purple-400 py-2 border-b border-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#cotizador"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center py-2.5 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold shadow-lg shadow-purple-900/30 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Cotizar Proyecto</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
