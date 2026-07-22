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
  featured = false,
  custom = false,
  accent = "pulse",
  delay = 0,
}) {
  const isPulse = accent === "pulse";

  let cardBorder = "border border-brand-outline hover:border-brand-pulse/40";
  if (isPulse && featured)
    cardBorder = "border-2 border-brand-pulse md:scale-105 shadow-xl bg-white";
  else if (!isPulse && featured)
    cardBorder = "border-2 border-brand-motion md:scale-105 shadow-xl bg-white";

  let badgeBg = "bg-brand-pulse text-white";
  if (!isPulse) badgeBg = "bg-brand-motion text-white";

  let priceClass = "text-brand-pulse text-3xl";
  if (!isPulse) priceClass = "text-brand-motion text-3xl";
  if (custom) priceClass = "text-brand-muted text-xl";

  let iconClass = "text-brand-pulse !text-base";
  if (!isPulse) iconClass = "text-brand-motion !text-base";

  let btnClass = "border border-brand-pulse text-brand-pulse hover:bg-brand-pulse hover:text-white";
  if (isPulse && featured) btnClass = "sm-primary-gradient text-white shadow-lg";
  else if (!isPulse && featured) btnClass = "bg-brand-motion text-white shadow-lg";
  else if (custom)
    btnClass = "border border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white";

  let hoverBorder = "hover:border-brand-pulse/40";
  if (!isPulse) hoverBorder = "hover:border-brand-motion/40";

  const nonFeaturedCard = `border border-brand-outline ${hoverBorder}`;

  return (
    <Reveal delay={delay}>
      <div
        className={`sm-glass p-8 rounded-2xl flex flex-col transition-all relative hover:-translate-y-2 hover:shadow-2xl h-full ${featured ? cardBorder : nonFeaturedCard}`}
      >
        {featured && (
          <div
            className={`absolute -top-4 left-1/2 -translate-x-1/2 ${badgeBg} px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider`}
          >
            الأكثر طلباً
          </div>
        )}
        <h4 className="font-bold text-xl mb-2">{name}</h4>
        <div className={`font-bold mb-6 ${priceClass}`}>{price}</div>
        {desc ? (
          <p className="mb-8 text-brand-muted grow">{desc}</p>
        ) : (
          <ul className="space-y-4 mb-8 grow">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <Icon name="done" className={iconClass} />
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
          className={`sm-shine w-full py-3 rounded-xl font-bold transition-all hover:-translate-y-0.5 text-center ${btnClass}`}
        >
          {cta}
        </MagneticButton>
      </div>
    </Reveal>
  );
}
