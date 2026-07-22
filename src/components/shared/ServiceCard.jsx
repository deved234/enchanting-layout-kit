import { Reveal } from "./Reveal";
import { Icon } from "./Icon";

export function ServiceCard({ service, image, delay = 0 }) {
  return (
    <Reveal delay={delay} variant="scale">
      <a
        href={service.href}
        className="sm-tilt group relative overflow-hidden rounded-2xl bg-white sm-soft-shadow h-[400px] flex flex-col justify-end p-8 block"
      >
        <div className="absolute inset-0 z-0">
          <img
            loading="lazy"
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            src={image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 text-white">
          <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
          <p className="opacity-80 mb-4">{service.description}</p>
          <div className="inline-flex items-center gap-2 text-brand-flash group-hover:-translate-x-2 transition-transform">
            <span>استكشف المشاريع</span>
            <Icon name="arrow_back" />
          </div>
        </div>
      </a>
    </Reveal>
  );
}
