import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let _lenis = null;

export function getLenis() {
  return _lenis;
}

export function useSmoothScroll() {
  useEffect(() => {
    if (window.location.pathname !== "/") return;
    if (!ScrollTrigger || !ScrollTrigger.scrollerProxy) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });
    _lenis = lenis;

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.lagSmoothing(0);
    gsap.ticker.add((time) => lenis.raf(time * 1000));

    return () => {
      _lenis = null;
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
