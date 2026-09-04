import { useRef, useEffect, useState } from "react";
import { gsap, useGSAP, ScrollTrigger } from "../../lib/gsap";
import { Reveal } from "../shared/Reveal";
import { Icon } from "../shared/Icon";
import { Counter } from "../shared/Counter";
import { MagneticButton } from "../shared/MagneticButton";
import { TextReveal } from "../shared/TextReveal";
import { HERO_STATS } from "../../data/content";

const HERO_VIDEO =
  "https://res.cloudinary.com/lonhworm/video/upload/v1788554147/%D8%B5%D8%A7%D8%AF_%D9%85%D9%8A%D8%AF%D9%8A%D8%A7.mp4";
const HERO_POSTER =
  "https://res.cloudinary.com/lonhworm/video/upload/so_0/v1788554147/%D8%B5%D8%A7%D8%AF_%D9%85%D9%8A%D8%AF%D9%8A%D8%A7.jpg";

export function HeroSection() {
  const orbsRef = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
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
        <Reveal delay={300} className="max-w-4xl mx-auto mb-12">
          <p className="text-xl md:text-2xl font-bold mb-6">تعرف علينا أكثر</p>
          <div className="relative rounded-2xl overflow-hidden sm-soft-shadow border-4 border-white bg-black aspect-video group">
            {videoPlaying ? (
              <video
                className="w-full h-full"
                src={HERO_VIDEO}
                poster={HERO_POSTER}
                controls
                autoPlay
                playsInline
                preload="metadata"
              />
            ) : (
              <button
                onClick={() => setVideoPlaying(true)}
                aria-label="تشغيل الفيديو"
                className="absolute inset-0 w-full h-full cursor-pointer"
              >
                <img
                  loading="lazy"
                  alt="فيديو صاد ميديا التعريفي"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={HERO_POSTER}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 flex items-center justify-center transition-opacity group-hover:bg-black/40">
                  <span className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:bg-brand-pulse/80 transition-all duration-300">
                    <Icon name="play_arrow" filled className="text-white !text-5xl ms-1" />
                  </span>
                </span>
              </button>
            )}
          </div>
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
    </section>
  );
}
