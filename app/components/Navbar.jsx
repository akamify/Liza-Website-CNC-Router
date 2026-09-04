"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { companyInfo } from "../data/siteContent";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function isActiveRoute(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const emailHref = `mailto:${companyInfo.email}`;

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#02070d]/90 py-4 backdrop-blur-xl">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-16 w-96 -translate-x-1/2 bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto flex max-w-[1536px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="LIZA Home"
          className="group relative flex select-none items-center gap-3.5 text-left"
        >
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/40 bg-gradient-to-br from-cyan-950 to-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-transform duration-300 group-hover:scale-105 group-hover:border-cyan-400/70 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.45)]">
            <Image 
              src={"/logo.png"}
              width={100}
              height={100}
              alt="Liza Logo"
            />

          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-black tracking-wide text-white">
                LIZA
              </span>
              <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_10px_#a3e635]" />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-cyan-400/80">
              CNC Technologies
            </span>
          </div>
        </Link>

        <nav className="hidden items-center rounded-full border border-cyan-500/20 bg-slate-950/70 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-2xl lg:flex">
          {navLinks.map((link) => {
            const isActive = isActiveRoute(pathname, link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 xl:px-5 xl:text-sm ${
                  isActive
                    ? "border border-cyan-400/30 bg-gradient-to-r from-cyan-500/25 to-teal-500/25 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                    : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={companyInfo.phoneHref}
            className="group flex items-center gap-2.5 rounded-full border border-slate-800 bg-slate-950/60 px-4 py-2.5 text-xs font-semibold text-slate-300 transition-all duration-300 hover:border-cyan-500/40 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <PhoneIcon className="text-cyan-400" />
            <span>{companyInfo.phone}</span>
          </a>

          <a
            href={companyInfo.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#25D366] via-[#1ebe5b] to-[#128C7E] px-6 py-2.5 text-xs font-bold text-white shadow-[0_0_25px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(37,211,102,0.5)] active:scale-95"
          >
            <WhatsAppIcon />
            <span className="text-[11px] uppercase tracking-wider">
              WhatsApp
            </span>
            <ArrowUpRightIcon className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-slate-950/75 text-cyan-200 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-cyan-300/40 hover:text-white lg:hidden"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        className={`lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 top-[76px] bg-[#01070d]/72 backdrop-blur-md transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute left-0 right-0 top-full px-4 pt-3 transition-all duration-300 sm:px-6 ${
            mobileOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-4 scale-[0.98] opacity-0"
          }`}
        >
          <div className="mx-auto max-w-[1536px] overflow-hidden rounded-[28px] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(5,22,31,0.98),rgba(3,13,20,1))] shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
            <div className="max-h-[calc(100vh-104px)] overflow-y-auto">
              <div className="border-b border-white/10 bg-white/[0.03] px-5 py-3">
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={companyInfo.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[11px] font-semibold text-cyan-100 transition-colors duration-300 hover:border-cyan-300/35 hover:bg-cyan-400/15"
                  >
                    <PhoneIcon className="h-3.5 w-3.5 text-cyan-300" />
                    <span>{companyInfo.phone}</span>
                  </a>
                  <a
                    href={emailHref}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-slate-200 transition-colors duration-300 hover:border-white/20 hover:text-white"
                  >
                    <MailIcon className="h-3.5 w-3.5 text-cyan-300" />
                    <span>{companyInfo.email}</span>
                  </a>
                </div>
              </div>

              <div className="border-b border-white/10 px-5 pb-4 pt-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-300/80">
                    Mobile Menu
                  </p>
                  <h2 className="mt-2 max-w-xs text-xl font-black leading-tight text-white">
                    Explore LIZA CNC router solutions faster on mobile.
                  </h2>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                    Fast access to products, gallery, company profile, and
                    enquiry actions in one compact mobile experience.
                  </p>
                </div>
                <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-lime-300">
                  Live
                </span>
              </div>
            </div>

              <div className="grid gap-3 px-4 py-4">
              {navLinks.map((link) => {
                const isActive = isActiveRoute(pathname, link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`flex items-center justify-between rounded-[22px] border px-4 py-4 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "border-cyan-300/35 bg-gradient-to-r from-cyan-400/20 to-teal-400/10 text-white shadow-[0_0_24px_rgba(6,182,212,0.18)]"
                        : "border-white/8 bg-white/[0.03] text-slate-200 hover:border-cyan-400/25 hover:bg-cyan-400/[0.05] hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.95)]"
                            : "bg-slate-600"
                        }`}
                      />
                      <span>{link.label}</span>
                    </span>
                    <ArrowUpRightIcon
                      className={isActive ? "text-cyan-300" : "text-slate-500"}
                    />
                  </Link>
                );
              })}
              </div>

              <div className="grid gap-3 border-t border-white/10 bg-white/[0.02] px-4 py-4">
                <div className="rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_58%),rgba(255,255,255,0.03)] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-300/80">
                    Quick Access
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Reach our team for machine guidance, pricing flow, and
                    production-fit suggestions.
                  </p>
                </div>
              </div>

              <div className="sticky bottom-0 border-t border-white/10 bg-[#06131d]/95 px-4 py-4 backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={companyInfo.phoneHref}
                    className="flex items-center justify-center gap-2 rounded-[20px] border border-white/10 bg-slate-950/65 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-200"
                  >
                    <PhoneIcon className="text-cyan-300" />
                    <span>Call</span>
                  </a>

                  <a
                    href={companyInfo.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-[20px] bg-gradient-to-r from-[#25D366] via-[#1ebe5b] to-[#128C7E] px-4 py-3 text-sm font-bold text-white shadow-[0_0_30px_rgba(37,211,102,0.28)] transition-all duration-300 hover:scale-[1.01]"
                  >
                    <WhatsAppIcon />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ArrowUpRightIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-3.5 w-3.5 fill-none stroke-current ${className}`}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function MailIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`fill-none stroke-current ${className}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PhoneIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 fill-none stroke-current ${className}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.88.33 1.75.62 2.58a2 2 0 0 1-.45 2.11L9 10.68a16 16 0 0 0 4.32 4.32l1.27-1.27a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.58.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.15 6.42 2.15 11.88c0 1.75.46 3.46 1.33 4.97L2 22l5.31-1.39a9.83 9.83 0 0 0 4.73 1.2h.01c5.46 0 9.89-4.42 9.89-9.88A9.9 9.9 0 0 0 12.04 2Zm0 18.1h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.17-3.15.83.84-3.07-.2-.32a8.15 8.15 0 0 1-1.25-4.35c0-4.51 3.69-8.2 8.24-8.2 2.2 0 4.26.85 5.82 2.39a8.11 8.11 0 0 1 2.42 5.8c0 4.53-3.7 8.23-8.23 8.23Zm4.5-6.14c-.25-.12-1.49-.73-1.72-.81-.23-.08-.4-.12-.57.12-.17.25-.65.81-.8.97-.15.17-.29.19-.54.06-.25-.12-1.03-.38-1.97-1.22-.73-.65-1.22-1.45-1.36-1.69-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.87-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.37 1 2.53c.12.17 1.73 2.65 4.19 3.71.59.26 1.06.42 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}
