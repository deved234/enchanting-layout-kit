import { useEffect, useRef, useState } from "react";

const INTERACTIVE = "a, button, input, select, textarea, [tabindex]:not([tabindex='-1'])";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dotRef.current?.style.setProperty("transform", `translate(${e.clientX}px, ${e.clientY}px)`);
    };

    const onHover = (e) => {
      if (e.target.closest(INTERACTIVE)) setVisible(true);
    };

    const onLeave = (e) => {
      if (!e.relatedTarget || !e.relatedTarget.closest(INTERACTIVE)) setVisible(false);
    };

    function raf() {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12;
      ringRef.current?.style.setProperty(
        "transform",
        `translate(${pos.current.x - 16}px, ${pos.current.y - 16}px)`,
      );
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onHover);
    document.addEventListener("mouseout", onLeave);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onHover);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 start-0 w-2 h-2 rounded-full pointer-events-none z-[9999] transition-opacity duration-300"
        style={{
          background: "linear-gradient(135deg, #db003e, #f94c10)",
          transform: "translate(0, 0)",
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 start-0 w-8 h-8 rounded-full pointer-events-none z-[9999] transition-opacity duration-300"
        style={{
          border: "2px solid #db003e",
          transform: "translate(0, 0)",
          opacity: visible ? 0.5 : 0,
        }}
      />
    </>
  );
}
