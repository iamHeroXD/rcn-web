import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutBotSection } from "@/components/sections/AboutBotSection";
import { CoinSystemSection } from "@/components/sections/CoinSystemSection";
import { PremiumSubscriptionSection } from "@/components/sections/PremiumSubscriptionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { SupportDonationSection } from "@/components/sections/SupportDonationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="flex-1 w-full relative z-10">
        <HeroSection />
        <AboutBotSection />
        <CoinSystemSection />
        <PremiumSubscriptionSection />
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />
        <SupportDonationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
