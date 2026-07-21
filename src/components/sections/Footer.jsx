import { LOGO_MARK, LOGO_WORD } from "../../data/images";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-8 px-5 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-brand-surface-2 border-t border-brand-outline/40">
      <div className="flex items-center gap-3">
        <img alt="صاد ميديا" className="h-10 w-auto" src={LOGO_MARK} />
        <img alt="صاد ميديا" className="h-6 w-auto" src={LOGO_WORD} />
      </div>
      <nav className="flex gap-8" aria-label="روابط إضافية">
        <a className="text-brand-muted hover:underline opacity-80 hover:opacity-100 px-2 py-1" href="#cta">سياسة الخصوصية</a>
        <a className="text-brand-muted hover:underline opacity-80 hover:opacity-100 px-2 py-1" href="#cta">الشروط والأحكام</a>
        <a className="text-brand-muted hover:underline opacity-80 hover:opacity-100 px-2 py-1" href="https://wa.me/97470624227" target="_blank" rel="noopener noreferrer">تواصل معنا</a>
      </nav>
      <div className="text-brand-muted opacity-80">© {year} صاد ميديا. جميع الحقوق محفوظة.</div>
    </footer>
  );
}