import { useState, useEffect, useRef } from "react";
import { BRAND_SPLASH } from "../../data/images";

export function SplashScreen() {
  const [state, setState] = useState("loading");
  const dismissedRef = useRef(false);

  useEffect(() => {
    setState("ready");
  }, []);

  function handleDismiss() {
    if (dismissedRef.current) return;
    dismissedRef.current = true;
    setState("exiting");
    setTimeout(() => {
      setState("hidden");
    }, 700);
  }

  if (state === "hidden") return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        backgroundColor: "#FFFAFD",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
        opacity: state === "exiting" ? 0 : 1,
        transform: state === "exiting" ? "scale(0.95)" : "scale(1)",
      }}
    >
      <img
        src={BRAND_SPLASH}
        alt="صاد ميديا"
        className="max-h-[60vh] w-auto object-contain px-8 select-none pointer-events-none"
        draggable={false}
      />
      <div className="mt-12 flex flex-col items-center gap-4">
        <button
          onClick={handleDismiss}
          className={`text-xl font-bold tracking-wide cursor-pointer select-none
                      bg-gradient-to-r from-[#db003e] via-[#f94c10] to-[#ffe31a] bg-clip-text text-transparent
                      transition-all duration-700 ease-out
                      ${state === "ready" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}
                      hover:scale-110 active:scale-95`}
        >
          اضغط للدخول
        </button>
      </div>
    </div>
  );
}
