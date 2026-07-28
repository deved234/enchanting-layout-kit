import { useRef, useEffect } from "react";
import { gsap, useGSAP, Draggable, InertiaPlugin } from "../../lib/gsap";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialSlider({ items }) {
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container || items.length === 0) return;

    const cardWidth = 360;
    const gap = 24;
    const step = cardWidth + gap;
    const maxScroll = 0;
    const minScroll = -(items.length * step - container.offsetWidth + 32);

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const proxy = { x: 0 };
      gsap.to(proxy, { x: 0, duration: 0 });

      Draggable.create(track, {
        type: "x",
        inertia: true,
        bounds: { minX: minScroll, maxX: maxScroll },
        onDrag() {
          proxy.x = this.x;
          gsap.set(track, { x: this.x });
        },
        onThrowUpdate() {
          gsap.set(track, { x: this.x });
        },
      });

      const scrollTo = (dir) => {
        const currentX = gsap.getProperty(track, "x");
        const target = Math.max(minScroll, Math.min(maxScroll, currentX + dir));
        gsap.to(proxy, {
          x: target,
          duration: 0.5,
          ease: "power3.out",
          onUpdate: () => gsap.set(track, { x: proxy.x }),
        });
      };

      container
        .querySelector("[data-scroll-left]")
        ?.addEventListener("click", () => scrollTo(step));
      container
        .querySelector("[data-scroll-right]")
        ?.addEventListener("click", () => scrollTo(-step));
    });

    return () => mm.revert();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div ref={containerRef}>
      <div className="relative px-9 md:px-10">
        <button
          data-scroll-left
          aria-label="السابق"
          className="absolute end-0 md:-end-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-brand-outline/30 flex items-center justify-center text-brand-muted hover:text-brand-pulse hover:border-brand-pulse/30 transition-all hover:scale-110"
        >
          <Icon name="arrow_back" className="!text-lg md:!text-xl" />
        </button>
        <button
          data-scroll-right
          aria-label="التالي"
          className="absolute start-0 md:-start-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-brand-outline/30 flex items-center justify-center text-brand-muted hover:text-brand-pulse hover:border-brand-pulse/30 transition-all hover:scale-110"
        >
          <Icon name="arrow_forward" className="!text-lg md:!text-xl" />
        </button>
        <div
          ref={trackRef}
          className="flex gap-6 pb-4 cursor-grab active:cursor-grabbing select-none"
          style={{ touchAction: "pan-y" }}
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
