import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Header } from "../components/sections/Header";
import { HeroSection } from "../components/sections/HeroSection";
import { BrandsMarquee } from "../components/sections/BrandsMarquee";

const AboutSection = lazy(() =>
  import("../components/sections/AboutSection").then((m) => ({ default: m.AboutSection })),
);
const ServicesSection = lazy(() =>
  import("../components/sections/ServicesSection").then((m) => ({ default: m.ServicesSection })),
);
const MotionPortfolio = lazy(() =>
  import("../components/sections/MotionPortfolio").then((m) => ({ default: m.MotionPortfolio })),
);
const UgcPortfolio = lazy(() =>
  import("../components/sections/UgcPortfolio").then((m) => ({ default: m.UgcPortfolio })),
);
const WhyUsSection = lazy(() =>
  import("../components/sections/WhyUsSection").then((m) => ({ default: m.WhyUsSection })),
);
const FaqSection = lazy(() =>
  import("../components/sections/FaqSection").then((m) => ({ default: m.FaqSection })),
);
const CtaSection = lazy(() =>
  import("../components/sections/CtaSection").then((m) => ({ default: m.CtaSection })),
);
const WhatsAppButton = lazy(() =>
  import("../components/sections/WhatsAppButton").then((m) => ({ default: m.WhatsAppButton })),
);
const Footer = lazy(() =>
  import("../components/sections/Footer").then((m) => ({ default: m.Footer })),
);

function SectionFallback() {
  return <div className="h-32" />;
}

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
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <MotionPortfolio />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <UgcPortfolio />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <WhyUsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FaqSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CtaSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
