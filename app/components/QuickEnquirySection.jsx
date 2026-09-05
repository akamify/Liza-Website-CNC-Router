"use client";

import { ArrowRight, MailCheck, MessageSquareText, PhoneCall } from "lucide-react";
import { companyInfo } from "../data/siteContent";

const ctaPoints = [
  {
    title: "Send Requirement",
    detail: "Share machine type, material, and production need.",
    icon: MessageSquareText,
  },
  {
    title: "Email Confirmation",
    detail: "Customer and owner both receive enquiry email.",
    icon: MailCheck,
  },
  {
    title: "Fast Callback",
    detail: "Team can follow up with quote and machine guidance.",
    icon: PhoneCall,
  },
];

export default function QuickEnquirySection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white py-8 sm:py-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(8,145,178,0.08),transparent_28%),radial-gradient(circle_at_88%_50%,rgba(16,185,129,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Optimized paddings for mobile: p-4 on mobile, p-6 on sm, p-8 on lg */}
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-6 lg:p-8 shadow-sm lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.4fr)] lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.15em] text-cyan-900">
              Quick Enquiry
            </span>

            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight text-slate-950">
              Need the right CNC router setup for your work?
            </h2>

            <p className="mt-2.5 text-xs sm:text-sm font-medium leading-relaxed text-slate-600 max-w-2xl">
              Send your basic requirement and our team will receive the enquiry by email. You will also get a confirmation email with your reference ID.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {ctaPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-4 shadow-2xs"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <h3 className="mt-2.5 text-xs sm:text-sm font-black text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[11px] sm:text-xs font-medium leading-relaxed text-slate-600">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Action Card with balanced mobile padding */}
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-2xs">
            <p className="text-xs sm:text-sm font-bold text-slate-900">
              Ready for machine recommendation?
            </p>
            <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
              Open the enquiry form, fill the details, and both sides get email confirmation.
            </p>

            <div className="mt-4 sm:mt-5 grid gap-2.5 sm:gap-3">
              <a
                href="#"
                data-enquiry-trigger="true"
                className="inline-flex h-12 sm:min-h-[50px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 px-6 text-xs sm:text-sm font-bold text-white shadow-md transition-transform duration-200 hover:scale-[1.02]"
              >
                <span className="text-white">Start Enquiry</span>
                <ArrowRight size={16} strokeWidth={2.4} />
              </a>

              <a
                href={companyInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 sm:min-h-[50px] items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-6 text-xs sm:text-sm font-bold text-emerald-800 transition-colors hover:bg-emerald-100"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}