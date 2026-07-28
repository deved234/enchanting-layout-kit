import { useRef } from "react";
import { gsap, useGSAP, Draggable } from "../../lib/gsap";
import { Icon } from "./Icon";
import { TestimonialCard } from "./TestimonialCard";

function getVisibleWidth(el) {
  const style = getComputedStyle(el);
  const padL = parseFloat(style.paddingInlineStart) || 0;
  const padR = parseFloat(style.paddingInlineEnd) || 0;
  return el.clientWidth - padL - padR;
}

export function TestimonialSlider({ items }) {
  const trackRef = useRef(null);
  const innerRef = useRef(null);
  const indexRef = useRef(0);
  const slideRef = useRef(null);

  useGSAP(() => {
    const track = trackRef.current;
    const inner = innerRef.current;
    if (!track || !inner || items.length === 0) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const proxy = { x: 0 };
      let cardWidth = 0;
      let step = 0;

      function recalc() {
        cardWidth = inner.clientWidth;
        step = cardWidth + 16;
        Array.from(track.children).forEach((c) => {
          c.style.width = `${cardWidth}px`;
        });
      }

      recalc();

      function animateTo(idx) {
        const clamped = Math.max(0, Math.min(items.length - 1, idx));
        indexRef.current = clamped;
        const target = -(clamped * step);
        gsap.to(proxy, {
          x: target,
          duration: 0.5,
          ease: "power3.out",
          onUpdate: () => gsap.set(track, { x: proxy.x }),
        });
      }

      slideRef.current = animateTo;

      const drag = Draggable.create(track, {
        type: "x",
        bounds: { minX: -((items.length - 1) * step), maxX: 0 },
        edgeResistance: 0.65,
        onDrag() {
          proxy.x = this.x;
        },
        onRelease() {
          const idx = Math.round(-this.x / step);
          animateTo(idx);
        },
      })[0];

      const handleResize = () => {
        recalc();
        drag.applyBounds({ minX: -((items.length - 1) * step), maxX: 0 });
        animateTo(indexRef.current);
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        drag?.kill();
      };
    });

    return () => mm.revert();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className="overflow-hidden" dir="ltr">
      <div className="relative">
        <button
          onClick={() => slideRef.current?.(indexRef.current - 1)}
          aria-label="التالي"
          className="absolute end-2 md:-end-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-brand-outline/30 flex items-center justify-center text-brand-muted hover:text-brand-pulse hover:border-brand-pulse/30 transition-all hover:scale-110"
        >
          <Icon name="arrow_back" className="!text-lg md:!text-xl" />
        </button>
        <button
          onClick={() => slideRef.current?.(indexRef.current + 1)}
          aria-label="السابق"
          className="absolute start-2 md:-start-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-brand-outline/30 flex items-center justify-center text-brand-muted hover:text-brand-pulse hover:border-brand-pulse/30 transition-all hover:scale-110"
        >
          <Icon name="arrow_forward" className="!text-lg md:!text-xl" />
        </button>
        <div ref={innerRef} className="px-4 md:px-10">
          <div
            ref={trackRef}
            className="flex gap-4 cursor-grab active:cursor-grabbing select-none pb-4"
          >
            {items.map((t) => (
              <div key={t.id} className="shrink-0">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
