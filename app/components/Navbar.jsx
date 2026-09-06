"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { companyInfo } from "../data/siteContent";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "Products", href: "/products", icon: PackageIcon },
  { label: "Gallery", href: "/gallery", icon: GalleryIcon },
  { label: "About", href: "/about", icon: InfoIcon },
  { label: "Contact", href: "/contact", icon: ContactIcon },
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
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 py-3 backdrop-blur-md shadow-2xs">
      <div className="mx-auto flex max-w-[1536px] items-center justify-between gap-3 px-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="LIZA Home"
          className="group relative flex select-none items-center gap-2.5 sm:gap-3.5 text-left"
        >
          <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center overflow-hidden rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-50 to-slate-100 shadow-xs transition-transform duration-300 group-hover:scale-105">
            <Image 
              src={"/logo.png"}
              width={100}
              height={100}
              alt="Liza Logo"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl font-black tracking-wide text-slate-900">
                LIZA
              </span>
              {/* <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-xs" /> */}
            </div>
            <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.24em] text-cyan-800">
              CNC Technologies
            </span>
          </div>
        </Link>

        <nav className="hidden items-center rounded-full border border-slate-200 bg-slate-100/80 p-1.5 shadow-xs backdrop-blur-md lg:flex">
          {navLinks.map((link) => {
            const isActive = isActiveRoute(pathname, link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 xl:px-5 xl:text-sm ${
                  isActive
                    ? "border border-slate-200 bg-white text-cyan-800 shadow-xs font-bold"
                    : "text-slate-700 hover:bg-white/60 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3.5 lg:flex">
          <a
            href={companyInfo.phoneHref}
            className="group flex items-center gap-2.5 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 shadow-xs transition-all duration-200 hover:border-cyan-500 hover:text-cyan-800 hover:bg-slate-50"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
            <PhoneIcon className="text-cyan-700" />
            <span>{companyInfo.phone}</span>
          </a>

          <a
            href={companyInfo.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#25D366] via-[#1ebe5b] to-[#128C7E] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-95"
          >
            <WhatsAppIcon className="h-4 w-4 fill-white text-white" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-white">
              WhatsApp
            </span>
            <ArrowUpRightIcon className="text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-800 shadow-xs transition-all duration-200 hover:border-cyan-500 hover:text-cyan-800 lg:hidden"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Optimized Mobile Menu Drawer with zero redundant margin/padding wrappers */}
      <div className={`lg:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          className={`fixed inset-0 top-[65px] bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute left-0 right-0 top-full transition-all duration-300 ${
            mobileOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-2 scale-[0.99] opacity-0"
          }`}
        >
          <div className="w-full bg-white border-b border-slate-200 shadow-xl rounded-b-2xl overflow-hidden">
            <div className="max-h-[calc(100vh-70px)] overflow-y-auto">
              
              {/* Quick Info bar */}
              <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-100 flex items-center justify-between text-[11px]">
                <a href={companyInfo.phoneHref} className="flex items-center gap-1.5 font-semibold text-slate-700">
                  <PhoneIcon className="h-3.5 w-3.5 text-cyan-700" />
                  <span>{companyInfo.phone}</span>
                </a>
                <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Support
                </span>
              </div>

              {/* Navigation Links with individual icons */}
              <div className="grid gap-1.5 p-3">
                {navLinks.map((link) => {
                  const isActive = isActiveRoute(pathname, link.href);
                  const IconComponent = link.icon;

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-cyan-50 text-cyan-900 font-bold border border-cyan-200/60 shadow-2xs"
                          : "bg-slate-50/60 text-slate-800 hover:bg-slate-100 border border-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${isActive ? "bg-cyan-600 text-white" : "bg-white text-slate-600 border border-slate-200"}`}>
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <span>{link.label}</span>
                      </div>
                      <ArrowUpRightIcon className={isActive ? "text-cyan-700" : "text-slate-400"} />
                    </Link>
                  );
                })}
              </div>

              {/* Bottom Sticky Action Buttons */}
              <div className="sticky bottom-0 border-t border-slate-200 bg-white p-3">
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={companyInfo.phoneHref}
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-2.5 text-xs font-bold text-slate-800 shadow-2xs hover:bg-slate-50"
                  >
                    <PhoneIcon className="h-4 w-4 text-cyan-700" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={companyInfo.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] py-2.5 text-xs font-bold text-white shadow-md"
                  >
                    <WhatsAppIcon className="h-4 w-4 fill-white text-white" />
                    <span className="text-white">WhatsApp</span>
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
    <svg viewBox="0 0 24 24" className={`h-3.5 w-3.5 fill-none stroke-current ${className}`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function HomeIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current ${className}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function PackageIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current ${className}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function GalleryIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current ${className}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

function InfoIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current ${className}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function ContactIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current ${className}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function PhoneIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current ${className}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.88.33 1.75.62 2.58a2 2 0 0 1-.45 2.11L9 10.68a16 16 0 0 0 4.32 4.32l1.27-1.27a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.58.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-white text-white`} aria-hidden="true">
      <path fill="white" d="M12.04 2C6.58 2 2.15 6.42 2.15 11.88c0 1.75.46 3.46 1.33 4.97L2 22l5.31-1.39a9.83 9.83 0 0 0 4.73 1.2h.01c5.46 0 9.89-4.42 9.89-9.88A9.9 9.9 0 0 0 12.04 2Zm0 18.1h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.17-3.15.83.84-3.07-.2-.32a8.15 8.15 0 0 1-1.25-4.35c0-4.51 3.69-8.2 8.24-8.2 2.2 0 4.26.85 5.82 2.39a8.11 8.11 0 0 1 2.42 5.8c0 4.53-3.7 8.23-8.23 8.23Zm4.5-6.14c-.25-.12-1.49-.73-1.72-.81-.23-.08-.4-.12-.57.12-.17.25-.65.81-.8.97-.15.17-.29.19-.54.06-.25-.12-1.03-.38-1.97-1.22-.73-.65-1.22-1.45-1.36-1.69-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.87-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.37 1 2.53c.12.17 1.73 2.65 4.19 3.71.59.26 1.06.42 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}