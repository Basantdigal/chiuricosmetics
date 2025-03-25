import HeroSection from "@/components/sections/HeroSection";
import IntroductionSection from "@/components/sections/IntroductionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import UsageSection from "@/components/sections/UsageSection";
import SustainabilitySection from "@/components/sections/SustainabilitySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroductionSection />
      <BenefitsSection />
      <UsageSection />
      <SustainabilitySection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
