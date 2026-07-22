import { Reveal } from "../shared/Reveal";
import { Icon } from "../shared/Icon";
import { MOTION_CARD, UGC_CARD } from "../../data/images";
import { SERVICES } from "../../data/content";

const SERVICE_IMGS = {
  motion: MOTION_CARD,
  ugc: UGC_CARD,
};

export function ServicesSection() {
  return (
    <section className="py-20 md:py-40 bg-brand-surface sm-section-divider" id="services">
      <Reveal className="container mx-auto px-5 md:px-8 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا الرئيسية</h2>
        <p className="text-brand-muted max-w-xl mx-auto">اختر المسار الذي يناسب أهدافك التسويقية</p>
      </Reveal>
      <div className="container mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8">
        {SERVICES.map((s, i) => (
          <Reveal key={s.href} delay={i * 150} variant="scale">
            <a href={s.href} className="sm-tilt group relative overflow-hidden rounded-2xl bg-white sm-soft-shadow h-[400px] flex flex-col justify-end p-8 block">
              <div className="absolute inset-0 z-0">
                <img loading="lazy" alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={SERVICE_IMGS[s.imgKey]} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="relative z-10 text-white">
                <h3 className="text-3xl font-bold mb-2">{s.title}</h3>
                <p className="opacity-80 mb-4">{s.desc}</p>
                <div className="inline-flex items-center gap-2 text-brand-flash group-hover:-translate-x-2 transition-transform">
                  <span>استكشف المشاريع</span>
                  <Icon name="arrow_back" />
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}