import { Reveal } from "../shared/Reveal";
import { MagneticButton } from "../shared/MagneticButton";
import { CTA_BG } from "../../data/images";
import { COMPANY } from "../../config/company";

export function CtaSection() {
  return (
    <section className="py-20 md:py-40 container mx-auto px-5 md:px-8" id="cta">
      <Reveal
        variant="scale"
        className="rounded-3xl p-12 md:p-24 text-center text-white relative overflow-hidden sm-soft-shadow border border-white/20 bg-cover bg-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CTA_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-pulse/80 to-brand-motion/80" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 drop-shadow-lg tracking-tight">
            ابدأ رحلتك الإبداعية معنا
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            دعنا نساعدك في بناء حضور مرئي قوي يجذب العملاء ويحقق مبيعات خيالية.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <MagneticButton
              className="sm-shine bg-white text-brand-pulse px-12 py-5 rounded-xl font-bold text-2xl shadow-xl transition-transform"
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              تواصل واتساب
            </MagneticButton>
            <MagneticButton
              className="sm-shine border-2 border-white/60 px-12 py-5 rounded-xl font-bold text-2xl backdrop-blur-sm transition-all"
              href="#motion"
            >
              مشاهدة أعمالنا
            </MagneticButton>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl sm-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-flash/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl sm-float-slow" />
      </Reveal>
    </section>
  );
}
