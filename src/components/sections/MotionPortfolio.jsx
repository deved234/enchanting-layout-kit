import { Icon } from "../shared/Icon";
import { PricingCard } from "../shared/PricingCard";
import { PortfolioVideoGrid } from "../shared/PortfolioVideoGrid";
import { PACKAGES } from "../../data/packages";
import { PORTFOLIO_VIDEOS } from "../../data/portfolioVideos";
import { COMPANY } from "../../config/company";

const NOTES = [
  {
    icon: "edit",
    text: "تعديلات غير محدودة مجانية على المشاهد والتحريك لمدة 3 أيام من استلام النسخة الأولى (بشرط عدم تعديل النص/السيناريو المعتمد). أي طلبات تعديل بعد انتهاء الـ 3 أيام تكون برسوم إضافية.",
  },
  {
    icon: "music_note",
    text: "لا يوجد لدينا إضافة موسيقى .. وتستبدل بمؤثرات صوتية نفس الموجود في معرض الأعمال",
  },
  {
    icon: "check",
    text: "لا نخدم أعمال لا تتوافق مع الشريعة الإسلامية",
  },
];

export function MotionPortfolio() {
  return (
    <section className="py-20 md:py-40 bg-white" id="motion">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mb-16 text-right">
          <span className="text-brand-pulse font-bold block mb-2">معرض الأعمال</span>
          <div className="flex items-center gap-3 md:gap-4 flex-nowrap">
            <h2 className="text-3xl md:text-4xl font-bold shrink-0">موشن جرافيك احترافي</h2>
            <div className="flex gap-1.5 md:gap-2 flex-nowrap">
              <div className="flex items-center gap-1.5 bg-brand-pulse/10 text-brand-pulse px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap">
                <Icon name="check_circle" filled className="!text-sm" />
                تعديلات مفتوحة
              </div>
              <div className="flex items-center gap-1.5 bg-brand-motion/10 text-brand-motion px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap">
                <Icon name="check_circle" filled className="!text-sm" />
                جودة 4K
              </div>
            </div>
          </div>
        </div>

        <PortfolioVideoGrid items={PORTFOLIO_VIDEOS.motion} provider="youtube" />

        <div className="space-y-3 max-w-3xl mx-auto mb-12">
          {NOTES.map((n) => (
            <div
              key={n.icon}
              className="flex items-start gap-3 p-4 rounded-xl bg-brand-pulse/5 border border-brand-pulse/10 text-sm text-brand-muted"
            >
              <Icon name={n.icon} className="!text-lg text-brand-pulse shrink-0 mt-0.5" />
              <span>{n.text}</span>
            </div>
          ))}
        </div>

        <div className="space-y-20">
          <div>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-brand-pulse/10 text-brand-pulse px-4 py-1.5 rounded-full text-xs font-bold mb-3">
                <Icon name="play_circle" filled className="!text-sm" />
                اختر المدة المناسبة
              </span>
              <h3 className="text-2xl md:text-3xl font-bold">الباقات الفردية</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {PACKAGES.motion.filter((p) => p.type === "individual").map((p, i) => (
                <PricingCard
                  key={p.id}
                  name={p.name}
                  price={p.price}
                  features={p.features}
                  duration={p.duration}
                  cta="اشتر الآن"
                  href={p.stripeLink}
                  accent="pulse"
                  delay={i * 80}
                />
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-b from-brand-pulse/[0.03] to-transparent rounded-3xl py-12 px-5 md:px-10">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold mb-3 shadow-lg shadow-amber-500/20">
                <Icon name="sell" filled className="!text-sm" />
                وفر أكثر
              </span>
              <h3 className="text-2xl md:text-3xl font-bold">الحزم</h3>
              <p className="text-brand-muted text-sm mt-2">أفضل قيمة مقابل المال — احصل على عدة فيديوهات بسعر مميز</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {PACKAGES.motion.filter((p) => p.type === "bundle").map((p, i) => {
                const saved = i === 0 ? "وفر 189 ر.س" : "وفر 289 ر.س";
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
                    accent="pulse"
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
              <p className="text-brand-muted text-sm mt-2">مشاريع طويلة وحملات إعلانية متكاملة حسب احتياجك</p>
            </div>
            <div className="max-w-sm mx-auto">
              {PACKAGES.motion.filter((p) => p.type === "custom").map((p, i) => (
                <PricingCard
                  key={p.id}
                  name={p.name}
                  price={p.price}
                  features={p.features}
                  cta="تواصل معنا"
                  href={COMPANY.whatsapp}
                  custom
                  accent="pulse"
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
