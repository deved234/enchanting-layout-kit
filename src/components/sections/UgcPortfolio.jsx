import { Icon } from "../shared/Icon";
import { PricingCard } from "../shared/PricingCard";
import { PortfolioVideoGrid } from "../shared/PortfolioVideoGrid";
import { PACKAGES } from "../../data/packages";
import { PORTFOLIO_VIDEOS } from "../../data/portfolioVideos";

export function UgcPortfolio() {
  return (
    <section className="py-20 md:py-40 bg-brand-surface" id="ugc">
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row-reverse justify-between items-end mb-16 gap-6">
          <div className="text-right">
            <span className="text-brand-motion font-bold block mb-2">محتوى حقيقي</span>
            <h2 className="text-3xl md:text-4xl font-bold">فيديوهات UGC تسويقية</h2>
          </div>
          <div className="flex items-center gap-2 bg-brand-motion/10 text-brand-motion px-4 py-2 rounded-full text-sm font-semibold">
            <Icon name="star" filled className="!text-base" />
            صناع محتوى محترفين
          </div>
        </div>

        <PortfolioVideoGrid items={PORTFOLIO_VIDEOS.ugc} provider="vimeo" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PACKAGES.ugc.map((p, i) => (
            <PricingCard
              key={p.id}
              name={p.name}
              price={p.price}
              desc={p.features[0]}
              cta="Buy Now"
              href={p.stripeLink}
              featured={p.id === "ugc-pack-3"}
              custom={p.id === "ugc-monthly"}
              accent="motion"
              delay={i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
