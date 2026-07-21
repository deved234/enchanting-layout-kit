import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "صاد ميديا | وكالة إبداعية متخصصة في الموشن جرافيك و UGC" },
      {
        name: "description",
        content:
          "صاد ميديا: موشن جرافيك احترافي وفيديوهات UGC تسويقية تحوّل خيالك إلى واقع ملموس.",
      },
      { property: "og:title", content: "صاد ميديا | وكالة إبداعية" },
      {
        property: "og:description",
        content: "موشن جرافيك احترافي وفيديوهات UGC للعلامات التجارية الطموحة.",
      },
    ],
  }),
  component: Index,
});

const LOGO_MARK =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAD_ImX735x3HfhouIlrWcf7KadEkzk7FJpC8yCaFc59VgjzUU5NX7MIUaIQ6spRp4zs76DgcQ9LptTuWKt890sHYnUd-sq8AdY_lCAM2lBKZTl_VSeENVMsX4PyuifpUl6gToHl5KD6g2IcUyhuFzB3HE63CFWCU8-9ccMk_BFNQZYfz2F_9Hj_Dgou-6TCG1QvxeTMBNdvq0yeWPczuP8LlncZ2S5alHMoUMhtNK80IgRuaN6ZmkvT4qvcPTCEapTTvQvaYtRqAc";
const LOGO_WORD =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBvN5QEKS3ReecPi1v7CVefcNZWSUYkVCfD4ywRwXH1CkwVf9Yws4qWGMNftn8Zu4UP5KYKyGEW9An9055YRzqOVJbqG4QS-3Sp1mjJf6Jp000nxxPeuqz8DRw-SDhU9bmQt-YCgqZQmR-E5O0dr4GGIP2FyD13MpLEsSlBGc9Yyx21wrB4oOqnUiiLhOGICvt_qHE029N_5IPHNhwB_70bfz3EWR3aouZxhulbCziqiCM1hzCCNYr8_-HZ64kirSi0CzS75AmybVw";
const ABOUT_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAXvodhX6aHWDNON9EyhzjWYmewZgzGbGvvtym8SSKuqRscs2-V8QjN4Ug2Sq6LJxE69TOxJfXJgC0MIQjHXN4gpd2JSqB9PicF48VQ8vqiibqF1dNhD8tU1TlX4W3r8MWMh3RKxjnaI_oefidrcd_qNvOzOSTak_BsKovlbXeTAVlgQHQqkf9O66MExI3uD0VKF3FejsQmVlcUYjavBgp81n8TCy09ikyaoi-v9UQbNEagHVUpIxV-c-sqzrmHcBDy1ystEJpwMlA";
const MOTION_CARD =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBeLrSmpX6m_YkG2rfvyI-tmtiHhZH6gXDfm9h6zPrnH1kSuVvzCkXPkZGZ1fYkcv-jysc0RLF8WtKMX8ZHokqS27pBRDTpp-3T_sOvBaOi5iUzvFhyHRfmCl4Be_fEprNtAxgtFesUtXm7xKKCmk2m9JccgWzUu0Qd7ZAUBZUYipc1oXDqXyagkAl78cIGU_de_xhIBKy4rde7BOUcAn_joO3cXV8K3l0XVlVsgV8b9ku-CFu_fu8dZ4iBkba-mzmfDf-XgkTuB_4";
const UGC_CARD =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC9YtRWxxv72ibHUvV0ZxnAe-rwdOH5-UDzJDN95OowUybB-I5TpPE-cqv5x8o2f63uOkUepElQ9yDx0T9QCpKcDa1bQIQimbZYl7fYVjBQLEZp8bqO_-hAtlIJTZbtYMN23eVT8wdOQ7bv2BwMOX8p6siEUsEUTcafI3VVTL5fYSVlH1ecYe2685gEf3Tbs9IUgYKLsHRnrPzVfkZAVLPgaIrZMu-Kr23MrGgMgDROZHqnosNscCCnopyTLHbyXb-Ems6MffdGKoM";
const CTA_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAvTl6AREH1eaXB_vE5Rw6ZgpmIpVr38DPuL1b6f_1aL5OdUaYqFfSYIDap6YMb1pdpeLJFHE4IrMe04SRnFPFazOKLpaMSztZ5GlehlHg9qn9I-w4QXWvgK_LXWhX4HPPvWelH2ukZ0EjwCN6yiu3JLDG8m24xqe__zw2yMYnE9BDIvMPGO7zqrgxSEosN2CCD91pWDCmnFOd87i4VAxHirR4bXsGrcMwMcj34z5397qg-OF5t_wgBVh290NMnfpc6EPY0IhOv5PM";

