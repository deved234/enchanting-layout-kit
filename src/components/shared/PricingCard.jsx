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
  const isPulse = accent === "pulse";
  const accentBg = isPulse ? "bg-brand-pulse/10" : "bg-brand-motion/10";
  const accentDot = isPulse ? "bg-brand-pulse" : "bg-brand-motion";

  let priceClass = "text-3xl font-black tracking-tight";
  if (isPulse) priceClass += " text-brand-pulse";
  else priceClass += " text-brand-motion";
  if (custom) priceClass = "text-2xl text-brand-muted font-bold";

  const btnBase = "w-full py-3 rounded-xl font-bold transition-all hover:-translate-y-0.5 text-center";
  let btnClass = `${btnBase} border-2`;
  if (isPulse)
    btnClass += " border-brand-pulse text-brand-pulse hover:bg-brand-pulse hover:text-white";
  else
    btnClass += " border-brand-motion text-brand-motion hover:bg-brand-motion hover:text-white";
  if (custom)
    btnClass = `${btnBase} border-2 border-brand-ink/30 text-brand-muted hover:bg-brand-ink hover:text-white hover:border-brand-ink`;

  const containerClass = custom
    ? "border-2 border-dashed border-brand-outline/30 rounded-2xl p-8 flex flex-col transition-all hover:-translate-y-2 hover:shadow-xl hover:border-brand-ink/30 h-full bg-white/40"
    : "bg-white rounded-2xl p-8 flex flex-col transition-all hover:-translate-y-2 hover:shadow-2xl h-full border border-brand-outline/10 shadow-sm hover:shadow-brand-pulse/5";

  return (
    <Reveal delay={delay}>
      <div className={containerClass}>
        {badge && (
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-brand-pulse to-brand-pulse/80 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-brand-pulse/20">
              <Icon name="local_fire_department" filled className="!text-sm" />
              {badge}
            </span>
          </div>
        )}

        {duration && !badge && (
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-1.5 bg-brand-outline/10 text-brand-muted px-3 py-1 rounded-full text-xs font-semibold">
              <span className={`w-1.5 h-1.5 rounded-full ${accentDot}`} />
              {duration}
            </span>
          </div>
        )}

        <h4 className="font-bold text-lg text-center">{name}</h4>

        <div className="mt-3 mb-5 border-b border-brand-outline/10 pb-5">
          <div className={`text-center mb-5 ${priceClass}`}>{price}</div>
        </div>

        {desc ? (
          <p className="mb-8 text-brand-muted grow text-sm leading-relaxed">{desc}</p>
        ) : (
          <ul className="space-y-3 mb-8 grow">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-brand-muted">
                <span
                  className={`w-5 h-5 rounded-full ${accentBg} flex items-center justify-center shrink-0 mt-0.5`}
                >
                  <Icon name="done" className={`!text-xs ${isPulse ? "text-brand-pulse" : "text-brand-motion"}`} />
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
