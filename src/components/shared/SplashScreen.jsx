import { useState, useEffect, useRef } from "react";
import { BRAND_SPLASH } from "../../data/images";

export function SplashScreen() {
  const [dismissed, setDismissed] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const dismissedRef = useRef(false);

  useEffect(() => {
    if (sessionStorage.getItem("sadd_splash_seen") === "true") {
      dismissedRef.current = true;
      setDismissed(true);
      return;
    }
    const duration = 2500;
    const start = performance.now();
    let raf;
    function step(t) {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setReady(true);
      }
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  function handleDismiss() {
    if (dismissedRef.current) return;
    dismissedRef.current = true;
    setExiting(true);
    setTimeout(() => {
      setDismissed(true);
      try { sessionStorage.setItem("sadd_splash_seen", "true"); } catch {}
    }, 700);
  }

  if (dismissed) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        backgroundColor: "#FFFAFD",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
        opacity: exiting ? 0 : 1,
        transform: exiting ? "scale(0.95)" : "scale(1)",
      }}
    >
      <img
        src={BRAND_SPLASH}
        alt="صاد ميديا"
        className="max-h-[60vh] w-auto object-contain px-8 select-none pointer-events-none"
        draggable={false}
      />
      <div className="mt-12 flex flex-col items-center gap-4">
        <div className="w-48 h-1 rounded-full bg-brand-outline/40 overflow-hidden">
          <div
            className="h-full rounded-full transition-none"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(135deg, #db003e 0%, #f94c10 50%, #ffe31a 100%)",
            }}
          />
        </div>
        <button
          onClick={handleDismiss}
          className={`text-xl font-bold tracking-wide cursor-pointer select-none
                      bg-gradient-to-r from-[#db003e] via-[#f94c10] to-[#ffe31a] bg-clip-text text-transparent
                      transition-all duration-700 ease-out
                      ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}
                      hover:scale-110 active:scale-95`}
        >
          اضغط للدخول
        </button>
      </div>
    </div>
  );
}
