import { Icon } from "../shared/Icon";
import { LOGO_MARK, LOGO_WORD } from "../../data/images";
import { COMPANY } from "../../config/company";

const SOCIAL_LINKS = [
  { href: COMPANY.social.instagram, icon: "photo_camera", label: "انستغرام" },
  { href: COMPANY.social.tiktok, icon: "music_note", label: "تيك توك" },
  { href: COMPANY.social.linkedin, icon: "business", label: "لينكد إن" },
  { href: COMPANY.social.youtube, icon: "play_circle", label: "يوتيوب" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-12 px-5 md:px-8 bg-brand-surface-2 border-t border-brand-outline/40">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <img alt={COMPANY.name} className="h-10 w-auto" src={LOGO_MARK} />
          <img alt={COMPANY.name} className="h-6 w-auto" src={LOGO_WORD} />
        </div>
        <nav className="flex gap-6" aria-label="روابط إضافية">
          <a
            className="text-brand-muted hover:text-brand-pulse transition-colors px-2 py-1 text-sm"
            href="#cta"
          >
            سياسة الخصوصية
          </a>
          <a
            className="text-brand-muted hover:text-brand-pulse transition-colors px-2 py-1 text-sm"
            href="#cta"
          >
            الشروط والأحكام
          </a>
          <a
            className="text-brand-muted hover:text-brand-pulse transition-colors px-2 py-1 text-sm"
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            تواصل معنا
          </a>
        </nav>
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full bg-brand-surface flex items-center justify-center text-brand-muted hover:text-brand-pulse hover:bg-brand-pulse/10 hover:-translate-y-1 transition-all"
            >
              <Icon name={s.icon} className="!text-xl" />
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto mt-8 pt-6 border-t border-brand-outline/30 text-center text-brand-muted text-sm">
        © {year} {COMPANY.name}. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
