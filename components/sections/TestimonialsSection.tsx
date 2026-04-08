"use client";

import { motion } from "framer-motion";
import { Quote, TrendingDown } from "lucide-react";
import { Section, SectionHeader, FadeIn, StarRating } from "@/components/ui";
import { testimonials } from "@/lib/data";

function TestimonialCard({
  testimonial,
  featured = false,
}: {
  testimonial: (typeof testimonials)[0];
  featured?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`relative rounded-2xl p-7 flex flex-col h-full ${
        featured
          ? "bg-gradient-to-br from-brand-600 to-brand-700 text-white shadow-glow"
          : "bg-white border border-gray-100 shadow-sm hover:shadow-card"
      } transition-shadow duration-300`}
    >
      {/* Quote icon */}
      <Quote
        className={`w-8 h-8 mb-5 ${featured ? "text-white/30" : "text-brand-200"}`}
        fill="currentColor"
      />

      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Text */}
      <p
        className={`text-sm leading-relaxed flex-1 mb-6 ${
          featured ? "text-white/80" : "text-gray-600"
        }`}
      >
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0 ${
            featured ? "bg-white/20" : "bg-brand-100 text-brand-600"
          }`}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p
            className={`font-semibold text-sm ${
              featured ? "text-white" : "text-gray-900"
            }`}
          >
            {testimonial.name}
          </p>
          <p
            className={`text-xs ${featured ? "text-white/50" : "text-gray-400"}`}
          >
            {testimonial.role} · {testimonial.insurance}
          </p>
        </div>

        {/* Savings badge */}
        {testimonial.savings && (
          <div
            className={`ml-auto flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
              featured
                ? "bg-white/20 text-white"
                : "bg-teal-50 text-teal-700"
            }`}
          >
            <TrendingDown className="w-3 h-3" />
            {testimonial.savings}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  return (
    <Section id="testimonials" className="py-24 bg-gray-50/80 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-50 rounded-full filter blur-[100px] opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Témoignages"
          title="Ils nous font confiance,<br/><span class='gradient-text'>voici leur retour</span>"
          subtitle="Plus de 5 200 avis vérifiés. Découvrez ce que nos clients disent d'AssurPro."
        />

        {/* Summary stats */}
        <FadeIn>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-14">
            {[
              { value: "4.9/5", label: "Note moyenne" },
              { value: "5 200+", label: "Avis vérifiés" },
              { value: "97%", label: "Recommandent" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Testimonial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <FadeIn key={testimonial.id} delay={i * 0.08}>
              <TestimonialCard
                testimonial={testimonial}
                featured={i === 2}
              />
            </FadeIn>
          ))}
        </div>

        {/* Trust footer */}
        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-xs">
              Avis collectés et vérifiés par Trustpilot · Dernière mise à jour : décembre 2024
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
