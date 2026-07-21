import { Icon } from "../shared/Icon";
import { FAQ_ITEMS } from "../../data/content";

function FaqItem({ q, a }) {
  return (
    <details className="sm-glass rounded-xl overflow-hidden border border-brand-pulse/10 group">
      <summary className="p-8 flex items-center justify-between font-bold text-lg cursor-pointer list-none">
        <span>{q}</span>
        <Icon name="expand_more" className="transition-transform group-open:rotate-180" />
      </summary>
      <div className="px-8 pb-8 pt-2 border-t border-brand-outline/40 text-brand-muted leading-relaxed">
        {a}
      </div>
    </details>
  );
}

export function FaqSection() {
  return (
    <section className="py-20 md:py-40 container mx-auto px-5 md:px-8" id="faq">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">الأسئلة الشائعة</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {FAQ_ITEMS.map((item) => (
          <FaqItem key={item.q} q={item.q} a={item.a} />
        ))}
      </div>
    </section>
  );
}