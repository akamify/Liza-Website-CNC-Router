"use client";

import { PhoneCall } from "lucide-react";
import { companyInfo } from "../data/siteContent";

export function WhatsAppIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-white text-white`} aria-hidden="true">
      <path fill="white" d="M12.04 2C6.58 2 2.15 6.42 2.15 11.88c0 1.75.46 3.46 1.33 4.97L2 22l5.31-1.39a9.83 9.83 0 0 0 4.73 1.2h.01c5.46 0 9.89-4.42 9.89-9.88A9.9 9.9 0 0 0 12.04 2Zm0 18.1h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.17-3.15.83.84-3.07-.2-.32a8.15 8.15 0 0 1-1.25-4.35c0-4.51 3.69-8.2 8.24-8.2 2.2 0 4.26.85 5.82 2.39a8.11 8.11 0 0 1 2.42 5.8c0 4.53-3.7 8.23-8.23 8.23Zm4.5-6.14c-.25-.12-1.49-.73-1.72-.81-.23-.08-.4-.12-.57.12-.17.25-.65.81-.8.97-.15.17-.29.19-.54.06-.25-.12-1.03-.38-1.97-1.22-.73-.65-1.22-1.45-1.36-1.69-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.87-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.37 1 2.53c.12.17 1.73 2.65 4.19 3.71.59.26 1.06.42 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

export default function FloatingWhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col gap-3 items-center">
      {/* Floating Call Button */}
      <a
        href={companyInfo.phoneHref}
        aria-label="Call Us Now"
        className="group relative inline-flex h-13 w-13 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-cyan-500 via-teal-600 to-blue-700 text-white shadow-[0_12px_30px_rgba(6,182,212,0.45)] transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-white/10" />
        <PhoneCall className="relative h-6 w-6 text-white animate-pulse" />
        <span className="absolute right-15 whitespace-nowrap rounded-lg bg-slate-900 px-2.5 py-1 text-[11px] font-bold text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
          Call {companyInfo.phone}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={companyInfo.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-[#25D366] via-[#1ebe5b] to-[#128C7E] text-white shadow-[0_18px_45px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-white/10" />
        <WhatsAppIcon className="relative h-7 w-7 text-white fill-white" />
        <span className="absolute right-16 whitespace-nowrap rounded-lg bg-slate-900 px-2.5 py-1 text-[11px] font-bold text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
