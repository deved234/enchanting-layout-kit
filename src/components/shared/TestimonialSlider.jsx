import { useRef } from "react";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialSlider({ items }) {
  const scrollRef = useRef(null);

  function scroll(amount) {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  }

  if (items.length === 0) return null;

  return (
    <div>
      <div className="relative px-5 md:px-8">
        <button
          onClick={() => scroll(-360)}
          aria-label="السابق"
           className="absolute end-0 md:-end-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-brand-outline/30 flex items-center justify-center text-brand-muted hover:text-brand-pulse hover:border-brand-pulse/30 transition-all hover:scale-110"
        >
          <Icon name="arrow_back" className="!text-xl" />
        </button>
        <button
          onClick={() => scroll(360)}
          aria-label="التالي"
           className="absolute start-0 md:-start-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-brand-outline/30 flex items-center justify-center text-brand-muted hover:text-brand-pulse hover:border-brand-pulse/30 transition-all hover:scale-110"
        >
          <Icon name="arrow_forward" className="!text-xl" />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((t, i) => (
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
    </div>
  );
}
