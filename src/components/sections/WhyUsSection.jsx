import { Reveal } from "../shared/Reveal";
import { Icon } from "../shared/Icon";
import { WHY_US_REASONS } from "../../data/content";

export function WhyUsSection() {
  return (
    <section className="py-20 md:py-40 bg-white" id="why-us">
      <div className="container mx-auto px-5 md:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">لماذا يختارنا المحترفون؟</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {WHY_US_REASONS.map((c, i) => (
            <Reveal key={c.title} delay={i * 150}>
              <div className="p-8 rounded-2xl bg-brand-surface border border-brand-outline/40 hover:bg-brand-pulse/5 transition-all group h-full hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 rounded-xl sm-primary-gradient text-white flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-transform">
                  <Icon name={c.icon} className="!text-3xl" />
                </div>
                <h4 className="text-2xl font-bold mb-4">{c.title}</h4>
                <p className="text-brand-muted leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}