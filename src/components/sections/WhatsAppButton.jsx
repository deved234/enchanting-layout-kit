import { Icon } from "../shared/Icon";
import { COMPANY } from "../../config/company";

export function WhatsAppButton() {
  return (
    <a
      href={COMPANY.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="واتساب"
      className="fixed bottom-6 start-6 z-50 w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform sm-whats-pulse"
    >
      <Icon name="chat" filled className="!text-3xl" />
    </a>
  );
}
