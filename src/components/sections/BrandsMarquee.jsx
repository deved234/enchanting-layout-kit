import { BRANDS } from "../../data/brands";

export function BrandsMarquee() {
  return (
    <section className="py-10 border-y border-brand-outline/40 bg-white overflow-hidden">
      <div className="container mx-auto px-5 md:px-8 mb-6 text-center">
        <span className="text-sm text-brand-muted tracking-widest uppercase">علامات تجارية تثق بنا</span>
      </div>
      <div aria-hidden="true" className="sm-marquee-track gap-16 items-center text-2xl md:text-3xl font-bold text-brand-muted/70">
        {[...BRANDS, ...BRANDS].map((b, i) => (
          <span key={i} className="flex items-center gap-16 whitespace-nowrap">
            <span className="hover:text-brand-pulse transition-colors">{b}</span>
            <span className="w-2 h-2 rounded-full bg-brand-pulse/30" />
          </span>
        ))}
      </div>
    </section>
  );
}