const PORTFOLIO = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAJR3P3sbChGf5uqBPdsrgy6DXnffUUVH3TBkjADm3uAeLLO5MrZJwTKlA2tNBUnin8_ZWtl0ZYnNzElq5HxF1p_Jc-I8xcH8c42ipDTh0dydRxSGORoOiIHBcWtF47H4BvcPQ2V_gxM-PX2TFnR_bieyZK9wmwNdiVk3rAaQH9Lm8duG5oDOrvt2ooKN3W2DpsGKrmMqiKje5x8_AFx5BIcO_xCPknYdP-VPxQqks5tQbxDI-Qfz8qc3TpuXqcBHVoybTgw8SV6oo",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDGFJRTHyjqtYm2RECzzPJno1i7hu6P7e9z2pQHnBD3gZiPG6Ef_3y4pBkv_zGU200J-OLGer6NnsEhvwVtwW8ZWMB56fTwyN8UB221Xk-5I11zLOfzLpho-tMZdMXVTO6y2x6uoSS9t5Ksv6SRnfEb7C0ckPA9ak7HiJ4h10IHQk1Avtbeujf_R4RzFxcf1pnhT_70CDKjgw4qoOvtFkidoIYLJ71yKocy72iIIfZWCeTjmKyN21Z1hR-n38NXcuPvJ_2gs8hXXfM",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB9B1jzV6inl4ef3CIchGIcBGGITYFW9qjlnjZEiikhbjaHErChpr9HA98d99xaASg8AdngpBFm1kbjyV5IbsdBXzUNWNrSomilaxnHHFXOOcDPWoBgpY83DtkcQ87OYE6tHlWYPYDvRpvnNSZwFfV0CdCWHMIHdWpRPWez7tH43v3JvMjysxX4ORr69Rx7v6KAnSFj7CqbtIF-ThLGolcD6RQDt9E0oHYiFyybGmD8I_ANzRd1xBbsMcr7kWceG12ZgMoWdNl87qk",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCGKMQ8zOS-xQuF0ctdUZetfpGCeKi-PCj4hSY-s9xHeQhc5c247FUj0yun4k3E4hm_v2U21pgoaSn9c5LeYw_3qygsTDZ0fgt0S2IlAKoPHwnMIjTBCWqEyo6JNvGa0H8tlS7eAmymNNqABwdtkv9q0nqjJUUPTT8YjHpETG4vd07HXs06AUlgnMsOoNHQ_wKjIfrt0PmJ3fUewCbcXaxuZaqxjK2mgTvWfW8Sep4qfiv_33DZdTC0_Yon3WwqLvE9gBGyH9NMNE8",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCmuzzWmc1mAfbKFJn71Dsa6USA72fd7YRNfSqbmupt71HHbvv5YyjSvLh_9wehNqVnumGqaJ16O7VfNIVqzJXd44xsdD_H8qEO7PEW5VdkUjanShytJbuEDa2-8YSV82gY9AHjj15yTY3ug-L9pvWsbAOxhDehEDE7RIpP0sac4GQ9njCWBwoqZHZtJ1_scqkqxvOIE3-assRTCSpQ7W1knUTm9oET7VGR5jminzmZMswajMLWfdmZNUbAeXlHeyLixBVFD1-zG24",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBmST-QP78Fmcla-jCvBZkcWPsoKhARYCbUHwcBH9H6r4G2rpIOUmt285xYSdv_dK8_SU4W31AxuUexPpwu8hSzBUzvUU0P44eFIyF0YUkiD0EBpFcaW1xfXut_Mgih8BL-NpojPc5W2vFymoakI3b-_vyuZfoEmHjwYBBDZcp3GzWH6tDW3pL3auerZeCW1R-vuMbKvGR-cJX34MV6dHeLSibai65nid1QWqBTHQrzI3F77n0Ff9LyGiuP7JE4y9pNEbgulTDcm-I",
];

