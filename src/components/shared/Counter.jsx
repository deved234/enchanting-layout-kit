import { useRef, useState } from "react";
import { gsap, useGSAP, ScrollTrigger } from "../../lib/gsap";

export function Counter({ to, suffix = "", duration = 1.8 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: to,
          duration,
          ease: "power3.out",
          onUpdate: () => setVal(Math.round(obj.val)),
        });
      },
    });

    return () => st.kill();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {val.toLocaleString("ar-EG")}
      {suffix}
    </span>
  );
}
