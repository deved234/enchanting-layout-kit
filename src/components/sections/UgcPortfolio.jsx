import { Reveal } from "../shared/Reveal";
import { Icon } from "../shared/Icon";
import { PricingCard } from "../shared/PricingCard";
import { UGC_IMGS } from "../../data/portfolio";
import { UGC_PRICING } from "../../data/pricing";

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {UGC_IMGS.map((src, i) => (
            <Reveal key={i} delay={i * 100} variant="scale">
              <div className="aspect-[9/16] rounded-xl overflow-hidden relative group border border-brand-motion/20 sm-tilt">
                <img loading="lazy" alt={`فيديو UGC تسويقي ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={src} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center pb-6 opacity-90">
                  <Icon name="play_circle" filled className="text-white !text-5xl drop-shadow-lg group-hover:scale-125 transition-transform" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {UGC_PRICING.map((p, i) => (
            <PricingCard
              key={p.name}
              name={p.name}
              price={p.price}
              desc={p.desc}
              cta={p.cta}
              featured={p.featured}
              custom={p.custom}
              accent="motion"
              delay={i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}