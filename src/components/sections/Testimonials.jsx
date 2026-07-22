import { useRef } from "react";
import { Reveal } from "../shared/Reveal";
import { Icon } from "../shared/Icon";
import { TESTIMONIALS } from "../../data/testimonials";
import { TestimonialCard } from "../shared/TestimonialCard";

export function Testimonials() {
  const scrollRef = useRef(null);

  function scroll(amount) {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <section className="py-20 md:py-40 bg-brand-surface overflow-hidden sm-section-divider">
      <div className="container mx-auto px-5 md:px-8 text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold">ماذا يقول عملاؤنا؟</h2>
        <p className="text-brand-muted mt-3 max-w-xl mx-auto">
          آراء حقيقية من علامات تجارية وثقت بنا
        </p>
      </div>
      <div className="relative px-5 md:px-8">
        <button
          onClick={() => scroll(-360)}
          aria-label="السابق"
          className="absolute end-2 md:-end-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-lg border border-brand-outline/30 flex items-center justify-center text-brand-muted hover:text-brand-pulse hover:border-brand-pulse/30 transition-all hover:scale-110"
        >
          <Icon name="arrow_back" className="!text-2xl" />
        </button>
        <button
          onClick={() => scroll(360)}
          aria-label="التالي"
          className="absolute start-2 md:-start-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-lg border border-brand-outline/30 flex items-center justify-center text-brand-muted hover:text-brand-pulse hover:border-brand-pulse/30 transition-all hover:scale-110"
        >
          <Icon name="arrow_forward" className="!text-2xl" />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.id}
              delay={i * 80}
              className="snap-start shrink-0 w-[80vw] md:w-[360px] h-full"
            >
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
