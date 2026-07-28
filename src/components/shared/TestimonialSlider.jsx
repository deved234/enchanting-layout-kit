import { useRef } from "react";
import { gsap, useGSAP, Draggable } from "../../lib/gsap";
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

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const proxy = { x: 0 };

      function updateBounds() {
        const cardWidth = container.offsetWidth < 640 ? container.offsetWidth - 48 : 360;
        const gap = 24;
        const step = cardWidth + gap;
        const maxScroll = 0;
        const minScroll = -(items.length * step - container.offsetWidth + 32);
        return { step, minScroll, maxScroll };
      }

      let { step, minScroll, maxScroll } = updateBounds();

      let drag = Draggable.create(track, {
        type: "x",
        bounds: { minX: minScroll, maxX: maxScroll },
        edgeResistance: 0.65,
        onDrag() {
          proxy.x = this.x;
        },
        onRelease() {
          const snap = Math.round(this.x / step) * step;
          const clamped = Math.max(minScroll, Math.min(maxScroll, snap));
          gsap.to(proxy, {
            x: clamped,
            duration: 0.5,
            ease: "power3.out",
            onUpdate: () => gsap.set(track, { x: proxy.x }),
          });
        },
      })[0];

      const updateOnResize = () => {
        ({ step, minScroll, maxScroll } = updateBounds());
        drag.applyBounds({ minX: minScroll, maxX: maxScroll });
        const cx = gsap.getProperty(track, "x");
        if (cx < minScroll || cx > maxScroll) {
          gsap.set(track, { x: Math.max(minScroll, Math.min(maxScroll, cx)) });
        }
      };

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

      const leftBtn = container.querySelector("[data-scroll-left]");
      const rightBtn = container.querySelector("[data-scroll-right]");
      leftBtn?.addEventListener("click", () => scrollTo(step));
      rightBtn?.addEventListener("click", () => scrollTo(-step));
      window.addEventListener("resize", updateOnResize);

      return () => {
        window.removeEventListener("resize", updateOnResize);
        leftBtn?.removeEventListener("click", () => scrollTo(step));
        rightBtn?.removeEventListener("click", () => scrollTo(-step));
        drag?.kill();
      };
    });

    return () => mm.revert();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div ref={containerRef} className="overflow-hidden" dir="ltr">
      <div className="relative px-4 md:px-10">
        <button
          data-scroll-left
          aria-label="التالي"
          className="absolute end-1 md:-end-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-brand-outline/30 flex items-center justify-center text-brand-muted hover:text-brand-pulse hover:border-brand-pulse/30 transition-all hover:scale-110"
        >
          <Icon name="arrow_back" className="!text-lg md:!text-xl" />
        </button>
        <button
          data-scroll-right
          aria-label="السابق"
          className="absolute start-1 md:-start-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-brand-outline/30 flex items-center justify-center text-brand-muted hover:text-brand-pulse hover:border-brand-pulse/30 transition-all hover:scale-110"
        >
          <Icon name="arrow_forward" className="!text-lg md:!text-xl" />
        </button>
        <div
          ref={trackRef}
          className="flex gap-4 md:gap-6 pb-4 cursor-grab active:cursor-grabbing select-none"
        >
          {items.map((t, i) => (
            <div key={t.id} className="shrink-0 w-[calc(100vw-6rem)] md:w-[360px]">
              <Reveal delay={i * 80}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
