import { MessageCircle } from "lucide-react";

const COMPANY_WHATSAPP = "919642333337";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${COMPANY_WHATSAPP}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
