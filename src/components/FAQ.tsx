"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Cuánto tiempo toma el desarrollo de una web o software?",
      a: "Una landing page o sitio web corporativo de alto rendimiento toma típicamente de 1 a 3 semanas. Para plataformas SaaS o software a medida con bases de datos y paneles de gestión, el tiempo oscila entre 3 a 6 semanas dependiendo de la complejidad.",
    },
    {
      q: "¿El código y el proyecto me pertenecen al finalizar?",
      a: "Totalmente. Entregamos el código fuente completo en un repositorio privado, con la documentación de despliegue y todos los accesos administrativos sin restricciones.",
    },
    {
      q: "¿Cómo se conecta mi dominio personalizado dujanex.com o el de mi empresa?",
      a: "Nos encargamos de toda la configuración DNS en Vercel o la nube que prefieras, incluyendo certificados SSL (HTTPS) gratuitos y automáticos, CDN global y protección DDoS.",
    },
    {
      q: "¿Ofrecen soporte y mantenimiento post-lanzamiento?",
      a: "Sí. Todos nuestros proyectos incluyen un periodo de garantía y soporte técnico para asegurar que todo funcione al 100%. Además contamos con planes mensuales de actualización y monitoreo.",
    },
    {
      q: "¿Cómo son las formas de pago?",
      a: "Manejamos esquemas por etapas para mayor tranquilidad: generalmente 50% de anticipo al firmar la propuesta y 50% contra entrega y satisfacción final. Aceptamos transferencia bancaria, tarjeta de crédito y pagos internacionales.",
    },
  ];

  return (
    <section className="py-20 relative bg-tech-dots">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>PREGUNTAS FRECUENTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Respuestas directas a tus dudas
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="rounded-xl bg-zinc-950/70 border border-white/10 overflow-hidden transition-colors hover:border-purple-500/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-zinc-100"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-purple-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-purple-300" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
