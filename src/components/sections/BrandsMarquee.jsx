import { Reveal } from "../shared/Reveal";
import { BRANDS } from "../../data/brands";

const DOT = "bg-brand-pulse";

function BrandPill({ name, dot }) {
  return (
    <div className="flex items-center gap-6 whitespace-nowrap">
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/70 border border-brand-outline/30 hover:border-brand-pulse/30 transition-all duration-300 hover:-translate-y-0.5">
        <span className={`w-2 h-2 rounded-full ${dot} shrink-0`} />
        <span className="text-base md:text-lg font-bold text-brand-muted/80 hover:text-brand-pulse transition-colors">{name}</span>
      </div>
      <span className="w-1 h-1 rounded-full bg-brand-outline/40 shrink-0" />
    </div>
  );
}

export function BrandsMarquee() {
  return (
    <section className="py-16 border-y border-brand-outline/40 bg-white overflow-hidden">
      <Reveal className="container mx-auto px-5 md:px-8 mb-10 text-center">
        <span className="text-sm text-brand-muted tracking-[0.2em] font-semibold">علامات تجارية تثق بنا</span>
      </Reveal>
      <div className="sm-marquee-fade">
        <div aria-hidden="true" className="sm-marquee-track flex items-center w-max">
          <div className="flex items-center gap-6 flex-shrink-0">
            {BRANDS.map((b) => <BrandPill key={b} name={b} dot={DOT} />)}
          </div>
          <div className="flex items-center gap-6 flex-shrink-0">
            {BRANDS.map((b) => <BrandPill key={b} name={b} dot={DOT} />)}
          </div>
        </div>
      </div>
    </section>
  );
}