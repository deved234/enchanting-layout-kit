import { Reveal } from "../shared/Reveal";
import { Icon } from "../shared/Icon";
import { ABOUT_IMG } from "../../data/images";

export function AboutSection() {
  return (
    <section className="py-20 md:py-40 container mx-auto px-5 md:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Reveal className="relative" variant="scale">
          <div className="aspect-square rounded-2xl overflow-hidden sm-soft-shadow bg-brand-surface-2 border-4 border-white">
            <img
              loading="lazy"
              alt="استوديو صاد ميديا الإبداعي"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src={ABOUT_IMG}
            />
          </div>
          <div className="absolute -bottom-10 -start-10 sm-glass p-8 rounded-2xl md:block max-w-xs sm-soft-shadow border border-brand-pulse/10 sm-float">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-brand-pulse/20 rounded-full flex items-center justify-center text-brand-pulse">
                <Icon name="speed" />
              </div>
              <h4 className="text-xl font-bold">تسليم سريع</h4>
            </div>
            <p className="text-brand-muted">
              نقدر وقتك، لذا نلتزم بجداول زمنية صارمة لضمان وصول مشروعك للسوق في الوقت المناسب.
            </p>
          </div>
        </Reveal>
        <Reveal className="md:pe-12" delay={150}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            خبرة إبداعية تتجاوز الحدود
          </h2>
          <p className="text-lg text-brand-muted leading-relaxed">
            نحن لسنا مجرد وكالة إنتاج، نحن شركاء نجاحك في{" "}
            <span className="text-brand-pulse font-bold">صاد ميديا</span>. نمتلك فريقاً من المبدعين
            المتخصصين الذين يفهمون سيكولوجية المشاهد العربي، مما يجعلنا الخيار الأول للعلامات
            التجارية الطموحة. نركز على الدقة والابتكار والسرعة، لنمنحك تجربة تعاون لا تُنسى.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
