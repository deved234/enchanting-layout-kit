import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[100] h-[3px] pointer-events-none">
      <div
        className="h-full transition-[width] duration-200 ease-out"
        style={{
          width: `${progress * 100}%`,
          background: "linear-gradient(135deg, #db003e 0%, #f94c10 50%, #ffe31a 100%)",
        }}
      />
    </div>
  );
}
