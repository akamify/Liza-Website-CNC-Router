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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % productCatalog.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const doubleBanners = [
    ...productCatalog,
    ...productCatalog,
    ...productCatalog,
    ...productCatalog,
  ];

  return (
    <section
      id="home"
      className="relative mt-4 lg:mt-6 w-full overflow-hidden bg-slate-50/50 pt-12 sm:pt-10 pb-6"
    >
      <div className="relative z-10 mx-auto max-w-[1536px]  pt-1">
        {/* Main Banner Slider Container */}
        <div className="relative w-full overflow-hidden bg-white shadow-2xl shadow-slate-200/60 border border-slate-100 grid items-start">
          {productCatalog.map((prod, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={prod.slug || idx}
                className={`col-start-1 row-start-1 flex flex-col lg:flex-row w-full transition-all duration-1000 ease-in-out ${
                  isActive
                    ? "opacity-100 z-10 pointer-events-auto relative"
                    : "opacity-0 z-0 pointer-events-none absolute inset-0"
                }`}
              >
                <div className="flex w-full flex-col-reverse lg:flex-row h-full items-center">
                  
                  {/* LEFT SIDE: Content & CTA Section matching reference layout */}
                  <div className="flex w-full flex-col justify-center px-6 py-6 sm:p-8 lg:w-[55%] xl:p-12 bg-gradient-to-r from-slate-50/80 via-white to-white">
                    <div 
                      className={`transition-all duration-[1200ms] ease-out ${
                        isActive ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                      }`}
                    >

                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
                        {prod.title}
                      </h2>

                      <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-xl">
                        {prod.description || "Engineer your production floor for absolute accuracy, high output speed, and long-term reliability. Built for industrial fabrication."}
                      </p>

                      {/* Pricing or Spec Highlights block */}
                      <div className="mt-4 flex items-center gap-3">
                        <span className="text-2xl sm:text-3xl font-black text-slate-900">
                          {prod.price ? `₹${prod.price}` : "Custom Quote"}
                        </span>
                        {prod.oldPrice && (
                          <span className="text-sm font-semibold text-slate-400 line-through">
                            ₹{prod.oldPrice}
                          </span>
                        )}
                        {prod.discount && (
                          <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-xs font-bold text-emerald-700">
                            {prod.discount}
                          </span>
                        )}
                      </div>

                      {/* Specs Row */}
                      <div className="mt-4 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                        {prod.specs?.slice(0, 3).map((spec) => (
                          <div 
                            key={spec.label} 
                            className="flex items-center gap-2.5 rounded-2xl bg-slate-50 border border-slate-100 p-2.5 pr-4 transition-colors hover:bg-cyan-50 hover:border-cyan-100"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white shadow-xs border border-slate-200 text-cyan-600">
                              <ChipIcon />
                            </div>
                            <div className="overflow-hidden">
                              <p className="text-[9px] uppercase tracking-wider text-slate-500 font-bold truncate">{spec.label}</p>
                              <p className="text-xs font-black text-slate-900 truncate">{spec.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Fully Visible Dual CTA Buttons matching reference design */}
                      <div className="mt-6 flex flex-wrap items-center gap-3.5">
                        <button
                          type="button"
                          data-enquiry-trigger="true"
                          data-machine-type={prod.title}
                          className="group relative inline-flex h-12 sm:h-13 flex-1 sm:flex-none items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 px-7 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            <CartIcon className="h-4 w-4" />
                            Buy Now
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 -left-[50%] w-[40%] -skew-x-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[130%]" />
                        </button>

                        <a
                          href={`/products/${prod.slug}`}
                          className="inline-flex h-12 sm:h-13 flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 text-sm font-bold text-slate-800 shadow-xs transition-all hover:border-cyan-500 hover:bg-slate-50 hover:text-cyan-800 active:scale-95 cursor-pointer"
                        >
                          <EyeIcon className="h-4 w-4 text-cyan-600" />
                          <span>View Details</span>
                        </a>
                      </div>

                      {/* Customer Trust indicator */}
                      <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
                        <div className="flex text-amber-400">
                          {"★".repeat(5)}
                        </div>
                        <span>Trusted by thousands of customers</span>
                      </div>

                    </div>
                  </div>

                  {/* RIGHT SIDE: Banner Image Showcase with Badge Overlays */}
                  <div className="flex w-full items-center justify-center px-6 pt-6 sm:px-10 sm:pt-8 lg:w-[45%] lg:p-8 lg:pl-0">
                    <div 
                      className={`relative w-full max-w-md lg:max-w-lg aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/3] xl:aspect-[16/11] overflow-hidden rounded-3xl border border-slate-100 bg-slate-900 shadow-xl transition-transform duration-[2000ms] ease-out ${
                        isActive ? "scale-100" : "scale-105"
                      }`}
                    >
                      <Image
                        src={prod.image}
                        alt={prod.title}
                        fill
                        priority={idx === 0}
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover object-center transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                      
                      {/* Floating Product Highlight Tag */}
                      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between rounded-2xl border border-white/20 bg-slate-900/80 px-4 py-2.5 sm:py-3 backdrop-blur-md text-white">
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-cyan-400 font-bold">Featured Machinery</p>
                          <p className="text-xs sm:text-sm font-bold truncate max-w-[180px] sm:max-w-xs">{prod.title}</p>
                        </div>
                        <span className="rounded-lg bg-cyan-600 px-3 py-1.5 text-[11px] font-bold text-white shadow-xs">
                          In Stock
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        {/* Carousel Pagination Dots (Dono view ke liye clearly visible) */}
        <div className="pb-5 flex items-center justify-center gap-2">
          {productCatalog.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-cyan-600 shadow-xs"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
        </div>

      </div>

      {/* Highlights Section */}
      <div className="relative z-20 mx-auto mt-6 max-w-[1536px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-100 bg-cyan-50 text-cyan-700 transition-colors group-hover:bg-cyan-100">
                {item.icon}
              </div>
              <div className="min-w-0">
                <h3 className="text-xs lg:text-sm font-bold text-slate-900 truncate">{item.title}</h3>
                <p className="text-[10px] lg:text-xs font-semibold text-slate-500 truncate">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Marquee Lineup */}
      <div className="mt-10 border-t border-slate-200/80 bg-white/60 py-6 backdrop-blur-md">
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
          <div className="animate-marquee-smooth flex gap-4 py-2 px-2">
            {doubleBanners.map((item, index) => (
              <div
                key={`${item.slug}-${index}`}
                className="group relative flex w-[320px] sm:w-[360px] shrink-0 items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-3 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:shadow-md"
              >
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

                <div className="flex flex-1 flex-col justify-between overflow-hidden">
                  <div>
                    <div className="flex items-center justify-between gap-1">
                      <span className="rounded-md border border-cyan-200 bg-cyan-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-cyan-800">
                        {item.featureLabels?.[0] || "CNC Lineup"}
                      </span>
                    </div>

                    <h3 className="mt-1 text-xs sm:text-sm font-bold text-slate-900 truncate group-hover:text-cyan-700 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-0.5 text-[10px] text-slate-500 font-medium line-clamp-1">
                      {item.description}
                    </p>
                  </div>

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

// Icons
function PrecisionIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 stroke-current" fill="none" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 stroke-current" fill="none" strokeWidth="1.8">
      <path d="M12 3L4 7v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-4z" />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 stroke-current" fill="none" strokeWidth="1.8">
      <path d="M12 4v4m0 8v4M4 12h4m8 0h4m-3.2-5.7l-2.8 2.8m-8 8l-2.8 2.8m0-13.6l2.8 2.8m8 8l2.8 2.8" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 stroke-current" fill="none" strokeWidth="1.8">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function ChipIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 stroke-current" fill="none" strokeWidth="1.8">
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M9 9h6v6H9zM9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3" />
    </svg>
  );
}

function CartIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current ${className}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function EyeIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current ${className}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
