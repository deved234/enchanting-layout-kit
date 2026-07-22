import { FAQ_ITEMS } from "../../data/faq";
import { Accordion } from "../shared/Accordion";

export function FaqSection() {
  return (
    <section className="py-20 md:py-40 container mx-auto px-5 md:px-8" id="faq">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">الأسئلة الشائعة</h2>
      <div className="max-w-3xl mx-auto">
        <Accordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
