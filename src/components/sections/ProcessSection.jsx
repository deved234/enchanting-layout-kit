import { Reveal } from "../shared/Reveal";

const STEPS = [
  {
    num: "01",
    title: "طلب واستشارة",
    desc: "تتواصل معنا عبر واتساب أو تطلب الباقة المناسبة مباشرة. نحدد معاً احتياجك ورؤيتك للمشروع.",
  },
  {
    num: "02",
    title: "سيناريو وإبداع",
    desc: "فريقنا يكتب سيناريو احترافي وينتج التعليق الصوتي المناسب لعلامتك التجارية.",
  },
  {
    num: "03",
    title: "إنتاج وتنفيذ",
    desc: "نبدأ مرحلة الإنتاج والتصوير أو التحريك بأعلى جودة ممكنة.",
  },
  {
    num: "04",
    title: "تسليم ومراجعة",
    desc: "نسلمك الفيديو خلال 3-5 أيام مع إمكانية التعديلات لضمان رضاك التام.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 md:py-40 bg-brand-surface" id="process">
      <div className="container mx-auto px-5 md:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">كيف نعمل</h2>
          <p className="text-brand-muted max-w-xl mx-auto">
            أربع خطوات بسيطة تفصلك عن محتوى احترافي يرفع علامتك التجارية
          </p>
        </Reveal>
        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 120}>
              <div className="relative text-center p-6 rounded-2xl bg-white border border-brand-outline/20 hover:-translate-y-2 hover:shadow-xl transition-all h-full">
                <div className="w-14 h-14 rounded-2xl sm-primary-gradient text-white flex items-center justify-center mx-auto mb-5 text-xl font-black">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