const UGC_IMGS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuABCWoLH8jcO2wYJLi0_UmRsG9C6SKzBQIQyb-y-jgPGQ0TpTK4QAJJu8aonUzN4yICVqHZldQdX9z9-gceOrotI9AEVQJiI4traM3u-fHnXzGeGlX4ZHTKrYAy86TAC8mS86ZnMpJ2b7QjaBUNrSZcqalUUT1UFp_VH-WCqoyXr-4t9b7l8whfx7ITn6dkVzJVeD-X9Afu91UCtyo5OpYFcgt6a_l2C9hynMUyRhmWv8NDCJhru-beCREWJsqbLq_cfSJlBPWtVRQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAIoyW-jogNEb7odZeWbv9B3uDIr1gnSn7HDZ-4e6qgaiN5V3WsQ3QZqJc4iAv61Wz626JR_5PUdjCW4RW8a01HwTJoGg4KZdvJX-d6mrhHmmtjwgRblqTO4_Qngxd-DFEWP2_eZdn3lYLCphapCOE3Ik9A78NLxkaWkUvzJ3dh43_EDPL7kDrURudmEdYAC-rgp_j3KCARN_4FrJa29DQetTVjbHqZvMqVD340cRl-yfdSvbkBYUwTKEJjsZ1da6Fu6mUE1KGDF4c",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAGikMJKF8Q-7eN6qgFQfdaHGt_SJnMXH4ChtUsqqprhv0KTOIyFoGI8TfWea-KSbMGCZZBnGscOGbO_Bxif5HXgBkLKwsxZ7AqNwqLMYw3kruKi-Ji_spie9_6VW97L_6ktK1w4i_Lo7bAKjl7hRxtzLCY8Ct0R3fUkO68eNkGx20n5k-nxpuJb1vZQdWjZybt6IeKf3GSEgmS6a_acw2T1scosKzSbQwqCXvjQwZf6J_60LwDAsYzb5YCVlVB6R3V1nK48At5eiQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAuOPlmwee08gsl4d7WjREh4S1ya0SKN2RTL8TaeaX23uPAo42q0GkPooJKC99MzVQXDYKIXJgdrPZIniTVxpZvQGHtOtpfbpsse-hfiALwP81jx2Z2LbFTFAg8XclOnxav0duqh3KCdMwOE2SiCARwfKSbKEL1rIU95iO40ZNy6aDGQLCXaYYMkK1neMe3TGXDRf_u5i5pG9Tw-SeL6EmVwpqmO6WH0TFr9kujnYH_tG8mh_fqqgN3PIdMuKIhumAg82qxL8wE5d8",
];

