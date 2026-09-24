import React from "react";
import { HeroSection } from "./HeroSection/HeroSection";
import { FeaturesSection, TickerBar } from "./TickerBar/TickerBar";
import { HowItWorksSection } from "./HowItWorksSection/HowItWorksSection";
import { MissionSection } from "./MissionSection/MissionSection";
import { TestimonialsSection } from "./TestimonialsSection/TestimonialsSection";
import {
  FinalCtaSection,
  Footer,
  ProviderSection,
} from "./ProviderSection/ProviderSection";

export function Home({ locale }: { locale: string }) {
  return (
    <div className="h-root">
      <HeroSection />
      <TickerBar />
      <MissionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ProviderSection locale={locale} />
      <FinalCtaSection locale={locale} />
      <Footer />
    </div>
  );
}
