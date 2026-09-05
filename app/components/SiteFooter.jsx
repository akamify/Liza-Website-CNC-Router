import Link from "next/link";
import { companyInfo, productCatalog } from "../data/siteContent";
import Image from "next/image";
import { WhatsAppIcon } from "./FloatingWhatsAppButton";

export function PhoneIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="relative mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_220px_280px_260px]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/40 bg-slate-900 p-1">
                <Image
                  src={"/logo.png"}
                  width={100}
                  height={100}
                  alt="Liza Logo"
                />
              </div>
              <div>
                <h3 className="text-xl font-black tracking-wide text-white">
                  {companyInfo.shortName}
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-400">
                  CNC Router Solutions
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 font-medium">
              {companyInfo.location}
            </p>

            {/* WhatsApp and Phone Call Icons Aligned Together */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={companyInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-[#25D366] via-[#1ebe5b] to-[#128C7E] text-white shadow-md hover:scale-105 transition-transform"
              >
                <WhatsAppIcon className="h-5 w-5 fill-white text-white" />
              </a>

              <a
                href={companyInfo.phoneHref}
                aria-label="Call Phone"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/40 bg-slate-900 text-cyan-300 shadow-md hover:border-cyan-400 hover:bg-slate-800 hover:scale-105 transition-all"
              >
                <PhoneIcon className="h-5 w-5 text-cyan-400" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              Quick Links
            </h4>
            <div className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              Products
            </h4>
            <div className="mt-4 flex flex-col gap-2.5">
              {productCatalog.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {product.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              Contact Us
            </h4>
            <div className="mt-4 space-y-2.5 text-sm text-slate-300 font-medium">
              <p>Phone: <span className="text-white font-semibold">{companyInfo.phone}</span></p>
              <p>Web: <span className="text-cyan-300">{companyInfo.website}</span></p>
              <p>Email: <span className="text-slate-200">{companyInfo.email}</span></p>
              <p className="text-xs text-slate-400 pt-2 leading-relaxed">
                Available for machine consultation, quote support, and workshop planning.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800/80 pt-6 text-xs text-slate-400 text-center sm:text-left">
          Copyright 2026 {companyInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
