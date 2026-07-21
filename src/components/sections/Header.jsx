import { useState, useEffect, useRef } from "react";
import { Icon } from "../shared/Icon";
import { LOGO_MARK, LOGO_WORD } from "../../data/images";

const NAV_LINKS = [
  { href: "#", label: "الرئيسية" },
  { href: "#services", label: "خدماتنا" },
  { href: "#why-us", label: "لماذا نحن" },
  { href: "#faq", label: "الأسئلة الشائعة" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.activeElement;
    menuRef.current?.focus();
    const handleKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
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
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 h-20 flex justify-between items-center px-5 md:px-8 max-w-[1280px] mx-auto bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-sm">
        <div className="flex items-center gap-3">
          <img alt="صاد ميديا" className="h-10 md:h-12 w-auto object-contain" src={LOGO_MARK} />
          <img alt="صاد ميديا" className="h-6 md:h-7 w-auto object-contain hidden sm:block" src={LOGO_WORD} />
        </div>
        <nav className="hidden md:flex items-center gap-8" aria-label="القائمة الرئيسية">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.href}
              aria-current={link.href === "#" ? "page" : undefined}
              className={link.href === "#" ? "text-brand-pulse font-bold border-b-2 border-brand-pulse pb-1" : "text-brand-muted hover:text-brand-pulse transition-colors"}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a className="hidden md:inline-block px-6 py-3 sm-primary-gradient text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform" href="#cta">
            ابدأ مشروعك
          </a>
          <button ref={triggerRef} className="md:hidden text-brand-pulse" aria-label="فتح القائمة" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}>
            <Icon name="menu" className="!text-4xl" />
          </button>
        </div>
      </header>
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60]"
          role="dialog"
          aria-modal="true"
          aria-label="القائمة الجانبية"
          onClick={() => setMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <aside
            ref={menuRef}
            tabIndex={-1}
            className="absolute top-0 bottom-0 start-0 w-72 max-w-[85vw] bg-white shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 h-20 border-b border-brand-surface-2">
              <img alt="صاد ميديا" className="h-10 w-auto object-contain" src={LOGO_MARK} />
              <button aria-label="إغلاق القائمة" onClick={() => setMenuOpen(false)}>
                <Icon name="close" className="!text-3xl text-brand-ink" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col gap-1 p-5" aria-label="روابط القائمة">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium text-brand-muted hover:text-brand-pulse transition-colors px-4 py-3 rounded-xl hover:bg-brand-surface"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="p-5 border-t border-brand-surface-2">
              <a
                href="#cta"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-6 py-3 sm-primary-gradient text-white font-bold rounded-xl shadow-lg"
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