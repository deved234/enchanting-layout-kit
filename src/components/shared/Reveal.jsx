import { useRef, useState, useEffect } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const variants = { scale: "sm-reveal-scale", up: "sm-reveal", clip: "sm-reveal-clip" };
  const base = variants[variant] || variants.up;
  return (
    <div
      ref={ref}
      className={`${mounted ? `${base} ${visible ? "is-visible" : ""}` : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}