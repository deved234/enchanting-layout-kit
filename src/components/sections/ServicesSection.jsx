import { Reveal } from "../shared/Reveal";
import { MOTION_CARD, UGC_CARD } from "../../data/images";
import { SERVICES } from "../../data/services";
import { ServiceCard } from "../shared/ServiceCard";

export function ServicesSection() {
  return (
    <section className="py-20 md:py-40 bg-brand-surface sm-section-divider" id="services">
      <Reveal className="container mx-auto px-5 md:px-8 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا الرئيسية</h2>
        <p className="text-brand-muted max-w-xl mx-auto">اختر المسار الذي يناسب أهدافك التسويقية</p>
      </Reveal>
      <div className="container mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8">
        {SERVICES.map((service, i) => (
          <ServiceCard
            key={service.id}
            service={service}
            image={service.imageKey === "motion" ? MOTION_CARD : UGC_CARD}
            delay={i * 150}
          />
        ))}
      </div>
    </section>
  );
}
