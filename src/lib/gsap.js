import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  SplitText,
  Flip,
  Draggable,
  InertiaPlugin,
  ScrollToPlugin,
);

gsap.defaults({
  ease: "power3.out",
  duration: 0.8,
});

export { gsap, useGSAP, ScrollTrigger, SplitText, Flip, Draggable, InertiaPlugin, ScrollToPlugin };
