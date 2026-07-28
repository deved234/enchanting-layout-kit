import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";
import { Reveal } from "../shared/Reveal";
import { BRANDS } from "../../data/brands";

function BrandCard({ image, id }) {
  return (
    <div className="w-28 md:w-36 h-16 md:h-20 flex items-center justify-center px-4 rounded-xl bg-white/60 border border-brand-outline/20 shrink-0">
      <img src={image} alt="" className="max-w-full max-h-full object-contain" loading="lazy" />
    </div>
  );
}

export function BrandsMarquee() {
  const trackRef = useRef(null);
  const marqueeRef = useRef(null);

  const brands = BRANDS.map((b) => <BrandCard key={b.id} image={b.image} id={b.id} />);

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const dur = 30;
      const tween = gsap.to(track, {
        xPercent: -50,
        repeat: -1,
        duration: dur,
        ease: "none",
      });

      const el = marqueeRef.current;
      if (el) {
        el.addEventListener("mouseenter", () => tween.pause());
        el.addEventListener("mouseleave", () => tween.play());
      }

      return () => {
        tween.kill();
        if (el) {
          el.removeEventListener("mouseenter", () => tween.pause());
          el.removeEventListener("mouseleave", () => tween.play());
        }
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={marqueeRef}
      className="py-16 border-y border-brand-outline/40 bg-white overflow-hidden"
    >
      <Reveal className="container mx-auto px-5 md:px-8 mb-10 text-center">
        <span className="text-sm text-brand-muted tracking-[0.2em] font-semibold">
          علامات تجارية تثق بنا
        </span>
      </Reveal>
      <div className="sm-marquee-fade">
        <div
          ref={trackRef}
          className="sm-marquee-track-gsap"
          style={{ display: "flex", width: "max-content" }}
        >
          <div className="flex gap-8 md:gap-12">{brands}</div>
          <div className="flex gap-8 md:gap-12">{brands}</div>
        </div>
      </div>
    </section>
  );
}
