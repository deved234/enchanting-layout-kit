import { Reveal } from "../shared/Reveal";
import { BRANDS } from "../../data/brands";

function BrandCard({ image, id }) {
  return (
    <div className="w-28 md:w-36 h-16 md:h-20 flex items-center justify-center px-4 rounded-xl bg-white/60 border border-brand-outline/20 shrink-0">
      <img
        src={image}
        alt=""
        className="max-w-full max-h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}

export function BrandsMarquee() {
  const brands = BRANDS.map((b) => (
    <BrandCard key={b.id} image={b.image} id={b.id} />
  ));

  return (
    <section className="py-16 border-y border-brand-outline/40 bg-white overflow-hidden">
      <Reveal className="container mx-auto px-5 md:px-8 mb-10 text-center">
        <span className="text-sm text-brand-muted tracking-[0.2em] font-semibold">
          علامات تجارية تثق بنا
        </span>
      </Reveal>
      <div className="sm-marquee-fade">
        <div className="sm-marquee-track">
          <div className="flex gap-8 md:gap-12">{brands}</div>
          <div className="flex gap-8 md:gap-12">{brands}</div>
        </div>
      </div>
    </section>
  );
}
