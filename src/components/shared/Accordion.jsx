import { Icon } from "./Icon";

export function Accordion({ items }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.id}
          className="sm-glass rounded-xl overflow-hidden border border-brand-pulse/10 group"
        >
          <summary className="p-8 flex items-center justify-between font-bold text-lg cursor-pointer list-none">
            <span>{item.q}</span>
            <Icon name="expand_more" className="transition-transform group-open:rotate-180" />
          </summary>
          <div className="px-8 pb-8 pt-2 border-t border-brand-outline/40 text-brand-muted leading-relaxed">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
