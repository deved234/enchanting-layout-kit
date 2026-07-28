import { useRef, useEffect, useState } from "react";
import { gsap, useGSAP, ScrollTrigger } from "../../lib/gsap";
import { Reveal } from "../shared/Reveal";
import { Icon } from "../shared/Icon";
import { Counter } from "../shared/Counter";
import { MagneticButton } from "../shared/MagneticButton";
import { TextReveal } from "../shared/TextReveal";
import { HERO_STATS } from "../../data/content";

export function HeroSection() {
  const orbsRef = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useGSAP(() => {
    const orbs = orbsRef.current?.children;
    if (!orbs) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to(orbs[0], {
        y: -80,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      gsap.to(orbs[1], {
        y: -120,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });
      gsap.to(orbs[2], {
        y: -60,
        x: -40,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
    return () => mm.revert();
  }, []);

  useGSAP(() => {
    const el = headingRef.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        el.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.3,
        },
      );
    });
    return () => mm.revert();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-10 md:py-16 sm-hero-gradient"
    >
      <div className="container mx-auto px-5 md:px-8 relative z-10 text-center">
        <Reveal className="inline-flex items-center gap-2 px-4 py-2 sm-glass rounded-full text-brand-pulse mb-8 border border-brand-pulse/10">
          <Icon name="auto_awesome" className="!text-base" filled />
          <span className="text-sm font-semibold tracking-wider">نصنع مستقبلك الرقمي اليوم</span>
        </Reveal>
        <Reveal delay={120}>
          <h1
            ref={headingRef}
            className="text-[40px] md:text-[64px] font-bold leading-tight max-w-4xl mx-auto mb-8 tracking-tight"
          >
            <TextReveal text="نحول خيالك إلى" delay={120} />{" "}
            <span className="sm-animated-gradient inline-block">واقع ملموس</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto mb-12 opacity-90 leading-relaxed">
            في صاد ميديا نصنع لك الصوت والصورة ، ندمج بين الفن والتقنية لنقدم لك محتوى مرئي يخطف
            الأنظار، من الموشن جرافيك الاحترافي إلى فيديوهات الـ UGC التي تلامس القلوب.
          </p>
        </Reveal>
        <Reveal delay={360} className="flex flex-col md:flex-row items-center justify-center gap-4">
          <MagneticButton
            className="sm-shine w-full md:w-auto px-10 py-5 sm-primary-gradient text-white font-bold rounded-xl text-xl shadow-xl hover:shadow-brand-pulse/30 transition-all flex items-center justify-center gap-2"
            href="#motion"
          >
            <span>موشن جرافيك</span>
            <Icon name="arrow_back" />
          </MagneticButton>
          <MagneticButton
            className="sm-shine w-full md:w-auto px-10 py-5 sm-glass text-brand-ink font-bold rounded-xl text-xl hover:bg-white transition-all flex items-center justify-center gap-2 border border-brand-outline"
            href="#ugc"
          >
            <span>فيديوهات UGC</span>
            <Icon name="videocam" />
          </MagneticButton>
        </Reveal>

        <Reveal
          delay={520}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20"
        >
          {HERO_STATS.map((st) => (
            <div
              key={st.l}
              className="sm-glass border border-brand-pulse/10 rounded-2xl p-5 text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-brand-pulse">
                <Counter to={st.n} suffix={st.s} />
              </div>
              <div className="text-sm text-brand-muted mt-1">{st.l}</div>
            </div>
          ))}
        </Reveal>
      </div>
      <div
        className={`absolute bottom-8 start-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ease-out z-10
                      ${scrolled ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
      >
        <span className="text-sm text-brand-muted tracking-wider">ادر للأسفل</span>
        <span className="w-5 h-8 rounded-full border-2 border-brand-outline/60 flex items-start justify-center p-1">
          <span className="w-1.5 h-1.5 rounded-full sm-primary-gradient sm-scroll-dot" />
        </span>
      </div>
      <div ref={orbsRef} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 start-10 w-40 h-40 bg-brand-pulse/20 blur-3xl rounded-full transition-transform duration-700 ease-out" />
        <div className="absolute bottom-1/4 end-10 w-56 h-56 bg-brand-motion/20 blur-3xl rounded-full transition-transform duration-700 ease-out" />
        <div className="absolute top-1/2 end-1/3 w-24 h-24 bg-brand-flash/20 blur-3xl rounded-full transition-transform duration-700 ease-out" />
      </div>
    </section>
  );
}
