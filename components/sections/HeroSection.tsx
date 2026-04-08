"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Star,
  Clock,
  TrendingDown,
  ChevronRight,
  Play,
  CheckCircle2,
} from "lucide-react";
import { TrustBadge } from "@/components/ui";

const trustBadges = [
  { icon: Shield, label: "Courtier agréé ORIAS", value: "100% Certifié" },
  { icon: Star, label: "Avis clients vérifiés", value: "4.9/5 ★★★★★" },
  { icon: Clock, label: "Devis personnalisé", value: "En 3 minutes" },
  { icon: TrendingDown, label: "Économies garanties", value: "Jusqu'à −40%" },
];

const heroFeatures = [
  "Comparaison de 50+ assureurs",
  "Souscription 100% en ligne",
  "Aucun engagement, devis gratuit",
];

const statsData = [
  { value: "150 000+", label: "Clients assurés" },
  { value: "50+", label: "Partenaires assureurs" },
  { value: "4.9/5", label: "Satisfaction client" },
  { value: "−40%", label: "Économies moyennes" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-hero-gradient noise-overlay">
      {/* Decorative orbs */}
      <div className="orb w-[600px] h-[600px] bg-brand-500 top-[-200px] right-[-200px] animate-float-slow" />
      <div className="orb w-[400px] h-[400px] bg-teal-500 bottom-[-100px] left-[-100px] animate-float-medium" style={{ animationDelay: "2s" }} />
      <div className="orb w-[300px] h-[300px] bg-amber-500 top-[40%] right-[15%] animate-float-slow" style={{ animationDelay: "4s", opacity: 0.2 }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Courtier assurance n°1 en France
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.08] tracking-tight mb-6 text-balance"
            >
              Protégez ce qui{" "}
              <span className="gradient-text-light">compte le plus</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg text-white/60 leading-relaxed mb-8 max-w-lg"
            >
              Santé, auto, habitation, prêt — comparez les meilleures offres de
              50+ assureurs en 3 minutes et économisez jusqu&apos;à 40% sur vos
              cotisations.
            </motion.p>

            {/* Features */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-2.5 mb-10"
            >
              {heroFeatures.map((feat, i) => (
                <motion.li
                  key={feat}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.08 }}
                  className="flex items-center gap-2.5 text-white/70 text-sm"
                >
                  <CheckCircle2 className="w-4.5 h-4.5 text-teal-400 shrink-0" />
                  {feat}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold text-base shadow-glow hover:shadow-lg hover:scale-[1.02] transition-all duration-200 btn-press"
              >
                Obtenir mon devis gratuit
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <button className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl glass border border-white/10 text-white font-medium hover:bg-white/10 transition-all duration-200">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Play className="w-3.5 h-3.5 text-white fill-white" />
                </div>
                Comment ça marche ?
              </button>
            </motion.div>
          </div>

          {/* Right column — floating card + stats */}
          <div className="hidden lg:block relative">
            {/* Main card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-8 border border-white/10 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-widest">Votre devis estimé</p>
                  <p className="text-white font-display text-3xl font-semibold mt-1">
                    12,90€<span className="text-lg text-white/50">/mois</span>
                  </p>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-400/20">
                  −38% vs marché
                </div>
              </div>

              {/* Progress bars */}
              {[
                { label: "Mutuelle Santé", value: 85, color: "#ef4444" },
                { label: "Assurance Auto", value: 72, color: "#6366f1" },
                { label: "Habitation", value: 91, color: "#14b8a6" },
              ].map((item) => (
                <div key={item.label} className="mb-4">
                  <div className="flex justify-between text-xs text-white/50 mb-1.5">
                    <span>{item.label}</span>
                    <span className="text-white/70">Meilleure offre</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-6 flex items-center gap-3 p-3 rounded-xl bg-teal-500/10 border border-teal-400/20"
              >
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                <p className="text-teal-300 text-xs">
                  Analyse complète de 50+ offres — résultats personnalisés
                </p>
              </motion.div>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 glass rounded-2xl p-4 border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Noté 4.9/5</p>
                  <p className="text-white/40 text-xs">5 200+ avis vérifiés</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-10 glass rounded-2xl p-4 border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Agréé ORIAS</p>
                  <p className="text-white/40 text-xs">Courtier certifié</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl glass border border-white/10"
        >
          {statsData.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-6 py-5 ${i !== statsData.length - 1 ? "border-r border-white/5" : ""}`}
            >
              <p className="font-display text-2xl lg:text-3xl font-semibold text-white">
                {stat.value}
              </p>
              <p className="text-white/40 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {trustBadges.map((badge) => (
            <TrustBadge key={badge.label} {...badge} />
          ))}
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80L1440 30C1200 70 960 0 720 30C480 60 240 10 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
