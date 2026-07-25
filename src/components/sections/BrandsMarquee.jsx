import { Reveal } from "../shared/Reveal";
import { BRANDS } from "../../data/brands";

export function BrandsMarquee() {
  return (
    <section className="py-16 border-y border-brand-outline/40 bg-white overflow-hidden">
      <Reveal className="container mx-auto px-5 md:px-8 mb-10 text-center">
        <span className="text-sm text-brand-muted tracking-[0.2em] font-semibold">
          علامات تجارية تثق بنا
        </span>
      </Reveal>
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex items-center justify-center gap-8 md:gap-12">
          {BRANDS.map((b) => (
            <div
              key={b.id}
              className="w-28 md:w-36 h-16 md:h-20 flex items-center justify-center px-4 rounded-xl bg-white/60 border border-brand-outline/20"
            >
              <img
                src={b.image}
                alt=""
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
