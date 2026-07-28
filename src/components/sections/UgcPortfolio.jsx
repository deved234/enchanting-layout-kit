import { Icon } from "../shared/Icon";
import { PricingCard } from "../shared/PricingCard";
import { PortfolioVideoGrid } from "../shared/PortfolioVideoGrid";
import { PACKAGES } from "../../data/packages";
import { PORTFOLIO_VIDEOS } from "../../data/portfolioVideos";
import { COMPANY } from "../../config/company";
import { TestimonialSlider } from "../shared/TestimonialSlider";
import { TESTIMONIALS } from "../../data/testimonials";

const NOTES = [
  {
    icon: "videocam",
    text: "نقدم فيديوهات UGC يتم تصويرها بمعدات احترافية ومونتاج متقن",
  },
];

export function UgcPortfolio() {
  return (
    <section className="py-20 md:py-40 bg-brand-surface" id="ugc">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mb-16 text-right">
          <span className="text-brand-motion font-bold block mb-2">محتوى حقيقي</span>
          <div className="flex items-center gap-3 md:gap-4 flex-nowrap">
            <h2 className="text-2xl md:text-4xl font-bold shrink-0">فيديوهات UGC تسويقية</h2>
            <div className="flex items-center gap-1.5 bg-brand-motion/10 text-brand-motion px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap">
              <Icon name="star" filled className="!text-sm" />
              صناع محتوى محترفين
            </div>
          </div>
        </div>

        <PortfolioVideoGrid items={PORTFOLIO_VIDEOS.ugc} accent="motion" />

        <div className="space-y-3 max-w-4xl mx-auto mb-12 mt-12">
          {NOTES.map((n) => (
            <div
              key={n.icon}
              className="flex items-start gap-3 p-4 rounded-xl bg-brand-motion/5 border border-brand-motion/10 text-sm text-brand-muted"
            >
              <Icon name={n.icon} className="!text-lg text-brand-motion shrink-0 mt-0.5" />
              <span>{n.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 mb-20">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold">ماذا يقول عملاؤنا</h3>
          </div>
          <TestimonialSlider items={TESTIMONIALS.filter((t) => t.service === "ugc")} />
        </div>

        <div className="space-y-20">
          <div>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-brand-motion/10 text-brand-motion px-4 py-1.5 rounded-full text-xs font-bold mb-3">
                <Icon name="play_circle" filled className="!text-sm" />
                اختر المدة المناسبة
              </span>
              <h3 className="text-2xl md:text-3xl font-bold">الباقات الفردية</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PACKAGES.ugc
                .filter((p) => p.type === "individual")
                .map((p, i) => (
                  <PricingCard
                    key={p.id}
                    name={p.name}
                    price={p.price}
                    features={p.features}
                    duration={p.duration}
                    cta="اشتر الآن"
                    href={p.stripeLink}
                    accent="motion"
                    delay={i * 80}
                  />
                ))}
            </div>
          </div>

          <div className="bg-gradient-to-b from-brand-motion/[0.04] to-transparent rounded-3xl py-12 px-5 md:px-10">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold mb-3 shadow-lg shadow-amber-500/20">
                <Icon name="sell" filled className="!text-sm" />
                وفر أكثر
              </span>
              <h3 className="text-2xl md:text-3xl font-bold">الحزم</h3>
              <p className="text-brand-muted text-sm mt-2">
                أفضل قيمة مقابل المال — احصل على عدة فيديوهات بسعر مميز
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {PACKAGES.ugc
                .filter((p) => p.type === "bundle")
                .map((p, i) => {
                  const saved = i === 0 ? "وفر $189" : "وفر $389";
                  return (
                    <PricingCard
                      key={p.id}
                      name={p.name}
                      price={p.price}
                      features={p.features}
                      duration={p.duration}
                      badge={saved}
                      cta="تواصل معنا"
                      href={COMPANY.whatsapp}
                      accent="motion"
                      delay={i * 80}
                    />
                  );
                })}
            </div>
          </div>

          <div>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-brand-ink/10 text-brand-ink px-4 py-1.5 rounded-full text-xs font-bold mb-3">
                <Icon name="star" filled className="!text-sm" />
                حلول مخصصة
              </span>
              <h3 className="text-2xl md:text-3xl font-bold">باقة مخصصة</h3>
              <p className="text-brand-muted text-sm mt-2">
                مشاريع طويلة وحملات إعلانية متكاملة حسب احتياجك
              </p>
            </div>
            <div className="max-w-sm mx-auto">
              {PACKAGES.ugc
                .filter((p) => p.type === "custom")
                .map((p, i) => (
                  <PricingCard
                    key={p.id}
                    name={p.name}
                    price={p.price}
                    features={p.features}
                    cta="تواصل معنا"
                    href={COMPANY.whatsapp}
                    custom
                    accent="motion"
                    delay={i * 80}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
