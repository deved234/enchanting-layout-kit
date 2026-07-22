import { Icon } from "../shared/Icon";
import { PricingCard } from "../shared/PricingCard";
import { PortfolioVideoGrid } from "../shared/PortfolioVideoGrid";
import { PACKAGES } from "../../data/packages";
import { PORTFOLIO_VIDEOS } from "../../data/portfolioVideos";

export function MotionPortfolio() {
  return (
    <section className="py-20 md:py-40 bg-white" id="motion">
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row-reverse justify-between items-end mb-16 gap-6 text-right">
          <div className="flex gap-4 flex-wrap">
            <div className="flex items-center gap-2 bg-brand-pulse/10 text-brand-pulse px-4 py-2 rounded-full text-sm font-semibold">
              <Icon name="check_circle" filled className="!text-base" />
              تعديلات مفتوحة
            </div>
            <div className="flex items-center gap-2 bg-brand-motion/10 text-brand-motion px-4 py-2 rounded-full text-sm font-semibold">
              <Icon name="check_circle" filled className="!text-base" />
              جودة 4K
            </div>
          </div>
          <div>
            <span className="text-brand-pulse font-bold block mb-2">معرض الأعمال</span>
            <h2 className="text-3xl md:text-4xl font-bold">موشن جرافيك احترافي</h2>
          </div>
        </div>

        <PortfolioVideoGrid items={PORTFOLIO_VIDEOS.motion} provider="youtube" />

        <h3 className="text-center text-2xl md:text-3xl font-bold mb-12">باقات الموشن جرافيك</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PACKAGES.motion.map((p, i) => (
            <PricingCard
              key={p.id}
              name={p.name}
              price={p.price}
              features={p.features}
              cta="Buy Now"
              href={p.stripeLink}
              featured={p.id === "motion-pro"}
              custom={p.id === "motion-custom"}
              accent="pulse"
              delay={i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
