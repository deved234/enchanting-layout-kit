import { useRef, useState, useEffect } from "react";

export function TextReveal({ text, className = "", delay = 0, as: Tag = "span" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={`inline-flex flex-wrap gap-[0.3em] ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
        >
          <span
            className="inline-block"
            style={{
              transition: "opacity 0.8s cubic-bezier(.22,1,.36,1), transform 0.8s cubic-bezier(.22,1,.36,1)",
              transitionDelay: visible ? `${delay + i * 80}ms` : "0ms",
              opacity: visible ? 1 : mounted ? 0 : 1,
              transform: visible ? "translateY(0)" : mounted ? "translateY(24px)" : "translateY(0)",
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
