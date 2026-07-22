import { useRef } from "react";

export function MagneticButton({ children, className = "", as = "a", ...props }) {
  const ref = useRef(null);

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.setProperty("transform", `translate(${x * 0.25}px, ${y * 0.25}px)`);
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("transform", "translate(0, 0)");
  }

  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.4s cubic-bezier(.22,1,.36,1)" }}
      {...props}
    >
      {children}
    </Tag>
  );
}
