"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, Star } from "lucide-react";
import { Section, FadeIn } from "@/components/ui";

const ctaFeatures = [
  { icon: Clock, text: "Devis en 3 minutes" },
  { icon: Shield, text: "100% gratuit & sans engagement" },
  { icon: Star, text: "4.9/5 — 5 200 avis" },
];

export default function CtaSection() {
  return (
    <Section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cta-gradient" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Orbs */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-white/10 filter blur-[80px]" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full bg-teal-300/20 filter blur-[60px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse" />
            Offre limitée — Devis express
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6 text-balance">
            Obtenez votre devis{" "}
            <span className="text-amber-300">personnalisé</span>
            <br />
            en moins de 3 minutes
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Rejoignez plus de 150 000 clients qui ont déjà optimisé leurs
            assurances avec AssurPro. Comparez, choisissez, économisez.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2.5 px-10 py-5 rounded-2xl bg-white text-brand-700 font-bold text-lg shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-200 btn-press"
            >
              Démarrer mon devis gratuit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+33123456789"
              className="flex items-center justify-center gap-2 px-8 py-5 rounded-2xl border-2 border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200"
            >
              📞 01 23 45 67 89
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {ctaFeatures.map((feat) => (
              <div key={feat.text} className="flex items-center gap-2 text-white/70 text-sm">
                <feat.icon className="w-4 h-4 text-teal-300 shrink-0" />
                {feat.text}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Countdown / urgency */}
        <FadeIn delay={0.5}>
          <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 border border-white/20">
            <div className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" />
            <p className="text-white/70 text-sm">
              <span className="text-white font-semibold">47 personnes</span> ont demandé un devis
              aujourd&apos;hui
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
