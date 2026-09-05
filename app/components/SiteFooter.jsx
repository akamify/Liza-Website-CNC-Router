import Link from "next/link";
import { companyInfo, productCatalog } from "../data/siteContent";
import Image from "next/image";
import { WhatsAppIcon } from "./FloatingWhatsAppButton";

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

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={companyInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#25D366] via-[#1ebe5b] to-[#128C7E] px-5 text-sm font-bold text-white shadow-md hover:scale-[1.02] transition-transform"
              >
                <WhatsAppIcon className="h-4 w-4 fill-white text-white" />
                <span className="text-white">WhatsApp</span>
              </a>
              <a
                href={companyInfo.phoneHref}
                className="inline-flex min-h-[42px] items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-5 text-sm font-semibold text-slate-200 hover:border-slate-500 hover:text-white"
              >
                Call Now
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
