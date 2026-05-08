import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutBotSection } from "@/components/sections/AboutBotSection";
import { CoinSystemSection } from "@/components/sections/CoinSystemSection";
import { PremiumSubscriptionSection } from "@/components/sections/PremiumSubscriptionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ReviewsCollageSection } from "@/components/sections/ReviewsCollageSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { SupportDonationSection } from "@/components/sections/SupportDonationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="flex-1 w-full relative z-10">
        <HeroSection />
        <StatsSection />
        <SectionDivider />
        <AboutBotSection />
        <SectionDivider />
        <CoinSystemSection />
        <SectionDivider />
        <PremiumSubscriptionSection />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <TestimonialsSection />
        <ReviewsCollageSection />
        <SectionDivider />
        <FAQSection />
        <SectionDivider />
        <SupportDonationSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
