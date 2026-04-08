"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Section, SectionHeader, FadeIn, Badge } from "@/components/ui";
import { services } from "@/lib/data";

export default function ServicesSection() {
  return (
    <Section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nos produits"
          title="Toutes vos assurances,<br/><span class='gradient-text'>un seul courtier</span>"
          subtitle="De la mutuelle santé à l'assurance prêt, nous comparons les offres de 50+ assureurs pour vous proposer les meilleures garanties au prix le plus bas."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.id} delay={i * 0.1}>
                <motion.a
                  href={`#contact`}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group relative flex flex-col h-full rounded-2xl bg-white border border-gray-100 p-7 shadow-card hover:shadow-card-hover transition-shadow duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Gradient bg on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(ellipse at top left, ${service.bgColor} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-5 right-5">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-brand-500 text-white">
                        {service.badge}
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: service.bgColor }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color: service.color }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative flex-1 flex flex-col">
                    <h3 className="font-display text-xl font-semibold text-brand-950 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs text-gray-600">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                            style={{ backgroundColor: service.color }}
                          />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <div className="flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 group-hover:gap-2.5"
                      style={{ color: service.color }}>
                      Obtenir un devis
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  {/* Bottom border accent */}
                  <div
                    className="absolute bottom-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
                  />
                </motion.a>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.5}>
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Vous ne trouvez pas ce que vous cherchez ?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors"
            >
              Contactez un conseiller
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
