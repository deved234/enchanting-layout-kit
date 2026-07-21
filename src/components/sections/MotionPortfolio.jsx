import { Reveal } from "../shared/Reveal";
import { Icon } from "../shared/Icon";
import { PricingCard } from "../shared/PricingCard";
import { PORTFOLIO } from "../../data/portfolio";
import { MOTION_PRICING } from "../../data/pricing";

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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-24">
          {PORTFOLIO.map((src, i) => (
            <Reveal key={i} delay={i * 80} variant="scale">
              <div className="aspect-video rounded-xl overflow-hidden sm-glass group cursor-pointer border border-brand-pulse/10 sm-tilt relative">
                <img loading="lazy" alt={`مشروع موشن جرافيك ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={src} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="play_circle" filled className="text-white !text-6xl drop-shadow-lg" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <h3 className="text-center text-2xl md:text-3xl font-bold mb-12">باقات الموشن جرافيك</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOTION_PRICING.map((p, i) => (
            <PricingCard
              key={p.name}
              name={p.name}
              price={p.price}
              features={p.features}
              cta={p.cta}
              featured={p.featured}
              custom={p.custom}
              accent="pulse"
              delay={i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}