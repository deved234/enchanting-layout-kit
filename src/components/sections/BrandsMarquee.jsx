import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";
import { Reveal } from "../shared/Reveal";
import { BRANDS } from "../../data/brands";

function BrandCard({ image, id }) {
  return (
    <div className="flex items-center gap-3 w-36 md:w-44 h-16 md:h-20 px-4 rounded-xl bg-white/60 border border-brand-outline/20 shrink-0">
      <span className="text-xs font-bold text-brand-muted/40 tabular-nums shrink-0">0{id}</span>
      <img src={image} alt="" className="max-w-full max-h-full object-contain flex-1 min-w-0" loading="lazy" />
    </div>
  );
}

export function BrandsMarquee() {
  const trackRef = useRef(null);
  const marqueeRef = useRef(null);
  const brands = BRANDS.map((b) => <BrandCard key={b.id} image={b.image} id={b.id} />);
  const firstClone = <BrandCard key="clone" image={BRANDS[0].image} id={BRANDS[0].id} />;

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      let tween = null;
      let el = marqueeRef.current;

      function startAnim() {
        if (tween) tween.kill();

        const totalWidth = track.scrollWidth - (track.lastElementChild?.scrollWidth || 0);
        if (totalWidth <= 0) return;

        const dur = Math.max(20, totalWidth / 50);

        tween = gsap.to(track, {
          x: -totalWidth,
          duration: dur,
          ease: "none",
          repeat: -1,
          onRepeat() {
            gsap.set(track, { x: 0 });
          },
        });

        if (el) {
          el.onmouseenter = () => tween.pause();
          el.onmouseleave = () => tween.play();
        }
      }

      startAnim();

      const ro = new ResizeObserver(() => startAnim());
      ro.observe(el || track);

      return () => {
        ro.disconnect();
        if (tween) tween.kill();
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
          <div className="flex gap-8 md:gap-12">{firstClone}</div>
        </div>
      </div>
    </section>
  );
}
