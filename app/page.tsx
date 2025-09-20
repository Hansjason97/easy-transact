import { BenefitsSection } from "@/components/homepage/BenefitsSection";
import { FinalCTASection } from "@/components/homepage/FinalCTASection";
import { HeroSection } from "@/components/homepage/HeroSection";
import { ServicesSection } from "@/components/homepage/ServicesSection";
import { TestimonialsSection } from "@/components/homepage/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  );
}
