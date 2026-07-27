import { useEffect } from "react";
import Lenis from "lenis";

let _lenis = null;

export function getLenis() {
  return _lenis;
}

export function useSmoothScroll() {
  useEffect(() => {
    if (window.location.pathname !== "/") return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });
    _lenis = lenis;

    function raf(t) {
      lenis.raf(t);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      _lenis = null;
      lenis.destroy();
    };
  }, []);
}
