import { Icon } from "../shared/Icon";
import { PricingCard } from "../shared/PricingCard";
import { PortfolioVideoGrid } from "../shared/PortfolioVideoGrid";
import { PACKAGES } from "../../data/packages";
import { PORTFOLIO_VIDEOS } from "../../data/portfolioVideos";

export function UgcPortfolio() {
  return (
    <section className="py-20 md:py-40 bg-brand-surface" id="ugc">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mb-16 text-right">
          <span className="text-brand-motion font-bold block mb-2">محتوى حقيقي</span>
          <div className="flex items-center gap-3 md:gap-4 flex-nowrap">
            <h2 className="text-3xl md:text-4xl font-bold shrink-0">فيديوهات UGC تسويقية</h2>
            <div className="flex items-center gap-1.5 bg-brand-motion/10 text-brand-motion px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap">
              <Icon name="star" filled className="!text-sm" />
              صناع محتوى محترفين
            </div>
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
