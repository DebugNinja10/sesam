import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '221782998181';
const DEFAULT_MESSAGE = encodeURIComponent(
  "Bonjour SESAM ACADEMY, je souhaite avoir des informations sur les inscriptions."
);

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setShowTooltip(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {showTooltip && (
        <div className="relative max-w-[220px] animate-fade-up rounded-2xl rounded-br-sm bg-white px-4 py-3 text-sm font-medium text-[#272429] shadow-2xl sm:max-w-[260px]">
          <button
            type="button"
            aria-label="Fermer"
            onClick={() => setShowTooltip(false)}
            className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#8c182c] text-white shadow-lg"
          >
            <X size={13} />
          </button>
          Une question sur l'inscription ? Écrivez-nous, nous répondons vite !
        </div>
      )}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter SESAM ACADEMY sur WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl shadow-[#25d366]/40 transition hover:scale-110 animate-pulse-glow sm:h-16 sm:w-16"
      >
        <MessageCircle size={28} className="fill-white" />
      </a>
    </div>
  );
}