function Icon({ name, className = "", filled = false }: { name: string; className?: string; filled?: boolean }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
    >
      {name}
    </span>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "scale";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const base = variant === "scale" ? "sm-reveal-scale" : "sm-reveal";
  return (
    <div
      ref={ref}
      className={`${base} ${visible ? "is-visible" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Counter({ to, suffix = "", duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val.toLocaleString("ar-EG")}{suffix}</span>;
}

const BRANDS = ["إيجاز", "نضارة", "زاد", "بلوم", "قطاف", "مرام", "أوج", "رحال", "نوّر", "شغف"];

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="sm-glass rounded-xl overflow-hidden border border-brand-pulse/10 group">
      <summary className="p-8 flex items-center justify-between font-bold text-lg cursor-pointer list-none">
        <span>{q}</span>
        <Icon name="expand_more" className="transition-transform group-open:rotate-180" />
      </summary>
      <div className="px-8 pb-8 pt-2 border-t border-brand-outline/40 text-brand-muted leading-relaxed">
        {a}
      </div>
    </details>
  );
}

function Index() {
  return (
    <div className="bg-brand-bg text-brand-ink overflow-x-hidden min-h-screen">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 h-20 flex justify-between items-center px-5 md:px-8 max-w-[1280px] mx-auto bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-sm">
        <div className="flex items-center gap-3">
          <img alt="صاد ميديا" className="h-10 md:h-12 w-auto object-contain" src={LOGO_MARK} />
          <img alt="صاد ميديا" className="h-6 md:h-7 w-auto object-contain hidden sm:block" src={LOGO_WORD} />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-brand-pulse font-bold border-b-2 border-brand-pulse pb-1" href="#">الرئيسية</a>
          <a className="text-brand-muted hover:text-brand-pulse transition-colors" href="#services">خدماتنا</a>
          <a className="text-brand-muted hover:text-brand-pulse transition-colors" href="#why-us">لماذا نحن</a>
          <a className="text-brand-muted hover:text-brand-pulse transition-colors" href="#faq">الأسئلة الشائعة</a>
        </nav>
        <div className="flex items-center gap-4">
          <a className="hidden md:inline-block px-6 py-3 sm-primary-gradient text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform" href="#cta">
            ابدأ مشروعك
          </a>
          <button className="md:hidden text-brand-pulse" aria-label="القائمة">
            <Icon name="menu" className="!text-4xl" />
          </button>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 md:py-40 sm-hero-gradient">
          <div className="container mx-auto px-5 md:px-8 relative z-10 text-center">
            <Reveal className="inline-flex items-center gap-2 px-4 py-2 sm-glass rounded-full text-brand-pulse mb-8 border border-brand-pulse/10">
              <Icon name="auto_awesome" className="!text-base" filled />
              <span className="text-sm font-semibold tracking-wider">نصنع مستقبلك الرقمي اليوم</span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="text-[40px] md:text-[64px] font-bold leading-tight max-w-4xl mx-auto mb-8 tracking-tight">
                نحول خيالك إلى <span className="sm-animated-gradient inline-block">واقع ملموس</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="text-lg text-brand-muted max-w-2xl mx-auto mb-12 opacity-90 leading-relaxed">
                في صاد ميديا، ندمج بين الفن والتقنية لنقدم لك محتوى مرئي يخطف الأنظار، من الموشن جرافيك الاحترافي إلى فيديوهات الـ UGC التي تلامس القلوب.
              </p>
            </Reveal>
            <Reveal delay={360} className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a className="sm-shine w-full md:w-auto px-10 py-5 sm-primary-gradient text-white font-bold rounded-xl text-xl shadow-xl hover:shadow-brand-pulse/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2" href="#motion">
                <span>موشن جرافيك</span>
                <Icon name="arrow_back" />
              </a>
              <a className="sm-shine w-full md:w-auto px-10 py-5 sm-glass text-brand-ink font-bold rounded-xl text-xl hover:bg-white hover:-translate-y-1 transition-all flex items-center justify-center gap-2 border border-brand-outline" href="#ugc">
                <span>فيديوهات UGC</span>
                <Icon name="videocam" />
              </a>
            </Reveal>

            {/* Stats */}
            <Reveal delay={520} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20">
              {[
                { n: 250, s: "+", l: "مشروع منجز" },
                { n: 98, s: "%", l: "رضا العملاء" },
                { n: 48, s: "س", l: "تسليم سريع" },
                { n: 60, s: "+", l: "علامة تجارية" },
              ].map((st) => (
                <div key={st.l} className="sm-glass border border-brand-pulse/10 rounded-2xl p-5 text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-brand-pulse">
                    <Counter to={st.n} suffix={st.s} />
                  </div>
                  <div className="text-sm text-brand-muted mt-1">{st.l}</div>
                </div>
              ))}
            </Reveal>
          </div>
          <div className="absolute top-1/4 left-10 w-40 h-40 bg-brand-pulse/20 blur-3xl rounded-full sm-float" />
          <div className="absolute bottom-1/4 right-10 w-56 h-56 bg-brand-motion/20 blur-3xl rounded-full sm-float-slow" />
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-brand-flash/20 blur-3xl rounded-full sm-float" />
        </section>

        {/* Brands marquee */}
        <section className="py-10 border-y border-brand-outline/40 bg-white overflow-hidden">
          <div className="container mx-auto px-5 md:px-8 mb-6 text-center">
            <span className="text-sm text-brand-muted tracking-widest uppercase">علامات تجارية تثق بنا</span>
          </div>
          <div className="sm-marquee-track gap-16 items-center text-2xl md:text-3xl font-bold text-brand-muted/70">
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <span key={i} className="flex items-center gap-16 whitespace-nowrap">
                <span className="hover:text-brand-pulse transition-colors">{b}</span>
                <span className="w-2 h-2 rounded-full bg-brand-pulse/30" />
              </span>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="py-20 md:py-40 container mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal className="relative" variant="scale">
              <div className="aspect-square rounded-2xl overflow-hidden sm-soft-shadow bg-brand-surface-2 border-4 border-white">
                <img alt="استوديو صاد ميديا الإبداعي" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src={ABOUT_IMG} />
              </div>
              <div className="absolute -bottom-10 -left-10 sm-glass p-8 rounded-2xl hidden md:block max-w-xs sm-soft-shadow border border-brand-pulse/10 sm-float">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#ffdada] rounded-full flex items-center justify-center text-brand-pulse">
                    <Icon name="speed" />
                  </div>
                  <h4 className="text-xl font-bold">تسليم سريع</h4>
                </div>
                <p className="text-brand-muted">نقدر وقتك، لذا نلتزم بجداول زمنية صارمة لضمان وصول مشروعك للسوق في الوقت المناسب.</p>
              </div>
            </Reveal>
            <Reveal className="md:pr-12" delay={150}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">خبرة إبداعية تتجاوز الحدود</h2>
              <p className="text-lg text-brand-muted leading-relaxed">
                نحن لسنا مجرد وكالة إنتاج، نحن شركاء نجاحك في{" "}
                <span className="text-brand-pulse font-bold">صاد ميديا</span>. نمتلك فريقاً من المبدعين المتخصصين الذين يفهمون سيكولوجية المشاهد العربي، مما يجعلنا الخيار الأول للعلامات التجارية الطموحة. نركز على الدقة والابتكار والسرعة، لنمنحك تجربة تعاون لا تُنسى.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Services selector */}
        <section className="py-20 md:py-40 bg-brand-surface" id="services">
          <Reveal className="container mx-auto px-5 md:px-8 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا الرئيسية</h2>
            <p className="text-brand-muted max-w-xl mx-auto">اختر المسار الذي يناسب أهدافك التسويقية</p>
          </Reveal>
          <div className="container mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8">
            {[
              { href: "#motion", img: MOTION_CARD, title: "الموشن جرافيك", desc: "قصص بصرية متحركة تشرح علامتك التجارية بأسلوب عصري." },
              { href: "#ugc", img: UGC_CARD, title: "فيديوهات UGC", desc: "محتوى واقعي من مستخدمين حقيقيين يبني الثقة مع جمهورك." },
            ].map((s, i) => (
              <Reveal key={s.href} delay={i * 150} variant="scale">
              <a href={s.href} className="sm-tilt group relative overflow-hidden rounded-2xl bg-white sm-soft-shadow h-[400px] flex flex-col justify-end p-8 block">
                <div className="absolute inset-0 z-0">
                  <img alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={s.img} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="relative z-10 text-white">
                  <h3 className="text-3xl font-bold mb-2">{s.title}</h3>
                  <p className="opacity-80 mb-4">{s.desc}</p>
                  <div className="inline-flex items-center gap-2 text-brand-flash group-hover:-translate-x-2 transition-transform">
                    <span>استكشف المشاريع</span>
                    <Icon name="arrow_back" />
                  </div>
                </div>
              </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Motion portfolio + pricing */}
        <section className="py-20 md:py-40 bg-white" id="motion">
          <div className="container mx-auto px-5 md:px-8">
            <div className="flex flex-col md:flex-row-reverse justify-between items-end mb-16 gap-6 text-right">
              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center gap-2 bg-brand-pulse/10 text-brand-pulse px-4 py-2 rounded-full text-sm font-semibold">
                  <Icon name="check_circle" filled className="!text-base" />
                  تعديلات مفتوحة
                </div>
                <div className="flex items-center gap-2 bg-brand-motion/10 text-brand-motion px-4 py-2 rounded-full text-sm font-semibold">
                  <Icon name="check_circle" filled className="!text-base" />
                  جودة 4K
                </div>
              </div>
              <div>
                <span className="text-brand-pulse font-bold block mb-2">معرض الأعمال</span>
                <h2 className="text-3xl md:text-4xl font-bold">موشن جرافيك احترافي</h2>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-24">
              {PORTFOLIO.map((src, i) => (
                <Reveal key={i} delay={i * 80} variant="scale">
                  <div className="aspect-video rounded-xl overflow-hidden sm-glass group cursor-pointer border border-brand-pulse/10 sm-tilt relative">
                    <img alt={`مشروع ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={src} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Icon name="play_circle" filled className="text-white !text-6xl drop-shadow-lg" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <h3 className="text-center text-2xl md:text-3xl font-bold mb-12">باقات الموشن جرافيك</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "الباقة الأساسية", price: "٩٩٠ ر.س", features: ["فيديو ٣٠ ثانية", "تعليق صوتي احترافي", "تعديل واحد"], cta: "اطلب الآن", featured: false },
                { name: "الباقة الاحترافية", price: "١٨٠٠ ر.س", features: ["فيديو ٦٠ ثانية", "تعليق صوتي مميز", "تعديلات غير محدودة"], cta: "اطلب الآن", featured: true },
                { name: "باقة الأعمال", price: "٣٢٠٠ ر.س", features: ["فيديوهين (٦٠ ثانية)", "كتابة سكريبت إبداعي", "تسليم سريع (٤٨ ساعة)"], cta: "اطلب الآن", featured: false },
                { name: "باقة مخصصة", price: "حسب الطلب", features: ["مشاريع طويلة", "حملات إعلانية متكاملة", "دعم فني مباشر ٢٤/٧"], cta: "تواصل معنا", featured: false, custom: true },
              ].map((p, i) => (
                <Reveal key={p.name} delay={i * 120}>
                <div className={`sm-glass p-8 rounded-2xl flex flex-col transition-all relative hover:-translate-y-2 hover:shadow-2xl h-full ${p.featured ? "border-2 border-brand-pulse md:scale-105 shadow-xl bg-white" : "border border-brand-outline hover:border-brand-pulse/40"}`}>
                  {p.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-pulse text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">الأكثر طلباً</div>
                  )}
                  <h4 className="font-bold text-xl mb-2">{p.name}</h4>
                  <div className={`text-3xl font-bold mb-6 ${p.custom ? "text-brand-muted !text-xl" : "text-brand-pulse"}`}>{p.price}</div>
                  <ul className="space-y-4 mb-8 grow">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <Icon name="done" className="text-brand-pulse !text-base" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`sm-shine w-full py-3 rounded-xl font-bold transition-all hover:-translate-y-0.5 ${p.featured ? "sm-primary-gradient text-white shadow-lg" : p.custom ? "border border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white" : "border border-brand-pulse text-brand-pulse hover:bg-brand-pulse hover:text-white"}`}>
                    {p.cta}
                  </button>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* UGC */}
        <section className="py-20 md:py-40 bg-brand-surface" id="ugc">
          <div className="container mx-auto px-5 md:px-8">
            <div className="flex flex-col md:flex-row-reverse justify-between items-end mb-16 gap-6">
              <div className="text-right">
                <span className="text-brand-motion font-bold block mb-2">محتوى حقيقي</span>
                <h2 className="text-3xl md:text-4xl font-bold">فيديوهات UGC تسويقية</h2>
              </div>
              <div className="flex items-center gap-2 bg-brand-motion/10 text-brand-motion px-4 py-2 rounded-full text-sm font-semibold">
                <Icon name="star" filled className="!text-base" />
                صناع محتوى محترفين
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
              {UGC_IMGS.map((src, i) => (
                <Reveal key={i} delay={i * 100} variant="scale">
                  <div className="aspect-[9/16] rounded-xl overflow-hidden relative group border border-brand-motion/20 sm-tilt">
                    <img alt={`UGC ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={src} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center pb-6 opacity-90">
                      <Icon name="play_circle" filled className="text-white !text-5xl drop-shadow-lg group-hover:scale-125 transition-transform" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "فيديو واحد", price: "٤٥٠ ر.س", desc: "فيديو واحد مراجعة أو تجربة منتج بجودة عالية.", cta: "اطلب الآن", featured: false },
                { name: "حزمة ٣ فيديوهات", price: "١٢٠٠ ر.س", desc: "مثالية لحملة إعلانية متنوعة على تيك توك وسناب شات.", cta: "اطلب الآن", featured: true },
                { name: "حزمة ٥ فيديوهات", price: "١٨٠٠ ر.س", desc: "تغطية شاملة لمنتجاتك مع زوايا تصوير مختلفة.", cta: "اطلب الآن", featured: false },
                { name: "الاشتراك الشهري", price: "تبدأ من ٣٥٠٠ ر.س", desc: "١٠ فيديوهات شهرياً لضمان استمرارية المحتوى.", cta: "تواصل معنا", featured: false, custom: true },
              ].map((p, i) => (
                <Reveal key={p.name} delay={i * 120}>
                <div className={`sm-glass p-8 rounded-2xl flex flex-col h-full transition-all hover:-translate-y-2 hover:shadow-2xl ${p.featured ? "border-2 border-brand-motion md:scale-105 shadow-xl bg-white" : "border border-brand-outline hover:border-brand-motion/40"}`}>
                  <h4 className="font-bold text-xl mb-2">{p.name}</h4>
                  <div className={`font-bold mb-6 ${p.custom ? "text-brand-muted text-xl" : "text-brand-motion text-3xl"}`}>{p.price}</div>
                  <p className="mb-8 text-brand-muted">{p.desc}</p>
                  <button className={`sm-shine mt-auto w-full py-3 rounded-xl font-bold transition-all hover:-translate-y-0.5 ${p.featured ? "bg-brand-motion text-white shadow-lg" : p.custom ? "border border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white" : "border border-brand-motion text-brand-motion hover:bg-brand-motion hover:text-white"}`}>
                    {p.cta}
                  </button>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-20 md:py-40 bg-white" id="why-us">
          <div className="container mx-auto px-5 md:px-8">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">لماذا يختارنا المحترفون؟</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "bolt", title: "سرعة قياسية", desc: "نظام عمل مرن يضمن تسليم المشاريع في وقت قياسي دون المساس بالجودة النهائية." },
                { icon: "verified", title: "جودة استثنائية", desc: "نستخدم أحدث برمجيات التصوير والمونتاج لضمان خروج عملك بأفضل حلة بصرية ممكنة." },
                { icon: "forum", title: "تواصل مباشر", desc: "مدير مشروع خاص بك يتواصل معك في كل خطوة لضمان تحقيق رؤيتك بالكامل." },
              ].map((c, i) => (
                <Reveal key={c.title} delay={i * 150}>
                <div className="p-8 rounded-2xl bg-brand-surface border border-brand-outline/40 hover:bg-brand-pulse/5 transition-all group h-full hover:-translate-y-2 hover:shadow-xl">
                  <div className="w-16 h-16 rounded-xl sm-primary-gradient text-white flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-transform">
                    <Icon name={c.icon} className="!text-3xl" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{c.title}</h4>
                  <p className="text-brand-muted leading-relaxed">{c.desc}</p>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-40 bg-brand-surface overflow-hidden">
          <div className="container mx-auto px-5 md:px-8 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">ماذا يقول عملاؤنا؟</h2>
          </div>
          <div className="flex gap-8 overflow-x-auto pb-8 px-5 md:px-8 snap-x snap-mandatory">
            {[
              { stars: 5, quote: "تجربة رائعة مع صاد ميديا، الموشن جرافيك اللي سويتوه لنا زاد نسبة التحويل في الموقع بشكل غير متوقع. شكراً لكم!", name: "أحمد الشمري", role: "رئيس تسويق - شركة إيجاز", initial: "A", tone: "pulse" },
              { stars: 4.5, quote: "فيديوهات الـ UGC كانت واقعية جداً وخلت عملائنا يثقون فينا أكثر. السرعة في التنفيذ كانت مذهلة.", name: "سارة العمري", role: "مؤسسة براند \"نضارة\"", initial: "S", tone: "motion" },
              { stars: 5, quote: "أفضل وكالة تعاملت معها في السعودية. احترافية عالية ودقة في المواعيد.", name: "خالد فيصل", role: "مدير عمليات - منصة زاد", initial: "K", tone: "flash" },
            ].map((t) => (
              <div key={t.name} className="min-w-[320px] md:min-w-[400px] snap-start sm-glass p-8 rounded-2xl sm-soft-shadow border border-brand-pulse/10 hover:-translate-y-2 transition-transform">
                <div className="flex text-brand-pulse mb-4">
                  {Array.from({ length: Math.floor(t.stars) }).map((_, i) => (
                    <Icon key={i} name="star" filled />
                  ))}
                  {t.stars % 1 !== 0 && <Icon name="star_half" filled />}
                </div>
                <p className="mb-6 italic leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${t.tone === "pulse" ? "bg-brand-pulse/10 text-brand-pulse" : t.tone === "motion" ? "bg-brand-motion/10 text-brand-motion" : "bg-brand-flash/20 text-brand-pulse"}`}>
                    {t.initial}
                  </div>
                  <div>
                    <h5 className="font-bold">{t.name}</h5>
                    <span className="text-xs text-brand-muted">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-40 container mx-auto px-5 md:px-8" id="faq">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">الأسئلة الشائعة</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <FaqItem q="كم تستغرق مدة تنفيذ فيديو الموشن جرافيك؟" a="يستغرق التنفيذ عادة ما بين ٥ إلى ١٠ أيام عمل حسب تعقيد المشروع ومدى سرعة الموافقة على السكريبت والتعليق الصوتي." />
            <FaqItem q="هل يمكنني طلب تعديلات بعد التسليم؟" a="نعم، نحن نقدم تعديلات في كافة الباقات لضمان رضاك التام عن النتيجة النهائية." />
            <FaqItem q="من هم صناع المحتوى في فيديوهات الـ UGC؟" a="نتعامل مع شبكة واسعة من صناع المحتوى الموهوبين بمختلف الأعمار والاهتمامات لنضمن اختيار الوجه الأنسب لعلامتك التجارية." />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-40 container mx-auto px-5 md:px-8" id="cta">
          <Reveal
            variant="scale"
            className="rounded-3xl p-12 md:p-24 text-center text-white relative overflow-hidden sm-soft-shadow border border-white/20 bg-cover bg-center"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${CTA_BG})` }} />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-pulse/80 to-brand-motion/80" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 drop-shadow-lg tracking-tight">ابدأ رحلتك الإبداعية معنا</h2>
              <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">دعنا نساعدك في بناء حضور مرئي قوي يجذب العملاء ويحقق مبيعات خيالية.</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a className="sm-shine bg-white text-brand-pulse px-12 py-5 rounded-xl font-bold text-2xl shadow-xl hover:scale-105 transition-transform" href="https://wa.me/">تواصل واتساب</a>
                <a className="sm-shine border-2 border-white/60 px-12 py-5 rounded-xl font-bold text-2xl hover:bg-white/10 transition-all backdrop-blur-sm" href="#motion">مشاهدة أعمالنا</a>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl sm-float" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-flash/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl sm-float-slow" />
          </Reveal>
        </section>
      </main>

      {/* Sticky WhatsApp */}
      <a
        href="https://wa.me/"
        aria-label="واتساب"
        className="fixed bottom-6 left-6 z-50 w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform sm-whats-pulse"
      >
        <Icon name="chat" filled className="!text-3xl" />
      </a>

      <footer className="w-full py-8 px-5 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-brand-surface-2 border-t border-brand-outline/40">
        <div className="flex items-center gap-3">
          <img alt="صاد ميديا" className="h-10 w-auto" src={LOGO_MARK} />
          <img alt="صاد ميديا" className="h-6 w-auto" src={LOGO_WORD} />
        </div>
        <div className="flex gap-8">
          <a className="text-brand-muted hover:underline opacity-80 hover:opacity-100" href="#">سياسة الخصوصية</a>
          <a className="text-brand-muted hover:underline opacity-80 hover:opacity-100" href="#">الشروط والأحكام</a>
          <a className="text-brand-muted hover:underline opacity-80 hover:opacity-100" href="#">تواصل معنا</a>
        </div>
        <div className="text-brand-muted opacity-80">© 2024 صاد ميديا. جميع الحقوق محفوظة.</div>
      </footer>
    </div>
  );
}
