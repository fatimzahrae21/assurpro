"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Section, SectionHeader, FadeIn } from "@/components/ui";
import { steps } from "@/lib/data";

export default function ProcessSection() {
  return (
    <Section id="process" className="py-24 bg-brand-950 relative overflow-hidden">
      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Orbs */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-brand-700 filter blur-[150px] opacity-20" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-teal-600 filter blur-[120px] opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Comment ça marche"
          title="Assuré en <span class='gradient-text-light'>4 étapes simples</span>"
          subtitle="Un processus pensé pour être rapide, transparent et sans surprise. Du devis à la souscription, nous gérons tout."
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line on desktop */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-500/0 via-brand-500/40 to-brand-500/0 hidden lg:block" />

          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.12}>
              <div className="relative flex flex-col items-center text-center">
                {/* Step number circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full border-2 border-brand-500/30 bg-brand-900/80 flex items-center justify-center relative z-10">
                    <span className="font-display text-2xl font-bold gradient-text-light">
                      {step.number}
                    </span>
                  </div>
                  {/* Glow pulse */}
                  <div className="absolute inset-0 rounded-full bg-brand-500 filter blur-xl opacity-20 animate-pulse-slow" />

                  {/* Check for completed visual */}
                  {i < 2 && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center border-2 border-brand-950">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                </div>

                {/* Arrow between steps on mobile */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mb-6">
                    <ArrowRight className="w-5 h-5 text-brand-500 rotate-90" />
                  </div>
                )}

                <h3 className="font-display text-lg font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-2xl bg-gradient-to-r from-brand-500 to-teal-500 text-white font-semibold text-base shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-200 btn-press"
            >
              Commencer maintenant — c&apos;est gratuit
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-white/30 text-xs mt-4">
              Sans engagement · Résultats en 3 minutes · 100% gratuit
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
