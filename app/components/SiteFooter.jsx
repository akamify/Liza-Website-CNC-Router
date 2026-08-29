import Link from "next/link";
import { companyInfo, productCatalog } from "../data/siteContent";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020910] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(8,223,241,0.08),transparent_28%)]" />

      <div className="relative mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px_300px_260px]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-xl font-black text-cyan-300">
                LZ
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-wide text-white">
                  {companyInfo.shortName}
                </h3>
                <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-cyan-300/70">
                  CNC Router Solutions
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300">
              {companyInfo.location}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={companyInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-gradient-to-r from-[#25D366] via-[#1ebe5b] to-[#128C7E] px-5 text-sm font-bold text-white"
              >
                WhatsApp
              </a>
              <a
                href={companyInfo.phoneHref}
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/10 px-5 text-sm font-semibold text-slate-200"
              >
                Call Now
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-lime-300">
              Quick Links
            </h4>
            <div className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-lime-300">
              Products
            </h4>
            <div className="mt-5 flex flex-col gap-3">
              {productCatalog.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {product.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-lime-300">
              Contact
            </h4>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <p>Phone: {companyInfo.phone}</p>
              <p>Web: {companyInfo.website}</p>
              <p>Email: {companyInfo.email}</p>
              <p>WhatsApp: Available for fast quote discussion and machine queries.</p>
              <p>Available for machine consultation, quote support, and workshop planning.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          Copyright 2026 {companyInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
