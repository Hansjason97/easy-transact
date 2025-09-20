import React from "react";
import { HeroSection } from "./HeroSection";
import { ServicesSection } from "./ServicesSection";
import { BenefitsSection } from "./BenefitsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FinalCTASection } from "./FinalCTASection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FinalCTASection />
    </main>
  );
};

export default HomePage;
