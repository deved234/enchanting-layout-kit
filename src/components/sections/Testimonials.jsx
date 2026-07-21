import { Icon } from "../shared/Icon";
import { TESTIMONIALS } from "../../data/testimonials";

export function Testimonials() {
  return (
    <section className="py-20 md:py-40 bg-brand-surface overflow-hidden">
      <div className="container mx-auto px-5 md:px-8 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">ماذا يقول عملاؤنا؟</h2>
      </div>
      <div role="region" aria-roledescription="carousel" aria-label="آراء العملاء" className="flex gap-8 overflow-x-auto pb-8 px-5 md:px-8 snap-x snap-mandatory">
        {TESTIMONIALS.map((t) => {
          const toneStyles = {
            pulse: "bg-brand-pulse/10 text-brand-pulse",
            motion: "bg-brand-motion/10 text-brand-motion",
            flash: "bg-brand-flash/20 text-brand-pulse",
          };
          return (
            <div key={t.name} role="group" aria-roledescription="slide" className="min-w-[280px] md:min-w-[400px] snap-start sm-glass p-8 rounded-2xl sm-soft-shadow border border-brand-pulse/10 hover:-translate-y-2 transition-transform">
              <div className="flex text-brand-pulse mb-4">
                {Array.from({ length: Math.floor(t.stars) }).map((_, i) => (
                  <Icon key={i} name="star" filled />
                ))}
                {t.stars % 1 !== 0 && <Icon name="star_half" filled />}
              </div>
              <p className="mb-6 italic leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${toneStyles[t.tone] || toneStyles.pulse}`}>
                  {t.initial}
                </div>
                <div>
                  <h5 className="font-bold">{t.name}</h5>
                  <span className="text-xs text-brand-muted">{t.role}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}