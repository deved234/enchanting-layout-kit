import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "../../lib/gsap";

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  stagger = 0,
}) {
  const ref = useRef(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger ? el.children : el;

    const vars = {};
    if (variant === "scale") {
      vars.scale = 0.92;
      vars.opacity = 0;
    } else if (variant === "clip") {
      vars.scaleY = 0;
      vars.opacity = 0;
      vars.transformOrigin = "top center";
    } else {
      vars.y = 40;
      vars.opacity = 0;
    }

    const fromVars = { ...vars };
    if (stagger) fromVars.stagger = stagger;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        targets,
        fromVars,
        {
          ...(stagger ? {} : vars),
          y: 0,
          scale: 1,
          scaleY: 1,
          opacity: 1,
          delay: delay / 1000,
          duration: variant === "clip" ? 0.9 : 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(targets, { opacity: 1, y: 0, scale: 1, scaleY: 1 });
    });

    return () => mm.revert();
  }, [delay, variant, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
