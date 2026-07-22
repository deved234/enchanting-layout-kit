import { createFileRoute } from "@tanstack/react-router";

import { Header } from "../components/sections/Header";
import { HeroSection } from "../components/sections/HeroSection";
import { BrandsMarquee } from "../components/sections/BrandsMarquee";
import { AboutSection } from "../components/sections/AboutSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { MotionPortfolio } from "../components/sections/MotionPortfolio";
import { UgcPortfolio } from "../components/sections/UgcPortfolio";
import { WhyUsSection } from "../components/sections/WhyUsSection";
import { Testimonials } from "../components/sections/Testimonials";
import { FaqSection } from "../components/sections/FaqSection";
import { CtaSection } from "../components/sections/CtaSection";
import { WhatsAppButton } from "../components/sections/WhatsAppButton";
import { Footer } from "../components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "صاد ميديا | وكالة إبداعية متخصصة في الموشن جرافيك و UGC" },
      {
        name: "description",
        content: "صاد ميديا: موشن جرافيك احترافي وفيديوهات UGC تسويقية تحوّل خيالك إلى واقع ملموس.",
      },
      { property: "og:title", content: "صاد ميديا | وكالة إبداعية" },
      {
        property: "og:description",
        content: "موشن جرافيك احترافي وفيديوهات UGC للعلامات التجارية الطموحة.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-brand-bg text-brand-ink overflow-x-hidden min-h-screen">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <BrandsMarquee />
        <AboutSection />
        <ServicesSection />
        <MotionPortfolio />
        <UgcPortfolio />
        <WhyUsSection />
        <Testimonials />
        <FaqSection />
        <CtaSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
