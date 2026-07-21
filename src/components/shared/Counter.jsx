import { useRef, useState, useEffect } from "react";

export function Counter({ to, suffix = "", duration = 1800 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(() => to);
  const started = useRef(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    setVal(0);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val.toLocaleString("ar-EG")}{suffix}</span>;
}