import { Reveal } from "../shared/Reveal";
import { BRANDS } from "../../data/brands";

function BrandCard({ src }) {
  return (
    <div className="h-14 md:h-20 px-6 md:px-10 rounded-xl bg-white/60 border border-brand-outline/20 flex items-center justify-center">
      <img src={src} alt="" className="max-w-full max-h-full object-contain" loading="lazy" />
    </div>
  );
}

export function BrandsMarquee() {
  return (
    <section className="py-16 border-y border-brand-outline/40 bg-white">
      <Reveal className="container mx-auto px-5 md:px-8 mb-10 text-center">
        <span className="text-sm text-brand-muted tracking-[0.2em] font-semibold">
          علامات تجارية تثق بنا
        </span>
      </Reveal>
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 place-items-center">
          {BRANDS.map((b) => (
            <BrandCard key={b.id} src={b.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
