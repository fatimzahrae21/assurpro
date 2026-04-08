"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader, FadeIn } from "@/components/ui";
import { benefits } from "@/lib/data";

export default function BenefitsSection() {
  return (
    <Section id="benefits" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-50 filter blur-[120px] opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nos avantages"
          title="Pourquoi choisir <span class='gradient-text'>AssurPro</span> ?"
          subtitle="Plus de 150 000 clients nous font confiance. Voici pourquoi ils ont choisi de nous confier leurs assurances."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <FadeIn key={benefit.id} delay={i * 0.08}>
                <div className="group relative bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  {/* Top-left glow */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-brand-100 rounded-full filter blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -translate-x-1/2 -translate-y-1/2" />

                  <div className="relative flex items-start gap-5">
                    {/* Icon + Stat */}
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-brand-600" />
                      </div>
                    </div>

                    <div className="flex-1">
                      {/* Stat badge */}
                      {benefit.stat && (
                        <div className="inline-flex items-baseline gap-1 mb-3">
                          <span className="font-display text-2xl font-bold gradient-text">
                            {benefit.stat}
                          </span>
                          <span className="text-xs text-gray-400">{benefit.statLabel}</span>
                        </div>
                      )}

                      <h3 className="font-display text-lg font-semibold text-brand-950 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Central banner */}
        <FadeIn delay={0.5}>
          <div className="mt-14 rounded-3xl bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 p-10 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden relative">
            {/* Orb */}
            <div className="absolute right-0 top-0 w-80 h-80 bg-brand-500 rounded-full filter blur-[100px] opacity-20" />
            <div className="absolute left-20 bottom-0 w-60 h-60 bg-teal-500 rounded-full filter blur-[80px] opacity-10" />

            <div className="relative text-center lg:text-left">
              <p className="text-teal-300 text-xs font-semibold uppercase tracking-widest mb-2">
                Garantie AssurPro
              </p>
              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-3">
                Satisfaction garantie ou remboursé
              </h3>
              <p className="text-white/50 max-w-lg text-sm">
                Si vous n&apos;êtes pas entièrement satisfait dans les 30 premiers jours, nous vous
                remboursons intégralement. Sans condition, sans question.
              </p>
            </div>

            <div className="relative shrink-0 text-center">
              <div className="w-32 h-32 rounded-full border-4 border-teal-400/30 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-4 border-teal-400/50 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-teal-300 font-display text-2xl font-bold leading-none">30</p>
                    <p className="text-teal-400/70 text-xs">jours</p>
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-xs mt-2">Satisfait ou remboursé</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
