import { useEffect, useState } from "react";
import { Icon } from "./Icon";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="العودة للأعلى"
      className={`fixed bottom-6 end-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 ease-out
                  sm-primary-gradient text-white
                  ${show ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-90 pointer-events-none"}`}
    >
      <Icon name="arrow_upward" filled className="!text-2xl" />
    </button>
  );
}
