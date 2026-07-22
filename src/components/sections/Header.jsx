import { useState, useEffect, useRef } from "react";
import { Icon } from "../shared/Icon";
import { MagneticButton } from "../shared/MagneticButton";
import { LOGO_MARK, LOGO_WORD } from "../../data/images";
import { COMPANY } from "../../config/company";
import { getLenis } from "../../hooks/useSmoothScroll";

const NAV_LINKS = [
  { href: "#", label: "الرئيسية" },
  { href: "#services", label: "خدماتنا" },
  { href: "#why-us", label: "لماذا نحن" },
  { href: "#faq", label: "الأسئلة الشائعة" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#");
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  // Scroll-aware navbar: transparent on top, glass on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["services", "why-us", "faq"];
    const els = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).map((e) => `#${e.target.id}`);
        if (visible.length > 0) setActiveSection(visible[0]);
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" },
    );
    els.forEach((el) => io.observe(el));
    const onScroll = () => {
      if (
        window.scrollY < 100 &&
        els.every(
          (el) =>
            el.getBoundingClientRect().top >= window.innerHeight ||
            el.getBoundingClientRect().bottom <= 80,
        )
      ) {
        setActiveSection("#");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Mobile menu open animation
  const openMenu = () => {
    setMenuOpen(true);
    clearTimeout(closeTimeoutRef.current);
    requestAnimationFrame(() => requestAnimationFrame(() => setMenuVisible(true)));
  };

  const closeMenu = () => {
    setMenuVisible(false);
    closeTimeoutRef.current = setTimeout(() => setMenuOpen(false), 300);
  };

  // Body scroll lock
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  // Focus trap inside mobile drawer
  useEffect(() => {
    if (!menuOpen || !menuVisible) return;
    const prev = document.activeElement;
    menuRef.current?.focus();
    const handleKey = (e) => {
      if (e.key === "Escape") closeMenu();
      if (e.key === "Tab") {
        const focusable = menuRef.current?.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      prev?.focus();
    };
  }, [menuOpen, menuVisible]);

  // Smooth scroll via Lenis
  const scrollTo = (href) => {
    if (href === "#") {
      const lenis = getLenis();
      if (lenis) lenis.scrollTo(0);
      else window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const lenis = getLenis();
    const target = document.querySelector(href);
    if (target && lenis) lenis.scrollTo(target);
    else if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollTo(href);
    if (menuOpen) closeMenu();
  };

  const isActive = (href) => activeSection === href;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 h-20 flex justify-between items-center px-5 md:px-8 max-w-[1280px] mx-auto transition-all duration-500 ${
          scrolled
            ? "bg-white/70 backdrop-blur-md shadow-sm border-b border-brand-outline/30"
            : "bg-transparent"
        }`}
      >
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img alt="صاد ميديا" className="h-10 md:h-12 w-auto object-contain" src={LOGO_MARK} />
          <img
            alt="صاد ميديا"
            className="h-6 md:h-7 w-auto object-contain hidden sm:block"
            src={LOGO_WORD}
          />
        </a>
        <nav className="hidden md:flex items-center gap-1" aria-label="القائمة الرئيسية">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive(link.href)
                  ? "text-brand-pulse bg-brand-pulse/8"
                  : "text-brand-muted hover:text-brand-pulse hover:bg-brand-pulse/5"
              }`}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <MagneticButton
            className="hidden md:inline-flex px-6 py-3 sm-primary-gradient text-white font-bold rounded-xl shadow-lg transition-transform"
            href="#cta"
            onClick={(e) => handleNavClick(e, "#cta")}
          >
            ابدأ مشروعك
          </MagneticButton>
          <button
            ref={triggerRef}
            className="md:hidden text-brand-pulse size-11 flex items-center justify-center rounded-xl hover:bg-brand-pulse/10 transition-colors"
            aria-label="فتح القائمة"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={openMenu}
          >
            <Icon name="menu" className="!text-3xl" />
          </button>
        </div>
      </header>
      {menuOpen && (
        <div
          className={`fixed inset-0 z-[60] transition-opacity duration-300 ${menuVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          role="dialog"
          aria-modal="true"
          aria-label="القائمة الجانبية"
          onClick={closeMenu}
        >
          <div
            className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${menuVisible ? "opacity-100" : "opacity-0"}`}
          />
          <aside
            ref={menuRef}
            tabIndex={-1}
            id="mobile-menu"
            className={`absolute top-0 bottom-0 start-0 w-72 max-w-[85vw] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${menuVisible ? "translate-x-0" : "translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 h-20 border-b border-brand-surface-2">
              <img alt="صاد ميديا" className="h-10 w-auto object-contain" src={LOGO_MARK} />
              <button
                aria-label="إغلاق القائمة"
                onClick={closeMenu}
                className="size-11 flex items-center justify-center rounded-xl hover:bg-brand-surface transition-colors"
              >
                <Icon name="close" className="!text-3xl text-brand-ink" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col gap-1 p-5" aria-label="روابط القائمة">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center gap-3 text-base font-medium transition-all duration-200 px-4 py-3 rounded-xl ${
                    isActive(link.href)
                      ? "text-brand-pulse bg-brand-pulse/10 border-r-4 border-brand-pulse"
                      : "text-brand-muted hover:text-brand-pulse hover:bg-brand-surface"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="p-5 border-t border-brand-surface-2">
              <a
                href="#cta"
                onClick={(e) => handleNavClick(e, "#cta")}
                className="block w-full text-center px-6 py-3 sm-primary-gradient text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                ابدأ مشروعك
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
