import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import CtaSection from "@/components/sections/CtaSection";
import ContactSection from "@/components/sections/ContactSection";
import FloatingButtons from "@/components/ui/FloatingButtons";
import PageSkeleton from "@/components/sections/PageSkeleton";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Suspense fallback={<PageSkeleton />}>
          <HeroSection />
          <ServicesSection />
          <BenefitsSection />
          <ProcessSection />
          <TestimonialsSection />
          <PartnersSection />
          <CtaSection />
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
