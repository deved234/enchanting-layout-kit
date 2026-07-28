import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

export function PricingCard({
  name,
  price,
  features,
  desc,
  cta,
  href,
  custom = false,
  accent = "pulse",
  delay = 0,
  badge,
  duration,
}) {
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
          rotationX: -y * 4,
          rotationY: x * 4,
          transformPerspective: 1000,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const handleLeave = () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.4,
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

  const isPulse = accent === "pulse";
  const accentBg = isPulse ? "bg-brand-pulse/10" : "bg-brand-motion/10";
  const accentDot = isPulse ? "bg-brand-pulse" : "bg-brand-motion";

  let priceClass = "text-[28px] font-black tracking-tight";
  if (isPulse) priceClass += " text-brand-pulse";
  else priceClass += " text-brand-motion";
  if (custom) priceClass = "text-2xl text-brand-muted font-bold";

  const btnBase =
    "w-full py-3.5 rounded-xl font-bold transition-all hover:-translate-y-0.5 active:scale-95 text-center text-sm";
  let btnClass = `${btnBase} border-2`;
  if (isPulse)
    btnClass += " border-brand-pulse text-brand-pulse hover:bg-brand-pulse hover:text-white";
  else btnClass += " border-brand-motion text-brand-motion hover:bg-brand-motion hover:text-white";
  if (custom)
    btnClass = `${btnBase} border-2 border-brand-ink/30 text-brand-muted hover:bg-brand-ink hover:text-white hover:border-brand-ink`;

  const containerClass = custom
    ? "border-2 border-dashed border-brand-outline/30 rounded-2xl p-6 flex flex-col transition-all hover:-translate-y-2 hover:shadow-xl hover:border-brand-ink/30 h-full bg-white/40"
    : "bg-white rounded-2xl p-6 flex flex-col transition-all hover:-translate-y-2 hover:shadow-xl h-full border border-brand-outline/10 shadow-sm";

  return (
    <Reveal delay={delay}>
      <div ref={cardRef} className={containerClass} style={{ transformStyle: "preserve-3d" }}>
        {badge && (
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-1 bg-gradient-to-r from-brand-pulse to-brand-pulse/80 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg shadow-brand-pulse/20">
              <Icon name="local_fire_department" filled className="!text-xs" />
              {badge}
            </span>
          </div>
        )}

        {duration && !badge && (
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-1.5 bg-brand-outline/10 text-brand-muted px-2.5 py-0.5 rounded-full text-xs font-semibold">
              <span className={`w-1 h-1 rounded-full ${accentDot}`} />
              {duration}
            </span>
          </div>
        )}

        <h4 className="font-bold text-base text-center leading-tight">{name}</h4>

        <div className="mt-2 mb-4 text-center border-b border-brand-outline/10 pb-4">
          <div className={priceClass}>{price}</div>
        </div>

        {desc ? (
          <p className="mb-6 text-brand-muted grow text-sm leading-relaxed">{desc}</p>
        ) : (
          <ul className="space-y-2 mb-6 grow">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-xs text-brand-muted leading-relaxed"
              >
                <span
                  className={`w-4 h-4 rounded-full ${accentBg} flex items-center justify-center shrink-0 mt-0.5`}
                >
                  <Icon
                    name="done"
                    className={`!text-xs ${isPulse ? "text-brand-pulse" : "text-brand-motion"}`}
                  />
                </span>
                {f}
              </li>
            ))}
          </ul>
        )}

        <MagneticButton
          as="a"
          href={href}
          target={href?.startsWith("http") ? "_blank" : undefined}
          rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
          className={btnClass}
        >
          {cta}
        </MagneticButton>
      </div>
    </Reveal>
  );
}
