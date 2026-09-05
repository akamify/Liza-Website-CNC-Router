"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { productCatalog } from "../data/siteContent";

const highlights = [
  {
    title: "High Precision",
    subtitle: "±0.01mm Accuracy",
    icon: <PrecisionIcon />,
  },
  {
    title: "Heavy Duty Build",
    subtitle: "Industrial Cast Steel",
    icon: <ShieldIcon />,
  },
  {
    title: "Fast Production",
    subtitle: "24m/min Travel Speed",
    icon: <SpeedIcon />,
  },
  {
    title: "24/7 Support",
    subtitle: "Dedicated Engineers",
    icon: <SupportIcon />,
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto rotation across productCatalog items
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % productCatalog.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNextProduct = () => {
    setActiveIndex((prev) => (prev + 1) % productCatalog.length);
  };

  const currentProduct = productCatalog[activeIndex] || productCatalog[0];
  const doubleBanners = [...productCatalog, ...productCatalog];

  return (
    <section
      id="home"
      className="relative mt-16 lg:mt-10 isolate min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-slate-100 via-sky-50/30 to-slate-50 text-slate-900 select-none pt-10 lg:pt-14"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 -z-30 opacity-10 mix-blend-multiply pointer-events-none">
        <img
          src="/herobg.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center scale-105"
        />
      </div>

      {/* Atmospheric Ambient Glows */}
      <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-400/20 blur-[130px]" />
      <div className="pointer-events-none absolute right-[5%] top-[15%] -z-10 hidden h-[450px] w-[450px] rounded-full bg-teal-400/15 blur-[140px] lg:block" />

      {/* MAIN HERO CONTAINER */}
      <div className="relative z-10 mx-auto grid max-w-[1536px] grid-cols-1 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-8 xl:gap-12">
        {/* LEFT COLUMN - BRAND & CTA */}
        <div className="relative z-30 flex flex-col justify-center lg:col-span-7 xl:col-span-6">
          {/* Interactive Next-Gen Badge -> Clicking it rotates to next product in productCatalog */}
          <button
            type="button"
            onClick={handleNextProduct}
            className="group inline-flex max-w-fit items-center gap-2.5 rounded-full border border-cyan-300 bg-cyan-50/90 py-1.5 pl-3 pr-4 text-xs font-semibold text-cyan-900 shadow-xs backdrop-blur-md transition-all hover:bg-cyan-100 hover:border-cyan-400 active:scale-95 cursor-pointer"
            title="Click to view next product"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>

            <span className="tracking-wide text-cyan-950 font-bold">
              Next-Gen: {currentProduct.shortTitle || currentProduct.title}
            </span>

            <ChevronSmallIcon className="transition-transform group-hover:translate-x-1" />
          </button>

          {/* Headline */}
          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-5xl xl:text-6xl leading-[1.1]">
            Precision CNC <br />
            <span className="bg-gradient-to-r from-cyan-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent drop-shadow-xs">
              Router Machines
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg leading-relaxed font-medium">
            Engineer your production floor for absolute accuracy, high output speed, and long-term reliability. Built for timber, non-ferrous metals, acrylics, and industrial fabrication.
          </p>

          {/* Contact action opening Enquiry Modal */}
          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#"
              data-enquiry-trigger="true"
              data-machine-type={currentProduct.title}
              className="group relative inline-flex h-13 items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 px-8 text-sm font-bold text-white shadow-lg shadow-cyan-600/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-600/30 active:scale-95 cursor-pointer"
            >
              <span className="relative z-10 tracking-wide text-white">Get CNC Quote</span>
              <span className="pointer-events-none absolute inset-y-0 -left-[50%] w-[40%] -skew-x-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[130%]" />
            </a>
            <a
              href="/products"
              className="inline-flex h-13 items-center justify-center rounded-xl border border-slate-300 bg-white px-8 text-sm font-bold text-slate-800 shadow-xs transition-all duration-300 hover:border-cyan-500 hover:bg-slate-50 hover:text-cyan-800"
            >
              View All Lineup
            </a>
          </div>

          {/* FEATURE HIGHLIGHTS CARDS */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white/90 p-3 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 text-cyan-700 transition-colors group-hover:bg-cyan-100">
                    {item.icon}
                  </div>
                </div>

                <div className="mt-2.5">
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-cyan-800">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] text-slate-500 font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — SHOWCASE POPULATED DIRECTLY FROM productCatalog */}
        <div
          className="relative z-20 mt-10 flex flex-col items-center justify-center lg:col-span-5 lg:mt-0 xl:col-span-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* MAIN PRODUCT SHOWCASE CARD */}
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-2xl transition-all duration-500">
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-2xl" />

            {/* Product Image Frame with Smooth Fade Transition */}
            <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-slate-950">
              {productCatalog.map((prod, idx) => (
                <div
                  key={prod.slug}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>
              ))}
            </div>

            {/* Active Machine Details from productCatalog */}
            <div className="flex flex-col gap-2 mt-2">

              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                {currentProduct.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-2">
                {currentProduct.description}
              </p>

              {/* Specs Badges dynamically pulled from productCatalog.specs */}
              <div className="mt-2 grid grid-cols-2 gap-2">
                {currentProduct.specs.slice(0, 2).map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center gap-2 rounded-xl border border-cyan-100 bg-cyan-50/70 p-2 text-xs font-semibold text-slate-800"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-100 text-cyan-800">
                      <ChipIcon />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-cyan-800 truncate">
                        {spec.label}
                      </p>
                      <p className="text-[11px] font-bold text-slate-900 truncate">
                        {spec.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button for Active Product */}
              <button
                type="button"
                data-enquiry-trigger="true"
                data-machine-type={currentProduct.title}
                className="mt-3 w-full inline-flex min-h-[44px] items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 px-6 text-xs font-bold text-white shadow-md hover:shadow-lg transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
              >
                <span className="text-white">
                  Get Quote for {currentProduct.shortTitle || currentProduct.title}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* HERO PRODUCT BANNERS - AUTO-SCROLLING TICKER CAROUSEL PULLED FROM productCatalog */}
      <div className="mt-12 border-t border-slate-200/80 bg-white/60 py-6 backdrop-blur-md">
        {/* Marquee Container with Gradient edge masks */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
          <div className="animate-marquee-smooth flex gap-4 py-2 px-2">
            {doubleBanners.map((item, index) => (
              <div
                key={`${item.slug}-${index}`}
                className="group relative flex w-[320px] sm:w-[360px] shrink-0 items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-3 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:shadow-md"
              >
                {/* Banner Thumbnail */}
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>

                {/* Banner Text Content */}
                <div className="flex flex-1 flex-col justify-between overflow-hidden">
                  <div>
                    <div className="flex items-center justify-between gap-1">
                      <span className="rounded-md border border-cyan-200 bg-cyan-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-cyan-800">
                        {item.featureLabels[0] || "CNC Lineup"}
                      </span>
                    </div>

                    <h3 className="mt-1 text-xs sm:text-sm font-bold text-slate-900 truncate group-hover:text-cyan-700 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-0.5 text-[10px] text-slate-500 font-medium line-clamp-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Enquiry trigger */}
                  <button
                    type="button"
                    data-enquiry-trigger="true"
                    data-machine-type={item.title}
                    className="mt-2 inline-flex h-7 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 px-3 text-[11px] font-bold text-white shadow-2xs hover:opacity-95 transition-transform active:scale-95 cursor-pointer"
                  >
                    <span className="text-white">Enquire Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PrecisionIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="1.8">
      <path d="M12 3L4 7v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-4z" />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="1.8">
      <path d="M12 4v4m0 8v4M4 12h4m8 0h4m-3.2-5.7l-2.8 2.8m-8 8l-2.8 2.8m0-13.6l2.8 2.8m8 8l2.8 2.8" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="1.8">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function ChevronSmallIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-4 w-4 stroke-current ${className}`} fill="none" strokeWidth="2">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function ChipIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-current" fill="none" strokeWidth="1.8">
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M9 9h6v6H9zM9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-current" fill="none" strokeWidth="1.8">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}
