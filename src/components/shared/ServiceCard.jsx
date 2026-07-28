import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";

export function ServiceCard({ service, image, delay = 0 }) {
  const cardRef = useRef(null);

  useGSAP(() => {
    const card = cardRef.current;
    if (!card) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const handleMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, {
          rotationX: -y * 8,
          rotationY: x * 8,
          transformPerspective: 1000,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      const handleLeave = () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);

      return () => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <Reveal delay={delay} variant="scale">
      <a
        ref={cardRef}
        href={service.href}
        className="sm-tilt group relative overflow-hidden rounded-2xl bg-white sm-soft-shadow h-[300px] md:h-[400px] flex flex-col justify-end p-8 block"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 z-0">
          <img
            loading="lazy"
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            src={image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 text-white" style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
          <p className="opacity-80 mb-4">{service.description}</p>
          <div className="inline-flex items-center gap-2 text-brand-flash group-hover:-translate-x-2 transition-transform">
            <span>استكشف المشاريع</span>
            <Icon name="arrow_back" />
          </div>
        </div>
      </a>
    </Reveal>
  );
}
