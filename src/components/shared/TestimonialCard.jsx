import { Icon } from "./Icon";

const toneStyles = {
  pulse: "from-brand-pulse/20 to-brand-pulse/5 text-brand-pulse border-brand-pulse/20",
  motion: "from-brand-motion/20 to-brand-motion/5 text-brand-motion border-brand-motion/20",
  flash: "from-brand-flash/20 to-brand-flash/5 text-brand-flash border-brand-flash/20",
};

const avatarGradients = {
  pulse: "from-brand-pulse to-brand-motion",
  motion: "from-brand-motion to-brand-flash",
  flash: "from-brand-flash to-brand-pulse",
};

export function TestimonialCard({ testimonial }) {
  const tone = testimonial.tone || "pulse";
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={`relative sm-glass p-8 md:p-10 rounded-2xl sm-soft-shadow border overflow-hidden hover:-translate-y-1.5 transition-all duration-300 h-full ${toneStyles[tone]}`}
      style={{ borderLeftWidth: "3px" }}
    >
      <div className="absolute -top-6 -right-6 text-7xl opacity-[0.06] pointer-events-none select-none leading-none font-serif">
        "
      </div>
      <div className="flex text-brand-pulse mb-5 gap-0.5">
        {Array.from({ length: Math.floor(testimonial.stars) }).map((_, i) => (
          <Icon key={i} name="star" filled />
        ))}
        {testimonial.stars % 1 !== 0 && <Icon name="star_half" filled />}
      </div>
      <p className="mb-7 leading-relaxed text-base md:text-lg text-brand-ink/90">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm text-white bg-gradient-to-br shrink-0 ${avatarGradients[tone]}`}
        >
          {testimonial.initial}
        </div>
        <div className="min-w-0">
          <h5 className="font-bold text-brand-ink truncate">{testimonial.name}</h5>
          <span className="text-xs text-brand-muted/80 truncate block">{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
}
