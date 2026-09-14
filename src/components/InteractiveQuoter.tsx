"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calculator, 
  MessageCircle, 
  Send, 
  Sparkles, 
  Check, 
  Globe, 
  Cpu, 
  Smartphone 
} from "lucide-react";

export default function InteractiveQuoter() {
  const [projectType, setProjectType] = useState<string>("web");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "seo",
    "responsive",
  ]);
  const [deliverySpeed, setDeliverySpeed] = useState<"standard" | "express">("standard");
  const [isPulsing, setIsPulsing] = useState(false);

  const triggerNeonPulse = () => {
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 400);
  };

  const projectTypes = [
    {
      id: "web",
      name: "Sitio Web Corporativo / Landing",
      basePrice: 550,
      icon: Globe,
      desc: "Diseño moderno, alta conversión y velocidad instantánea.",
    },
    {
      id: "saas",
      name: "Software o Plataforma a Medida",
      basePrice: 1300,
      icon: Cpu,
      desc: "Paneles administrativos, control de usuarios y flujos internos.",
    },
    {
      id: "nfc",
      name: "Sistema IoT & Aplicación NFC",
      basePrice: 1600,
      icon: Smartphone,
      desc: "Lectura de pulseras inteligentes y automatización con hardware.",
    },
  ];

  const featuresList = [
    { id: "seo", name: "SEO Técnico & Optimización de Carga", price: 100 },
    { id: "responsive", name: "Diseño 100% Móvil y Tablet", price: 0 },
    { id: "admin", name: "Panel de Control / Dashboard Administrativo", price: 350 },
    { id: "auth", name: "Autenticación Segura & Cuentas de Usuario", price: 200 },
    { id: "database", name: "Base de Datos en la Nube (PostgreSQL)", price: 250 },
    { id: "pdf", name: "Generación Automática de Reportes en PDF/Excel", price: 220 },
    { id: "payments", name: "Pasarela de Pagos (Stripe / Mercado Pago)", price: 300 },
    { id: "whatsapp", name: "Integración Directa con WhatsApp Business", price: 80 },
  ];

  const toggleFeature = (id: string) => {
    triggerNeonPulse();
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Calculations
  const currentTypeObj = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
  const featuresTotal = selectedFeatures.reduce((acc, featId) => {
    const feat = featuresList.find((f) => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const multiplier = deliverySpeed === "express" ? 1.25 : 1.0;
  const estimatedTotal = Math.round((currentTypeObj.basePrice + featuresTotal) * multiplier);

  // WhatsApp Message Generator
  const featureNames = selectedFeatures
    .map((f) => featuresList.find((item) => item.id === f)?.name)
    .filter(Boolean)
    .join(", ");

  const waMessage = encodeURIComponent(
    `¡Hola DUJANEX! Me interesa cotizar un proyecto a través de dujanex.com:\n\n` +
    `📌 *Tipo de Proyecto:* ${currentTypeObj.name}\n` +
    `⚙️ *Módulos Requeridos:* ${featureNames || "Básico"}\n` +
    `⚡ *Plazo:* ${deliverySpeed === "express" ? "Express Prioritario (1-2 semanas)" : "Estándar (3-4 semanas)"}\n` +
    `💰 *Estimado Previo:* $${estimatedTotal} USD aprox.\n\n` +
    `¿Podemos agendar una breve llamada o diagnóstico para afinar detalles?`
  );

  return (
    <section id="cotizador" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>ESTIMADOR DE PROYECTO REACTIVO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Configura y cotiza tu solución en tiempo real
          </h2>
          <p className="mt-3 text-zinc-300 text-sm sm:text-base">
            Selecciona el alcance de tu proyecto y observa el panel reaccionar con cálculo transparente.
          </p>
        </div>

        {/* Reactive Neon Glass Panel Container */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-6 sm:p-9 rounded-3xl bg-[#090715]/85 border backdrop-blur-2xl transition-all duration-300 ${
            isPulsing
              ? "border-purple-400 shadow-[0_0_50px_rgba(168,85,247,0.5)]"
              : "border-purple-500/30 shadow-[0_0_35px_rgba(147,51,234,0.2)]"
          }`}
        >
          {/* Configurator Controls (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Step 1: Project Type */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-purple-400 block mb-3">
                1. Selecciona el Tipo de Solución
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {projectTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = projectType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => {
                        triggerNeonPulse();
                        setProjectType(type.id);
                      }}
                      className={`p-4 rounded-2xl text-left border transition-all ${
                        isSelected
                          ? "bg-purple-600/25 border-purple-400 text-white shadow-lg shadow-purple-950/60"
                          : "bg-zinc-950/60 border-white/10 text-zinc-300 hover:border-white/20"
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-2.5 ${isSelected ? "text-purple-300" : "text-zinc-400"}`} />
                      <p className="text-sm font-bold text-white">{type.name}</p>
                      <p className="text-[11px] text-zinc-400 mt-1 leading-snug">{type.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Features checklist */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-purple-400 block mb-3">
                2. Selecciona Funcionalidades & Módulos
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featuresList.map((feat) => {
                  const checked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3.5 rounded-2xl text-left border flex items-center justify-between text-xs transition-all ${
                        checked
                          ? "bg-purple-950/40 border-purple-500/60 text-white shadow-sm shadow-purple-900/30"
                          : "bg-zinc-950/40 border-white/5 text-zinc-400 hover:border-white/15"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border transition-all ${
                            checked
                              ? "bg-purple-600 border-purple-400 text-white"
                              : "border-white/20 bg-black/40"
                          }`}
                        >
                          {checked && <Check className="w-3 h-3" />}
                        </div>
                        <span className="font-medium text-zinc-200">{feat.name}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Delivery Speed */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-purple-400 block mb-3">
                3. Plazo de Entrega
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    triggerNeonPulse();
                    setDeliverySpeed("standard");
                  }}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    deliverySpeed === "standard"
                      ? "bg-purple-600/25 border-purple-400 text-white"
                      : "bg-zinc-950/50 border-white/10 text-zinc-400 hover:border-white/20"
                  }`}
                >
                  <p className="text-xs font-bold text-white">Plazo Estándar (3-4 semanas)</p>
                  <span className="text-[11px] text-zinc-400 mt-0.5 block">
                    Cronograma regular con desarrollo por etapas.
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    triggerNeonPulse();
                    setDeliverySpeed("express");
                  }}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    deliverySpeed === "express"
                      ? "bg-purple-600/25 border-purple-400 text-white"
                      : "bg-zinc-950/50 border-white/10 text-zinc-400 hover:border-white/20"
                  }`}
                >
                  <p className="text-xs font-bold text-white">Express Prioritario (1-2 semanas)</p>
                  <span className="text-[11px] text-zinc-400 mt-0.5 block">
                    Sprints diarios de alta prioridad con entrega acelerada.
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Live Estimate Summary Card (4 cols) */}
          <div className="lg:col-span-4 rounded-2xl bg-gradient-to-b from-purple-950/50 via-[#0a0715] to-[#0a0715] border border-purple-500/40 p-6 sm:p-7 shadow-2xl shadow-purple-950/60 sticky top-28">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                Resumen de tu Cotización
              </span>
            </div>

            <div className="pb-4 border-b border-white/10">
              <span className="text-xs text-zinc-400">Inversión Estimada:</span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white tracking-tight">
                  $${estimatedTotal.toLocaleString()}
                </span>
                <span className="text-xs font-mono text-purple-400">USD aprox.</span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-1">
                *Precio de referencia según requerimientos seleccionados.
              </p>
            </div>

            <div className="py-4 space-y-2 border-b border-white/10 text-xs">
              <div className="flex justify-between text-zinc-300">
                <span className="text-zinc-400">Solución:</span>
                <span className="font-semibold text-right">{currentTypeObj.name}</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span className="text-zinc-400">Módulos:</span>
                <span className="font-semibold text-purple-300">{selectedFeatures.length} activos</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span className="text-zinc-400">Plazo:</span>
                <span className="font-semibold">
                  {deliverySpeed === "express" ? "1-2 semanas" : "3-4 semanas"}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 space-y-3">
              <a
                href={`https://wa.me/5219933339842?text=${waMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs font-bold shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar Cotización por WhatsApp</span>
              </a>

              <a
                href="mailto:DUJANEX@outlook.com?subject=Cotizaci%C3%B3n%20de%20Proyecto%20DUJANEX"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 text-xs font-semibold transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Solicitar por Correo</span>
              </a>
            </div>

            <p className="mt-4 text-[10px] text-zinc-400 text-center">
              Respuesta en menos de 2 horas en días hábiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
