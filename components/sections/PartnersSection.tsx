"use client";

import { Section, SectionHeader, FadeIn } from "@/components/ui";
import { partners } from "@/lib/data";

export default function PartnersSection() {
  // Duplicate for infinite marquee
  const doubled = [...partners, ...partners];

  return (
    <Section id="partners" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nos partenaires"
          title="50+ assureurs pour<br/><span class='gradient-text'>le meilleur des offres</span>"
          subtitle="Nous travaillons avec les leaders du marché de l'assurance pour vous garantir des offres compétitives et des garanties solides."
        />
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="marquee-wrapper py-4">
          <div className="marquee-track">
            {doubled.map((partner, i) => (
              <div
                key={`${partner.id}-${i}`}
                className="flex items-center gap-3 px-7 py-4 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-brand-100 transition-all duration-200 cursor-default shrink-0 min-w-[160px]"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-display font-bold text-xs shrink-0"
                  style={{ backgroundColor: partner.color }}
                >
                  {partner.initial}
                </div>
                <span className="font-semibold text-sm text-gray-700 whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats below */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <FadeIn>
          <div className="rounded-3xl bg-gradient-to-r from-gray-50 to-brand-50 border border-gray-100 p-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { value: "50+", label: "Partenaires assureurs", desc: "Leaders du marché français et européen" },
              { value: "10 000+", label: "Offres comparées", desc: "Chaque jour pour nos clients" },
              { value: "−40%", label: "Économies garanties", desc: "Par rapport au prix du marché" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-display text-4xl font-bold gradient-text mb-2">{item.value}</p>
                <p className="font-semibold text-brand-900 mb-1">{item.label}</p>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
